import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Theme from "../../../utils/Theme";

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    alignItems: "center",
    borderRadius: Theme.RADIUS.BUTTON,
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
  },
});
