import { useNavigation } from "@react-navigation/native";
import { useAtomValue, useSetAtom } from "jotai/index";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Theme from "../../../utils/Theme";
import { tabIndexAtom } from "../MYNPageAtoms";

const Button = ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity style={buttonStyle} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const NavigationButtons = ({ validateData }) => {
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);
  const navigation = useNavigation();

  const handleCancelPress = () => {
    navigation.navigate("MainScreen");
  };

  const handleBackPress = () => {
    setTabIndex(tabIndex - 1);
  };

  const handleNextPress = () => {
    validateData();
  };

  return (
    <View style={styles.container}>
      {tabIndex === 0 ? (
        <Button
          title="Cancel"
          onPress={handleCancelPress}
          buttonStyle={styles.cancelButton}
        />
      ) : (
        <Button
          title="Back"
          onPress={handleBackPress}
          buttonStyle={styles.cancelButton}
        />
      )}
      <Button
        title="Next"
        onPress={handleNextPress}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  cancelButton: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    borderColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderWidth: 1,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  button: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
  },
};

export default NavigationButtons;
