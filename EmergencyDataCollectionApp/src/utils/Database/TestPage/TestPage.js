//Page only exists to ensure queries run correctly

import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";

import {
  setupDatabase,
  addReport,
  queryAllReports,
  queryReportById,
  queryReportsByType,
  removeReportById,
  truncateTable,
  dropTable,
} from "../OfflineSQLiteDB"; // Replace with the path to your SQLite class
const TestPage = () => {
  const [reportType, setReportType] = useState("");
  const [reportData, setReportData] = useState("");
  const [, setReports] = useState([]);
  const [reportId, setReportId] = useState("");
  const [searchedReport, setSearchedReport] = useState(null);
  const [searchedReportType, setSearchedReportType] = useState("");
  useEffect(() => {
    // Ensure the database is set up when the component mounts
    setupDatabase((success, error) => {
      if (success) {
        console.log("Database setup successful");
      } else {
        console.error("Error setting up database:", error);
      }
    });
  }, []);
  const handleAddReport = () => {
    addReport("Test", "Test", (success, error) => {
      if (success) {
        console.log("Report added successfully");
        setReportType("");
        setReportData("");
      } else {
        console.error("Error adding report:", error);
      }
    });
  };

  const handleQueryAllReports = () => {
    queryAllReports(setReports);
  };

  const handleQueryReportById = () => {
    queryReportById(reportId, setSearchedReport);
  };

  const handleQueryReportsByType = () => {
    queryReportsByType(searchedReportType, setReports);
  };

  const handleRemoveReportById = () => {
    removeReportById(1, (success, error) => {
      if (success) {
        console.log(`Report with ID ${reportId} removed successfully`);
        setReportId("");
      } else {
        console.error("Error removing report:", error);
      }
    });
  };

  const handleTruncateTable = () => {
    truncateTable((success, error) => {
      if (success) {
        console.log("Table truncated successfully");
      } else {
        console.error("Error truncating table:", error);
      }
    });
  };

  const handleDropTable = () => {
    dropTable();
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text>Add Report:</Text>
        <TextInput
          value={reportType}
          onChangeText={setReportType}
          placeholder="Report Type"
        />
        <TextInput
          value={reportData}
          onChangeText={setReportData}
          placeholder="Report Data"
        />
        <Button title="Add Report" onPress={handleAddReport} />

        <Text style={{ marginTop: 20 }}>Query All Reports:</Text>
        <Button title="Query All Reports" onPress={handleQueryAllReports} />

        <Text style={{ marginTop: 20 }}>Query Report By ID:</Text>
        <TextInput
          value={reportId}
          onChangeText={setReportId}
          placeholder="Report ID"
        />
        <Button title="Query Report By ID" onPress={handleQueryReportById} />
        <Text>Searched Report: {JSON.stringify(searchedReport)}</Text>

        <Text style={{ marginTop: 20 }}>Query Reports By Type:</Text>
        <TextInput
          value={searchedReportType}
          onChangeText={setSearchedReportType}
          placeholder="Report Type"
        />
        <Button
          title="Query Reports By Type"
          onPress={handleQueryReportsByType}
        />

        <Text style={{ marginTop: 20 }}>Remove Report By ID:</Text>
        <Button title="Remove Report By ID" onPress={handleRemoveReportById} />

        <Text style={{ marginTop: 20 }}>Truncate Table:</Text>
        <Button title="Truncate Table" onPress={handleTruncateTable} />

        <Text style={{ marginTop: 20 }}>Drop Table:</Text>
        <Button title="Drop Table" onPress={handleDropTable} />
      </View>
    </ScrollView>
  );
};

export default TestPage;
