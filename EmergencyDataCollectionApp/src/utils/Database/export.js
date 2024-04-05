import * as Sharing from "expo-sharing";
import { Platform } from "react-native";

import { queryReportsByMultipleIds } from "./OfflineSQLiteDB";
import { Dirs, FileSystem } from 'react-native-file-access';

async function writeFile(contents) {
  const fileName = 'exported_reports.csv';
  const filePath = `${Dirs.DocumentDir}/${fileName}`;

  console.log(filePath);

  if (Platform.isPad) {
    await FileSystem.writeFile(filePath, contents);
  } else {
    const permissionWriteExternalStorage = async () => {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    };

    if (Platform.OS === 'android') {
      const permissionGranted = await permissionWriteExternalStorage();
      if (permissionGranted) {
        await FileSystem.writeFile(filePath, contents);

        if (!FileSystem.exists(filePath)) return;

        await FileSystem.cpExternal(filePath, fileName,'Downloads');
      }

      return;
    }
  }
}


function buildString(reports) {
  return new Promise((resolve) => {
    let csvString = "";
    for (let i = 0; i < reports.length; i++) {
      const element = reports[i];
      console.log(
        "Report data being written: " + JSON.stringify(element, null, 2),
      );
      const type =
        element.report_type === "MYN"
          ? "1,"
          : element.report_type === "CERT"
            ? "2,"
            : "3,";

      csvString += type;
      const report_data = element.report_data;
      csvString += report_data.info.startTime + ",";
      csvString += report_data.info.groupName + ",";
      csvString += report_data.info.squadName + ",";
      if (element.report_type === "CERT") {
        csvString += report_data.info.numberOfVisit + ",";
        csvString += report_data.info.roadCondition + ",";
      } else {
        csvString += report_data.location.numberOfVisit + ",";
        csvString += report_data.location.roadCondition + ",";
      }

      if (element.report_type !== "Hazard") {
        csvString +=
          report_data.location.address +
          " " +
          report_data.location.city +
          " " +
          report_data.location.state +
          " " +
          report_data.location.zip;
      }
      csvString += ",";
      csvString += report_data.info.certSearched + ","; // needs to be added to app
      if (element.report_type === "CERT") {
        csvString += report_data.location.latitude + ",";
        csvString += report_data.location.longitude + ",";
        csvString += report_data.location.accuracy + ",";
      } else {
        csvString += report_data.info.latitude + ",";
        csvString += report_data.info.longitude + ",";
        csvString += report_data.info.accuracy + ",";
      }
      csvString += report_data.hazard.structureType + ",";
      csvString += report_data.hazard.structureCondition + ",";
      csvString += report_data.hazard.hazardFire + ",";
      csvString += report_data.hazard.hazardPropane + ",";
      csvString += report_data.hazard.hazardWater + ",";
      csvString += report_data.hazard.hazardElectrical + ",";
      csvString += report_data.hazard.hazardChemical + ",";
      csvString += report_data.people.greenPersonal + ",";
      csvString += report_data.people.yellowPersonal + ",";
      csvString += report_data.people.redPersonal + ",";
      csvString += report_data.people.deceasedPersonal + ",";
      csvString += report_data.people.deceasedPersonalLocation + ",";
      csvString += report_data.people.trappedPersonal + ",";
      csvString += report_data.people.personalRequiringShelter + ",";
      csvString += report_data.people.refugeesFirstAid + ",";
      csvString += report_data.people.refugeesShelter + ",";
      if (element.report_type === "MYN") {
        csvString += report_data.animal.anyPetsOrFarmAnimals + ",";
        report_data.animal.selectedAnimalStatus.forEach((e) => {
          csvString += e;
        });
        csvString += report_data.animal.animalNotes + ","; // needs to be added to spreadsheet
      } else {
        csvString += ",,";
      }
      csvString += ",";
      csvString += report_data.info.hazardType + ",";
      if (element.report_type === "Hazard") {
        csvString += report_data.report.Notes + ",";
      } else {
        csvString += report_data.note.NotesTextArea + ",";
      }
      csvString += report_data.info.hash + ",";
      csvString += report_data.info.endTime + ",";
      csvString += "\n";
    }
    csvString = csvString.replaceAll("undefined", "");
    console.log("STRING: " + csvString);
    resolve(csvString);
  });
}

export function exportToCSV(data) {
  let queryIds = data[0];
  for (let i = 1; i < data.length; i++) {
    queryIds += ",";
    queryIds += data[i];
  }
  console.log("Data being exported: " + queryIds);
  queryReportsByMultipleIds(data, (fetchedReports) => {
    console.log("Data from db: " + JSON.stringify(fetchedReports, null, 2));
    buildString(fetchedReports).then((csvString) => {
      writeFile(csvString);
    });
  });
}

export default exportToCSV;
