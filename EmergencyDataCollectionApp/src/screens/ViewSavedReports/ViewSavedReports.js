import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import ReportTypeRadioButton from "./components/ReportTypeRadioButton/ReportTypeRadioButton";
import styles from "./styles";
import { queryReportsByType } from "../../utils/Database/OfflineSQLiteDB";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("HazardReports.db");

const ReportButton = ({ reportId, startTime }) => {
  return (
    <TouchableOpacity style={styles.reportContainer}>
      <Text style={styles.reportAddress}>Report ID: {reportId}</Text>
      <Text style={styles.reportTime}>{startTime}</Text>
    </TouchableOpacity>
  );
};

export const ViewSavedReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedType, setSelectedType] = useState("MYN");

  const fetchHazardReports = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM HazardReport;",
        [],
        (_, { rows: { _array } }) => {
          // console.log("Hazard Reports fetched: ", _array);
          const mappedReports = _array.map(report => ({
            ...report,
            report_id: report.id,
            report_data: {
              info: {
                startTime: report.StartTime
              }
            }
          }));
          setReports(mappedReports);
        },
        (_, error) => console.log("Hazard Report fetch error", error),
      );
    });
  };
  useEffect(() => {
    if (selectedType === 'Hazard') {
      fetchHazardReports();
    } else {
      queryReportsByType(selectedType, (fetchedReports) => {
        console.log("fetchedReports: " + JSON.stringify(fetchedReports, null, 2));
        setReports(fetchedReports);
      });
    }
  }, [selectedType]);

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.list}>
        <ReportTypeRadioButton
          value={selectedType}
          onChange={setSelectedType}
        />
        <FlatList
          data={reports}
          keyExtractor={(item) => item.report_id.toString()}
          renderItem={({ item }) => (
            <ReportButton
              reportId={item.report_id }
              startTime={item.report_data.info.startTime}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewSavedReports;