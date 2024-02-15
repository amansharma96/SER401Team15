import * as FileSystem from 'expo-file-system';

import { logAllReports, queryAllReports } from "./OfflineSQLiteDB";

const folderName = FileSystem.documentDirectory + 'EmergencyAppReports/';

async function checkFolder() {
  const folderInfo = await FileSystem.getInfoAsync(folderName);
  if (!folderInfo.exists) {
    console.log("Creating folder...");
    await FileSystem.makeDirectoryAsync(folderName, { intermediates: true });
  }
}

export async function exportToCSV() {
    // change to async
    const csvString = "";
    logAllReports();
    queryAllReports((reports) => {
        reports.array.forEach(element => {
            const type = element.report_type == "MYN" ? "1,"
                : element.report_type == "CERT" ? "2,"
                :  "3,";
            csvString += type;

            if (type == "CERT") {
                // NOTE: no column for animal notes in spreadsheet. report object does not contain Photo_Link 
                const data = element.report_data;
                csvString += data.StartTime + ",";
                csvString += data.GroupName + ",";
                csvString += data.SquadName + ",";
                csvString += data.VisitNumber + ",";
                csvString += data.RoadAccess + ",";
                if (data.LocationAddress) {
                    csvString += data.LocationAddress + ",";
                } else {
                    csvString += data.StreetAddress + " "
                        + data.City + " "
                        + data.State + " "
                        + data.Zip + " ";
                }
                csvString += data.CERTSearched + ",";
                csvString += data.Lat + ",";
                csvString += data.Long + ",";
                csvString += data.Accuracy + ",";
                csvString += data.StructureType + ",";
                csvString += data.StructureCondition + ",";
                csvString += data.FireHazards + ",";
                csvString += data.PropaneOrGasHazards + ",";
                csvString += data.WaterHazards + ",";
                csvString += data.ElectricalHazards + ",";
                csvString += data.ChemicalHazards + ",";
                csvString += data.RescuedPeopleGreen + ",";
                csvString += data.RescuedPeopleYellow + ",";
                csvString += data.RescuedPeopleRed + ",";
                csvString += data.DeceasedPeople + ",";
                csvString += data.DeceasedPeopleLocation + ",";
                csvString += data.PeopleTrapped + ",";
                csvString += data.PeopleNeedShelter + ",";
                csvString += data.NeighborhoodNeedFirstAid + ",";
                csvString += data.NeighborhoodNeedShelter + ",";
                csvString += data.AnyAnimals + ",";
                csvString += data.AnimalStatus + ",";
                csvString += data.HazardType + ",";
                csvString += data.Notes + ",";
                // csvString += data.Photo_Links + ",";
                csvString += ",";
                csvString += data.FinishTime + ",";
            } else {
                // MYN and Hazard report structure
            }

        });
        
    });

    const fileName = "test.csv";
    try {
        checkFolder();
        await FileSystem.writeAsStringAsync(folderName + fileName, content, {});
      } catch (e) {
        // throw, catch by changing popup
        console.log('Error creating report file');
      }
}