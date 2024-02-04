import { useSetAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { personal } from "../../../components/dataLists";
import { isPeoplePageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";
import styles from "../styles";

const PeoplePage = ({ navigation }) => {
  const [valueGreen, setValueGreen] = useState(null);
  const [valueYello, setValueYello] = useState(null);
  const [valueRed, setValueRed] = useState(null);
  const [valueBlack, setValueBlack] = useState(null);
  const [valueTrapped, setValueTrapped] = useState(null);
  const [valueShelter, setValueShelter] = useState(null);
  const [blackLocation, onChangeText] = React.useState("");

  const [isFocus, setIsFocus] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const setIsPeoplePageValidated = useSetAtom(isPeoplePageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const validateData = () => {
    const requiredFieldsList = [];
    if (!valueGreen) {
      requiredFieldsList.push("Green Personal");
    }
    if (!valueYello) {
      requiredFieldsList.push("Yellow Personal");
    }
    if (!valueRed) {
      requiredFieldsList.push("Red Personal");
    }
    if (!valueBlack) {
      requiredFieldsList.push("Deceased Personal");
    }
    if (!valueTrapped) {
      requiredFieldsList.push("Trapped Personal");
    }
    if (!valueShelter) {
      requiredFieldsList.push("Personal Requiring Shelter");
    }
    if (!blackLocation && valueBlack > 0) {
      requiredFieldsList.push("Deceased Personal Location");
    }

    // if (requiredFieldsList.length > 0) {
    //   Alert.alert(
    //     "Validation Error",
    //     "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
    //   );
    //   setIsPeoplePageValidated(false);
    //   return;
    // }

    setIsPeoplePageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  const handleValueBlackChange = (item) => {
    setValueBlack(item.value);
    setShowLocation(item.value > 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>PERSONAL</Text>
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
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={blackLocation}
            />
          </View>
        )}
      </View>
      <NavigationButtons validateData={validateData} />
    </View>
  );
};

export default PeoplePage;
