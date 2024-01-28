/**
 * @module MYNReportAnimals
 * @description React component for collecting information about local animals in the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} Rendered component.
 */
// React and React Native imports
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";

// Custom styles and components
import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
// Data lists for dropdowns
import { Animals, AnimalStatus } from "../../components/dataLists";
/**
 * @function MYNReportAnimals
 * @description React component for collecting information about local animals in the MYN report.
 *  * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */
const MYNReportAnimals = ({ addVisibleTab }) => {
  const [valueAnimals, setValueAnimals] = useState(null);
  const [selectedAnimalStatus, setSelectedAnimalStatus] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [showAnimalStatus, setShowAnimalStatus] = useState(false);
  const [showAnimalTextBox, setShowAnimalTextBox] = useState(false);
  const [animalNotes, setAnimalNotes] = useState("");
  const mynReportObject = useMYNReportContext();

  const onLoad = () => {
    if (mynReportObject.AnyAnimals) {
      setValueAnimals(mynReportObject.AnyAnimals);
      setShowAnimalStatus(mynReportObject.AnyAnimals === "YY");
    }
    if (mynReportObject.AnimalStatus) {
      setSelectedAnimalStatus(mynReportObject.AnimalStatus);
      setShowAnimalTextBox(
        mynReportObject.AnimalStatus.some(
          (status) => status && status.includes("FA"),
        ),
      );
    }

    if (mynReportObject.AnimalNotes) {
      setAnimalNotes(mynReportObject.AnimalNotes);
    }
  };
  // Load data on component mount
  React.useEffect(() => {
    onLoad();
  }, []);
  /**
   * @description Function to handle changes in the animal dropdown
   * @param {Object} item - Selected item from the dropdown
   */
  const handleAnimalChange = (item) => {
    setValueAnimals(item.value);
    setShowAnimalStatus(item.value === "YY");
    setSelectedAnimalStatus([]);
    setShowAnimalTextBox(false);
  };
  /**
   * @description Function to handle changes in the animal status multi-select
   * @param {Array} items - Selected items from the multi-select
   */
  const handleAnimalStatusChange = (items) => {
    setSelectedAnimalStatus(items);
    setShowAnimalTextBox(items.some((item) => item.includes("FA")));
  };
  /**
   *@description  Function to save the current draft of the MYN report and navigate to the next tab
   */
  const saveDraft = () => {
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
      return;
    }
    mynReportObject.AnyAnimals = valueAnimals;
    mynReportObject.AnimalStatus = selectedAnimalStatus;
    mynReportObject.AnimalNotes = animalNotes;
    addVisibleTab("Finish");
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
      <View style={styles.Lower}>
        <Text>* are required fields</Text>
        <Button
          style={styles.bottomButtonContainer}
          title="Next"
          onPress={saveDraft}
        />
      </View>
    </View>
  );
};

export default MYNReportAnimals;
