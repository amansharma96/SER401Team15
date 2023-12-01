import React from "react";
import {
  View,
  FlatList,
} from "react-native";

import mockReportsData from "../../utils/constants/mockReportsData";
import Theme from "../../utils/Theme";
import ReportItem from "../SavedReport/SavedReports";



const HazardReview = () => {
  const HazardReports = mockReportsData.type === "Hazard Report";

  return (
    <View>
    <FlatList
    data={HazardReports.reports}
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