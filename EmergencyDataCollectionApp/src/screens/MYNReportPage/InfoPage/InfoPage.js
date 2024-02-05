import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";

import HelperText from "./components/HelperText";
import CustomDateTimePickerComponent from "../../../components/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomGPSInfoComponent from "../../../components/CustomGPSInfoComponent/CustomGPSInfoComponent";
import CustomInput from "../../../components/CustomInput/CustomInput";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../../utils/gps/GPS_Atom";
import {
  isInfoPageValidatedAtom,
  tabIndexAtom,
  startTimeAtom,
  mynReportAtom,
} from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

function InfoPage() {
  const [mynReport, setMynReport] = useAtom(mynReportAtom);
  const resetMynReport = useResetAtom(mynReportAtom);
  useEffect(() => {
    resetMynReport();
  }, []);

  const [isGroupNameInvalid, setIsGroupNameInvalid] = useState(false);
  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);
  const setStartTime = useSetAtom(startTimeAtom);

  const resetLatitude = useResetAtom(latitudeAtom);
  const resetLongitude = useResetAtom(longitudeAtom);
  const resetAccuracy = useResetAtom(accuracyAtom);

  const setIsInfoPageValidated = useSetAtom(isInfoPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  // useEffect(() => {
  //   const loadUserData = async () => {
  //     try {
  //       const userDataJSON = await AsyncStorage.getItem("userData");
  //       const userData = JSON.parse(userDataJSON);
  //       if (userData) {
  //         if (userData.groupName && userData.groupName !== "") {
  //           handleGroupNameChange(userData.groupName);
  //         }
  //       }
  //     } catch {}
  //   };
  //   loadUserData();
  // }, []);

  const handleGroupNameChange = (value) => {
    setMynReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        groupName: value,
      },
    }));
    setIsGroupNameInvalid(!value);
  };

  useEffect(() => {
    if (accuracy < mynReport.info.accuracy || mynReport.info.accuracy === 100) {
      setMynReport((prev) => ({
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

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || mynReport.info.startTime;
    setMynReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        startTime: currentDate,
      },
    }));
    setStartTime(selectedDate);
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!mynReport.info.startTime)
      requiredFieldsList.push("► 1. Date and Time");
    if (!mynReport.info.latitude || !mynReport.info.longitude)
      requiredFieldsList.push("► 2. GPS Coordinates");
    if (mynReport.info.groupName === "") {
      setIsGroupNameInvalid(true);
      requiredFieldsList.push("► 3. MYN Group Name");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsInfoPageValidated(false);
      return;
    }

    setStartTime(mynReport.info.startTime);
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
            title="1. Select the date and time of the report"
            value={mynReport.info.startTime}
            handleDataTimeChange={handleDataTimeChange}
            isRequired
          />
          <CustomGPSInfoComponent
            title="2. Fetch GPS by clicking the button below*"
            latitude={mynReport.info.latitude}
            longitude={mynReport.info.longitude}
            accuracy={mynReport.info.accuracy}
          />
          <CustomInput
            label="3. What is the name of the MYN Group?"
            placeholder="Enter MYN Group Name"
            value={mynReport.info.groupName}
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
