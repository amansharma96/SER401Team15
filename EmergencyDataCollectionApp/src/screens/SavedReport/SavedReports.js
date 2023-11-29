import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Checkbox } from "native-base";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import styles from "./reportStyles";
import Theme from "../../utils/Theme";
import mockReportsData from "../../utils/constants/mockReportsData";

export const ReportItem = ({ report, onSelect, isSelected }) => {
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
      <View style={styles.checkboxContainer}>
        <View style={styles.reportItemContainer}>
          <View style={styles.iconAndTitleContainer}>
            {IconComponent && (
              <IconComponent name={iconName} style={styles.reportIcon} />
            )}
            <Text style={styles.reportTitle}>{report.title}</Text>
          </View>
          <Text style={styles.reportAddress}>{report.address}</Text>
        </View>
        <View style={styles.checkbox}>
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
    </View>
  );
};

export const ReportGroup = ({ group, onSelect, selectedReports }) => (
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
  const [selectAll, setSelectAll] = React.useState(false);
  const handleSelectReport = (id) => {
    setSelectedReports((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedReports({});
    } else {
      const allReports = {};
      mockReportsData.forEach((group) => {
        group.reports.forEach((report) => {
          allReports[report.id] = true;
        });
      });
      setSelectedReports(allReports);
    }
    setSelectAll(!selectAll);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        onPress={handleSelectAll}
        style={styles.selectAllButton}
      >
        <Text style={styles.selectAllButtonText}>
          {selectAll ? "Deselect All" : "Select All"}
        </Text>
      </TouchableOpacity>
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