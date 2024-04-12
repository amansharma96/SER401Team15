import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import React, { useState } from "react";
import { View } from "react-native";

import CustomImageButton from "../CustomImageButton/CustomImageButton";

export default function CustomCamera({ setImage }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

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
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <CustomImageButton
        onPress={takePicture}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        buttonText="Take Photo"
        isPressed={isPressed}
        isUploadButton={false}
      />
    </View>
  );
}
