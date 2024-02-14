import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const MYNInstructions = () => {
  const instructions = [
    "Let the GPS get as accurate reading as possible",
    "Make notes of everything",
    "The report is guided, fill out the page before moving to the next one",
    "Document everything in the notes section you feel is important",
    "Take pictures of anything important and add them to the report",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hazzard Report Instructions</Text>
      <Text style={styles.placehodler}>*Place Holder*</Text>
      {instructions.map((instruction, index) => (
        <Text key={index} style={styles.instruction}>
          • {instruction}
        </Text>
      ))}
    </View>
  );
};

export default MYNInstructions;
