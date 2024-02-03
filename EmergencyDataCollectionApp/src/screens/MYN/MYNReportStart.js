import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";

import CustomDateTimePickerComponent from "./components/CustomDateTimePickerComponent";
import GPSInfoComponent from "./components/GPSInfoComponent";
import GroupNameInputComponent from "./components/GroupNameInputComponent";
import MYN_Header from "./components/MYN_Header";
import NavigationButtons from "./components/NavigationButtons";
import styles from "./styles";
import { useReportContext } from "../../components/ReportContext";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";

function MYNReportStart({ navigation }) {
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

  const ReportContext = useReportContext();

  useEffect(() => {
    // Load data on component mount
    //const initialData = ReportContext.getInitialData();
    //if (initialData) {
    //  setReport((prev) => ({ ...prev, ...initialData }));
    //}
  }, []);

  useEffect(() => {
    // Update GPS data
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

  const saveDraft = () => {
    const requiredFieldsList = [];
    if (!Report.startTime) requiredFieldsList.push("- Date and Time");
    if (!Report.lat || !Report.long || !Report.accuracy)
      requiredFieldsList.push("- GPS Coordinates");
    if (!Report.GroupName) requiredFieldsList.push("- MYN Group Name");

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return;
    }

    //ReportContext.updateReportData(Report);
    console.log(Report);
    global.MYNpage1Complete = true;
    handleClick();
  };

  function handleClick() {
    if (global.MYNpage1Complete) {
      navigation.navigate("Loc");
    }
  }

  return (
    <View style={styles.container} testID="MYNstart">
      <MYN_Header title="MYN Report" subtitle="Creating new MYN Report" />
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
      <NavigationButtons saveDraft={saveDraft} />
    </View>
  );
}

export default MYNReportStart;
