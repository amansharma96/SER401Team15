import React, { useState, useContext , useEffect} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import HazardReportContext from "./HazardReportsContext";
import GPSInfoComponent from "./components/GPSInfoComponent";
import Button from "../../components/Button";
import { Hazards } from "../../components/dataLists";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";
export default function FirstScreen({ navigation, route }) {
  const [valueHazard, setValueHazard] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { hazardReport, saveHazardReport , isUpdateMode, setUpdateMode} = useContext(HazardReportContext);
  const [id, setId] = useState(null); 
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    const report = route.params?.report;
    console.log("Report", report);
    if (report) {
      setValueHazard(report.ReportType);
      setLat(report.Lat);
      setLong(report.Long);
      setAcc(report.Accuracy);
      setId(report.id)
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
        Lat: lat,
        Long: long,
        Accuracy: acc,
        ReportType: mappedReportType,
        id: isUpdateMode ? id : null,
      });
      console.log(hazardReport)
      navigation.navigate("Notes");
      // console.log('going to notes')
    } else {
     Alert.alert("Please wait for GPS to fetch the location");
    }
  };

  const handleLocationUpdate = (newLocation) => {
    saveHazardReport({
      ...hazardReport,
      Lat: newLocation.coords.latitude,
      Long: newLocation.coords.longitude,
      Accuracy: newLocation.coords.accuracy,
    });
    setLat(newLocation.coords.latitude);
    setLong(newLocation.coords.longitude);
    setAcc(newLocation.coords.accuracy);
    console.log("First screen", hazardReport);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>

      <View style={styles.GPSInfoComponent}>
        <GPSInfoComponent
          hazardReport={hazardReport}
          GPS_FETCHING_TIMEOUT={GPS_FETCHING_TIMEOUT}
          onLocationUpdate={handleLocationUpdate}
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
      <Button onPress={navigateToNextScreen} title="Next" />

      <Button onPress={() => navigation.navigate("MainScreen")} title="Back" />
      <Button
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
