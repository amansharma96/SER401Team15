import { useAtomValue, useSetAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";

import CustomDateTimePickerComponent from "./components/CustomDateTimePickerComponent";
import GPSInfoComponent from "./components/GPSInfoComponent";
import GroupNameInputComponent from "./components/GroupNameInputComponent";
import NavigationButtons from "./components/NavigationButtons";
import { GPS_FETCHING_TIMEOUT } from "../../../utils/constants/GlobalConstants";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../../utils/gps/GPS_Atom";
import {isInfoPageValidatedAtom, tabIndexAtom} from "../MYNPageAtoms";
import styles from "../styles";

function InfoPage() {
  const [Report, setReport] = useState({
    GroupName: "",
    startTime: null,
    showDatePicker: false,
    isDatePicker: true,
    lat: null,
    long: null,
    accuracy: null,
  });
  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);

  const setIsInfoPageValidated = useSetAtom(isInfoPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom)
  const setTabIndex = useSetAtom(tabIndexAtom)

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
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!Report.startTime) requiredFieldsList.push("- Date and Time");
    if (!Report.lat || !Report.long || !Report.accuracy)
      requiredFieldsList.push("- GPS Coordinates");
    if (!Report.GroupName)
      requiredFieldsList.push("- MYNReportPage Group Name");

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsInfoPageValidated(false);
      return;
    }

    setIsInfoPageValidated(true);
    setTabIndex(tabIndex + 1)
  };

  return (
    <View style={styles.container} testID="MYNstart">
      <View style={styles.separator} />
      <View style={styles.Upper}>
        <CustomDateTimePickerComponent
          Report={Report}
          setReport={setReport}
          handleDataTimeChange={handleDataTimeChange}
        />
        <GPSInfoComponent
          Report={Report}
          GPS_FETCHING_TIMEOUT={GPS_FETCHING_TIMEOUT}
        />
        <GroupNameInputComponent
          GroupName={Report.GroupName}
          onGroupNameChange={(text) =>
            setReport((prev) => ({ ...prev, GroupName: text }))
          }
        />
      </View>
      <NavigationButtons validateData={validateData} />
    </View>
  );
}

export default InfoPage;
