import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Alert, ScrollView } from "react-native";

import { hazardTabsStatusAtom, isUpdateModeAtom } from "./HazardPageAtoms";
import HazardReportContext from "./HazardReportsContext";
import NavigationButtons from "./components/NavigationButtons";
import { Hazards } from "../../utils/constants/dropdownOptions";
export default function ThirdScreen() {
  const {
    hazardReport,
    saveHazardReport,
    isUpdateMode,
    saveHazardReportToDB,
    updateHazardReportInDB,
    setUpdateMode,
  } = useContext(HazardReportContext);
  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [, setIsUpdateModeA] = useAtom(isUpdateModeAtom);

  const navigation = useNavigation();

  const validateData = () => {
    // const endTime = new Date().toLocaleString();
    const updatedReport = {
      ...hazardReport.report,
    };

    // console.log(hazardReport)
    // Check if Lat, Long, or Accuracy are null
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

    saveHazardReport(updatedReport);

    // Save report to database
    if (isUpdateMode) {
      updateHazardReportInDB(hazardReport.id, updatedReport);
      setUpdateMode(false);
      setIsUpdateModeA(false);
    } else {
      saveHazardReportToDB(updatedReport);
      Alert.alert(" Report Saved", "Report Saved to DB", [
        {
          text: "OK",
        },
      ]);
      navigation.navigate("MainScreen");
    }

    const currentTabIndex = hazardTabsStatus.tabIndex;
    setHazardTabsStatus((prev) => ({
      ...prev,
      isThirdPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));

    // navigation.navigate('HazardReviewPage')
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
