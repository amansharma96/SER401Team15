import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Images from "../../utils/Images";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.Welcome}
          style={styles.image}
          testID="welcomeImage"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Emergency Ready</Text>
        <Text style={styles.subtitle}>Hazard Reporting</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          testID="getStartedButton"
          onPress={() => navigation.navigate("MainScreen")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
