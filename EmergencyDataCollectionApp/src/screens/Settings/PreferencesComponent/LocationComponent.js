import React from "react";
import { View, Text, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { States } from "../../../components/dataLists";
import styles from "../styles";

const LocationSection = ({
  city,
  setCity,
  zip,
  setZip,
  selectedState,
  setSelectedState,
}) => {
  return (
    <View>
      <Text>City</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="Enter City"
        style={styles.input}
      />

      <Text>Zip</Text>
      <TextInput
        value={zip}
        onChangeText={setZip}
        placeholder="Enter Zip"
        style={styles.input}
      />

      <Text>State</Text>
      <Dropdown
        style={styles.dropdown}
        data={States}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="State"
        value={selectedState}
        onChange={setSelectedState}
      />
    </View>
  );
};

export default LocationSection;
