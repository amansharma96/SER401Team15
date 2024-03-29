import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useAtom } from "jotai";
import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { hazardReportAtom, hazardTabsStatusAtom } from "./HazardPageAtoms";
import HazardReportContext from "./HazardReportsContext";
import NavigationButtons from "./components/NavigationButtons";
import CustomButton from "../../components/CustomForms/CustomButton/CustomButton";
import CustomDateTimePickerComponent from "../../components/CustomForms/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomTextArea from "../../components/CustomForms/NativeBase/CustomTextArea/CustomTextArea";
import Theme from "../../utils/Theme";

export default function SecondScreen() {
  const [ hazardReport, setHazardReport ] = useAtom(hazardReportAtom);
  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [inputText, setInputText] = useState("");
  const [endTime, setEndTime] = useState(new Date());

  const handleEndTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || hazardReport.report.EndTime;
    setHazardReport((prev) => ({
      ...prev,
      report: {
        ...prev.report,
        EndTime: currentDate,
      },
    }));
  };

  const handleNotesChange = (value) => {
    setHazardReport((prev) => ({
      ...prev,
      note: {
        Notes: value,
      },
    }));
  };

  const getPermissionAsync = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permissions are required");
    }
  };

  const takePicture = async () => {
    await getPermissionAsync();
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.cancelled) {
      const name =
        hazardReport.report.hash +
        "_" +
        hazardReport.hazardPicture.number +
        ".jpeg";
      const path = result.uri.substring(0, result.uri.lastIndexOf("/") + 1);
      result.assets[0].fileName = name;
      result.assets[0].uri = path + name;
      hazardReport.hazardPicture.number++;
    }
    console.log(result);
  };
  const imageLogic = () => {
    takePicture();
  };
  const validateData = () => {
    setHazardTabsStatus((prev) => ({
      ...prev,
      isSecondPageValidated: false,
    }));

    setHazardReport((prev) => ({
      ...prev,
      report: {
        ...prev.report,
        Notes: inputText,
        EndTime: endTime,
      },
    }));

    const currentTabIndex = hazardTabsStatus.tabIndex;
    setHazardTabsStatus((prev) => ({
      ...prev,
      isSecondPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
  };

  return (
    <View style={styles.container}>
      <CustomDateTimePickerComponent
        title="1. Ending date and time of the report"
        value={endTime}
        handleDataTimeChange={handleEndTimeChange}
        isRequired
      />
      <CustomTextArea
        label="2. Additional Notes:"
        placeholder="Any additional notes you would like to add?"
        value={hazardReport.report.Notes}
        onChangeText={handleNotesChange}
        testID="hazard-report-note-page-additional-notes-textarea"
        formControlProps={{
          marginTop: 2,
        }}
      />
      <CustomButton
            style={{
              marginTop: 20,
              width: "100%",
              borderColor: Theme.COLORS.BACKGROUND_YELLOW,
              borderWidth: 1,
              backgroundColor: Theme.COLORS.BACKGROUND_YELLOW_OPACITY_20,
              paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
              borderRadius: Theme.RADIUS.BUTTON,
            }}
            title="Upload/take image"
            onPress={imageLogic}
          />
      <NavigationButtons validateData={validateData} />
    </View>
  );
}

// ... rest of your code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  inputContainer: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 100,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
});
