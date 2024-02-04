import { useAtomValue, useSetAtom } from "jotai";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";

import { Animals, AnimalStatus } from "../../../components/dataLists";
import { isAnimalPageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";
import styles from "../styles";

const AnimalPage = ({ navigation }) => {
  const [valueAnimals, setValueAnimals] = useState(null);
  const [selectedAnimalStatus, setSelectedAnimalStatus] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [showAnimalStatus, setShowAnimalStatus] = useState(false);
  const [showAnimalTextBox, setShowAnimalTextBox] = useState(false);
  const [animalNotes, setAnimalNotes] = useState("");

  const setIsAnimalPageValidated = useSetAtom(isAnimalPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const handleAnimalChange = (item) => {
    setValueAnimals(item.value);
    setShowAnimalStatus(item.value === "YY");
    setSelectedAnimalStatus([]);
    setShowAnimalTextBox(false);
  };

  const handleAnimalStatusChange = (items) => {
    setSelectedAnimalStatus(items);
    setShowAnimalTextBox(items.some((item) => item.includes("FA")));
  };

  const validateData = () => {
    const requiredFieldsList = [];
    console.log(selectedAnimalStatus.length);
    console.log(requiredFieldsList);
    if (!valueAnimals) {
      requiredFieldsList.push("Any Animals");
    }
    if (valueAnimals === "YY" && selectedAnimalStatus.length === 0) {
      requiredFieldsList.push("Animal Status");
    }
    if (
      !animalNotes &&
      selectedAnimalStatus.some((item) => item.includes("FA"))
    ) {
      requiredFieldsList.push("Animal Notes");
    }
    console.log(requiredFieldsList);
    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsAnimalPageValidated(false);
      return;
    }

    setIsAnimalPageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>ANIMALS</Text>
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
            <MultiSelect
              style={[styles.dropdown]}
              data={AnimalStatus}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "" : ""}
              searchPlaceholder="Search..."
              value={selectedAnimalStatus}
              onChange={handleAnimalStatusChange}
              search
            />
          </View>
        )}
        {showAnimalTextBox && (
          <View style={styles.textAreaContainer}>
            <Text>Additional Information about Farm Animals*</Text>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Other farm animals, like cows or horses that require attention, please make detailed notes"
              placeholderTextColor="grey"
              numberOfLines={20}
              multiline
              textAlignVertical="top"
              textAlign="left"
              onChangeText={(text) => setAnimalNotes(text)}
              value={animalNotes}
            />
          </View>
        )}
      </View>
      <View style={styles.Lower} />
      <NavigationButtons validateData={validateData} />
    </View>
  );
};

export default AnimalPage;
