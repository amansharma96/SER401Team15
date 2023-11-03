import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../../components/Button";

import { personal } from "../../components/dataLists";

const MYNReportPeople = () => {
  const [valueGreen, setValueGreen] = useState(null);
  const [valueYello, setValueYello] = useState(null);
  const [valueRed, setValueRed] = useState(null);
  const [valueBlack, setValueBlack] = useState(null);
  const [valueTrapped, setValueTrapped] = useState(null);
  const [valueShelter, setValueShelter] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const saveDraft = () => {
    // Placeholder for logic
  };

  const handleValueBlackChange = (item) => {
    setValueBlack(item.value);
    setShowLocation(item.value > 0);
  };

  return (
    <View style={styles.container}>
      <Text>How many rescued people are GREEN?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={personal}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueGreen}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValueGreen(item.value);
          setIsFocus(false);
        }}
      />
      <Text>How many rescued people are YELLOW?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={personal}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueYello}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValueYello(item.value);
          setIsFocus(false);
        }}
      />
      <Text>How many rescued people are RED?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={personal}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueRed}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValueRed(item.value);
          setIsFocus(false);
        }}
      />      
      <Text>How many people are TRAPPED?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={personal}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueTrapped}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValueTrapped(item.value);
          setIsFocus(false);
        }}
      />
      <Text>How many people need SHELTER?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={personal}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueShelter}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValueShelter(item.value);
          setIsFocus(false);
        }}
      />
      <Text>How many rescued people are DECEASED?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={personal}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueBlack}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleValueBlackChange}
      />
      {showLocation && (
        <View style={styles.locationContainer}>
          <Text>Where is the location of the deceased?*</Text>
          <TextInput style={styles.input} />
        </View>
      )}
      <Text>* are required fields</Text>
      <Button
        style={styles.bottomButtonContainer}
        title="Save current draft of report"
        onPress={saveDraft}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bottomButtonContainer: {
    marginTop: 20,
  },
  locationContainer: {
    marginTop: 10,
  },
});

export default MYNReportPeople;
