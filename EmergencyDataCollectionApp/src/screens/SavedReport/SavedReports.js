import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";
import mockReportsData from "../../utils/constants/mockReportsData";

const SavedReports = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          {mockReportsData.map((reportGroup, index) => (
            <View key={index} style={styles.reportGroup}>
              <Text style={styles.groupTitle}>{reportGroup.type}</Text>
              {reportGroup.reports.map((report, idx) => (
                <View key={idx} style={styles.reportItem}>
                  <View style={styles.reportContent}>
                    <Text style={styles.reportTitle}>{report.title}</Text>
                    <Text style={styles.reportAddress}>{report.address}</Text>
                  </View>
                  {report.status ? (
                    <Icon name="check-circle" size={20} color="green" />
                  ) : (
                    <Icon name="circle-thin" size={20} color="gray" />
                  )}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SavedReports;
