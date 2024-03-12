import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Theme from "../../../utils/Theme";

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;

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
