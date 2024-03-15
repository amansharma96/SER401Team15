import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../../components/CustomForms/CustomButton/CustomButton";

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <CustomButton title="Save Report" />
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
