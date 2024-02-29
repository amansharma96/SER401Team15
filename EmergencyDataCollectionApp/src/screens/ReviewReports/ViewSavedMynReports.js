import { useNavigation } from "@react-navigation/native";
import {useAtom, useSetAtom} from "jotai";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import {
  queryReportsByType,
  queryReportById,
} from "../../utils/Database/OfflineSQLiteDB";
import { mynReportAtom } from "../MYNReportPage/MYNPageAtoms";

const ReportButton = ({ reportId, onSelect, startTime }) => {
  return (
    <TouchableOpacity
      style={styles.reportContainer}
      onPress={() => onSelect(reportId)}
    >
      <Text style={styles.reportAddress}>Report ID: {reportId}</Text>
      <Text style={styles.reportTime}>{startTime}</Text>
    </TouchableOpacity>
  );
};

export const ViewSavedMynReports = () => {
  const [reports, setReports] = useState([]);
  const navigation = useNavigation();
  const setMynReport = useSetAtom(mynReportAtom);

  useEffect(() => {
    queryReportsByType("MYN", (fetchedReports) => {
      console.log("fetchedReports: " + JSON.stringify(fetchedReports, null, 2));
      setReports(fetchedReports);
    });
  }, []);

  const handleSelectReport = (reportId) => {
     queryReportById(reportId, (detailedReport) => {
    console.log("report clicked: " + JSON.stringify(detailedReport, null, 2));
     const loadedDate = new Date(detailedReport.report_data.info.startTime);
     detailedReport.report_data.info.startTime = loadedDate;
     setMynReport(detailedReport.report_data);
       navigation.navigate("MYNReportNavigation", {
       });
     });
   };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.list}>
        <Text style={styles.header}>Select a MYN report to review</Text>
        <FlatList
          data={reports}
          keyExtractor={(item) => item.report_id.toString()}
          renderItem={({ item }) => (
            <ReportButton
              reportId={item.report_id}
              startTime={item.report_data.info.startTime}
              onSelect={handleSelectReport}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewSavedMynReports;
