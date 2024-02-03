import { useNavigation } from "@react-navigation/native";
import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";

import CustomDateTimePickerComponent from "./components/CustomDateTimePickerComponent";
import GPSInfoComponent from "./components/GPSInfoComponent";
import GroupNameInputComponent from "./components/GroupNameInputComponent";
import MYN_Header from "./components/MYN_Header";
import NavigationButtons from "./components/NavigationButtons";
import { useMYNReportContext } from "../../../components/MYNReportContect";
import { GPS_FETCHING_TIMEOUT } from "../../../utils/constants/GlobalConstants";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../../utils/gps/GPS_Atom";
import styles from "../styles";

const MYNReportStart = ({ addVisibleTab }) => {
  const [mynReport, setMynReport] = useState({
    mynGroupName: "",
    startTime: null,
    showDatePicker: false,
    isDatePicker: true,
    lat: null,
    long: null,
    accuracy: null,
  });

  const navigation = useNavigation();
  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);

  const mynReportContext = useMYNReportContext();

  useEffect(() => {
    // Load data on component mount
    const initialData = mynReportContext.getInitialData();
    if (initialData) {
      setMynReport((prev) => ({ ...prev, ...initialData }));
    }
  }, []);

  useEffect(() => {
    // Update GPS data
    setMynReport((prev) => ({
      ...prev,
      lat: latitude || prev.lat,
      long: longitude || prev.long,
      accuracy: accuracy || prev.accuracy,
    }));
  }, [latitude, longitude, accuracy]);

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || mynReport.startTime;
    setMynReport((prev) => ({
      ...prev,
      startTime: currentDate,
      showDatePicker: false,
    }));
  };

  const saveDraft = () => {
    const requiredFieldsList = [];
    if (!mynReport.startTime) requiredFieldsList.push("- Date and Time");
    if (!mynReport.lat || !mynReport.long || !mynReport.accuracy)
      requiredFieldsList.push("- GPS Coordinates");
    if (!mynReport.mynGroupName) requiredFieldsList.push("- MYN Group Name");

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return;
    }

    mynReportContext.updateReportData(mynReport);
    console.log(mynReport);
    addVisibleTab("Loc");
  };

  return (
    <View style={styles.container} testID="MYNstart">
      <MYN_Header title="MYN Report" subtitle="Creating new MYN Report" />
      <View style={styles.Upper}>
        <CustomDateTimePickerComponent
          mynReport={mynReport}
          setMynReport={setMynReport}
          handleDataTimeChange={handleDataTimeChange}
        />
        <GPSInfoComponent
          mynReport={mynReport}
          GPS_FETCHING_TIMEOUT={GPS_FETCHING_TIMEOUT}
        />
        <GroupNameInputComponent
          mynGroupName={mynReport.mynGroupName}
          onGroupNameChange={(text) =>
            setMynReport((prev) => ({ ...prev, mynGroupName: text }))
          }
        />
      </View>
      <NavigationButtons saveDraft={saveDraft} navigation={navigation} />
    </View>
  );
};

export default MYNReportStart;
