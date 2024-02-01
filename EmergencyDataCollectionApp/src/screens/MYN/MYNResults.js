/**
 * @module MYNResults
 * @description React component for displaying and saving the results of the MYN report.
 * @returns {JSX.Element} Rendered component.
 */
// React and React Native imports
import React from "react";
import { ScrollView, View, Text } from "react-native";

// Custom styles and components
import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
// Data lists for displaying
import {
  visitNumbers,
  RoadCondition,
  StructureType,
  StructureCondition,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
  HazzardElectrical,
  HazzardChemical,
  Animals,
  AnimalStatus,
} from "../../components/dataLists";
// Database utility class
import { dbClass } from "../../utils/Database/db";

/**
 * @description Functional component representing the MYN Results.
 *
 * @function MYNResults
 * @returns {JSX.Element} Rendered component.
 */

const MYNResults = () => {
  /**
   * @description Function to save the MYN report to the database.
   *
   * @function saveReport
   */
  const saveReport = () => {
    const db = new dbClass();
    if (mynReport.dbID) {
      db.clearMYNTableByID([mynReport.dbID]);
    }
    db.addRowMYN(mynReport);
    db.printAllMYNEntries();
  };
  const mynReport = useMYNReportContext();

  /**
   * @description Helper function to get the label from a data list based on the provided value.
   *
   * @function getLabelFromList
   * @param {string} value - The value to find in the data list.
   * @param {Array} list - The data list to search for the value.
   * @returns {string} The label corresponding to the provided value in the data list.
   */
  const getLabelFromList = (value, list) => {
    const item = list.find((item) => item.value === value);
    return item ? item.label : value;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Button title="Save Report" onPress={saveReport} />
        <View style={styles.box}>
          <Text style={styles.boldText}>Report Start</Text>
          <Text>{`Start Time: ${mynReport.StartTime}`}</Text>
          <Text>{`GPS: ${mynReport.Lat}, ${mynReport.Long}`}</Text>
          <Text>{`Accuracy: ${mynReport.Accuracy} meters`}</Text>
          <Text>{`MYN Group Name: ${mynReport.MYNGroupName}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Visit Number: ${getLabelFromList(
            mynReport.VisitNumber,
            visitNumbers,
          )}`}</Text>
          <Text>{`Road Access: ${getLabelFromList(
            mynReport.RoadAccess,
            RoadCondition,
          )}`}</Text>
          <Text>{`Location Address: ${mynReport.LocationAddress}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Structure/Hazards</Text>
          <Text>{`Structure Type: ${getLabelFromList(
            mynReport.StructureType,
            StructureType,
          )}`}</Text>
          <Text>{`Structure Condition: ${getLabelFromList(
            mynReport.StructureCondition,
            StructureCondition,
          )}`}</Text>
          <Text>{`Fire Hazards: ${getLabelFromList(
            mynReport.FireHazards,
            HazzardFire,
          )}`}</Text>
          <Text>{`Propane or Gas Hazards: ${getLabelFromList(
            mynReport.PropaneOrGasHazards,
            HazzardPropane,
          )}`}</Text>
          <Text>{`Water Hazards: ${getLabelFromList(
            mynReport.WaterHazards,
            HazzardWater,
          )}`}</Text>
          <Text>{`Electrical Hazards: ${getLabelFromList(
            mynReport.ElectricalHazards,
            HazzardElectrical,
          )}`}</Text>
          <Text>{`Chemical Hazards: ${getLabelFromList(
            mynReport.ChemicalHazards,
            HazzardChemical,
          )}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${mynReport.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${mynReport.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${mynReport.RescuedPeopleRed}`}</Text>
          <Text>{`People Trapped: ${mynReport.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${mynReport.PeopleNeedShelter}`}</Text>
          <Text>{`Deceased People: ${mynReport.DeceasedPeople}`}</Text>
          <Text>{`Deceased People Location: ${mynReport.DeceasedPeopleLocation}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Animals</Text>
          <Text>{`Any Animals: ${getLabelFromList(
            mynReport.AnyAnimals,
            Animals,
          )}`}</Text>
          <Text>{`Animal status: ${getLabelFromList(
            mynReport.AnimalStatus,
            AnimalStatus,
          )}`}</Text>
          <Text>{`Animal Notes: ${mynReport.AnimalNotes}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Finish</Text>
          <Text>{`Finish Time: ${mynReport.FinishTime}`}</Text>
          <Text>{`Notes: ${mynReport.Notes}`}</Text>
        </View>
        <Button title="Save Report" onPress={saveReport} />
      </View>
    </ScrollView>
  );
};

export default MYNResults;
