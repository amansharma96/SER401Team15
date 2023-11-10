import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Theme from "../utils/Theme";

export default function Report(props) {
  const {
    address = "123 Sesame Street Tempe, AZ 30204",
    title = "Fire Incident",
  } = props;
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    paddingHorizontal: Theme.BUTTON_PADDING.HORIZONTAL,
    borderRadius: Theme.RADIUS.BUTTON,
    elevation: 3,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
  },
  title: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    fontFamily: Theme.TYPOGRAPHY.FONT_FAMILY.DEFAULT,
    lineHeight: Theme.TYPOGRAPHY.LINE_HEIGHT.MEDIUM,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.BOLD,
  },
  address: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
    fontFamily: Theme.TYPOGRAPHY.FONT_FAMILY.DEFAULT,
    lineHeight: Theme.TYPOGRAPHY.LINE_HEIGHT.SMALL,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.REGULAR,
    marginLeft: 20,
  },
});
