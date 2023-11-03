import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import Button from "../../components/Button";
import { Animals, AnimalStatus } from "../../components/dataLists";

const MYNReportAnimals = () => {
  const [valueAnimals, setValueAnimals] = useState(null);
  const [valueAnimalStatus, setValueAnimalStatus] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [showAnimalStatus, setShowAnimalStatus] = useState(false);
  const [showAnimalTextBox, setShowAnimalTextBox] = useState(false);

  const handleAnimalChange = (item) => {
    setValueAnimals(item.value);
    setShowAnimalStatus(item.value === "YY");
    setValueAnimalStatus(null);
    setShowAnimalTextBox(false);
  };

  const handleAnimalStatusChange = (item) => {
    setValueAnimalStatus(item.value);
    setShowAnimalTextBox(item.value === "FA");
  };

  const saveDraft = () => {
    //place holder for logic
  };

  return (
    <View style={styles.container}>
      <Text>Any pets or farm animals?*</Text>
      <Dropdown
        style={[styles.dropdown]}
        data={Animals}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "" : ""}
        searchPlaceholder="Search..."
        value={valueAnimals}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleAnimalChange}
      />
      {showAnimalStatus && (
        <View style={styles.dropdownContainer}>
          <Text>Animal Status*</Text>
          <Dropdown
            style={[styles.dropdown]}
            data={AnimalStatus}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueAnimalStatus}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={handleAnimalStatusChange}
          />
        </View>
      )}
      {showAnimalTextBox && (
        <View style={styles.textAreaContainer}>
          <Text>Additional Information about Farm Animals</Text>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            textAlignVertical="top"
            textAlign="left"
          />
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
  dropdownContainer: {
    marginTop: 20,
  },
  textAreaContainer: {
    marginTop: 20,
    width: 300,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    textAlign: "left",
  },
});

export default MYNReportAnimals;