import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";
import { dbClass } from "../../utils/Database/db";

export const ReportText = ({ report }) => {
  const navigation = useNavigation();
  const handleSelectReport = () => {
    navigation.navigate("MYNReportNavigation", { report });
  };

  return (
    <TouchableOpacity
      style={styles.reportContainer}
      onPress={handleSelectReport}
    >
      <Text style={styles.reportAddress}>{report.StreetAddress}</Text>
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
    <SafeAreaView style={styles.listArea}>
      <Text style={styles.header}>Select a MYN report to review</Text>
      <View>
        <FlatList
          data={MYNreports}
          renderItem={({ item }) => <ReportText report={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default MYNreview;
