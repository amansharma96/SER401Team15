import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
import LocationService from "../../utils/gps/locationService";

const MYNReportStart = ({ addVisibleTab }) => {
  const [mynName, onChangeText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const getGPS = () => {
    setLatitude(null);
    setLongitude(null);
    setTimeout(() => {
      setIsFetchingLocation(true);
    }, 100);
  };
  const handleLocationUpdate = (location) => {
    if (!location || !location.coords) {
      const errorMessage = location?.error || "Failed to fetch location";
      Alert.alert("Location Error: ", errorMessage);
      setIsFetchingLocation(false);
      return;
    }
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    if (location.coords.accuracy > 30) {
      Alert.alert(
        "Location Warning: ",
        "Location accuracy is greater than 30 meters. The data may be less precise.",
      );
    }
    setIsFetchingLocation(false);
  };

  const mynReportObject = useMYNReportContext();
  const onLoad = () => {
    // Check if values in mynReportObject are not null before setting the state
    if (mynReportObject.StartTime) {
      setDate(mynReportObject.StartTime);
    }

    if (mynReportObject.Lat) {
      setLatitude(mynReportObject.Lat);
    }

    if (mynReportObject.Long) {
      setLongitude(mynReportObject.Long);
    }

    if (mynReportObject.MYNGroupName) {
      onChangeText(mynReportObject.MYNGroupName);
    }
  };
  React.useEffect(() => {
    onLoad();
  }, []);
  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(!isDatePicker);
  };

  const saveDraft = () => {
    // Check for required fields
    const requiredFieldsList = [];

    if (!date) {
      requiredFieldsList.push("date");
    }

    if (!latitude || !longitude) {
      requiredFieldsList.push("GPS");
    }

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
    mynReportObject.StartTime = date;
    mynReportObject.Lat = latitude;
    mynReportObject.Long = longitude;
    mynReportObject.MYNGroupName = mynName;
    addVisibleTab("Loc");
  };
  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

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
    <View style={styles.container}>
      {isFetchingLocation && (
        <LocationService onLocationObtained={handleLocationUpdate} />
      )}
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>MYN REPORT</Text>
        <Text style={styles.text}>On site date and time*:</Text>
        <Text style={styles.dateDisplay}>{formatDate(date)}</Text>
        <View style={styles.buttonContainer}>
          <View>
            <Button
              style={styles.button}
              title="Select Time"
              onPress={showDatepicker}
            />
          </View>
          <View>
            <Button
              style={styles.button}
              title="Select Date"
              onPress={showDatepicker}
            />
          </View>
        </View>

        <Text style={styles.gps}>
          {`GPS*: ${latitude !== null ? latitude : "Not available"}, ${
            longitude !== null ? longitude : "Not available"
          }`}
        </Text>
        {isFetchingLocation && <Text>Fetching GPS data...</Text>}
        {!isFetchingLocation && (
          <Button
            style={styles.bottomButtonContainer}
            title="Re-Try GPS"
            onPress={getGPS}
          />
        )}

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={isDatePicker ? "date" : "time"}
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
          title="Validate Anwsers"
          onPress={saveDraft}
        />
      </View>
    </View>
  );
};

export default MYNReportStart;
