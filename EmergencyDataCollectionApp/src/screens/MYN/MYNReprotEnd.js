import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Button from "../../components/Button";

const MYNReprotEnd = () => {
  const [Notes, onChangeNotes] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);

  const saveFinishedReport = () => {
    //place holder for logic
  };
  const displayReport = () => {
    //place holder for logic
  };

  const imageLogic = () => {
    //place holder for logic
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

  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(!isDatePicker);
  };

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.textAreaContainer}>
        <Text>Notes:</Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Notes"
          placeholderTextColor="grey"
          numberOfLines={20}
          multiline
          textAlignVertical="top"
          textAlign="left"
          onChangeText={onChangeNotes}
          value={Notes}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.bottomButtonContainer}
          title="Upload/take image"
          onPress={imageLogic}
        />
        <Button
          style={styles.bottomButtonContainer}
          title="Review Report"
          onPress={displayReport}
        />
      </View>
      <Text>* are required fields</Text>
      <Button
        style={styles.bottomButtonContainer}
        title="Save Finished Report"
        onPress={saveFinishedReport}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    height: 300,
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    textAlign: "left",
  },
  textAreaContainer: {
    marginTop: 20,
    width: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default MYNReprotEnd;
