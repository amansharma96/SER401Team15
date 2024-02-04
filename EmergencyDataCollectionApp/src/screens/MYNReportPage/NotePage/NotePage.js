import DateTimePicker from "@react-native-community/datetimepicker";
import { useSetAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import Button from "../../../components/Button";
import { isNotePageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import styles from "../styles";

const NotePage = ({ navigation }) => {
  const [Notes, onChangeNotes] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);

  const setIsNotePageValidated = useSetAtom(isNotePageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(true);
  };

  const showTimepicker = () => {
    setShow(true);
    setIsDatePicker(false);
  };

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const saveFinishedReport = () => {
    const requiredFieldsList = [];
    if (!date) {
      requiredFieldsList.push("Date");
    }
    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsNotePageValidated(false);
      return;
    }

    setIsNotePageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  const imageLogic = () => {
    // Placeholder for logic
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
        <Text style={styles.textHeader}>FINISH MYN REPORT</Text>
        <Text style={styles.text}>On site date and time*:</Text>
        <Text style={styles.dateDisplay}>{formatDate(date)}</Text>
        <View style={styles.buttonContainer}>
          <View>
            <Button
              style={styles.button}
              title={isDatePicker ? "Select Time" : "Select Date"}
              onPress={isDatePicker ? showTimepicker : showDatepicker}
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
        </View>
      </View>
    </View>
  );
};

export default NotePage;
