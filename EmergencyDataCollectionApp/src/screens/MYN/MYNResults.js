import React from "react";
import { ScrollView, View, Text } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import MYNReportObject from "../../components/MYNReportObject";

const MYNResults = () => {
  const saveReport = () => {
    //place holder logic
  };
  const mynReport = new MYNReportObject();
  mynReport.assignTestData();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Button title="Save Report" onPress={saveReport} />
        <View style={styles.box}>
          <Text style={styles.boldText}>Report Start</Text>
          <Text>{`Start Time: ${mynReport.StartTime}`}</Text>
          <Text>{`GPS: ${mynReport.Lat}, ${mynReport.Long}`}</Text>
          <Text>{`MYN Group Name: ${mynReport.MYNGroupName}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Visit Number: ${mynReport.VisitNumber}`}</Text>
          <Text>{`Road Access: ${mynReport.RoadAccess}`}</Text>
          <Text>{`Location Address: ${mynReport.LocationAddress}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Structure/Hazards</Text>
          <Text>{`Structure Type: ${mynReport.StructureType}`}</Text>
          <Text>{`Strucutre Condition: ${mynReport.StructureCondition}`}</Text>
          <Text>{`Fire Hazards: ${mynReport.FireHazards}`}</Text>
          <Text>{`Propane or Gas Hazards: ${mynReport.PropaneOrGasHazards}`}</Text>
          <Text>{`Water Hazards: ${mynReport.WaterHazards}`}</Text>
          <Text>{`Electrical Hazards: ${mynReport.ElectricalHazards}`}</Text>
          <Text>{`Chemical Hazards: ${mynReport.ChemicalHazards}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${mynReport.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${mynReport.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${mynReport.RescuedPeopleRed}`}</Text>
          <Text>{`People Trapped: ${mynReport.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${mynReport.PeopleNeedShelter}`}</Text>
          <Text>{`Deceased People: ${mynReport.DeceasedPeople}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Animals</Text>
          <Text>{`Any Animals: ${mynReport.AnyAnimals}`}</Text>
          <Text>{`Animal status: ${mynReport.AnimalStatus}`}</Text>
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
