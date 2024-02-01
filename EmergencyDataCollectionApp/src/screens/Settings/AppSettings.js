import React, { useState } from "react";
import { View } from "react-native";

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

  const handleButtonPress = () => {
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
    } else {
      console.log("No selections made.");
    }
  };

  return (
    <View style={styles.container}>
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

      <Button title="Print Selections" onPress={handleButtonPress} />
    </View>
  );
};

export default AppSettings;
