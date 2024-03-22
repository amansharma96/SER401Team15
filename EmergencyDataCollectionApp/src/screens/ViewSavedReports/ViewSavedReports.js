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

  useEffect(() => {
    // var allReports = queryAllReports();
    // console.log("allReports: " + JSON.stringify(allReports, null, 2));
    queryReportsByType(selectedType, (fetchedReports) => {
      console.log("fetchedReports: " + JSON.stringify(fetchedReports, null, 2));
      setReports(fetchedReports);
    });
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
              reportId={item.report_id}
              startTime={item.report_data.StartTime}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewSavedReports;
