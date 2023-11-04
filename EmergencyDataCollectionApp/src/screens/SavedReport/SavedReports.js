import { Checkbox } from "native-base";
import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import styles from "./styles";
import Theme from "../../utils/Theme";
import mockReportsData from "../../utils/constants/mockReportsData";

const ReportItem = ({ report, onSelect, isSelected }) => (
  <View style={styles.reportItem}>
    <View style={styles.reportContent}>
      <Text style={styles.reportTitle}>{report.title}</Text>
      <Text style={styles.reportAddress}>{report.address}</Text>
    </View>
    <View style={styles.checkboxContainer}>
      <Checkbox
        isChecked={isSelected}
        onChange={() => onSelect(report.id)}
        value={report.id}
        aria-label={`Select report with address ${report.address}`}
        bg={Theme.COLORS.BACKGROUND_WHITE}
        borderColor={Theme.COLORS.BACKGROUND_WHITE}
        _icon={styles.checkboxIcon}
        _checked={styles.checkboxChecked}
        _pressed={styles.checkboxPressed}
        size="lg"
      />
    </View>
  </View>
);

const ReportGroup = ({ group, onSelect, selectedReports }) => (
  <View style={styles.reportGroup}>
    <Text style={styles.groupTitle}>{group.type}</Text>
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

const SavedReports = () => {
  const [selectedReports, setSelectedReports] = React.useState({});
  const handleSelectReport = (id) => {
    setSelectedReports((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={mockReportsData}
        renderItem={({ item }) => (
          <ReportGroup
            group={item}
            onSelect={handleSelectReport}
            selectedReports={selectedReports}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SavedReports;
