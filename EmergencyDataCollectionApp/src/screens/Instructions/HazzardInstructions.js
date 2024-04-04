import React from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./styles";

const HazzardInstructions = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.placehodler}>Starting a HAZARD report</Text>
        <Text style={styles.text}>
          Select the New HAZARD report button. There are 3 sections you will go
          through. REPORT, DETAILS, and REVIEW
        </Text>
        <Text style={styles.placehodler}>The Report section:</Text>
        <Text style={styles.text}>
          First an automatic date and timestamp as you start the report. You can
          manually edit these if needed. We will automatically capture GPS
          location. For most accurate results please stand a safe distance from
          the hazard you are documenting. If the GPS location accuracy is low
          the data will appear red in color. Try again. You may need to move.
          Yellow indicates a bit more accuracy. If the data shows green you are
          good to accept the data.
        </Text>
        <Text style={styles.placehodler}>The Details Section:</Text>
        <Text style={styles.text}>
          This section lets you select the hazard you want to report. And gives
          you the opportunity to photograph the hazard and add any description
          you feel is required.
        </Text>
        <Text style={styles.placehodler}>The Review Section:</Text>
        <Text style={styles.text}>
          You will have an opportunity to review and edit this report before
          saving this file.
        </Text>
      </View>
    </ScrollView>
  );
};

export default HazzardInstructions;
