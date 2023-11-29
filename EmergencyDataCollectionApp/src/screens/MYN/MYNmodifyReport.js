// MYNmodifyReport.js
import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";

import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";

const MYNmodifyReport = ({ navigation }) => {
  const route = useRoute();
  const report = route.params?.report;
  const [modifiedReport, setModifiedReport] = useState({ ...report });
  const { setMYNReportObject } = useMYNReportContext();

  useEffect(() => {
    setModifiedReport({
      ...report,
      // Add other properties if needed
    });
  }, [report]);

  const handleSaveChanges = () => {
    setMYNReportObject((prev) => ({
      ...prev,
      ...modifiedReport,
    }));

    Alert.alert("Success", "Report modified successfully", [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View>
      <Text>Modify Report</Text>
      <View>
        <Text>Start Time: {modifiedReport.StartTime}</Text>
        <Text>Latitude: {modifiedReport.Lat}</Text>
        <Text>Longitude: {modifiedReport.Long}</Text>
      </View>
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

export default MYNmodifyReport;
