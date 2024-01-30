/**
 * @module MYNReportStart
 * @description React component for collecting the initial information for the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} Rendered component.
 */
// React and React Native imports
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

// Custom styles and components
import styles from "./styles";
import Button from "../../components/Button";
import useLocationManager from "../../components/LocationManager/LocationManager";
import { useMYNReportContext } from "../../components/MYNReportContect";
import LocationService from "../../utils/gps/locationService";

/**
 * @function MYNReportStart
 * @description React component for collecting the initial information for the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */
const MYNReportStart = ({ navigation }) => {
  const [mynName, onChangeText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [acc, setAccuracy] = useState(null);

  /**
   * @description Function to get the accuracy color based on the accuracy value
   */
  const getAccuracyColor = () => {
    if (acc !== null && !isNaN(acc)) {
      if (acc < 5) {
        return styles.accuracyGreen;
      } else if (acc >= 5 && acc <= 10) {
        return styles.accuracyYellow;
      } else {
        return styles.accuracyRed;
      }
    } else {
      return styles.accuracyBlack;
    }
  };

  const {
    latitude,
    longitude,
    accuracy,
    isFetchingLocation,
    getGPS,
    handleLocationUpdate,
  } = useLocationManager();

  const mynReportObject = useMYNReportContext();
  /**
   * @description Function to load existing data when the component mounts
   */
  const onLoad = () => {
    global.MYNpage1Active = true;
    global.MYNpage2Active = false;
    global.MYNpage3Active = false;
    global.MYNpage4Active = false;
    global.MYNpage5Active = false;
    global.MYNpage6Active = false;
    global.MYNpage7Active = false;
    // Check if values in mynReportObject are not null before setting the state
    if (mynReportObject.StartTime) {
      // existing start time is string
      setDate(new Date(mynReportObject.StartTime));
    }
    if (mynReportObject.MYNGroupName) {
      onChangeText(mynReportObject.MYNGroupName);
    }
    if (mynReportObject.Lat) {
      setLat(mynReportObject.Lat);
    }
    if (mynReportObject.Long) {
      setLong(mynReportObject.Long);
    }
    if (mynReportObject.Accuracy) {
      setAccuracy(mynReportObject.Accuracy);
    }
  };
  // Load data on component mount
  React.useEffect(() => {
    onLoad();
  }, []);
  /**
   * @description Function to save the current draft of the MYN report and navigate to the next tab
   */
  const saveDraft = () => {
    // Check for required fields
    console.log("inside save");
    const requiredFieldsList = [];

    if (!date) {
      requiredFieldsList.push("date");
    }

    /* if ((!latitude || !longitude) && (!lat || !long)) {
      requiredFieldsList.push("GPS");
    } */

    if (!mynName) {
      requiredFieldsList.push("MYN Group Name");
    }

    // If any required field is empty, show an alert and return without saving
    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return;
    }

    // All required fields are filled, proceed to save
    mynReportObject.StartTime = date.toISOString();
    mynReportObject.Lat = latitude;
    mynReportObject.Long = longitude;
    mynReportObject.Accuracy = accuracy;
    mynReportObject.MYNGroupName = mynName;
    global.MYNpage2Complete = true;
    console.log(mynReportObject);
    if (global.MYNpage2Complete) {
      navigation.navigate("Loc");
    }
  };
  /**
   *@description Function to handle the retry of fetching GPS data
   */
  const handleRetryGPS = () => {
    getGPS();
  };

  // TODO I think this is preventing going to next screen somehow?
  // when data already exists, latitude and longitute vars are not needed at all
  /* React.useEffect(() => {
    if (latitude !== null) {
      setLat(latitude);
    }
    if (longitude !== null) {
      setLong(longitude);
    }
    if (accuracy !== null) {
      setAccuracy(accuracy);
    }
  }, [latitude, longitude, accuracy]);

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  /**
   * @description Function to format the date for display
   * @param {Date} date - Date object
   * @returns {string} - Formatted date string
   */
  const formatDate = (date) => {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  };
  return (
    <View style={styles.container} testID="MYNstart">
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>MYN REPORT</Text>
        <Text style={styles.text}>On site date and time*:</Text>
        <Text style={styles.dateDisplay}>{formatDate(date)}</Text>
        <Text />
        {isFetchingLocation && (
          <LocationService onLocationObtained={handleLocationUpdate} />
        )}
        <Text style={[styles.gps, getAccuracyColor()]}>
          {`GPS*: ${lat !== null ? lat : "Not available"}, ${
            long !== null ? long : "Not available"
          }\n Accuracy: ${
            acc !== null ? acc.toFixed(2) + " meters" : "Not available"
          }`}
        </Text>
        <Text style={[styles.textSmall, styles.accuracyGreen]}>
          *Green means accuracy less then 5 meters*
        </Text>
        <Text style={[styles.textSmall, styles.accuracyYellow]}>
          *Yellow means accuracy 5 and 10 meters*
        </Text>
        <Text style={[styles.textSmall, styles.accuracyRed]}>
          *red means accuracy greater then 10 meters*
        </Text>
        {isFetchingLocation && <Text>Fetching GPS data...</Text>}
        {!isFetchingLocation && (
          <Button
            style={styles.bottomButtonContainer}
            title="Re-Try GPS"
            onPress={handleRetryGPS}
          />
        )}

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour
            display="default"
            onChange={handleConfirm}
          />
        )}
        <Text style={styles.text}>What is the name of the MYN Group?*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={mynName}
        />
      </View>
      <View style={styles.Lower}>
        <Text>* are required fields</Text>
        <Button
          style={styles.bottomButtonContainer}
          title="Next"
          onPress={() => saveDraft()}
        />
        <Button
          title="Return To main menu"
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        />
      </View>
    </View>
  );
};

export default MYNReportStart;
