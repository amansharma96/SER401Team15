import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
import {
  visitNumbers,
  RoadCondition,
  States,
} from "../../components/dataLists";

const MYNReportLocation = ({ addVisibleTab }) => {
  const DropdownComponent = () => {
    const [valueVisit, setValueVisit] = useState(null);
    const [valueRoadCondition, setValueRoadCondition] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [address, onChangeAddress] = React.useState("123 Generic address");
    const [city, onChangeCity] = React.useState("hometown");
    const [valueState, setValueState] = React.useState(null);
    const [zip, onChangeZip] = React.useState("55555");
    const [requiredFields, setRequiredFields] = useState([]);

    const mynReportObject = useMYNReportContext();

    const onLoad = () => {
      // Check if values in mynReportObject are not null before setting the state
      if (mynReportObject.VisitNumber) {
        setValueVisit(mynReportObject.VisitNumber);
      }

      if (mynReportObject.RoadAccess) {
        setValueRoadCondition(mynReportObject.RoadAccess);
      }

      if (mynReportObject.LocationAddress) {
        const addressParts = mynReportObject.LocationAddress.split("|");
        onChangeAddress(addressParts[0]);
        onChangeCity(addressParts[1]);
        setValueState(addressParts[2]);
        onChangeZip(addressParts[3]);
      }
    };

    React.useEffect(() => {
      onLoad(); // Call onLoad when the component mounts
    }, []);

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
        setRequiredFields(requiredFieldsList);
        Alert.alert(
          "Validation Error",
          "Please fill in all required fields:\n" + requiredFields.join("\n"),
        );
        return;
      }
      mynReportObject.VisitNumber = valueVisit;
      mynReportObject.RoadAccess = valueRoadCondition;
      mynReportObject.LocationAddress =
        address + "|" + city + "|" + valueState + "|" + zip;
      addVisibleTab("Struct Haz");
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
            title="Validate Anwsers"
            onPress={saveDraft}
          />
        </View>
      </View>
    );
  };

  return <DropdownComponent />;
};

export default MYNReportLocation;
