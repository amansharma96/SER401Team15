import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";
import { dbClass } from "../../utils/Database/db";

export const ReportText = ({ report }) => {
  const navigation = useNavigation();
  const handleSelectReport = () => {
    console.log(report);
      navigation.navigate("MYNReportNavigation", {
        loadedReport: report,
      },
    );
  };

  const formatDate = (date) => {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <TouchableOpacity
      style={styles.reportContainer}
      onPress={handleSelectReport}
    >
      <Text style={styles.reportAddress}>{report.StreetAddress}</Text>
      <Text style={styles.reportTime}>{formatDate(new Date(report.StartTime))}</Text>
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
          renderItem={({ item }) => <ReportText report={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default MYNreview;
