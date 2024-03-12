import React, { useContext, useEffect } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { useAtom } from "jotai";
import Button from "../../components/Button";
import NavigationButtons from "./components/NavigationButtons";
import { hazardTabsStatusAtom ,isUpdateModeAtom} from "./HazardPageAtoms";
import HazardReportContext from "./HazardReportsContext";
import { useNavigation } from "@react-navigation/native";

export default function ThirdScreen() {
  const { hazardReport, saveHazardReport, isUpdateMode, saveHazardReportToDB, updateHazardReportInDB, setUpdateMode } = useContext(HazardReportContext);
  const [hazardTabsStatus, setHazardTabsStatus] = useAtom(hazardTabsStatusAtom);
  const [isUpdateModeA, setIsUpdateModeA] = useAtom(isUpdateModeAtom);

  const navigation = useNavigation();

  const validateData = () => {
    const endTime = new Date().toLocaleString();
    const updatedReport = {
      ...hazardReport.report,
      EndTime: endTime,
    };

    console.log(hazardReport)
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
    }

    const currentTabIndex = hazardTabsStatus.tabIndex;
    setHazardTabsStatus((prev) => ({
      ...prev,
      isThirdPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
    navigation.navigate('HazardReviewPage')
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>

      {hazardReport && hazardReport.report && (
        <Image
          source={{ uri: hazardReport.report.Picture }}
          style={{ width: 200, height: 200 , marginTop:10} }
        />
      )}
      <NavigationButtons validateData={validateData} />
    </View>
  );
}

// ... rest of your code
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
});