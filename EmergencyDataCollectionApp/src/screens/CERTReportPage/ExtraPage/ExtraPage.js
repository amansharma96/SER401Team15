import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useAtom } from "jotai";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React from "react";
import { Alert, Platform, ScrollView } from "react-native";

import CustomButton from "../../../components/CustomForms/CustomButton/CustomButton";
import CustomDateTimePickerComponent from "../../../components/CustomForms/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomTextArea from "../../../components/CustomForms/NativeBase/CustomTextArea/CustomTextArea";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import Theme from "../../../utils/Theme";
import { certReportAtom, certTabsStatusAtom } from "../CERTPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

const NotePage = () => {
  const [certReport, setCERTReport] = useAtom(certReportAtom);
  const [certTabsStatus, setCERTTabsStatus] = useAtom(certTabsStatusAtom);

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || certReport.info.startTime;
    setCERTReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        startTime: currentDate,
      },
    }));
  };

  const handleNotesChange = (value) => {
    setCERTReport((prev) => ({
      ...prev,
      note: {
        NotesTextArea: value,
      },
    }));
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!certReport.info.startTime) {
      requiredFieldsList.push("► 1. Invalid Onsite Date");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setCERTTabsStatus((prev) => ({
        ...prev,
        isNotePageValidated: false,
      }));
      return;
    }

    const currentTabIndex = certTabsStatus.tabIndex;
    setCERTTabsStatus((prev) => ({
      ...prev,
      isNotePageValidated: true,
      tabIndex: currentTabIndex + 1,
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
    if (!result.canceled) {
      const name =
        certReport.info.hash +
        "_" +
        certReport.certPicture.number +
        ".jpeg";
      const path = result.uri.substring(0, result.uri.lastIndexOf("/") + 1);
      result.assets[0].fileName = name;
      result.assets[0].uri = path + name;
      certReport.info.number++;
    }
    console.log(result);
  };
  const imageLogic = () => {
    takePicture();
  };

  return (
    <NativeBaseProvider>
      <LineSeparator />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
      >
        <ScrollView>
          <CustomDateTimePickerComponent
            title="1. Need to change the date and time of the report?"
            value={certReport.info.startTime}
            handleDataTimeChange={handleDataTimeChange}
            isRequired
          />
          <CustomTextArea
            label="2. Additional Notes:"
            placeholder="Any additional notes you would like to add?"
            value={certReport.note.NotesTextArea}
            onChangeText={handleNotesChange}
            testID="cert-report-note-page-additional-notes-textarea"
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
        </ScrollView>
        <NavigationButtons validateData={validateData} />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default NotePage;
