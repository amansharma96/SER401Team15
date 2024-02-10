import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../../components/Button";

const TempPicker = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temporary Picker</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Tabbed Page"
          onPress={() => {
            navigation.navigate("Instructions");
          }}
        />
        <View style={styles.spacing} />
        <Button
          title="Accordion"
          onPress={() => {
            navigation.navigate("InstructionsAccordion");
          }}
        />
        <View style={styles.spacing} />
        <Button
          title="Return"
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  spacing: {
    height: 10, // Adjust spacing as needed
  },
});

export default TempPicker;
