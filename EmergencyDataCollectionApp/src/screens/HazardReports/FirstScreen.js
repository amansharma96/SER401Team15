import { useAtomValue, useAtom } from "jotai";
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import HazardReportContext from "./HazardReportsContext";
import GPSInfoComponent from "./components/GPSInfoComponent";
import Button from "../../components/Button";
import { Hazards } from "../../components/dataLists";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";
import CustomDateTimePickerComponent from "../../components/CustomForms/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";

import { useNavigation } from "@react-navigation/native";
import NavigationButtons from "./components/NavigationButtons";

import {
  hazardTabsStatusAtom,
  isUpdateModeAtom,
  updateID,
} from "./HazardPageAtoms";

import {
  reportIdAtom,
  updateModeAtom,
  reportTypeAtom,
} from "../../utils/updateAtom";
import { queryReportById } from "../../utils/Database/OfflineSQLiteDB";
export default function FirstScreen({ route }) {
  const navigation = useNavigation();
  const [valueHazard, setValueHazard] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { hazardReport, saveHazardReport, isUpdateMode, setUpdateMode } =
    useContext(HazardReportContext);

  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
   const [updateId] = useAtom(reportIdAtom);
   const [isUpdateModeA, setUpdateModeA] = useAtom(updateModeAtom);


  const [id, setId] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [acc, setAcc] = useState(null);
  const [startTime, setStartTime] = useState(new Date());

  const latitude = useAtomValue(latitudeAtom) || 20;
  const longitude = useAtomValue(longitudeAtom) || 20;
  const accuracy = useAtomValue(accuracyAtom) || 20;
  // const [hazardReportAtomA , setHazardReportAtomA]= useAtom( hazardReportAtom)
  const [fetchedReportInUpdateMode , setFetchedReportInUpdateMode] = useState(null)
  const [triggerRender, setTriggerRender] = useState(0)
  
  
  useEffect(() => {
    console.log('update mode in firstscreen : ', isUpdateModeA.valueOf());
  }, [isUpdateModeA]);


  useEffect(() => {
    if (isUpdateModeA) {
      queryReportById(updateId, setFetchedReportInUpdateMode);
    }
  }, [isUpdateModeA, updateId]);

  useEffect(() => {
    if (fetchedReportInUpdateMode) {
     // console.log('fetched report ', updateId, fetchedReportInUpdateMode);
      saveHazardReport(fetchedReportInUpdateMode.report_data);
      console.log('report ' , hazardReport, 'fetched report ', fetchedReportInUpdateMode.report_data)
    }
  }, [fetchedReportInUpdateMode, updateId]);


  const handleDataTimeChange = (event, selectedDate) => {
    // console.log("handleDataTimeChange called");
    const currentDate = selectedDate || startTime;
    setStartTime(currentDate);
    // console.log(currentDate);
  };

  useEffect(
    () => {
      console.log('update mode in firstscreen : ', updateModeAtom)
      setUpdateMode(isUpdateModeA);

      // console.log('mode :' , isUpdateMode, 'id', updateId)
      isUpdateModeA ? setId(updateId) : setId(null);
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
    },
    [latitude, longitude, accuracy, valueHazard]
  );

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
    console.log("validate", hazardReport);

    const requiredFieldsList = [];
    if (valueHazard === "") {
      requiredFieldsList.push("► 1. Report Type");
    }

    if (hazardReport.report) {
      if (valueHazard === "") {
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
      if (!hazardReport.report.StartTime) {
        requiredFieldsList.push("► 6. start time");
      }
    }

    if (
      requiredFieldsList.length > 0 &&
      hazardTabsStatus.enableDataValidation
    ) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n")
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
        StartTime: startTime || new Date().toISOString(),
      },
    }));

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
