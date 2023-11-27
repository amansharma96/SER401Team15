import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Checkbox } from "native-base";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./reportStyles";
import { dbClass } from "../../utils/Database/db";

const ReportItem = ({ report, onSelect, isSelected }) => {
  const IconComponent =
    report.type === "Fire Incident"
      ? FontAwesome
      : report.type === "Earthquake"
      ? Ionicons
      : null;
  const iconName =
    report.type === "Fire Incident"
      ? "fire"
      : report.type === "Earthquake"
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
            <Text style={styles.reportTitle}>ID:{report.dbID}</Text>
          </View>
          <Text style={styles.reportAddress}>
            Address:{report.LocationAddress}
          </Text>
          <Text style={styles.reportStartTime}>
            Start Time:{report.StartTime}
          </Text>
          <Text style={styles.reportGPS}>
            Lat: {report.Lat}, Long: {report.Long}
          </Text>
        </View>
        <View style={styles.checkbox}>
          <Checkbox
            isChecked={isSelected}
            onChange={() => onSelect(report.dbID)}
            value={report.dbID}
            aria-label={`Select report with address ${report.locationAddress}`}
            size="lg"
          />
        </View>
      </View>
    </View>
  );
};

const ReportGroup = ({ group, onSelect, selectedReports }) => {
  console.log("Rendering ReportGroup:", group); // Add this log

  return (
    <View style={styles.reportGroup}>
      <Text style={styles.groupTitle}>{group.type}</Text>
      <FlatList
        data={group.reports}
        renderItem={({ item }) => (
          <ReportItem
            report={item}
            onSelect={onSelect}
            isSelected={!!selectedReports[item.dbID]}
          />
        )}
        keyExtractor={(item) => item.dbID.toString()}
      />
    </View>
  );
};

const SavedReports = () => {
  const [selectedReports, setSelectedReports] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [mynReports, setMYNReports] = useState([]);

  useEffect(() => {
    const fetchMYNReports = async () => {
      const db = new dbClass();
      db.getMYNReport((reports) => {
        console.log(reports);
        setMYNReports(reports);
      });
    };

    fetchMYNReports();
  }, []);

  const handleSelectReport = (id) => {
    setSelectedReports((prevSelected) => {
      const updatedSelection = {
        ...prevSelected,
        [id]: !prevSelected[id],
      };
      console.log("Updated Selected Reports:", updatedSelection);
      // Add this log
      const filteredReports = mynReports.filter(
        (report) => updatedSelection[report.dbID]
      );
      console.log("Filtered Reports:", filteredReports);
      return updatedSelection;
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedReports({});
    } else {
      const allReports = {};
      mynReports.forEach((report) => {
        allReports[report.dbID] = true;
      });
      setSelectedReports(allReports);
    }
    setSelectAll(!selectAll);
  };

  // Filter MYN reports
  const filteredMYNReports = mynReports.filter(
    (report) => selectedReports[report.dbID],
  );
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
        data={[{ type: "MYN", reports: filteredMYNReports }]}
        renderItem={({ item }) => {
          console.log("Rendering item:", item);
          return (
            <ReportGroup
              group={item}
              onSelect={handleSelectReport}
              selectedReports={selectedReports}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SavedReports;
