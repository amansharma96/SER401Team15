import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import CERTSection from "./SettingsComponent/CERTComponent";
import LocationSection from "./SettingsComponent/LocationComponent";
import MYNSection from "./SettingsComponent/MYNComponent";
import styles from "./styles";
import Button from "../../components/Button";

const AppSettings = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedCertGroupNumber, setSelectedCertGroupNumber] = useState("");
  const [selectedCertSquadName, setSelectedCertSquadName] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Load saved data when the component mounts
  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Retrieve the data from AsyncStorage
        const userDataJSON = await AsyncStorage.getItem("userData");

        // Parse the JSON string to an object
        const userData = JSON.parse(userDataJSON);

        // Update the state variables with the loaded data
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
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const handleButtonPress = async () => {
    // Check if any field is selected or entered
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
      try {
        // Create an object with user information
        const userData = {
          groupName,
          selectedCertGroupNumber,
          selectedCertSquadName,
          city,
          zip,
          selectedState,
        };

        // Convert the object to a JSON string
        const userDataJSON = JSON.stringify(userData);

        // Save the data to AsyncStorage
        await AsyncStorage.setItem("userData", userDataJSON);

        console.log("User data saved successfully!");
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    } else {
      console.log("No selections made.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Settings:</Text>
      <MYNSection groupName={groupName} setGroupName={setGroupName} />
      <CERTSection
        selectedCertGroupNumber={selectedCertGroupNumber}
        setSelectedCertGroupNumber={setSelectedCertGroupNumber}
        selectedCertSquadName={selectedCertSquadName}
        setSelectedCertSquadName={setSelectedCertSquadName}
      />
      <LocationSection
        city={city}
        setCity={setCity}
        zip={zip}
        setZip={setZip}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save Settings" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

export default AppSettings;
