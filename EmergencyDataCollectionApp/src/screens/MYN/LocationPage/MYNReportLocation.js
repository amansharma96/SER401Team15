import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";

import { numberOfVisitOptions, roadConditionOptions } from "./selectOptions";
import Button from "../../../components/Button";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import { useMYNReportContext } from "../../../components/MYNReportContect";
import { States } from "../../../components/dataLists";
import styles from "../styles";

const MYNReportLocation = ({ addVisibleTab }) => {
  const [valueVisit, setValueVisit] = useState(null);
  const [valueRoadCondition, setValueRoadCondition] = useState(null);
  const [address, onChangeAddress] = useState(null);
  const [city, onChangeCity] = useState(null);
  const [valueState, setValueState] = useState(null);
  const [zip, onChangeZip] = useState(null);

  const [isNumberOfVisitSelectInvalid, setIsNumberOfVisitSelectInvalid] =
    useState(false);
  const [isRoadConditionSelectInvalid, setIsRoadConditionSelectInvalid] =
    useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isCityInvalid, setIsCityInvalid] = useState(false);
  const [isStateInvalid, setIsStateInvalid] = useState(false);
  const [isZipInvalid, setIsZipInvalid] = useState(false);

  const handleNumberOfVisitSelectChange = (value) => {
    setValueVisit(value);
    setIsNumberOfVisitSelectInvalid(!value);
  };
  const handleRoadConditionSelectChange = (value) => {
    setValueRoadCondition(value);
    setIsRoadConditionSelectInvalid(!value);
  };
  const handleAddressChange = (value) => {
    onChangeAddress(value);
    setIsAddressInvalid(!value);
  };
  const handleCityChange = (value) => {
    onChangeCity(value);
    setIsCityInvalid(!value);
  };
  const handleStateChange = (value) => {
    setValueState(value);
    setIsStateInvalid(!value);
  };
  const handleZipChange = (value) => {
    onChangeZip(value);
    setIsZipInvalid(!value);
  };

  const mynReportObject = useMYNReportContext();
  /**
   * @description Function to load existing data when the component mounts
   */
  const onLoad = () => {
    // Check if values in mynReportObject are not null before setting the state
    if (mynReportObject.VisitNumber) {
      setValueVisit(mynReportObject.VisitNumber);
    }

    if (mynReportObject.RoadAccess) {
      setValueRoadCondition(mynReportObject.RoadAccess);
    }

    if (mynReportObject.StreetAddress) {
      onChangeAddress(mynReportObject.StreetAddress);
    }
    if (mynReportObject.City) {
      onChangeCity(mynReportObject.City);
    }
    if (mynReportObject.State) {
      setValueState(mynReportObject.State);
    }
    if (mynReportObject.Zip) {
      onChangeZip(mynReportObject.Zip);
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
      setIsNumberOfVisitSelectInvalid(true);
      requiredFieldsList.push("- Is this your first visit to the address?");
    }
    if (!valueRoadCondition) {
      setIsRoadConditionSelectInvalid(true);
      requiredFieldsList.push("- How good is the ROAD access to the location?");
    }
    if (!address) {
      setIsAddressInvalid(true);
      requiredFieldsList.push("- Address");
    }
    if (!city) {
      setIsCityInvalid(true);
      requiredFieldsList.push("- City");
    }
    if (!valueState) {
      setIsStateInvalid(true);
      requiredFieldsList.push("- State");
    }
    if (!zip) {
      setIsZipInvalid(true);
      requiredFieldsList.push("- Zip");
    }
    console.log(requiredFieldsList);

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
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
    addVisibleTab("StructHaz");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>LOCATION</Text>
      <View
        style={{
          flex: 1,
        }}
      >
        <NativeBaseProvider>
          <CustomSelect
            items={numberOfVisitOptions}
            label="Is this your first visit to the address?"
            isInvalid={isNumberOfVisitSelectInvalid}
            errorMessage="Please make a selection!"
            testID="myn-report-location-is-first-visit-select"
            onchange={handleNumberOfVisitSelectChange}
          />
          <CustomSelect
            items={roadConditionOptions}
            label="How good is the ROAD access to the location?"
            isInvalid={isRoadConditionSelectInvalid}
            errorMessage="Please make a selection!"
            testID="myn-report-location-road-condition-select"
            onchange={handleRoadConditionSelectChange}
          />
          <CustomInput
            label="Address"
            placeholder="Enter the address"
            value={address}
            onChangeText={handleAddressChange}
            isInvalid={isAddressInvalid}
            errorMessage="Please enter a valid address."
          />
          <CustomInput
            label="City"
            placeholder="Enter the city"
            value={city}
            onChangeText={handleCityChange}
            isInvalid={isCityInvalid}
            errorMessage="Please enter a valid city."
          />
          <CustomSelect
            items={States}
            label="State"
            isInvalid={isStateInvalid}
            errorMessage="Please make a selection!"
            testID="myn-report-location-state-select"
            onchange={handleStateChange}
            enableFilter
          />
          <CustomInput
            label="Zip"
            placeholder="Enter the zip code"
            value={zip}
            onChangeText={handleZipChange}
            isInvalid={isZipInvalid}
            errorMessage="Please enter a valid zip code."
          />
        </NativeBaseProvider>
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

export default MYNReportLocation;
