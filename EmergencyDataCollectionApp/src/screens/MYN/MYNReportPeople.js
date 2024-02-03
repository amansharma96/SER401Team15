/**
 * @module MYNReportPeople
 * @description React component for collecting information about Personal in the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} Rendered component.
 */
// React and React Native imports
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import NavigationButtons from "./components/NavigationButtons";

// Custom styles and components
import styles from "./styles";
import Button from "../../components/Button";
import { useReportContext } from "../../components/ReportContext";
import { personal } from "../../components/dataLists";

/**
 * @function MYNReportPeople
 * @description React component for collecting information about Personal in the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */
const MYNReportPeople = ({ navigation }) => {
  const [valueGreen, setValueGreen] = useState(null);
  const [valueYello, setValueYello] = useState(null);
  const [valueRed, setValueRed] = useState(null);
  const [valueBlack, setValueBlack] = useState(null);
  const [valueTrapped, setValueTrapped] = useState(null);
  const [valueShelter, setValueShelter] = useState(null);
  const [blackLocation, onChangeText] = React.useState("");

  const [isFocus, setIsFocus] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const ReportObject = useReportContext();
  /**
   * Function to load existing data when the component mounts
   */
  const onLoad = () => {
    // Check if values in mynReportObject are not null before setting the state
    if (ReportObject.RescuedPeopleGreen) {
      setValueGreen(ReportObject.RescuedPeopleGreen);
    }
    if (ReportObject.RescuedPeopleYellow) {
      setValueYello(ReportObject.RescuedPeopleYellow);
    }
    if (ReportObject.RescuedPeopleRed) {
      setValueRed(ReportObject.RescuedPeopleRed);
    }
    if (ReportObject.DeceasedPeople) {
      setValueBlack(ReportObject.DeceasedPeople);
      setShowLocation(ReportObject.DeceasedPeople > 0);
    }
    if (ReportObject.PeopleTrapped) {
      setValueTrapped(ReportObject.PeopleTrapped);
    }
    if (ReportObject.PeopleNeedShelter) {
      setValueShelter(ReportObject.PeopleNeedShelter);
    }
    if (ReportObject.DeceasedPeopleLocation) {
      onChangeText(ReportObject.DeceasedPeopleLocation);
    }
  };
  // Load data on component mount
  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
  }, []);
  /**
   * Function to save the current draft of the MYN report and navigate to the next tab
   */
  const saveDraft = () => {
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
    console.log(requiredFieldsList);
    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return;
    }
    ReportObject.RescuedPeopleGreen = valueGreen;
    ReportObject.RescuedPeopleYellow = valueYello;
    ReportObject.RescuedPeopleRed = valueRed;
    ReportObject.DeceasedPeople = valueBlack;
    ReportObject.PeopleTrapped = valueTrapped;
    ReportObject.PeopleNeedShelter = valueShelter;
    ReportObject.DeceasedPeopleLocation = blackLocation;
    global.MYNpage4Complete = true;
    handleClick();
  };

  function handleClick() {
    if (global.MYNpage4Complete) {
      navigation.navigate("Animal");
    }
  }

  /**
   * Function to handle the change in value for deceased people dropdown
   * @param {Object} item - Selected item in the dropdown
   */
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
      <View style={styles.Lower}>
        <NavigationButtons saveDraft={saveDraft}/>
      </View>
    </View>
  );
};

export default MYNReportPeople;
