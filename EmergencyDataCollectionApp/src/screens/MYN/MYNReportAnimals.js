import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";

import NavigationButtons from "./components/NavigationButtons";
import styles from "./styles";
import { useReportContext } from "../../components/ReportContext";
import { Animals, AnimalStatus } from "../../components/dataLists";
/**
 * @function MYNReportAnimals
 * @description React component for collecting information about local animals in the MYN report.
 *  * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */
const MYNReportAnimals = ({ navigation }) => {
  const [valueAnimals, setValueAnimals] = useState(null);
  const [selectedAnimalStatus, setSelectedAnimalStatus] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [showAnimalStatus, setShowAnimalStatus] = useState(false);
  const [showAnimalTextBox, setShowAnimalTextBox] = useState(false);
  const [animalNotes, setAnimalNotes] = useState("");
  const ReportObject = useReportContext();

  const onLoad = () => {
    if (ReportObject.AnyAnimals) {
      setValueAnimals(ReportObject.AnyAnimals);
      setShowAnimalStatus(ReportObject.AnyAnimals === "YY");
    }
    if (ReportObject.AnimalStatus) {
      setSelectedAnimalStatus(ReportObject.AnimalStatus);
      setShowAnimalTextBox(
        ReportObject.AnimalStatus.some(
          (status) => status && status.includes("FA"),
        ),
      );
    }

    if (ReportObject.AnimalNotes) {
      setAnimalNotes(ReportObject.AnimalNotes);
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
    ReportObject.AnyAnimals = valueAnimals;
    ReportObject.AnimalStatus = selectedAnimalStatus;
    ReportObject.AnimalNotes = animalNotes;
    global.MYNpage5Complete = true;
    handleClick();
  };

  function handleClick() {
    if (global.MYNpage5Complete) {
      navigation.navigate("People");
    }
  }

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
        <NavigationButtons saveDraft={saveDraft} />
      </View>
    </View>
  );
};

export default MYNReportAnimals;
