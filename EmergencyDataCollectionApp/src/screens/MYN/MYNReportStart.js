import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import { IDContext } from "../../components/IDContext";

const MYNReportStart = () => {
  const [text, onChangeText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);
  const {setID} = useContext(IDContext);

  const [latitude, setLatitude] = useState(41.40338);
  const [longitude, setLongitude] = useState(2.17403);

  useEffect(() => {
    // Logic to generate ID and set it
    const generatedID = "22";
    setID(generatedID);
  }, [setID]);

  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(!isDatePicker);
  };

  const saveDraft = () => {
    //place holder for logic
  };

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const getGPS = () => {
    //place holder for logic
    setLatitude(42.40338);
    setLongitude(3.17403);
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
        <Text style={styles.gps}>{`GPS*: ${latitude}, ${longitude}.`}</Text>
        <Button
          style={styles.bottomButtonContainer}
          title="Re-Try GPS"
          onPress={getGPS}
        />
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
          value={text}
        />
      </View>
      <View style={styles.Lower}>
        <Text>* are required fields</Text>
        <Button
          style={styles.bottomButtonContainer}
          title="Save current draft of report"
          onPress={saveDraft}
        />
      </View>
    </View>
  );
};

export default MYNReportStart;
