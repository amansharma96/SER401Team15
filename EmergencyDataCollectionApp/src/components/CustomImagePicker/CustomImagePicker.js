import * as ImagePicker from "expo-image-picker";
import { ImageUp } from "lucide-react-native";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Theme from "../../utils/Theme";

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
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isPressed
                ? Theme.COLORS.BACKGROUND_YELLOW_OPACITY_20
                : Theme.COLORS.BACKGROUND_YELLOW,
            },
            styles.shadow,
          ]}
          onPress={pickImage}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.8}
        >
          <ImageUp size={34} color={Theme.COLORS.BACKGROUND_WHITE} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Upload Images</Text>
      </View>

      <ScrollView contentContainerStyle={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  buttonGroup: {
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    borderRadius: 9999,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
