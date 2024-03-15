import { useAtomValue , useAtom} from "jotai";
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import HazardReportContext from "./HazardReportsContext";
import GPSInfoComponent from "./components/GPSInfoComponent";
import Button from "../../components/Button";
import { Hazards } from "../../components/dataLists";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";

import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";



import { useNavigation } from "@react-navigation/native";
import NavigationButtons from "./components/NavigationButtons";


import { hazardTabsStatusAtom, isUpdateModeAtom , updateID} from "./HazardPageAtoms";



export default function FirstScreen({ route }) {

  const navigation = useNavigation()
  const [valueHazard, setValueHazard] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { hazardReport, saveHazardReport, isUpdateMode, setUpdateMode } = useContext(HazardReportContext);
  
  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [isUpdateModeA, setIsUpdateModeA] = useAtom(isUpdateModeAtom);
  const [updateId] = useAtom(updateID);
  
  const [id, setId] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [acc, setAcc] = useState(null);


  const latitude = useAtomValue(latitudeAtom)  ;
  const longitude = useAtomValue(longitudeAtom);
  const accuracy = useAtomValue(accuracyAtom) ;
  // const [hazardReportAtomA , setHazardReportAtomA]= useAtom( hazardReportAtom)



  useEffect(() => {
    setUpdateMode( isUpdateModeA)
    
    // console.log('mode :' , isUpdateMode, 'id', updateId)
    isUpdateModeA ? setId(updateId) : setId(null)
    // Update the state with the new latitude and longitude values
    setLat(latitude);
    setLong(longitude);
    setAcc(accuracy);
    // console.log("Latitude in first", latitude);
    // console.log("Longitude", longitude);
    // console.log("Accuracy", accuracy);
    saveHazardReport({
      ...hazardReport,
      Lat: latitude,
      Long: longitude,
      Accuracy: accuracy,
      id: isUpdateMode ? id : null,
      ReportType: valueHazard,
  
    });
  }, [latitude, longitude, accuracy, valueHazard], isUpdateModeA, updateId);


  useEffect(() => {
    // console.log(route.params)
    const report = hazardReport;
    if (report) {
      // console.log('Received report:', report);
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


  const validateData = () => {
    const requiredFieldsList = [];
    if (hazardReport.report) {
      if (!hazardReport.report.ReportType) {
        requiredFieldsList.push("► 1. Report Type");
      }
     
      if (!hazardReport.report.Lat) {
        requiredFieldsList.push("► 3. Latitude");
      }
      if (!hazardReport.report.Long) {
        requiredFieldsList.push("► 4. Longitude");
      }
      if (!hazardReport.report.Accuracy) {
        requiredFieldsList.push("► 5. Accuracy");
      }
     
    }

    if (requiredFieldsList.length > 0 && hazardTabsStatus.enableDataValidation) {
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

    // Save ReportType, Lat, Long, and Accuracy to hazardReport
    saveHazardReport((prev) => ({
        ...prev,
        report: {
            ...prev.report,
            ReportType: valueHazard,
            Lat: lat,
            Long: long,
            Accuracy: acc,
            StartTime: new Date().toISOString(),
        },
    }));

    const currentTabIndex = hazardTabsStatus.tabIndex;
    setHazardTabsStatus((prev) => ({
      ...prev,
      isFirstPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
  };
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
    
      // console.log(hazardReport);
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
      {/* <Button onPress={navigateToNextScreen} title="Next" />

      <Button onPress={() => navigation.navigate("MainScreen")} title="Back" />
      <Button
        title="Cancel Request"
        onPress={() => navigation.navigate("MainScreen")}
      /> */}
      <NavigationButtons validateData={validateData} />
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
