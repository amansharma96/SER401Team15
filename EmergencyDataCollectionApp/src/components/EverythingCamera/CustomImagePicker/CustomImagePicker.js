import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import CustomImageButton from "../CustomImageButton/CustomImageButton";

export default function CustomImagePicker({ images, setImages }) {
  // const [images, setImages] = useState([]);
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
    <CustomImageButton
      onPress={pickImage}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      buttonText="Upload Images"
      isPressed={isPressed}
    />
  );
}
