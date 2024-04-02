import { useNavigation, useRoute } from "@react-navigation/native";
import { useAtomValue } from "jotai";
import { NativeBaseProvider, Button } from "native-base";
import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

// import HazardReportContext from "./HazardReportsContext";
import LineSeparator from "../../components/LineSeparator/LineSeparator";
import ReportHeader from "../../components/ReportHeader/ReportHeader";
import { removeReportById } from "../../utils/Database/OfflineSQLiteDB";
import Theme from "../../utils/Theme";
// import { formatDate } from "../components/formatDate";
import { Hazards } from "../../utils/constants/dropdownOptions";
import { reportIdAtom } from "../../utils/updateAtom";
// import { HazardReportContext } from ".ntext/HazardReportContext"; // Import the context
// import { HazardReportProvider } from "./HazardReportsContext";

const UpdateHazardReportPage = () => {
  // const { report: hazardReport } = useContext(HazardReportContext); // Use the context
  const route = useRoute();
  const hazardReport = route.params.report.report_data; // Get the report from navigation params
  console.log("hazardReport", hazardReport);
  // const updateMode = useAtomValue(updateModeAtom);
  const reportId = useAtomValue(reportIdAtom);
  // const reportType = useAtomValue(reportTypeAtom);
  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate("HazardReportPage", { report: hazardReport }); // Pass the report as a parameter
  };

  const handleDeletePress = () => {
    removeReportById(reportId, (success, error) => {
      if (success) {
        console.log(`Report with ID ${reportId} removed successfully`);
        navigation.navigate("MainScreen");
      } else {
        console.error("Error removing report", error);
      }
    });
  };

  const handleCancelPress = () => {
    navigation.navigate("MainScreen");
  };

  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <ReportHeader title="Hazard Reporting" subtitle="Update Report" />
        <LineSeparator />
        <View style={{ marginBottom: 10 }} />

        <ScrollView>
          <Text style={styles.boldText}>Start Time:</Text>
          <View style={styles.box}>
            <Text>{hazardReport ? ` ${hazardReport.StartTime}` : "N/A"}</Text>
          </View>
          <Text style={styles.boldText}>End Time:</Text>
          <View style={styles.box}>
            <Text> {hazardReport ? ` ${hazardReport.EndTime}` : "N/A"}</Text>
          </View>
          <Text style={styles.boldText}>Location</Text>
          <View style={styles.box}>
            <Text>
              {hazardReport
                ? `Lat: ${hazardReport.Lat}, Long :${hazardReport.Long}, accuracy ${hazardReport.Accuracy}`
                : "N/A"}
            </Text>
          </View>
          {hazardReport && (
            <Image
              source={{ uri: hazardReport.Picture }}
              style={{ width: 200, height: 200, marginTop: 10 }}
            />
          )}

          <Text style={styles.boldText}>Report Type:</Text>
          <View style={styles.box}>
            <Text>
              {hazardReport
                ? ` ${Hazards.find((hazard) => hazard.value === hazardReport.ReportType)?.label || hazardReport.ReportType}`
                : "N/A"}
            </Text>
          </View>

          <Text style={styles.boldText}>Notes:</Text>
          <View style={styles.box}>
            <Text>{hazardReport ? ` ${hazardReport.Notes}` : "N/A"}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={handleEditPress}>
            Edit
          </Button>
          <Button style={styles.button} onPress={handleDeletePress}>
            Delete
          </Button>
          <Button style={styles.button} onPress={handleCancelPress}>
            Cancel
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: Theme.COLORS.BORDER_COLOR,
    padding: 10,
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  cancelButton: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    borderColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderWidth: 1,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  button: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "33%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 20,
  },
});

export default UpdateHazardReportPage;
