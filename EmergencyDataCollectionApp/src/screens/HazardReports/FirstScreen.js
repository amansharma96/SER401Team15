import { useAtomValue } from "jotai";
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import HazardReportContext from "./HazardReportsContext";
import GPSInfoComponent from "./components/GPSInfoComponent";
import CustomButton from "../../components/CustomForms/CustomButton/CustomButton";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";
import { Hazards } from "../../utils/constants/dropdownOptions";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";

export default function FirstScreen({ navigation, route }) {
  const [valueHazard, setValueHazard] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { hazardReport, saveHazardReport, isUpdateMode, setUpdateMode } =
    useContext(HazardReportContext);
  const [id, setId] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [acc, setAcc] = useState(null);

  const latitude = useAtomValue(latitudeAtom);
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom);

  useEffect(() => {
    // Update the state with the new latitude and longitude values
    setLat(latitude);
    setLong(longitude);
    setAcc(accuracy);
    console.log("Latitude in first", latitude);
    console.log("Longitude", longitude);
    console.log("Accuracy", accuracy);
    saveHazardReport({
      ...hazardReport,
      Lat: latitude,
      Long: longitude,
      Accuracy: accuracy,
      id: isUpdateMode ? id : null,
    });
  }, [latitude, longitude, accuracy]);

  useEffect(() => {
    const report = route.params?.report;
    console.log("Report==", report);
    if (report) {
      setValueHazard(report.ReportType);
      setLat(report.Lat);
      setLong(report.Long);
      setAcc(report.Accuracy);
      setId(report.id);
      setUpdateMode(true);
    } else {
      setUpdateMode(false);
    }
  }, [route.params]);
  const navigateToNextScreen = () => {
    const reportTypeMap = {
      1: "LA",
      2: "CU",
      3: "RB",
      4: "PL",
      5: "LZ",
      6: "MP",
      7: "MF",
      8: "FZ",
      9: "HM",
      10: "QA",
      11: "SS",
      12: "VI",
      13: "PD",
      14: "SE",
    };

    if (lat !== null && long !== null) {
      const mappedReportType = reportTypeMap[valueHazard];
      saveHazardReport({
        ...hazardReport,
        Lat: latitude,
        Long: longitude,
        Accuracy: accuracy,
        ReportType: mappedReportType,
        id: isUpdateMode ? id : null,
      });
      console.log(hazardReport);
      navigation.navigate("Notes");
      // console.log('going to notes')
    } else {
      Alert.alert("Please wait for GPS to fetch the location");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>

      <View style={styles.GPSInfoComponent}>
        <GPSInfoComponent
          Report={hazardReport}
          GPS_FETCHING_TIMEOUT={GPS_FETCHING_TIMEOUT}
        />
      </View>

      <Text>What Hazard are you reporting?*</Text>
      <View style={styles.pickerContainer}>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={Hazards}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select the Hazard" : "Select the Hazard"}
          searchPlaceholder="Search..."
          value={valueHazard}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValueHazard(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <CustomButton onPress={navigateToNextScreen} title="Next" />

      <CustomButton
        onPress={() => navigation.navigate("MainScreen")}
        title="Back"
      />
      <CustomButton
        title="Cancel Request"
        onPress={() => navigation.navigate("MainScreen")}
      />
    </View>
  );
}

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
    // alignItems: 'flex-start',
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
