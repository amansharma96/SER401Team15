import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import CustomCamera from "./CustomCamera/CustomCamera";
import CustomImagePicker from "./CustomImagePicker/CustomImagePicker";
import ImageGallery from "./ImageGallery/ImageGallery";

export default function EverythingCamera() {
  const [images, setImages] = useState([]);
  const [cameraImage, setCameraImage] = useState(null);

  useEffect(() => {
    if (cameraImage && !images.includes(cameraImage)) {
      setImages((prevImages) => [...prevImages, cameraImage]);
    }
  }, [cameraImage]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 300,
        }}
      >
        <CustomImagePicker images={images} setImages={setImages} />
        <CustomCamera setImage={setCameraImage} />
      </View>

      <View>
        <ImageGallery images={images} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
