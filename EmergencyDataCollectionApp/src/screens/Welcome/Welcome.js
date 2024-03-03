import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import CustomInput from "../../components/CustomForms/GluestackUI/CustomInput/CustomInput";
import { setupDatabase } from "../../utils/Database/OfflineSQLiteDB";
import Images from "../../utils/Images";

const Welcome = ({ navigation }) => {
  useEffect(() => {
    setupDatabase(() => {});
  }, []);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.nativeEvent.text);
    console.log("New input value: ", inputValue);
  };

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
      <CustomInput
        label="Email Address"
        placeholder="Enter your email"
        isRequired
        value={inputValue}
        onChange={handleInputChange}
        errorMessage="Please enter a valid email address"
        helperMessage="We will never share your email."
        displayHelperMessage
        w="80%"
        isInvalid={false}
      />
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
