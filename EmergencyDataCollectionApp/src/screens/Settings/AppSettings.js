import React, { useState } from "react";
import { View } from "react-native";

import CERTSection from "./SettingsComponent/CERTComponent";
import LocationSection from "./SettingsComponent/LocationComponent";
import MYNSection from "./SettingsComponent/MYNComponent";
import styles from "./styles";

const AppSettings = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedCertGroupNumber, setSelectedCertGroupNumber] = useState("");
  const [selectedCertSquadName, setSelectedCertSquadName] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [selectedState, setSelectedState] = useState("");

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
    </View>
  );
};

export default AppSettings;
