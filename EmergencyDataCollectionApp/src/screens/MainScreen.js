import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Button from "../components/Button";
import { exportToCSV } from "../utils/Database/export";
import Theme from "../utils/Theme";

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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionText}>MYN Reporting</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="New MYN Report"
          onPress={handleStartNewMYNReport}
          style={styles.button}
        />
        <Button
          title="Review MYN Reports"
          onPress={handleReviewSavedMYNReports}
          style={[styles.button, { marginLeft: 10 }]}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionText}>CERT Reporting</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="New CERT Report"
          onPress={handleStartNewCERTReport}
          style={styles.button}
        />
        <Button
          title="Review CERT Reports"
          onPress={handleReviewSavedCERTReports}
          style={[styles.button, { marginLeft: 10 }]}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionText}>HAZARD Reporting</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="New HZD Report"
          onPress={handleStartNewHazardReport}
          style={styles.button}
        />
        <Button
          title="Review HZD Reports"
          onPress={handleReviewSavedHazardReports}
          style={[styles.button, { marginLeft: 10 }]}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionText}>User Aids</Text>
      </View>
      <View style={styles.buttonGroupContainer}>
        <Button
          title="Instructions"
          onPress={handleInstructions}
          style={styles.button}
        />
        <Button
          title="Settings"
          onPress={handleSettings}
          style={styles.button}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionText}>Export</Text>
      </View>
      <View style={styles.buttonContainerOther}>
        <Button
          title="Export"
          onPress={handleCopyToUSB}
          style={styles.buttonOther}
        />
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  section: {
    justifyContent: "center",
    marginTop: 20,
  },
  sectionText: {
    fontSize: 20,
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  buttonContainerOther: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "left",
  },
  buttonGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  button: {
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  buttonOther: {
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    marginVertical: 10,
  },
});
