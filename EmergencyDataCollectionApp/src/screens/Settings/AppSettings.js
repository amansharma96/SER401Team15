import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { States } from "../../components/dataLists";

const AppSettings = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedCertGroupNumber, setSelectedCertGroupNumber] = useState("");
  const [selectedCertSquadName, setSelectedCertSquadName] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [zipError, setZipError] = useState(false); // Error state for zip code

  const navigation = useNavigation();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userDataJSON = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(userDataJSON);
        if (userData) {
          setGroupName(userData.groupName || "");
          setSelectedCertGroupNumber(userData.selectedCertGroupNumber || "");
          setSelectedCertSquadName(userData.selectedCertSquadName || "");
          setCity(userData.city || "");
          setZip(userData.zip || "");
          setSelectedState(userData.selectedState || "");
        }
        console.log("User data loaded successfully!");
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };
    loadUserData();
  }, []);

  const handleButtonPress = async () => {
    if (
      groupName ||
      selectedCertGroupNumber ||
      selectedCertSquadName ||
      city ||
      zip ||
      selectedState
    ) {
      console.log("User selections:");
      console.log("MYN Group Name:", groupName);
      console.log("Cert Group Number:", selectedCertGroupNumber);
      console.log("Cert Squad Name:", selectedCertSquadName);
      console.log("City:", city);
      console.log("Zip:", zip);
      console.log("State:", selectedState);

      const zipRegex = /^\d{5}$/;
      if (!zipRegex.test(zip)) {
        setZipError(true);
        Alert.alert(
          "Validation Error",
          "►Zip code must be a 5 digit number. User Prefrences have not been saved",
        );
        return;
      } else {
        setZipError(false);
      }

      try {
        const userData = {
          groupName,
          selectedCertGroupNumber,
          selectedCertSquadName,
          city,
          zip,
          selectedState,
        };
        const userDataJSON = JSON.stringify(userData);
        await AsyncStorage.setItem("userData", userDataJSON);
        console.log("User data saved successfully!");
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    } else {
      console.log("No selections made.");
    }
  };

  const clearUserData = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      setGroupName("");
      setSelectedCertGroupNumber("");
      setSelectedCertSquadName("");
      setCity("");
      setZip("");
      setSelectedState("");
      console.log("User data cleared successfully!");
    } catch (error) {
      console.error("Error clearing user data:", error);
    }
  };

  const navigateToMainPage = () => {
    navigation.navigate("MainScreen"); // Navigate to MainPage
  };

  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Text style={styles.header}>User Preferences:</Text>
        <View>
          <Text>MYN Group Name</Text>
          <CustomInput
            value={groupName}
            onChangeText={setGroupName}
            placeholder="Enter MYN Group Name"
            style={styles.input}
          />
        </View>
        <View>
          <Text>Cert Group Number</Text>
          <CustomInput
            value={selectedCertGroupNumber}
            onChangeText={setSelectedCertGroupNumber}
            placeholder="Enter Cert Group Number"
            style={styles.input}
          />
          <Text>Cert Squad Name</Text>
          <CustomInput
            value={selectedCertSquadName}
            onChangeText={setSelectedCertSquadName}
            placeholder="Enter Cert Squad Name"
            style={styles.input}
          />
        </View>
        <View>
          <Text>City</Text>
          <CustomInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter City"
            style={styles.input}
          />
          <Text style={{ color: zipError ? "red" : "black" }}>
            {zipError ? "Zip code must be a 5-digit number." : "Zip"}
          </Text>
          <CustomInput
            value={zip}
            onChangeText={setZip}
            placeholder="Enter Zip"
            style={[styles.input, { borderColor: zipError ? "red" : "black" }]}
          />
          <Text>State</Text>
          <CustomSelect
            items={States}
            placeholder="State"
            selectedValue={selectedState}
            value={selectedState}
            onChange={setSelectedState}
          />
        </View>
      </NativeBaseProvider>
      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          onPress={handleButtonPress}
          style={styles.button}
        />
        <Button title="Clear" onPress={clearUserData} style={styles.button} />
        <Button
          title="Return"
          onPress={navigateToMainPage}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default AppSettings;
