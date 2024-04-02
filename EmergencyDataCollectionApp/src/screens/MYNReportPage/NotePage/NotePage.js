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
import { mynReportAtom, mynTabsStatusAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

const NotePage = () => {
  const [mynReport, setMynReport] = useAtom(mynReportAtom);
  const [mynTabsStatus, setMynTabsStatus] = useAtom(mynTabsStatusAtom);

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || mynReport.info.endTime;
    setMynReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        endTime: currentDate,
      },
    }));
  };

  const handleNotesChange = (value) => {
    setMynReport((prev) => ({
      ...prev,
      note: {
        NotesTextArea: value,
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
    if (!result.canceled) {
      mynReport.mynPicture.number++;
      const name =
        mynReport.info.hash + "_" + mynReport.certPicture.number + ".jpeg";
      const path = result.uri.substring(0, result.uri.lastIndexOf("/") + 1);
      result.assets[0].fileName = name;
      result.assets[0].uri = path + name;
    }
    console.log(result);
  };
  const validateData = () => {
    const requiredFieldsList = [];
    if (!mynReport.info.endTime) {
      requiredFieldsList.push("► 1. Invalid Onsite Date");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setMynTabsStatus((prev) => ({
        ...prev,
        isNotePageValidated: false,
      }));
      return;
    }

    const currentTabIndex = mynTabsStatus.tabIndex;
    setMynTabsStatus((prev) => ({
      ...prev,
      isNotePageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
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
            value={mynReport.info.endTime}
            handleDataTimeChange={handleDataTimeChange}
            isRequired
          />
          <CustomTextArea
            label="2. Additional Notes:"
            placeholder="Any additional notes you would like to add?"
            value={mynReport.note.NotesTextArea}
            onChangeText={handleNotesChange}
            testID="myn-report-note-page-additional-notes-textarea"
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
