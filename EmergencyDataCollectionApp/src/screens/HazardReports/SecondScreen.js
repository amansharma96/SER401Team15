import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import React, { useState ,useEffect, useContext} from "react";
import { View, TextInput, StyleSheet, Alert ,Text} from "react-native";
import { useAtom } from "jotai";
import Button from "../../components/Button";
import NavigationButtons from "./components/NavigationButtons";
import { hazardReportAtom, hazardTabsStatusAtom } from "./HazardPageAtoms";
import HazardReportContext from "./HazardReportsContext";

export default function SecondScreen() {
  const {hazardReport, saveHazardReport} = useContext(HazardReportContext);
  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [inputText, setInputText] = useState("");





  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("hazard report /n" , hazardReport);
  //   }, 2000);
  
  //   return () => clearInterval(intervalId);
  // }, [inputText]);
    



  const getPermissionAsync = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  const takePicture = async () => {
    await getPermissionAsync();
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      saveHazardReport((prev) => ({
        ...prev,
        report: {
          ...prev.report,
          Picture: result.uri,
        },
      }), () => {
        // console.log(hazardReport.report.Picture); // Log the updated state
      });
    }
  };

  const uploadPicture = async () => {
    await getPermissionAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      saveHazardReport((prev) => ({
        ...prev,
        report: {
          ...prev.report,
          Picture: result.uri,
        },
      }), () => {
        // console.log(hazardReport.report.Picture); // Log the updated state
      });
    }
  };
  const validateData = () => {
    if (!hazardReport.report.Picture || !inputText) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" +
          (!hazardReport.report.Picture ? "► 1. Picture\n" : "") +
          (!inputText ? "► 2. Notes" : "")
      );
      setHazardTabsStatus((prev) => ({
        ...prev,
        isSecondPageValidated: false,
      }));
      return;
    }

    // Save inputText to hazardReport
    saveHazardReport((prev) => ({
      ...prev,
      report: {
        ...prev.report,
        Notes: inputText,
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter something here"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
    </View>

    {hazardReport.report && hazardReport.report.Picture ? (
      <Text>Image has been uploaded.</Text>
    ) : (
      <Text>Please add an image of hazard.</Text>
    )}
    <View style={styles.buttonRow}>
      <Button
        style={[styles.uploadButton]}
        onPress={uploadPicture}
        title="Upload Picture"
      />
      <Button
        style={[styles.takePictureButton]}
        onPress={takePicture}
        title="Take Picture"
      />
    </View>
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
    height: 200,
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