import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

import { queryAllReports ,fetchHazardReports } from "./OfflineSQLiteDB";

function buildString(callback) {
  let csvString = "";
  const reports = [];
  queryAllReports((rows) => {
    rows.forEach((e) => {
      reports.push(e);
    });

    // Fetch hazard reports
    fetchHazardReports((hazardReports) => {
      hazardReports.forEach((e) => {
        reports.push(e);
      });

      for (let i = 0; i < reports.length; i++) {
        const element = reports[i];
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
        const data = element.report_data;
        console.log(data);
        csvString += data._startTime + ",";
        csvString += data._groupName + ",";
        csvString += data._squadName + ",";
        csvString += data._visitNumber + ",";
        csvString += data._roadAccess + ",";
        if (data._locationAddress !== "") {
          csvString += data._locationAddress + ",";
        } else {
          csvString +=
            data._streetAddress +
            " " +
            data._city +
            " " +
            data._state +
            " " +
            data._zip +
            " ";
        }
        csvString += data._certSearched + ",";
        csvString += data._lat + ",";
        csvString += data._long + ",";
        csvString += data._accuracy + ",";
        csvString += data._structureType + ",";
        csvString += data._structureCondition + ",";
        csvString += data._fireHazards + ",";
        csvString += data._propaneOrGasHazards + ",";
        csvString += data._waterHazards + ",";
        csvString += data._electricalHazards + ",";
        csvString += data._chemicalHazards + ",";
        csvString += data._rescuedPeopleGreen + ",";
        csvString += data._rescuedPeopleYellow + ",";
        csvString += data._rescuedPeopleRed + ",";
        csvString += data._deceasedPeople + ",";
        csvString += data._deceasedPeopleLocation + ",";
        csvString += data._peopleTrapped + ",";
        csvString += data._peopleNeedShelter + ",";
        csvString += data._neighborhoodNeedFirstAid + ",";
        csvString += data._neighborhoodNeedShelter + ",";
        csvString += data._anyAnimals + ",";
        csvString += data._animalStatus + ",";
        csvString += data._hazardType + ",";
        csvString += data._notes + ",";
        // csvString += data.Photo_Links + ",";
        csvString += ",";
        csvString += data._finishTime + ",";
        csvString += "\n";
      } else {
        // MYN and Hazard report structure
      } if (element.ReportType) {
        csvString += `${element.ReportType},${element.StartTime},${element.Lat},${element.Long},${element.Accuracy},${element.EndTime},${element.Notes}\n`;
      }
    }

    callback(csvString);
  });
});
}

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

export function exportToCSV() {
  buildString(writeFile);
}
