import React from "react";
import {
  View,
  FlatList,
} from "react-native";

import mockReportsData from "../../utils/constants/mockReportsData";
import Theme from "../../utils/Theme";
import ReportItem from "../SavedReport/SavedReports";

const MYNreports = mockReportsData.type === "MYN Report";



const MYNreview = () => {
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
    <View>
    <FlatList
      data={group.reports}
      renderItem={({ item }) => (
        <ReportItem
          report={item}
          onSelect={onSelect}
          isSelected={!!selectedReports[item.id]}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};


