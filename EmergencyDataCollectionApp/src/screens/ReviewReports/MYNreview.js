import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import mockReportsData from "../../utils/constants/mockReportsData";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMYNReportContext } from "../../components/MYNReportContect";
import {
  visitNumbers,
  RoadCondition,
  StructureType,
  StructureCondition,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
  HazzardElectrical,
  HazzardChemical,
  Animals,
  AnimalStatus,
} from "../../components/dataLists";
import { dbClass } from "../../utils/Database/db"

// for testing
import MYNReportObject from "../../components/MYNReportObject"



export const ReportText = ({report}) => {
  const navigation = useNavigation();
  const handleSelectReport = () => {
    navigation.navigate("MYNReportNavigation", { report:report });
  }; 
  
  return (
    <TouchableOpacity style={styles.reportContainer} onPress={handleSelectReport}>
          <Text style={styles.reportAddress}>{report.StreetAddress}</Text> 
    </TouchableOpacity>
  );
};

export const MYNreview = () => {
  // const MYNreports = mockReportsData[0].reports;
  const db = new dbClass();
  const testReport = new MYNReportObject();
  testReport.assignTestData();
  db.addRowMYN(testReport);
  const MYNreports = [];

  const handleReports = (reports) => {
    reports.forEach(e => MYNreports.push(e));
  }
  
  db.getMYNReport(handleReports);
  db.printAllMYNEntries();
  
  
  return (
    <View>
    <Text style={styles.header}>Select a MYN report to review</Text>
    <FlatList
      data={MYNreports}
      renderItem={({ item }) => (
        <ReportText
          report={item}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};

export default MYNreview;


