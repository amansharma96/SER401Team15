import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";
import { exportToCSV } from "../utils/Database/export";

const MainScreen = () => {
  const navigation = useNavigation();

  const handleStartNewMYNReport = () => {
    navigation.navigate("MYNReportNavigation");
  };

  const handleReviewSavedMYNReports = () => {
    navigation.navigate("View Saved MYN Reports");
  };

  const handleStartNewCERTReport = () => {
    navigation.navigate("CERTReportNavigation");
  };

  const handleReviewSavedCERTReports = () => {
    // placeholder for logic
  };
  const handleStartNewHazardReport = () => {
    //integrated New hazard page
    navigation.navigate("StartNewHazardReport", { screen: "Start" });
  };

  const handleReviewSavedHazardReports = () => {
    // placeholder for logic
  };

  const handleCopyToUSB = () => {
    exportToCSV();
  };

  const handleInstructions = () => {
    navigation.navigate("Temp");
  };

  const handleSettings = () => {
    navigation.navigate("AppSetting");
  };

  return (
    <View>
      <View style={styles.CONTAINER}>
        <Text>MYN Reporting</Text>
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <Button
          title="Start a new MYN Report"
          onPress={handleStartNewMYNReport}
        />
        <Button
          title="Review saved MYN Reports"
          onPress={handleReviewSavedMYNReports}
        />
      </View>
      <View style={styles.CONTAINER}>
        <Text>CERT Reporting</Text>
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <Button
          title="Start a new CERT Report"
          onPress={handleStartNewCERTReport}
        />
        <Button
          title="Review saved CERT Reports"
          onPress={handleReviewSavedCERTReports}
        />
      </View>
      <View style={styles.CONTAINER}>
        <Text>HAZARD Reporting</Text>
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <Button
          title="Start a new HAZARD Report"
          onPress={handleStartNewHazardReport}
        />
        <Button
          title="Review saved HAZARD Reports"
          onPress={handleReviewSavedHazardReports}
        />
      </View>
      <View style={styles.CONTAINER}>
        <Text>Other</Text>
      </View>
      <View>
        <Button title="Export Reports" onPress={handleCopyToUSB} />
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <Button title="Instructions" onPress={handleInstructions} />
        <Button title="Settings" onPress={handleSettings} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  BUTTONCONTAINER: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
});
