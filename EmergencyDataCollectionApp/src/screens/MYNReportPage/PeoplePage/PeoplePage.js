import { useSetAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import { View, Text, TextInput, Alert, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { personal } from "../../../components/dataLists";
import { isPeoplePageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";
import styles from "../styles";

const PeoplePage = () => {
  const [greenPersonal, setGreenPersonal] = useState(null);
  const [yellowPersonal, setYellowPersonal] = useState(null);
  const [redPersonal, setRedPersonal] = useState(null);
  const [deceasedPersonal, setDeceasedPersonal] = useState(null);
  const [trappedPersonal, setTrappedPersonal] = useState(null);
  const [personalRequiringShelter, setPersonalRequiringShelter] =
    useState(null);
  const [deceasedPersonalLocation, onChangeText] = React.useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const setIsPeoplePageValidated = useSetAtom(isPeoplePageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const validateData = () => {
    const requiredFieldsList = [];
    if (!greenPersonal) {
      requiredFieldsList.push("- Green Personal");
    }
    if (!yellowPersonal) {
      requiredFieldsList.push("- Yellow Personal");
    }
    if (!redPersonal) {
      requiredFieldsList.push("- Red Personal");
    }
    if (!deceasedPersonal) {
      requiredFieldsList.push("- Deceased Personal");
    }
    if (!trappedPersonal) {
      requiredFieldsList.push("- Trapped Personal");
    }
    if (!personalRequiringShelter) {
      requiredFieldsList.push("- Personal Requiring Shelter");
    }
    if (!deceasedPersonalLocation && deceasedPersonal > 0) {
      requiredFieldsList.push("- Deceased Personal Location");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsPeoplePageValidated(false);
      return;
    }

    setIsPeoplePageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  const handleValueBlackChange = (item) => {
    setDeceasedPersonal(item.value);
    setShowLocation(item.value > 0);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Upper}>
          <Text>How many rescued people are GREEN?*</Text>
          <Dropdown
            style={[styles.dropdown]}
            data={personal}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={greenPersonal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setGreenPersonal(item.value);
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
            value={yellowPersonal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setYellowPersonal(item.value);
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
            value={redPersonal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setRedPersonal(item.value);
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
            value={trappedPersonal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setTrappedPersonal(item.value);
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
            value={personalRequiringShelter}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setPersonalRequiringShelter(item.value);
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
            value={deceasedPersonal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={handleValueBlackChange}
          />
          {showLocation && (
            <View style={styles.locationContainer}>
              <Text>Where is the location of the deceased?*</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={deceasedPersonalLocation}
              />
            </View>
          )}
        </View>
        <NavigationButtons validateData={validateData} />
      </View>
    </ScrollView>
  );
};

export default PeoplePage;
