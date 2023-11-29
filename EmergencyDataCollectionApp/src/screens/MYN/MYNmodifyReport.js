import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, Alert, ScrollView } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";

const MYNmodifyReport = ({ navigation }) => {
  const route = useRoute();
  const report = route.params?.report;
  const [modifiedReport, setModifiedReport] = useState({});

  useEffect(() => {
    console.log("Report received:", report);
    setModifiedReport({ ...report });
  }, [report]);

  const { setMYNReportObject } = useMYNReportContext();

  const handleSaveChanges = () => {
    setMYNReportObject((prev) => ({
      ...prev,
      ...modifiedReport,
    }));

    Alert.alert("Success", "Report modified successfully", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  const modGPS = () => {};

  const modDateTime = () => {};

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text>Modify Report</Text>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boldText}>Report Start</Text>
          <Text>{`Start Time: ${modifiedReport.StartTime}`}</Text>
          <Button title="Change Date Time" onPress={modDateTime} />
          <Text>{`GPS: ${modifiedReport.Lat}, ${modifiedReport.Long}`}</Text>
          <Text>{`Accuracy: ${modifiedReport.Accuracy} meters`}</Text>
          <Button title="Re-try GPS" onPress={modGPS} />
          <Text>{`MYN Group Name: ${modifiedReport.MYNGroupName}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Visit Number: ${modifiedReport.VisitNumber}`}</Text>
          <Text>{`Road Access: ${modifiedReport.RoadAccess}`}</Text>
          <Text>{`Location Address: ${modifiedReport.LocationAddress}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Structure/Hazards</Text>
          <Text>{`Structure Type: ${modifiedReport.StructureType}`}</Text>
          <Text>{`Structure Condition: ${modifiedReport.StructureCondition}`}</Text>
          <Text>{`Fire Hazards: ${modifiedReport.FireHazards}`}</Text>
          <Text>{`Propane or Gas Hazards: ${modifiedReport.PropaneOrGasHazards}`}</Text>
          <Text>{`Water Hazards: ${modifiedReport.WaterHazards}`}</Text>
          <Text>{`Electrical Hazards: ${modifiedReport.ElectricalHazards}`}</Text>
          <Text>{`Chemical Hazards: ${modifiedReport.ChemicalHazards}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${modifiedReport.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${modifiedReport.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${modifiedReport.RescuedPeopleRed}`}</Text>
          <Text>{`People Trapped: ${modifiedReport.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${modifiedReport.PeopleNeedShelter}`}</Text>
          <Text>{`Deceased People: ${modifiedReport.DeceasedPeople}`}</Text>
          <Text>{`Deceased People Location: ${modifiedReport.DeceasedPeopleLocation}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Animals</Text>
          <Text>{`Any Animals: ${modifiedReport.AnyAnimals}`}</Text>
          <Text>{`Animal status: ${modifiedReport.AnimalStatus}`}</Text>
          <Text>{`Animal Notes: ${modifiedReport.AnimalNotes}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Finish</Text>
          <Text>{`Finish Time: ${modifiedReport.FinishTime}`}</Text>
          <Text>{`Notes: ${modifiedReport.Notes}`}</Text>
        </View>
        <Button title="Save Changes" onPress={handleSaveChanges} />
      </View>
    </ScrollView>
  );
};

export default MYNmodifyReport;
