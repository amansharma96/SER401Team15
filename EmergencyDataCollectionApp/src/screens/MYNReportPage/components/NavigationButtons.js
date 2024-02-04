import { useAtomValue, useSetAtom } from "jotai/index";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Theme from "../../../utils/Theme";
import { tabIndexAtom } from "../MYNPageAtoms";

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const NavigationButtons = ({ validateData }) => {
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const handleBackPress = () => {
    setTabIndex(tabIndex - 1);
  };

  const handleNextPress = () => {
    validateData();
  };

  return (
    <View style={styles.container}>
      {tabIndex !== 0 && <Button title="Back" onPress={handleBackPress} />}
      <Button title="Next" onPress={handleNextPress} />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "grey",
    paddingVertical: 10,
  },
  button: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    borderColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: Theme.RADIUS.BUTTON,
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
  },
};

export default NavigationButtons;
