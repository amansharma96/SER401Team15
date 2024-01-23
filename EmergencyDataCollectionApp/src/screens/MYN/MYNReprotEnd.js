/**
 * @module MYNReprotEnd
 * @description React component for collecting the final miscellaneous information for the MYN report.
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
import { useMYNReportContext } from "../../components/MYNReportContect";

/**
 * @function MYNReprotEnd
 * @description React component for collecting the final miscellaneous information for the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */
const MYNReprotEnd = ({ addVisibleTab }) => {
  const [Notes, onChangeNotes] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);
  const mynReportObject = useMYNReportContext();

  /**
   *@description Function to load existing data when the component mounts
   */
  const onLoad = () => {
    if (mynReportObject.FinishTime) {
      setDate(mynReportObject.FinishTime);
    }
    if (mynReportObject.Notes) {
      onChangeNotes(mynReportObject.Notes);
    }
  };
  // Load data on component mount
  React.useEffect(() => {
    onLoad();
  }, []);
  /**
   *@description Function to display the date or time picker based on the current mode
   */
  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(true);
  };
  /**
   *@description Function to display the time picker
   */
  const showTimepicker = () => {
    setShow(true);
    setIsDatePicker(false);
  };
  /**
   *@description Function to handle the confirmation of the date or time picker
   * @param {Object} event - Event object
   * @param {Date} selectedDate - Selected date
   */
  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  /**
   *@description Function to save the finished MYN report and navigate to the next tab
   */
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
      return;
    }
    mynReportObject.FinishTime = date;
    mynReportObject.Notes = Notes;
    addVisibleTab("Review");
  };
  /**
   *@description Placeholder for image upload/take logic
   */
  const imageLogic = () => {
    // Placeholder for logic
  };
  /**
   *@description Function to format the date for display
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
      <View style={styles.Lower}>
        <Text>* are required fields</Text>
        <Button
          style={styles.bottomButtonContainer}
          title="Next"
          onPress={saveFinishedReport}
        />
      </View>
    </View>
  );
};

export default MYNReprotEnd;
