/**
 * @module MYNreview
 * @description React component for navigating to saved MYNReportPage reports
 * @returns {JSX.Element} Rendered component.
 */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";
import { dbClass } from "../../utils/Database/db";
import { formatDate } from "../MYNReportPage/InfoPage/components/formatDate";

const ReportButton = ({ report }) => {
  const navigation = useNavigation();
  const handleSelectReport = () => {
    navigation.navigate("MYNReportNavigation", {
      loadedReport: report,
    });
  };

  return (
    <TouchableOpacity
      style={styles.reportContainer}
      onPress={handleSelectReport}
    >
      <Text style={styles.reportAddress}>{report.StreetAddress}</Text>
      <Text style={styles.reportTime}>{formatDate(report.StartTime)}</Text>
    </TouchableOpacity>
  );
};

export const MYNreview = () => {
  const db = new dbClass();

  const MYNreports = [];
  const handleReports = (reports) => {
    reports.forEach((e) => MYNreports.push(e));
  };

  db.getMYNReport(handleReports);
  db.printAllMYNEntries();

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.list}>
        <Text style={styles.header}>Select a MYN report to review</Text>
        <FlatList
          data={MYNreports}
          renderItem={({ item }) => <ReportButton report={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default MYNreview;
