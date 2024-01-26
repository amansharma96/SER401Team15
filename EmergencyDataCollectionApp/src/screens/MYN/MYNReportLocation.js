/**
 * @module MYNReportLocation
 * @description React component for collecting information about current location in the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} Rendered component.
 */
// React and React Native imports
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

// Custom styles and components
import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
// Data lists for dropdowns
import {
  visitNumbers,
  RoadCondition,
  States,
} from "../../components/dataLists";

/**
 * @function MYNReportLocation
 * @description React component for collecting location information in the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */
const MYNReportLocation = ({ navigation }) => {
  const DropdownComponent = () => {
    const [valueVisit, setValueVisit] = useState(null);
    const [valueRoadCondition, setValueRoadCondition] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [address, onChangeAddress] = React.useState("123 Generic address");
    const [city, onChangeCity] = React.useState("hometown");
    const [valueState, setValueState] = React.useState(null);
    const [zip, onChangeZip] = React.useState("55555");

    const mynReportObject = useMYNReportContext();
    /**
     * @description Function to load existing data when the component mounts
     */
    const onLoad = () => {
      global.MYNpage1Active = true;
      global.MYNpage2Active = false;
      global.MYNpage3Active = false;
      global.MYNpage4Active = false;
      global.MYNpage5Active = false;
      global.MYNpage6Active = false;
      global.MYNpage7Active = false;
      // Check if values in mynReportObject are not null before setting the state
      if (mynReportObject.VisitNumber) {
        setValueVisit(mynReportObject.VisitNumber.toString());
      }

      if (mynReportObject.RoadAccess) {
        setValueRoadCondition(mynReportObject.RoadAccess.toString());
      }

      if (mynReportObject.StreetAddress) {
        onChangeAddress(mynReportObject.StreetAddress.toString());
      }
      if (mynReportObject.City) {
        onChangeCity(mynReportObject.City.toString());
      }
      if (mynReportObject.State) {
        setValueState(mynReportObject.State.toString());
      }
      if (mynReportObject.Zip) {
        onChangeZip(mynReportObject.Zip.toString());
      }
    };
    // Load data on component mount
    React.useEffect(() => {
      onLoad();
    }, []);
    /**
     * @description Function to save the current draft of the MYN report and navigate to the next tab
     */
    const saveDraft = () => {
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
      console.log(requiredFieldsList);

      if (requiredFieldsList.length > 0) {
        Alert.alert(
          "Validation Error",
          "Please fill in all required fields:\n" +
            requiredFieldsList.join("\n"),
        );
        return;
      }
      mynReportObject.VisitNumber = valueVisit;
      mynReportObject.RoadAccess = valueRoadCondition;
      mynReportObject.LocationAddress =
        address + "," + city + "," + valueState + "," + zip;
      mynReportObject.StreetAddress = address;
      mynReportObject.City = city;
      mynReportObject.State = valueState;
      mynReportObject.Zip = zip;
      global.MYNpage3Complete = true;
      console.log(mynReportObject);
      if (global.MYNpage3Complete) {
        navigation.navigate("Struct Haz");
      }
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
        <View style={styles.Lower}>
          <Text>* are required fields</Text>
          <Button
            style={styles.bottomButtonContainer}
            title="Next"
            onPress={() => saveDraft()}
          />
        </View>
      </View>
    );
  };

  return <DropdownComponent />;
};

export default MYNReportLocation;
