import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

const MainScreen = ({ navigation }) => {
  const handleReviewSavedMYNReports = () => {
    // placeholder for logic
  };

  const handleStartNewCERTReport = () => {
    // placeholder for logic
  };

  const handleReviewSavedCERTReports = () => {
    // placeholder for logic
  };

  const handleStartNewHazardReport = () => {
    // placeholder for logic
  };

  const handleReviewSavedHazardReports = () => {
    // placeholder for logic
  };

  const handleCopyToUSB = () => {
    // placeholder for logic
  };

  const handleInstructions = () => {
    // placeholder for logic
  };

  const handleSettings = () => {
    // placeholder for logic
  };

  return (
    <View>
      <View style={styles.CONTAINER}>
        <Text>MYN Reporting</Text>
      </View>
      <View style={styles.BUTTONCONTAINER}>
        <Button
          title="Start a new MYN Report"
          onPress={() => {
            navigation.navigate("StartNewMYNReport", { screen: "Start" });
          }}
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
          onPress={() => {
            navigation.navigate("StartNewCERTReport");
          }}
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
        <Button
          title="Copy saved files to USB storage"
          onPress={handleCopyToUSB}
        />
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
