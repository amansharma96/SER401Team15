import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import React from "react";
import { StyleSheet, View } from "react-native";

import Theme from "../../../utils/Theme";
import CustomButton from "../../CustomForms/CustomButton/CustomButton";

export default function CustomCamera() {
  const [image, setImage] = React.useState(null);

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
    <View style={styles.container}>
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
        title="Upload/Take Photo"
        onPress={takePicture}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
