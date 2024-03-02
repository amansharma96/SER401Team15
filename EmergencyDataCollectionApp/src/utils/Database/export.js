import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";


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
  function buildString(callback) {
    let csvString = "";
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
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
          csvString += data.info.startTime + ",";
          csvString += data.info.groupName + ",";
          csvString += data.info.squadName + ",";
          csvString += data.location.numberOfVisit + ",";
          csvString += data._roadAccess + ",";
            csvString +=
              data.location.address +
              " " +
              data.location.city +
              " " +
              data.location.state +
              " " +
              data.location.zip +
              " ";
          csvString += data.info.certSearched + ","; // cert - in spreadsheet but not atom data
          csvString += data.location.latitude + ",";
          csvString += data.location.longitude + ",";
          csvString += data.location.accuracy + ",";
          csvString += data.hazard.structureType + ",";
          csvString += data.hazard.structureCondition + ",";
          csvString += data.hazard.hazardFire + ",";
          csvString += data.hazard.hazardPropane + ",";
          csvString += data.hazard.hazardWater + ",";
          csvString += data.hazard.hazardElectrical + ",";
          csvString += data.hazard.hazardChemical + ",";
          csvString += data.people.greenPersonal + ",";
          csvString += data.people.yellowPersonal + ",";
          csvString += data.people.redPersonal + ",";
          csvString += data.people.deceasedPersonal + ",";
          csvString += data.people.deceasedPersonalLocation + ",";
          csvString += data.people.trappedPersonal + ",";
          csvString += data.people.personalRequiringShelter + ",";
          csvString += data.people.neighborhoodNeedFirstAid + ","; //cert
          csvString += data.people.neighborhoodNeedShelter + ","; //cert
          csvString += data.animal.anyPetsOrFarmAnimals + ",";
          data.anime.selectedAnimalStatus.forEach((e) => {
            csvString += e + ",";
          });
          csvString += data.info.hazardType + ","; // hazard
          csvString += data.note.NotesTextArea + ",";
          // csvString += data.Photo_Links + ",";
          csvString += ","; // delete when photo links added
          csvString += data.info.startTime + ","; // no finish time
          csvString += "\n";
        } else {
          // MYN and Hazard report structure
        }
      }
      callback(csvString);
  }
  buildString(writeFile);
}

export default exportToCSV;
