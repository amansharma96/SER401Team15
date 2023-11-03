import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Button from "../../components/Button";
import Theme from "../../utils/Theme";

const MYNReportStart = () => {
  const [text, onChangeText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);

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
      <Text>* are required fields</Text>
      <Button
        style={styles.bottomButtonContainer}
        title="Save current draft of report"
        onPress={saveDraft}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 32,
  },
  text: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dateDisplay: {
    borderWidth: 1,
    fontSize: 20,
  },
  bottomButtonContainer: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
});

export default MYNReportStart;
