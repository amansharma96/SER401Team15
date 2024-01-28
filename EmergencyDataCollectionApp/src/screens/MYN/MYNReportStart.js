import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useAtomValue } from "jotai";
import { Box, NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import MYN_Header from "./components/MYN_Header";
import { formatDate } from "./components/formatDate";
import { getAccuracyColor } from "./components/getAccuracyColor";
import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";
import StatusCard from "../../utils/gps/components/StatusCard/StatusCard";

const MYNReportStart = ({ addVisibleTab }) => {
  const [mynReport, setMynReport] = useState({
    mynName: "",
    date: null,
    showDatePicker: false,
    isDatePicker: true,
    gps: { lat: null, long: null, acc: null },
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
  }, [mynReportContext]);

  useEffect(() => {
    // Update GPS data
    setMynReport((prev) => ({
      ...prev,
      gps: {
        lat: latitude || prev.gps.lat,
        long: longitude || prev.gps.long,
        acc: accuracy || prev.gps.acc,
      },
    }));
  }, [latitude, longitude, accuracy]);

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || mynReport.date;
    setMynReport((prev) => ({
      ...prev,
      date: currentDate,
      showDatePicker: false,
    }));
  };

  const saveDraft = () => {
    const requiredFieldsList = [];
    if (!mynReport.date) requiredFieldsList.push("- Date and Time");
    if (!mynReport.gps.lat || !mynReport.gps.long || !mynReport.gps.acc)
      requiredFieldsList.push("- GPS Coordinates");
    if (!mynReport.mynName) requiredFieldsList.push("- MYN Group Name");

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
      <View style={styles.Upper}>
        <MYN_Header
            title="MYN Report"
            subtitle="Creating new MYN Report"
        />
        <Text style={styles.text}>On site date and time*:</Text>
        <Text style={styles.dateDisplay}>{formatDate(mynReport.date)}</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Select Date"
            onPress={() =>
              setMynReport((prev) => ({
                ...prev,
                showDatePicker: true,
                isDatePicker: true,
              }))
            }
          />
          <Button
            style={styles.button}
            title="Select Time"
            onPress={() =>
              setMynReport((prev) => ({
                ...prev,
                showDatePicker: true,
                isDatePicker: false,
              }))
            }
          />
        </View>

        {mynReport.showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={mynReport.date}
            mode={mynReport.isDatePicker ? "date" : "time"}
            is24Hour
            display="default"
            onChange={handleDataTimeChange}
          />
        )}

        <View style={styles.gps}>
          <Text style={[getAccuracyColor(mynReport.gps.acc), styles.gpsText]}>
            {`GPS*: ${mynReport.gps.lat || "N/A"}, ${
              mynReport.gps.long || "N/A"
            }
          \nAccuracy: ${mynReport.gps.acc || "N/A"}`}
          </Text>
        </View>
        <NativeBaseProvider>
          <Box>
            <StatusCard timer={GPS_FETCHING_TIMEOUT} />
          </Box>
        </NativeBaseProvider>

        <View style={styles.groupNameInputContainer}>
          <Text style={styles.text}>What is the name of the MYN Group?*</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setMynReport((prev) => ({ ...prev, mynName: text }))
            }
            value={mynReport.mynName}
          />
        </View>
      </View>

      <View style={styles.Lower}>
        <Button
          style={styles.bottomButtonContainer}
          title="Next"
          onPress={saveDraft}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.navigate("MainScreen")}
        />
      </View>
    </View>
  );
};

export default MYNReportStart;
