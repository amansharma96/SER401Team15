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



export const ReportText = ({report}) => {
  const navigation = useNavigation();
  const handleSelectReport = () => {
    navigation.navigate("MYNReportNavigation");
  };
  return (
    <TouchableOpacity style={styles.reportContainer} onPress={handleSelectReport}>
          <Text style={styles.reportAddress}>{report.address}</Text>
    </TouchableOpacity>
  );
};

export const MYNreview = () => {
  let MYNreports = mockReportsData[0].reports;
  /*for (let i in mockReportsData) {
    MYNreports =
      mockReportsData[i].type === "MYN Report" 
        ?  mockReportsData[i].reports 
        : null;
  }*/
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


