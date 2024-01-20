import React from "react";
import { View, FlatList } from "react-native";

import ReportItem from "../SavedReport/SavedReports";

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
