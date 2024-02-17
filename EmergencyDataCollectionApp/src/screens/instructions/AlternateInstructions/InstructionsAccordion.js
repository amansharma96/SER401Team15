import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import Button from "../../../components/Button";
import CERTInstructions from "../CERTInstructions";
import HazzardInstructions from "../HazzardInstructions";
import MYNInstructions from "../MYNInstructions";
import styles from "../styles";

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.accordion}
      >
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={{ backgroundColor: "white", padding: 10 }}>{content}</View>
      )}
    </View>
  );
};

const InstructionsPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>App Instructions</Text>
        <Text style={styles.placehodler}>What this App is for:</Text>
        <Text style={styles.text}>
          The Emergency Ready app is used by Map your Neighborhood groups, CERT
          search and rescue teams, and public sector workers to gather critical
          information for utilization by Emergency Operations Centers
          immediately after a major disaster.
        </Text>
        <Text style={styles.placehodler}>How the App is organized:</Text>
        <Text style={styles.text}>
          The App is divided into 3 sections that are specifically tailored to
          MYN activities, CERT activities, and hazards that public sector
          workers may come across and wish to report. The sections of the app
          for MYN and CERT activity are modeled after the FEMA rapid needs
          assessment Form and are tailored to match their activity. The section
          used by public sector workers allows them to locate, describe, and
          photograph locations that may be hazards to the public and impede
          rescue efforts. Public sector workers may include, PUD workers, City
          and county road crews, Police and Fire personnel. For MYN and CERT
          users of this App, the data collection sequence mirrors the natural
          sequence of search and rescue activity as teams go house to house.
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Accordion
          title="MYN Report Instructions"
          content={<MYNInstructions />}
        />
        <Accordion
          title="CERT Report Instructions"
          content={<CERTInstructions />}
        />
        <Accordion
          title="Hazard Report Instructions"
          content={<HazzardInstructions />}
        />
      </View>
      <Button
        title="Return"
        onPress={() => {
          navigation.navigate("MainScreen");
        }}
      />
    </ScrollView>
  );
};

export default InstructionsPage;
