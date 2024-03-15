import * as MediaLibrary from "expo-media-library";
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import CustomButton from "../../components/CustomForms/CustomButton/CustomButton";

export default function SecondScreen({ navigation }) {
  const [inputText, setInputText] = useState("");

  const getPermissionAsync = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  // ... rest of your code

  const takePicture = async () => {
    await getPermissionAsync();
  };

  const uploadPicture = async () => {
    await getPermissionAsync();
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

      <View style={styles.buttonRow}>
        <CustomButton
          style={[styles.uploadButton]}
          onPress={uploadPicture}
          title="Upload Picture"
        />
        <CustomButton
          style={[styles.takePictureButton]}
          onPress={takePicture}
          title="Take Picture"
        />
      </View>
      <CustomButton title="Next" />
      <CustomButton onPress={() => navigation.goBack()} title="Go Back" />
      <CustomButton
        title="Cancel Request"
        onPress={() => navigation.navigate("MainScreen")}
      />
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
