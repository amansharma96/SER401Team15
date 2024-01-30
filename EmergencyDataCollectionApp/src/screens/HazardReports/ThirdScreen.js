import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet,Alert } from "react-native";
import Button from "../../components/Button";
import placeHolderImg from "../../../assets/images/maps.png";
import HazardReportContext from './HazardReportsContext'

export default function ThirdScreen({ navigation }) {

  const { hazardReport, saveHazardReportToDB } = useContext(HazardReportContext);

  const cancelRequestAction = () => {
    navigation.popToTop();
    navigation.navigate("MainScreen");
  };

  const saveReport = () => {
    const endTime = new Date().toLocaleString();
    const updatedReport = {
      ...hazardReport,
      EndTime: endTime,
    };
    saveHazardReportToDB(updatedReport);
    
    Alert.alert(
      "Report Saved",
      `Latitude: ${updatedReport.Lat}\nLongitude: ${updatedReport.Long}\nAccuracy: ${updatedReport.Accuracy}\nReport Type: ${updatedReport.ReportType}\nStart Time: ${updatedReport.StartTime}\nEnd Time: ${updatedReport.EndTime}\n\nNotes: ${updatedReport.Notes}`,
      [
        {
          text: "OK",
          onPress: () => {
            // navigation.popToTop();
            navigation.navigate("SavedHazardReports");
          },
        },
      ]
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
      <Button onPress={saveReport} title="Save Report" />
      <Button title="Back" onPress={() => navigation.navigate('Notes')}/>
      <Button  title="Cancel Request" onPress={()=>navigation.navigate("MainScreen")}/>
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
