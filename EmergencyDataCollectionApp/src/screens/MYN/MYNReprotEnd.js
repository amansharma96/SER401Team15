import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";

const MYNReprotEnd = ({ addVisibleTab }) => {
  const [Notes, onChangeNotes] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  //const [isDatePicker, setIsDatePicker] = useState(true);
  const mynReportObject = useMYNReportContext();

  const onLoad = () => {
    if (mynReportObject.FinishTime) {
      setDate(mynReportObject.FinishTime);
    }
    if (mynReportObject.Notes) {
      onChangeNotes(mynReportObject.Notes);
    }
  };

  React.useEffect(() => {
    onLoad();
  }, []);

  /*
  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(true);
  };

  const showTimepicker = () => {
    setShow(true);
    setIsDatePicker(false);
  };
  */
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
      return;
    }
    mynReportObject.FinishTime = date;
    mynReportObject.Notes = Notes;
    addVisibleTab("Review");
  };

  const imageLogic = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log("Permission to access camera roll is required!");
      return;
    }

    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (result.canceled) {
      console.log("User cancelled image picker");
    } else if (result.error) {
      console.log("ImagePicker Error: ", result.error);
    } else {
      const selectedAsset =
        result.assets && result.assets.length > 0 ? result.assets[0] : null;

      if (selectedAsset) {
        const source = { uri: selectedAsset.uri };
        console.log("Selected Image:", source);
      }
    }
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
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            //mode={isDatePicker ? "date" : "time"}
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
