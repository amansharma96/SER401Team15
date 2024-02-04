import { useAtomValue, useSetAtom } from "jotai";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";

import HelperText from "./components/HelperText";
import CustomDateTimePickerComponent from "../../../components/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomGPSInfoComponent from "../../../components/CustomGPSInfoComponent/CustomGPSInfoComponent";
import CustomInput from "../../../components/CustomInput/CustomInput";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import { GPS_FETCHING_TIMEOUT } from "../../../utils/constants/GlobalConstants";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../../utils/gps/GPS_Atom";
import {
  isInfoPageValidatedAtom,
  tabIndexAtom,
  startTimeAtom,
} from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

function InfoPage() {
  const [Report, setReport] = useState({
    GroupName: null,
    startTime: new Date(),
    showDatePicker: false,
    isDatePicker: true,
    lat: null,
    long: null,
    accuracy: null,
  });
  const [isGroupNameInvalid, setIsGroupNameInvalid] = useState(false);
  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);
  const setStartTime = useSetAtom(startTimeAtom);

  const setIsInfoPageValidated = useSetAtom(isInfoPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const handleGroupNameChange = (value) => {
    Report.GroupName = value;
    setIsGroupNameInvalid(!value);
  };

  useEffect(() => {
    setReport((prev) => ({
      ...prev,
      lat: latitude || prev.lat,
      long: longitude || prev.long,
      accuracy: accuracy || prev.accuracy,
    }));
  }, [latitude, longitude, accuracy]);

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || Report.startTime;
    setReport((prev) => ({
      ...prev,
      startTime: currentDate,
      showDatePicker: false,
    }));
    setStartTime(currentDate);
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!Report.startTime) requiredFieldsList.push("- Date and Time");
    if (!Report.lat || !Report.long || !Report.accuracy)
      requiredFieldsList.push("- GPS Coordinates");
    if (!Report.GroupName) {
      setIsGroupNameInvalid(true);
      requiredFieldsList.push("- MYN Group Name");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsInfoPageValidated(false);
      return;
    }

    setIsInfoPageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  return (
    <NativeBaseProvider>
      <LineSeparator />
      <HelperText />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
      >
        <ScrollView>
          <CustomDateTimePickerComponent
            Report={Report}
            setReport={setReport}
            handleDataTimeChange={handleDataTimeChange}
          />
          <CustomGPSInfoComponent
            Report={Report}
            GPS_FETCHING_TIMEOUT={GPS_FETCHING_TIMEOUT}
          />
          <CustomInput
            label="What is the name of the MYN Group?"
            placeholder="Enter MYN Group Name"
            value={Report.GroupName}
            onChangeText={handleGroupNameChange}
            isInvalid={isGroupNameInvalid}
            errorMessage="Please enter MYN Group Name"
            testID="myn-report-info-page-group-name-input"
            formControlProps={{
              paddingTop: 3,
            }}
          />
        </ScrollView>
        <NavigationButtons validateData={validateData} />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}

export default InfoPage;
