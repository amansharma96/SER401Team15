import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";

import HazardReportContext from "./HazardReportsContext";
import placeHolderImg from "../../../assets/images/maps.png";
import Button from "../../components/Button";

export default function ThirdScreen({ navigation }) {
  const { hazardReport } = useContext(HazardReportContext);

  const saveReport = () => {
    const endTime = new Date().toLocaleString();
    // Update EndTime and perform any necessary actions with the saved data
    // For example: API calls, storage, etc.
    const updatedReport = {
      ...hazardReport,
      EndTime: endTime,
    };
    // console.log('Saved Report:', updatedReport);
    Alert.alert(
      "Report Saved",
      `Latitude: ${updatedReport.Lat}\nLongitude: ${updatedReport.Long}\nAccuracy: ${updatedReport.Accuracy}\nReport Type: ${updatedReport.ReportType}\nStart Time: ${updatedReport.StartTime}\nEnd Time: ${updatedReport.EndTime}\n\nNotes: ${updatedReport.Notes}`,
      [
        {
          text: "OK",
          onPress: () => {
            // Handle OK button press if needed
          },
        },
      ],
    );

    // ... handle saving the report
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <Image source={placeHolderImg} style={styles.image} />

      <Button onPress={saveReport} title="Save Report" />
      <Button title="Back" onPress={() => navigation.navigate("Notes")} />
      <Button
        title="Cancel Request"
        onPress={() => navigation.navigate("MainScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  BUTTON: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ffcc00",
    color: "#000000",
    justifyContent: "center",
  },

  image: {
    width: 150,
    height: 250,
    borderWidth: 1,
    borderColor: "black",
  },

  dateContainer: {
    borderColor: "black",
    borderWidth: 1,

    padding: 10,
  },
});
