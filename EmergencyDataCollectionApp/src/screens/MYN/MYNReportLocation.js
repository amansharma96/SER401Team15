import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import NavigationButtons from "./components/NavigationButtons";
import styles from "./styles";
import { useReportContext } from "../../components/ReportContext";
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

    const ReportObject = useReportContext();
    /**
     * @description Function to load existing data when the component mounts
     */
    const onLoad = () => {
      // Check if values in ReportObject are not null before setting the state
      if (ReportObject.VisitNumber) {
        setValueVisit(ReportObject.VisitNumber);
      }

      if (ReportObject.RoadAccess) {
        setValueRoadCondition(ReportObject.RoadAccess);
      }

      if (ReportObject.StreetAddress) {
        onChangeAddress(ReportObject.StreetAddress);
      }
      if (ReportObject.City) {
        onChangeCity(ReportObject.City);
      }
      if (ReportObject.State) {
        setValueState(ReportObject.State);
      }
      if (ReportObject.Zip) {
        onChangeZip(ReportObject.Zip);
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
      ReportObject.VisitNumber = valueVisit;
      ReportObject.RoadAccess = valueRoadCondition;
      ReportObject.LocationAddress =
        address + "," + city + "," + valueState + "," + zip;
      ReportObject.StreetAddress = address;
      ReportObject.City = city;
      ReportObject.State = valueState;
      ReportObject.Zip = zip;
      global.MYNpage2Complete = true;
      handleClick();
    };

    function handleClick() {
      if (global.MYNpage2Complete) {
        navigation.navigate("Struct /Haz");
      }
    }

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
        <NavigationButtons saveDraft={saveDraft} />
      </View>
    );
  };

  return <DropdownComponent />;
};

export default MYNReportLocation;
