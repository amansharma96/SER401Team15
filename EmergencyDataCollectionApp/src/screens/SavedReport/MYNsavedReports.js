import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";

import { dbClass, MYNReportObject } from "../../utils/Database/db";

const MYNsavedReports = () => {
  const [reports, setReports] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const db = new dbClass();
      db.getMYNReport((data) => {
        setReports(data);
      });
    };

    fetchData();
  }, []);

  const handleReportSelection = (report) => {
    Alert.alert(
      "Report Options",
      "Select an option",
      [
        {
          text: "Modify",
          onPress: () => {
            navigation.navigate("MYNmodifyReport", {
              report: new MYNReportObject(report),
            });
          },
        },
        {
          text: "Remove",
          onPress: () => {
            // Show a confirmation alert before removing the report
            Alert.alert(
              "Confirmation",
              "Are you sure you want to remove this report?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Remove",
                  onPress: () => removeReport(report),
                },
              ],
            );
          },
        },
      ],
      { cancelable: true },
    );
  };

  const removeReport = (report) => {
    const db = new dbClass();
    db.clearMYNTableByID([report.dbID]);

    setReports((prevReports) =>
      prevReports.filter((prevReport) => prevReport.dbID !== report.dbID),
    );
  };

  const renderReportItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleReportSelection(item)}
      style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ccc" }}
    >
      <Text>{item.StartTime}</Text>
      <Text>{item.LocationAddress}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.dbID.toString()}
        renderItem={renderReportItem}
      />
    </View>
  );
};

export default MYNsavedReports;
