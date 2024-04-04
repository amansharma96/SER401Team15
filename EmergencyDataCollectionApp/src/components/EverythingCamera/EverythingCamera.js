import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { View } from "react-native";

import { imagesAtom } from "./ImagesAtom";
import CustomCamera from "./components/CustomCamera/CustomCamera";
import CustomImagePicker from "./components/CustomImagePicker/CustomImagePicker";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default function EverythingCamera() {
  const [images, setImages] = useState([]);
  const [cameraImage, setCameraImage] = useState(null);
  const setImagesAtom = useSetAtom(imagesAtom);

  useEffect(() => {
    if (cameraImage && !images.includes(cameraImage)) {
      setImages((prevImages) => [...prevImages, cameraImage]);
    }
  }, [cameraImage]);

  useEffect(() => {
    setImagesAtom(images);
  }, [images]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 30,
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
