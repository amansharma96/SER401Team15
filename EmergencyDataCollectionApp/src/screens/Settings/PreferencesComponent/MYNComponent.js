import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles";

const MYNSection = ({ groupName, setGroupName }) => {
  return (
    <View>
      <Text>MYN Group Name</Text>
      <TextInput
        value={groupName}
        onChangeText={setGroupName}
        placeholder="Enter MYN Group Name"
        style={styles.input}
      />
    </View>
  );
};

export default MYNSection;
