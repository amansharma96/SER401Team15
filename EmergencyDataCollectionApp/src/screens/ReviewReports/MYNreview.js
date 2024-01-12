import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";

import mockReportsData from "../../utils/constants/mockReportsData";
import styles from "./styles";



export const ReportText = (report) => {
  const IconComponent =
    report.title === "Fire Incident"
      ? FontAwesome
      : report.title === "Earthquake"
      ? Ionicons
      : null;
  const iconName =
    report.title === "Fire Incident"
      ? "fire"
      : report.title === "Earthquake"
      ? "earth"
      : "";

  return (
    <View style={styles.reportContainer}>
        <View style={styles.reportItemContainer}>
            <Text style={styles.reportTitle}>{report.title}</Text>
          </View>
          <Text style={styles.reportAddress}>{report.address}</Text>
    </View>
  );
};

export const MYNreview = () => {
  let MYNreports = mockReportsData[0].reports;
  /*for (let i in mockReportsData) {
    MYNreports =
      mockReportsData[i].type === "MYN Report" 
        ?  mockReportsData[i].reports 
        : null;
  }*/
  return (
    <View>
    <Text style={styles.header}>Select a report to review</Text>
    <FlatList
      data={MYNreports}
      renderItem={({ item }) => (
        <ReportText
          report={item}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};

export default MYNreview;


