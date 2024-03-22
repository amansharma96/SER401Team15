import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { queryReportsByMultipleIds } from "./OfflineSQLiteDB";


function writeFile(contents) {
  console.log(contents);
  const fileName = FileSystem.documentDirectory + "test2.csv";
  try {
    FileSystem.writeAsStringAsync(fileName, contents);
    const share = Sharing.isAvailableAsync();
    if (share) {
      console.log("Sharing enabled");
    } else {
      return;
    }
    Sharing.shareAsync(fileName);
  } catch (e) {
    console.log(e);
  }
}

export function exportToCSV(data) {
  function fetchReports() {
    return new Promise((resolve) => {
      const reports = [];
      let queryIds = data[0];
      for (let i = 1; i < data.length; i++) {
        queryIds += ", ";
        queryIds += data[i];
      }
      console.log("Data being exported: " + queryIds);
      queryReportsByMultipleIds(queryIds, (fetchedReports) => {
        reports.push(fetchedReports);
      });
      resolve(reports);
    });
  }
  
  function buildString(reports) {
    return new Promise((resolve) => {
    let csvString = "";
      for (let i = 0; i < reports.length; i++) {
        const element = reports[i];
        console.log("Report data being written: " + JSON.stringify(element, null, 2));
        const type =
          element.report_type === "MYN"
            ? "1,"
            : element.report_type === "CERT"
              ? "2,"
              : "3,";
  
        console.log(type);
  
        if (type === "2,") {
          csvString += type;
          // NOTE: no column for animal notes in spreadsheet. report object does not contain Photo_Link
          const report_data = element.report_data;
          console.log(report_data);
          csvString += report_data.info.startTime + ",";
          csvString += report_data.info.groupName + ",";
          csvString += report_data.info.squadName + ",";
          csvString += report_data.location.numberOfVisit + ",";
          csvString += report_data._roadAccess + ",";
            csvString +=
              report_data.location.address +
              " " +
              report_data.location.city +
              " " +
              report_data.location.state +
              " " +
              report_data.location.zip +
              " ";
          csvString += report_data.info.certSearched + ","; // cert - in spreadsheet but not atom data
          csvString += report_data.location.latitude + ",";
          csvString += report_data.location.longitude + ",";
          csvString += report_data.location.accuracy + ",";
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
          csvString += report_data.people.neighborhoodNeedFirstAid + ","; //cert
          csvString += report_data.people.neighborhoodNeedShelter + ","; //cert
          csvString += report_data.animal.anyPetsOrFarmAnimals + ",";
          report_data.anime.selectedAnimalStatus.forEach((e) => {
            csvString += e + ",";
          });
          csvString += report_data.info.hazardType + ","; // hazard
          csvString += report_data.note.NotesTextArea + ",";
          // csvString += data.Photo_Links + ",";
          csvString += ","; // delete when photo links added
          csvString += report_data.info.startTime + ","; // no finish time
          csvString += "\n";
        } else {
          csvString += "MYN/Hazard test\n";
          // MYN and Hazard report structure
        }
      }
      resolve(csvString);
    });
  }

  /*fetchReports((reports) => {
    console.log("Report data from DB that is HOPEFULLY complete: " + JSON.stringify(reports, null, 2));
    console.log("HELLO???????????????");
    return buildString(reports);
  })
  .then((contents) => {
    console.log("Writing string to file: ");
    writeFile(contents);
  });*/
  
} 

export default exportToCSV;
