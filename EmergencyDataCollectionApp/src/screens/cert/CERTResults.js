import React from "react";
import { ScrollView, View, Text } from "react-native";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";

const CERTResults = () => {
  const certReport = useCERTReportContext();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boldText}>Report Start</Text>
          <Text>{`Start Time: ${certReport.StartTime}`}</Text>
          <Text>{`GPS: ${certReport.Lat}, ${certReport.Long}`}</Text>
          <Text>{`cert Group Name: ${certReport.certGroupName}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Visit Number: ${certReport.VisitNumber}`}</Text>
          <Text>{`Road Access: ${certReport.RoadAccess}`}</Text>
          <Text>{`Location Address: ${certReport.LocationAddress}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Structure/Hazards</Text>
          <Text>{`Structure Type: ${certReport.StructureType}`}</Text>
          <Text>{`Strucutre Condition: ${certReport.StructureCondition}`}</Text>
          <Text>{`Fire Hazards: ${certReport.FireHazards}`}</Text>
          <Text>{`Propane or Gas Hazards: ${certReport.PropaneOrGasHazards}`}</Text>
          <Text>{`Water Hazards: ${certReport.WaterHazards}`}</Text>
          <Text>{`Electrical Hazards: ${certReport.ElectricalHazards}`}</Text>
          <Text>{`Chemical Hazards: ${certReport.ChemicalHazards}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${certReport.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${certReport.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${certReport.RescuedPeopleRed}`}</Text>
          <Text>{`People Trapped: ${certReport.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${certReport.PeopleNeedShelter}`}</Text>
          <Text>{`Deceased People: ${certReport.DeceasedPeople}`}</Text>
          <Text>{`Deceased People: ${certReport.DeceasedPeopleLocation}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Animals</Text>
          <Text>{`Any Animals: ${certReport.AnyAnimals}`}</Text>
          <Text>{`Animal status: ${certReport.AnimalStatus}`}</Text>
          <Text>{`Animal Notes: ${certReport.AnimalNotes}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Finish</Text>
          <Text>{`Finish Time: ${certReport.FinishTime}`}</Text>
          <Text>{`Notes: ${certReport.Notes}`}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CERTResults;
