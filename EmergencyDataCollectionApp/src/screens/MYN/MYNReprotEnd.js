/**
 * @function MYNReprotEnd
 * @description React component for collecting the final miscellaneous information for the MYN report.
 * @param {Object} props - React props passed to the component.
 * @param {function} props.addVisibleTab - Function to add a tab to the list of visible tabs in the parent navigation component.
 * @returns {JSX.Element} - Rendered component.
 */

import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";

const MYNReprotEnd = ({ navigation }) => {
  const [Notes, onChangeNotes] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); // Added state for selected images
  const mynReportObject = useMYNReportContext();
  /**
   * @description Function to load existing data when the component mounts
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
   * @description Function to handle the confirmation of the date or time picker
   * @param {Object} event - Event object
   * @param {Date} selectedDate - Selected date
   */
  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  /**
   * @description Function to save the finished MYN report and navigate to the next tab
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
    global.MYNpage7Complete = true;
    console.log(mynReportObject);
    if (global.MYNpage7Complete) {
      navigation.navigate("Review");
    }
  };

  /**
   * @description Logic for handling image selection
   */
  const imageLogic = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log("Permission to access camera roll is required!");
      return;
    }

    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: true, // Allow multiple image selection
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.canceled) {
      const selectedAssets = result.assets;
      const newSelectedImages = selectedAssets.map((asset) => ({
        uri: asset.uri,
        fileName: asset.fileName,
      }));
      setSelectedImages([...selectedImages, ...newSelectedImages]);
    }
  };

  /**
   * @description Function to remove a selected image
   * @param {number} index - Index of the image to be removed
   */
  const removeImage = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages.splice(index, 1);
    setSelectedImages(newSelectedImages);
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
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>FINISH MYN REPORT</Text>
        <Text style={styles.text}>On site date and time*:</Text>
        <Text style={styles.dateDisplay}>{formatDate(date)}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
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
        <Button
          style={styles.bottomButtonContainer}
          title="Upload/take image"
          onPress={imageLogic}
        />
        <View style={styles.imageContainer}>
          {selectedImages.length > 0 && (
            <FlatList
              data={selectedImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => removeImage(index)}>
                  <View style={styles.imageItem}>
                    <Image source={{ uri: item.uri }} style={styles.image} />
                    <Text>{item.fileName}</Text>
                  </View>
                </TouchableOpacity>
              )}
              numColumns={4}
            />
          )}
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
