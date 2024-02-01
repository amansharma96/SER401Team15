import React from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { CERTGroupNum, SquadNames } from "../../../components/dataLists";
import styles from "../styles";

const CERTSection = ({
  selectedCertGroupNumber,
  setSelectedCertGroupNumber,
  selectedCertSquadName,
  setSelectedCertSquadName,
}) => {
  return (
    <View>
      <Text>Cert Group Number</Text>
      <Dropdown
        style={styles.dropdown}
        data={CERTGroupNum}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Cert Group Number"
        value={selectedCertGroupNumber}
        onChange={setSelectedCertGroupNumber}
      />

      <Text>Cert Squad Name</Text>
      <Dropdown
        style={styles.dropdown}
        data={SquadNames}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Cert Squad Name"
        value={selectedCertSquadName}
        onChange={setSelectedCertSquadName}
      />
    </View>
  );
};

export default CERTSection;
