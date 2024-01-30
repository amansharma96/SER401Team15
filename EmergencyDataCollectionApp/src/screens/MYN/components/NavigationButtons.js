import React from "react";
import { View } from "react-native";

import Button from "../../../components/Button";
import Theme from "../../../utils/Theme";

const NavigationButtons = ({ saveDraft, navigation }) => {
  return (
    <View style={styles.Lower}>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate("MainScreen")}
      />
      <Button title="Next" onPress={saveDraft} />
    </View>
  );
};

const styles = {
  Lower: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Theme.SPACING.MEDIUM,
  },
};

export default NavigationButtons;
