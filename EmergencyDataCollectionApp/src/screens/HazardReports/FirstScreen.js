import { useAtomValue, useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { hazardReportAtom, hazardTabsStatusAtom } from "./HazardPageAtoms";
import NavigationButtons from "./components/NavigationButtons";
import { hazardTypeOptions } from "./components/selectOptions";
import CustomGPSInfoComponent from "../../components/CustomFeedback/CustomGPSInfoComponent/CustomGPSInfoComponent";
import CustomDateTimePickerComponent from "../../components/CustomForms/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomSelect from "../../components/CustomForms/NativeBase/CustomSelect/CustomSelect";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";

function FirstScreen() {
  const [hazardReport, setHazardReport] = useAtom(hazardReportAtom);

  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [startTime, setStartTime] = useState(new Date());
  const [isHazardTypeValid, setIsHazardTypeValid] = useState(false);

  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);
  const resetLatitude = useResetAtom(latitudeAtom);
  const resetLongitude = useResetAtom(longitudeAtom);
  const resetAccuracy = useResetAtom(accuracyAtom);

  useEffect(() => {
    if (
      accuracy < hazardReport.info.accuracy ||
      hazardReport.info.accuracy === 100
    ) {
      setHazardReport((prev) => ({
        ...prev,
        location: {
          ...prev.location,
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
    console.log("handleDataTimeChange called");
    const currentDate = selectedDate || startTime;
    setStartTime(currentDate);
    console.log(currentDate);
  };
  const handleHazardTypeChange = (value) => {
    setHazardReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        hazardType: value,
      },
    }));
    setIsHazardTypeValid(!value);
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (hazardReport.info.hazardType === "") {
      setIsHazardTypeValid(true);
      requiredFieldsList.push("► 1. Hazard Type");
    }

    //if (!hazardReport.location.latitude) {
    //  requiredFieldsList.push("► 3. Latitude");
    //}
    //if (!hazardReport.location.lonmgitude) {
    //  requiredFieldsList.push("► 4. Longitude");
    //}
    //if (!hazardReport.location.accuracy) {
    //  requiredFieldsList.push("► 5. Accuracy");
    //}
    if (!hazardReport.info.startTime) {
      requiredFieldsList.push("► 2. Start Time");
    }

    if (
      requiredFieldsList.length > 0 &&
      hazardTabsStatus.enableDataValidation
    ) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setHazardTabsStatus((prev) => ({
        ...prev,
        isFirstPageValidated: false,
      }));
      return;
    }

    if (hazardReport.info.hash === 0) {
      // Generate hash between 100000000 and 999999999
      const min = 100000000;
      const max = 999999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      hazardReport.info.hash = randomNumber;
    } else {
      hazardReport.info.reportID =
        hazardReport.info.reportType + "_" + hazardReport.info.hash;
    }

    const currentTabIndex = hazardTabsStatus.tabIndex;
    setHazardTabsStatus((prev) => ({
      ...prev,
      isFirstPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
  };

  return (
    <View style={styles.container}>
      <CustomDateTimePickerComponent
        title=" Select the date and time of the report"
        value={startTime}
        handleDataTimeChange={handleDataTimeChange}
        isRequired
      />

      <View style={styles.GPSInfoComponent}>
        <CustomGPSInfoComponent
          title="1. Fetch GPS by clicking the button below"
          latitude={hazardReport.info.latitude}
          longitude={hazardReport.info.longitude}
          accuracy={hazardReport.info.accuracy}
          isRequired
        />
      </View>

      <Text>What type of Hazard are you reporting?*</Text>
      <View style={styles.pickerContainer}>
        <CustomSelect
          items={hazardTypeOptions}
          label="3. What type of Hazard are you reporting?*"
          onChange={handleHazardTypeChange}
          isInvalid={isHazardTypeValid}
          formControlProps={{
            paddingBottom: 3,
          }}
        />
      </View>
      <NavigationButtons validateData={validateData} />
    </View>
  );
}

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    textAlign: "center",
    justifyContent: "center",
  },
  btn: {
    width: "100px",
  },
  GPSInfoComponent: {
    maxHeight: 300,
  },
});
