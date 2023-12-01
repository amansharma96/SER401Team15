import React from "react";
import {
  View,
  FlatList,
} from "react-native";

import mockReportsData from "../../utils/constants/mockReportsData";
import Theme from "../../utils/Theme";
import ReportItem from "../SavedReport/SavedReports";

const CERTreports = mockReportsData.type === "CERT Report";

const CERTreview = () => {

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