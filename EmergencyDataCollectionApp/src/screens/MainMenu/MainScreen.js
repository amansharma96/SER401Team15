import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../../components/CustomForms/CustomButton/CustomButton";
import { exportToCSV } from "../../utils/Database/export";

const MainScreen = () => {
  const navigation = useNavigation();

  const handleStartNewMYNReport = () => {
    navigation.navigate("MYNReportNavigation");
  };

  const handleReviewSavedReports = () => {
    navigation.navigate("Saved Reports");
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
    navigation.navigate("SavedHazardReports");
  };

  const handleCopyToUSB = () => {
    exportToCSV();
  };

  const handleInstructions = () => {
    navigation.navigate("Instructions");
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
        <CustomButton
          title="Start a new MYN Report"
          onPress={handleStartNewMYNReport}
        />
        <CustomButton
          title="View Saved Reports"
          onPress={handleReviewSavedReports}
        />
      </View>
      <View style={styles.CONTAINER}>
        <Text>CERT Reporting</Text>
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <CustomButton
          title="Start a new CERT Report"
          onPress={handleStartNewCERTReport}
        />
        <CustomButton
          title="Review saved CERT Reports"
          onPress={handleReviewSavedCERTReports}
        />
      </View>
      <View style={styles.CONTAINER}>
        <Text>HAZARD Reporting</Text>
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <CustomButton
          title="Start a new HAZARD Report"
          onPress={handleStartNewHazardReport}
        />
        <CustomButton
          title="Review saved HAZARD Reports"
          onPress={handleReviewSavedHazardReports}
        />
      </View>
      <View style={styles.CONTAINER}>
        <Text>Other</Text>
      </View>
      <View>
        <CustomButton title="Export Reports" onPress={handleCopyToUSB} />
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <CustomButton title="Instructions" onPress={handleInstructions} />
        <CustomButton title="Settings" onPress={handleSettings} />
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
