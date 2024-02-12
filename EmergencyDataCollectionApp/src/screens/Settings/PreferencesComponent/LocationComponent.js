import { NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text, TextInput } from "react-native";

import CustomSelect from "../../../components/CustomSelect/CustomSelect";
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
    <NativeBaseProvider>
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
        <CustomSelect
          items={States}
          placeholder="State"
          value={selectedState}
          onChange={setSelectedState}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default LocationSection;
