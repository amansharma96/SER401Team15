import { useNavigation } from "@react-navigation/native";
import { useAtom, useAtomValue } from "jotai/index";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { addReport } from "../../../utils/Database/OfflineSQLiteDB";
import Theme from "../../../utils/Theme";
import { hazardReportAtom, hazardTabsStatusAtom } from "../HazardPageAtoms";

const Button = ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity style={buttonStyle} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const NavigationButtons = ({ validateData }) => {
  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const navigation = useNavigation();

  const handleCancelPress = () => {
    navigation.navigate("MainScreen");
  };

  const handleBackPress = () => {
    const currentTabIndex = hazardTabsStatus.tabIndex;
    setHazardTabsStatus({ ...hazardTabsStatus, tabIndex: currentTabIndex - 1 });
  };

  const handleNextPress = () => {
    validateData();
  };

  const handleEditPress = () => {
    handleBackPress()
    // navigation.navigate("CERT Report Page");
  };

  const handleSavePress = () => {
    validateData();
  };

  let leftButton;
  let rightButton;

  if (hazardTabsStatus.tabIndex === 0) {
    leftButton = (
      <Button
        title="Cancel"
        onPress={handleCancelPress}
        buttonStyle={styles.cancelButton}
      />
    );
    rightButton = (
      <Button
        title="Next"
        onPress={handleNextPress}
        buttonStyle={styles.button}
      />
    );
  } else if (hazardTabsStatus.tabIndex === 1) {
    leftButton = (
      <Button
        title="Back"
        onPress={handleBackPress}
        buttonStyle={styles.cancelButton}
      />
    );
    rightButton = (
      <Button
        title="Next"
        onPress={handleNextPress}
        buttonStyle={styles.button}
      />
    );
  } else if (hazardTabsStatus.tabIndex === 2) {
    leftButton = (
      <Button
        title="Edit"
        onPress={handleEditPress}
        buttonStyle={styles.cancelButton}
      />
    );
    rightButton = (
      <Button
        title="Save"
        onPress={handleSavePress}
        buttonStyle={styles.button}
      />
    );
  }

  return (
    <View style={styles.container}>
      {leftButton}
      {rightButton}
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