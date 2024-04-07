import { useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";

import styles from "./styles";
import EverythingCamera from "../../components/EverythingCamera/EverythingCamera";
import { imagesAtom } from "../../components/EverythingCamera/ImagesAtom";
import { saveImages } from "../../components/EverythingCamera/components/saveImage/saveImage";
import { setupDatabase } from "../../utils/Database/OfflineSQLiteDB";
import Images from "../../utils/Images";

const Welcome = ({ navigation }) => {
  const images = useAtomValue(imagesAtom);

  useEffect(() => {
    setupDatabase(() => {});
  }, []);

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      console.log("images", images);
      saveImages(images).then((r) => console.log("saved", r));
    }
  }, [images]);

  return (
    <View style={styles.container}>
      {/*<View style={styles.imageContainer}>*/}
      {/*  <Image*/}
      {/*    source={Images.Welcome}*/}
      {/*    style={styles.image}*/}
      {/*    testID="welcomeImage"*/}
      {/*  />*/}
      {/*</View>*/}
      {/*<View style={styles.textContainer}>*/}
      {/*  <Text style={styles.title}>Emergency Ready</Text>*/}
      {/*  <Text style={styles.subtitle}>Hazard Reporting</Text>*/}
      {/*</View>*/}
      {/*<View style={styles.buttonContainer}>*/}
      {/*  <TouchableOpacity*/}
      {/*    style={styles.button}*/}
      {/*    testID="getStartedButton"*/}
      {/*    onPress={() => navigation.navigate("App")}*/}
      {/*  >*/}
      {/*    <Text style={styles.buttonText}>Get Started</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}

      <EverythingCamera />
    </View>
  );
};

export default Welcome;
