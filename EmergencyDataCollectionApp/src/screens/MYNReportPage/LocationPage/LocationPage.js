import { useSetAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import {
  visitNumbers,
  RoadCondition,
  States,
} from "../../../components/dataLists";
import { isLocationPageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";
import styles from "../styles";

const LocationPage = () => {
  const [valueVisit, setValueVisit] = useState(null);
  const [valueRoadCondition, setValueRoadCondition] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [address, onChangeAddress] = React.useState("123 Generic address");
  const [city, onChangeCity] = React.useState("hometown");
  const [valueState, setValueState] = React.useState(null);
  const [zip, onChangeZip] = React.useState("55555");

  const setIsLocationPageValidated = useSetAtom(isLocationPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const validateData = () => {
    const requiredFieldsList = [];
    if (!valueVisit) {
      requiredFieldsList.push("Visit Number");
    }
    if (!valueRoadCondition) {
      requiredFieldsList.push("Road Condition");
    }
    if (!address) {
      requiredFieldsList.push("Address");
    }
    if (!city) {
      requiredFieldsList.push("City");
    }
    if (!valueState) {
      requiredFieldsList.push("State");
    }
    if (!zip) {
      requiredFieldsList.push("Zip");
    }

    // if (requiredFieldsList.length > 0) {
    //   Alert.alert(
    //     "Validation Error",
    //     "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
    //   );
    //   setIsLocationPageValidated(false);
    //   return;
    // }

    setIsLocationPageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>LOCATION</Text>
        <Text>Is this your first visit to this address?*</Text>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={visitNumbers}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueVisit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValueVisit(item.value);
            setIsFocus(false);
          }}
        />
        <Text>How good is the ROAD access to this location?*</Text>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={RoadCondition}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueRoadCondition}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValueRoadCondition(item.value);
            setIsFocus(false);
          }}
        />
        <Text>Address*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        <Text>City*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCity}
          value={city}
        />
        <View style={styles.inlineContainer}>
          <View style={styles.inlineItem}>
            <Text>State?*</Text>
            <Dropdown
              style={[styles.dropdownSmall, { marginRight: 10 }]} // Adjust the margin as needed
              data={States}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "" : ""}
              searchPlaceholder="Search..."
              value={valueState}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValueState(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.inlineItem}>
            <Text>Zip?*</Text>
            <TextInput
              style={[styles.inputSmall, { marginLeft: 10 }]} // Adjust the margin as needed
              onChangeText={onChangeZip}
              value={zip}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <NavigationButtons validateData={validateData} />
    </View>
  );
};

export default LocationPage;
