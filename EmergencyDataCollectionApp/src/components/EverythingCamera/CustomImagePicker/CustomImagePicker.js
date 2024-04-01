import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import CustomImageButton from "../CustomImageButton/CustomImageButton";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function CustomImagePicker() {
  const [images, setImages] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setImages(result.assets.map((asset) => asset.uri));
    }
  };

  return (
    <View style={styles.container}>
      <CustomImageButton
        onPress={pickImage}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        buttonText="Upload Images"
        isPressed={isPressed}
      />

      <ImageGallery images={images} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
