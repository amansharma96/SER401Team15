import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Alert, ScrollView } from "react-native";

import { hazardTabsStatusAtom } from "./HazardPageAtoms";
import HazardReportContext from "./HazardReportsContext";
import NavigationButtons from "./components/NavigationButtons";
// import Button from "../../components/Button";
import { updateReportById } from "../../utils/Database/OfflineSQLiteDB";
import { Hazards } from "../../utils/constants/dropdownOptions";
import {
  updateModeAtom,
  reportIdAtom,
  reportTypeAtom,
} from "../../utils/updateAtom";
export default function ThirdScreen() {
  const { hazardReport, saveHazardReport, saveHazardReportToDB } =
    useContext(HazardReportContext);
  const [setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [updateMode, setUpdateMode] = useAtom(updateModeAtom);
  const [reportId, setReportId] = useAtom(reportIdAtom);
  const [reportType, setReportType] = useAtom(reportTypeAtom);

  console.log("update mode :", updateMode, reportId, reportType);
  const navigation = useNavigation();

  const validateData = () => {
    const updatedReport = {
      ...hazardReport.report,
    };

    if (
      updatedReport.Lat === null ||
      updatedReport.Long === null ||
      updatedReport.Accuracy === null ||
      updatedReport.Picture === null
    ) {
      Alert.alert(
        " Error",
        "Latitude, Longitude, or Accuracy is null. Please retry location.",
        [
          {
            text: "OK",
          },
        ],
      );
      setHazardTabsStatus((prev) => ({
        ...prev,
        isThirdPageValidated: false,
      }));
      return;
    }
    if (updateMode) {
      updateReportById(
        reportId,
        reportType,
        updatedReport,
        (success, error) => {
          if (success) {
            // console.log(`Report with ID ${reportId} updated successfully`);
            setUpdateMode(false); // Set updateMode to null
            setReportId(null); // Set reportId to null
            setReportType(null); // Set reportType to null
            navigation.navigate("MainScreen"); // Navigate back to the main screen
          } else {
            console.error("Error updating report", error);
          }
        },
      );
    } else {
      saveHazardReport(updatedReport);
      saveHazardReportToDB(updatedReport);

      setHazardTabsStatus((prev) => ({
        ...prev,
        isThirdPageValidated: true,
      }));
      navigation.navigate("MainScreen");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.boldText}>Start Time:</Text>
        <View style={styles.box}>
          <Text>
            {hazardReport.report ? ` ${hazardReport.report.StartTime}` : "N/A"}
          </Text>
        </View>
        <Text style={styles.boldText}>End Time:</Text>
        <View style={styles.box}>
          <Text>
            {" "}
            {hazardReport.report ? ` ${hazardReport.report.EndTime}` : "N/A"}
          </Text>
        </View>
        <Text style={styles.boldText}>Location</Text>
        <View style={styles.box}>
          <Text>
            {hazardReport
              ? `Lat: ${hazardReport.Lat}, Long :${hazardReport.Long}, accuracy ${hazardReport.Accuracy}`
              : "N/A"}
          </Text>
        </View>
        {hazardReport && hazardReport.report && (
          <Image
            source={{ uri: hazardReport.report.Picture }}
            style={{ width: 200, height: 200, marginTop: 10 }}
          />
        )}

        <Text style={styles.boldText}>Report Type:</Text>
        <View style={styles.box}>
          <Text>
            {hazardReport.report
              ? ` ${Hazards.find((hazard) => hazard.value === hazardReport.report.ReportType)?.label || hazardReport.report.ReportType}`
              : "N/A"}
          </Text>
        </View>

        <Text style={styles.boldText}>Notes:</Text>
        <View style={styles.box}>
          <Text>
            {hazardReport.report ? ` ${hazardReport.report.Notes}` : "N/A"}
          </Text>
        </View>
      </ScrollView>

      <NavigationButtons validateData={validateData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  BUTTON: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ffcc00",
    color: "#000000",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 250,
    borderWidth: 1,
    borderColor: "black",
  },
  dateContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 5,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
