import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";

import HazardReportContext from "./HazardReportsContext";
import CustomButton from "../../components/CustomForms/CustomButton/CustomButton";

export default function ThirdScreen({ navigation }) {
  const {
    hazardReport,
    saveHazardReportToDB,
    updateHazardReportInDB,
    isUpdateMode,
    setUpdateMode,
  } = useContext(HazardReportContext);

  const saveReport = () => {
    const endTime = new Date().toLocaleString();
    const updatedReport = {
      ...hazardReport,
      EndTime: endTime,
    };

    // Check if Lat, Long, or Accuracy are null
    if (
      updatedReport.Lat === null ||
      updatedReport.Long === null ||
      updatedReport.Accuracy === null
    ) {
      Alert.alert(
        "Location Error",
        "Latitude, Longitude, or Accuracy is null. Please retry location.",
        [
          {
            text: "OK",
          },
        ],
      );
      return; // Return to prevent the report from being saved
    }

    if (isUpdateMode) {
      // We are in update mode, update the report
      updateHazardReportInDB(hazardReport.id, updatedReport);

      setUpdateMode(false); // Reset the update mode
    } else {
      // We are not in update mode, save the report as a new one
      saveHazardReportToDB(updatedReport);
    }

    Alert.alert(
      "Report Saved",
      `Latitude: ${updatedReport.Lat}\nLongitude: ${updatedReport.Long}\nAccuracy: ${updatedReport.Accuracy}\nReport Type: ${updatedReport.ReportType}\nStart Time: ${updatedReport.StartTime}\nEnd Time: ${updatedReport.EndTime}\n\nNotes: ${updatedReport.Notes}`,
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("SavedHazardReports");
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>

      {hazardReport.Picture && (
        <Image
          source={{ uri: hazardReport.Picture }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <CustomButton onPress={saveReport} title="Save Report" />
      <CustomButton title="Back" onPress={() => navigation.navigate("Notes")} />
      <CustomButton
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
