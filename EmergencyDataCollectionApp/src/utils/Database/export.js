import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';

import { logAllReports, queryAllReports } from "./OfflineSQLiteDB";

const folderName = FileSystem.documentDirectory + 'EmergencyAppReports/';

async function checkFolder() {
  const folderInfo = await FileSystem.getInfoAsync(folderName);
  if (!folderInfo.exists) {
    console.log("Creating folder...");
    await FileSystem.makeDirectoryAsync(folderName, { intermediates: true });
  } else {
    console.log("folder exists");
  }
}

function buildReportContents() {

}

export async function exportToCSV() {
    // change to async
    let csvString = "";
    console.log("0");
    // logAllReports();
    queryAllReports((reports) => {
        reports.forEach(element => {
            
            const type = element.report_type == "MYN" ? "1,"
                : element.report_type == "CERT" ? "2,"
                :  "3,";
            
            console.log(type);

            if (type == "2,") {
                csvString += type;
                // NOTE: no column for animal notes in spreadsheet. report object does not contain Photo_Link 
                const data = element.report_data;
                console.log(data);
                csvString += data._startTime + ",";
                csvString += data._groupName + ",";
                csvString += data._squadName + ",";
                csvString += data._visitNumber + ",";
                csvString += data._roadAccess + ",";
                if (data._locationAddress != "") {
                    csvString += data._locationAddress + ",";
                } else {
                    csvString += data._streetAddress + " "
                        + data._city + " "
                        + data._state + " "
                        + data._zip + " ";
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
            } else {
                // MYN and Hazard report structure
            }

        });
        
    });

    console.log(csvString);

    const fileName = FileSystem.documentDirectory + "test2.csv";
    await FileSystem.writeAsStringAsync(fileName, csvString);

    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.status != 'granted') {
        console.log("Permission not Granted!")
        // return;
    }

    const share = await Sharing.isAvailableAsync();
    if (share) {
        console.log("Sharing enabled")
    } else {
        return;
    }
    try {
        console.log(csvString);
        await Sharing.shareAsync(fileName);
        /*const asset = await MediaLibrary.createAssetAsync(fileName);
        const album = await MediaLibrary.getAlbumAsync('EmergencyAppReports');
        console.log(album)
        if (album == null) {
            await MediaLibrary.createAlbumAsync('EmergencyAppReports', asset, true);
        } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, true);
        } */
      } catch (e) {
        // throw, catch by changing popup
        console.log(e);
      }
      
}