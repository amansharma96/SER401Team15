import { useAtom, useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";

import { StateOptions } from "./components/selectOptions";
import CustomGPSInfoComponent from "../../../components/CustomGPSInfoComponent/CustomGPSInfoComponent";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../../utils/gps/GPS_Atom";
import { certReportAtom, certTabsStatusAtom } from "../CERTPageAtoms";
import NavigationButtons from "../components/NavigationButtons";
import { StructureType, StructureCondition } from "../selectOptions";

const LocationPage = () => {
  const [certReport, setCERTReport] = useAtom(certReportAtom);
  const [certTabsStatus, setCERTTabsStatus] = useAtom(certTabsStatusAtom);

  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isCityInvalid, setIsCityInvalid] = useState(false);
  const [isStateInvalid, setIsStateInvalid] = useState(false);
  const [isZipInvalid, setIsZipInvalid] = useState(false);
  const [isStructureTypeInvalid, setIsStructureTypeInvalid] = useState(false);
  const [isStructureConditionInvalid, setIsStructureConditionInvalid] =
    useState(false);

  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);

  const resetLatitude = useResetAtom(latitudeAtom);
  const resetLongitude = useResetAtom(longitudeAtom);
  const resetAccuracy = useResetAtom(accuracyAtom);

  const handleAddressChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        address: value,
      },
    }));
    setIsAddressInvalid(!value);
  };
  const handleCityChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        city: value,
      },
    }));
    setIsCityInvalid(!value);
  };
  const handleStateChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        state: value,
      },
    }));
    setIsStateInvalid(!value);
  };
  const handleZipChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        zip: value,
      },
    }));
    setIsZipInvalid(!value);
  };
  const handleStructureTypeChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        structureType: value,
      },
    }));
    setIsStructureTypeInvalid(!value);
  };
  const handleStructureConditionChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        structureCondition: value,
      },
    }));
    setIsStructureConditionInvalid(!value);
  };

  useEffect(() => {
    if (
      accuracy < certReport.location.accuracy ||
      certReport.location.accuracy === 100
    ) {
      setCERTReport((prev) => ({
        ...prev,
        info: {
          ...prev.info,
          latitude,
          longitude,
          accuracy,
        },
      }));
    }
    resetLatitude();
    resetLongitude();
    resetAccuracy();
  }, [latitude, longitude, accuracy]);

  const validateData = () => {
    const requiredFieldsList = [];
    //if (!certReport.location.latitude || !certReport.location.longitude)
    // requiredFieldsList.push("► 1. GPS Coordinates");
    if (!certReport.location.address) {
      setIsAddressInvalid(true);
      requiredFieldsList.push("► 2. Address");
    }
    if (!certReport.location.city) {
      setIsCityInvalid(true);
      requiredFieldsList.push("► 3. City");
    }
    if (!certReport.location.state) {
      setIsStateInvalid(true);
      requiredFieldsList.push("► 4. State");
    }
    if (!certReport.location.zip) {
      setIsZipInvalid(true);
      requiredFieldsList.push("► 5. Zip");
    }

    if (requiredFieldsList.length > 0 && certTabsStatus.enableDataValidation) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setCERTTabsStatus((prev) => ({
        ...prev,
        isLocationPageValidated: false,
      }));
      return;
    }

    const currentTabIndex = certTabsStatus.tabIndex;
    setCERTTabsStatus((prev) => ({
      ...prev,
      isLocationPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
  };

  return (
    <NativeBaseProvider>
      <LineSeparator />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
      >
        <ScrollView>
          <CustomGPSInfoComponent
            title="1. Fetch GPS by clicking the button below"
            latitude={certReport.location.latitude}
            longitude={certReport.location.longitude}
            accuracy={certReport.location.accuracy}
            isRequired
          />
          <CustomInput
            label="2. Address"
            placeholder="Enter the address"
            value={certReport.location.address}
            onChangeText={handleAddressChange}
            isInvalid={isAddressInvalid}
            errorMessage="Please enter a valid address."
            testID="cert-report-location-page-address-input"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomInput
            label="3. City"
            placeholder="Enter the city"
            value={certReport.location.city}
            onChangeText={handleCityChange}
            isInvalid={isCityInvalid}
            errorMessage="Please enter a valid city."
            testID="cert-report-location-page-city-input"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={StateOptions}
            label="4. State"
            selectedValue={certReport.location.state}
            isInvalid={isStateInvalid}
            onChange={handleStateChange}
            errorMessage="Please make a selection!"
            testID="cert-report-location-page-state-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          {/* TODO - implement Zip code validation */}
          <CustomInput
            label="5. Zip"
            placeholder="Enter the zip code"
            value={certReport.location.zip}
            onChangeText={handleZipChange}
            isInvalid={isZipInvalid}
            errorMessage="Please enter a valid zip code."
            testID="cert-report-location-page-zip-input"
            formControlProps={{
              paddingBottom: 10,
            }}
          />
          <CustomSelect
            items={StructureType}
            label="6. What type of structure is it?"
            onChange={handleStructureTypeChange}
            isInvalid={isStructureTypeInvalid}
            testID="cert-report-hazard-page-structure-type-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={StructureCondition}
            label="7. What is the structure's condition?"
            onChange={handleStructureConditionChange}
            isInvalid={isStructureConditionInvalid}
            testID="cert-report-hazard-page-structure-condition-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
        </ScrollView>
        <NavigationButtons validateData={validateData} />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default LocationPage;
