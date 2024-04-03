import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import ReportCard from "./components/ReportCard/ReportCard";
import ReportTypeRadioButton from "./components/ReportTypeRadioButton/ReportTypeRadioButton";
import styles from "./styles";
import {
  queryReportsByType,
  queryReportById,
} from "../../utils/Database/OfflineSQLiteDB";
import {
  updateModeAtom,
  reportTypeAtom,
  reportIdAtom,
} from "../../utils/updateAtom";
import { certReportAtom } from "../CERTReportPage/CERTPageAtoms";
import { mynReportAtom } from "../MYNReportPage/MYNPageAtoms";
const ReportButton = ({ reportId, startTime, reportType }) => {
  const [isUpdateMode, setUpdateMode] = useAtom(updateModeAtom);
  const [UpdateReportType, setUpdateReportType] = useAtom(reportTypeAtom);
  const [UpdateReportId, setUpdateReportId] = useAtom(reportIdAtom);
  const [mynReport, setMynReport] = useAtom(mynReportAtom);
  const [cernReport, setCertReport] = useAtom(certReportAtom);

  const navigation = useNavigation();
  const handlePress = () => {
    setUpdateMode(true);
    setUpdateReportType(reportType);
    setUpdateReportId(reportId);

    switch (reportType) {
      case "Hazard":
        // Fetch the report details and set the atoms
        queryReportById(reportId, (report) => {
          if (report) {
            navigation.navigate("StartNewHazardReport", {
              screen: "Update Hazard Report Page",
              params: { report },
            });
          }
        });
        break;
      case "CERT":
        // Fetch the report details and set the atoms
        queryReportById(reportId, (report) => {
          if (report) {
            console.log("report.report_data: ", report.report_data);
            setCertReport(report.report_data);
            // Navigate to the next screen after setting the atoms
            navigation.navigate("CERTReportNavigation", {
              screen: "Update CERT Report Page",
              params: { reportId },
            });
          }
        });
        break;
      case "MYN":
        // Fetch the report details and set the atoms
        queryReportById(reportId, (report) => {
          if (report) {
            console.log("report.report_data: ", report.report_data);
            setMynReport(report.report_data);
            // Navigate to the next screen after setting the atoms
            navigation.navigate("MYNReportNavigation", {
              screen: "Update MYN Report Page",
              params: { reportId },
            });
          }
        });
        break;
      default:
        console.error(`Unknown report type: ${reportType}`);
    }
  };
  return (
    <TouchableOpacity style={styles.reportContainer} onPress={handlePress}>
      <Text style={styles.reportAddress}>Report ID: {reportId}</Text>
      <Text style={styles.reportTime}>{startTime}</Text>
    </TouchableOpacity>
  );
};
export const ViewSavedReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedType, setSelectedType] = useState("MYN");

  useEffect(() => {
    const fetchData = async () => {
      await queryReportsByType(selectedType, (fetchedReports) => {
        setReports(fetchedReports);
      });
    };
    fetchData();
  }, [selectedType]);

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.list}>
        <ReportTypeRadioButton
          value={selectedType}
          onChange={setSelectedType}
        />
        <FlatList
          data={reports}
          keyExtractor={(item) => item.report_id.toString()}
          renderItem={({ item }) =>
            selectedType === "MYN" || selectedType === "CERT" ? (
              item.report_data &&
              item.report_data.info &&
              item.report_data.location ? (
                <ReportCard
                  reportId={item.report_id}
                  groupName={item.report_data.info.groupName}
                  startTime={item.report_data.info.startTime}
                  address={item.report_data.location.address}
                  city={item.report_data.location.city}
                  state={item.report_data.location.state}
                  zip={item.report_data.location.zip}
                />
              ) : null
            ) : (
              <ReportCard
                reportId={item.report_id}
                groupName="Hazard Report"
                startTime={item.report_data.startTime}
                reportType="Hazard"
              />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewSavedReports;
