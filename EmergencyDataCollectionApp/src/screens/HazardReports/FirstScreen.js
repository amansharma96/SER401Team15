import React, { useState, useEffect , useContext} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import placeHolderImg from "../../../assets/images/maps.png";
import { Hazards } from "../../components/dataLists";
import useLocationManager from "../../components/LocationManager/LocationManager";
import LocationService from "../../utils/gps/locationService";
import HazardReportContext from './HazardReportsContext'

import Button from "../../components/Button";
export default function FirstScreen({ navigation }) {
  const [valueHazard, setValueHazard] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { hazardReport, saveHazardReport } = useContext(HazardReportContext);
  const navigateToNextScreen = () => {
  const reportTypeMap = {
    1: 'LA',
    2: 'CU',
    3: 'RB',
    4: 'PL',
    5: 'LZ',
    6: 'MP',
    7: 'MF',
    8: 'FZ',
    9: 'HM',
    10: 'QA',
    11: 'SS',
    12: 'VI',
    13: 'PD',
    14: 'SE',
  };

  if (lat !== null && long !== null) {
    const mappedReportType = reportTypeMap[valueHazard];
    saveHazardReport({
      ...hazardReport,
      Lat: lat,
      Long: long,
      Accuracy: acc,
      ReportType: mappedReportType,
    });
 
    
    navigation.navigate('Notes');
    // console.log('going to notes')
  } else {
    // Handle case when lat or long is null
  }
};

  const cancelRequest = () => {
    navigation.popToTop();
    navigation.navigate("MainScreen");
  };
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [acc, setAccuracy] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false); // New state for force update

  const handleRetryGPS = () => {
    getGPS();
    setForceUpdate((prev) => !prev); // Toggle the forceUpdate state to trigger a re-render
  };
  useEffect(() => {
    // Fetch GPS data when the component mounts
    getGPS();
  }, []); // Empty dependency array ensures this effect runs once on mount

  

  const {
    latitude,
    longitude,
    accuracy,
    isFetchingLocation,
    getGPS,
    handleLocationUpdate,
  } = useLocationManager();

  useEffect(() => {
    
    if (latitude !== null && latitude !== undefined) {
      setLat(latitude);
    }
    if (longitude !== null && longitude !== undefined) {
      setLong(longitude);
    }
    if (accuracy !== null && accuracy !== undefined) {
      setAccuracy(accuracy);
    }

    // Add forceUpdate as a dependency to rerender when it changes
  }, [latitude, longitude, accuracy, forceUpdate]);


  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}
        
        </Text>
      </View>
      <View>
      {isFetchingLocation && (
          <LocationService onLocationObtained={handleLocationUpdate} />
        )}
        <Text style={styles.gps}>
         lat : {lat}
         long: : {long}
        </Text>
        {isFetchingLocation && <Text>Fetching GPS data...</Text>}
        {!isFetchingLocation && (
          <Button
            style={styles.bottomButtonContainer}
            title="Re-Try GPS"
            onPress={handleRetryGPS}
          />
        )}
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
      <Button
        onPress={ navigateToNextScreen}
        title="Next"
      />

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
    borderColor :'black',
    borderWidth :1,
    width: "90%",
    // alignItems: 'flex-start',
    textAlign: "center",
    justifyContent: "center",
  },
  btn :{
    width: '100px',
  }
});
