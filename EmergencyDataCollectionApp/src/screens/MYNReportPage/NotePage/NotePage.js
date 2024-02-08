import { useSetAtom, useAtomValue, useAtom } from "jotai";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";

import Button from "../../../components/Button";
import CustomDateTimePickerComponent from "../../../components/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomTextArea from "../../../components/CustomTextArea/CustomTextArea";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import Theme from "../../../utils/Theme";
import {
  isNotePageValidatedAtom,
  tabIndexAtom,
  mynReportAtom,
} from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

const NotePage = () => {
  const [mynReport, setMynReport] = useAtom(mynReportAtom);

  const [Report, setReport] = useState({
    NotesTextArea: null,
  });

  const setIsNotePageValidated = useSetAtom(isNotePageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  // const handleDataTimeChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || Report.startTime;
  //   setReport((prev) => ({
  //     ...prev,
  //     startTime: currentDate,
  //     showDatePicker: false,
  //   }));
  // };

  const handleDataTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || mynReport.info.startTime;
    setMynReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        startTime: currentDate,
      },
    }));
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!mynReport.info.startTime) {
      requiredFieldsList.push("► 1. Invalid Onsite Date");
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
            value={mynReport.info.startTime}
            handleDataTimeChange={handleDataTimeChange}
            isRequired
          />
          <CustomTextArea
            label="2. Additional Notes:"
            placeholder="Any additional notes you would like to add?"
            value={Report.NotesTextArea}
            onChangeText={(text) =>
              setReport((prev) => ({ ...prev, NotesTextArea: text }))
            }
            testID="myn-report-note-page-additional-notes-textarea"
            formControlProps={{
              marginTop: 2,
            }}
          />
          <Button
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
