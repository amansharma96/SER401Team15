import React from "react";
import { View, Text, TextInput } from "react-native";

import Theme from "../../../utils/Theme";

const GroupNameInputComponent = ({ mynGroupName, onGroupNameChange }) => {
  return (
    <View style={styles.groupNameInputContainer}>
      <Text style={styles.titleText}>* What is the name of the MYN Group?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onGroupNameChange}
        value={mynGroupName}
      />
    </View>
  );
};

const styles = {
  groupNameInputContainer: {
    marginTop: 50,
  },
  titleText: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    fontWeight: "bold",
    color: Theme.COLORS.TEXT_BLACK,
  },
  input: {
    borderWidth: 1,
    padding: Theme.SPACING.SMALL,
    borderColor: Theme.COLORS.TEXT_GREY,
    borderRadius: Theme.RADIUS.DEFAULT,
    marginTop: 10,
  },
};

export default GroupNameInputComponent;
