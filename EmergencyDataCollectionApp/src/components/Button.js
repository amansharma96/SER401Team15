import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.BUTTON} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
  BUTTON: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ffcc00",
    color: "#000000",
    justifyContent: "center",
  },
});
