import { useNavigation } from "@react-navigation/native";
import {useAtom, useSetAtom} from "jotai";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Checkbox, NativeBaseProvider } from "native-base";

import Theme from "../../utils/Theme";
import styles from "./styles";
import {
  queryReportsByType,
  queryReportById,
  queryAllReports
} from "../../utils/Database/OfflineSQLiteDB";
import CustomSelect from "../../components/CustomForms/NativeBase/CustomSelect/CustomSelect";
import { formatDate } from "../MYNReportPage/components/formatDate";
import { ButtonContainer } from "./ButtonContainer";

const ReportButton = ({ reportId, startTime, reportAddress, isChecked, onCheck }) => {
  return (
    <View style={styles.reportContainer}>
      <View style={styles.reportText}>
          <Text style={styles.reportAddress}>{reportId}: {reportAddress}</Text>
          <Text style={styles.reportTime}>{formatDate(new Date(startTime))}</Text>
      </View>
      <Checkbox
        isChecked={isChecked}
        onChange={() => onCheck(reportId)}     
        value={reportId}
        aria-label={`Select report with address ${reportAddress}`}
        bg={Theme.COLORS.BACKGROUND_WHITE}
        borderColor={Theme.COLORS.SEPARATOR_GREY}
        _icon={styles.checkboxIcon}
        _checked={styles.checkboxChecked}
        _pressed={styles.checkboxPressed}
        size="lg"
      />
      </View>      
  );
};

const ExportReports = () => {
  const [reports, setReports] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    queryAllReports((fetchedReports) => {
      console.log("fetchedReports: " + JSON.stringify(fetchedReports, null, 2));
      setReports(fetchedReports);
    });
  }, []);

   const handleSelectType = (selectedType) => {
    if (selectedType == "All") {
      queryAllReports((fetchedReports) => {
        console.log("fetchedReports: " + JSON.stringify(fetchedReports, null, 2));
        setReports(fetchedReports);
      });
    } else {
    queryReportsByType(selectedType, (filteredReports) => {
        console.log("Filtered reports: " + JSON.stringify(filteredReports, null, 2));
        setReports(filteredReports);
      });
    }
   }

   const reportTypes = [
    { label: "All", value: "All" },
    { label: "MYN", value: "MYN" },
    { label: "CERT", value: "CERT" },
    { label: "Hazard", value: "Hazard" },
  ];

  const [checkedReports, setCheckedReports] = React.useState({});
  const [checkAll, setCheckAll] = React.useState(false);
  const handleCheckReport = (id) => {
    setCheckedReports((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const handleCheckAll = () => {
    if (checkAll) {
      console.log("checkall: true");
      setCheckedReports({});
    } else {
      const allReports = {};
      reports.forEach((report) => {
          allReports[report.report_id] = true;
        });
        console.log("reports being checked: " + JSON.stringify(allReports, null, 2));
        setCheckedReports(allReports);
    }
    setCheckAll(!checkAll);
  };

  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.area}>
    <View style={styles.list}>
    <TouchableOpacity
          onPress={handleCheckAll}
          style={styles.selectAllButton}
        >
          <Text style={styles.selectAllButtonText}>
            {checkAll ? "Deselect All" : "Select All"}
          </Text>
        </TouchableOpacity>
        <CustomSelect
            items={reportTypes}
            isRequired={false}
            label="Filter by report type"
            onChange={handleSelectType}
          />
          <FlatList
          data={reports}
          keyExtractor={(item) => item.report_id}
          renderItem={({ item }) => (
            <ReportButton
              reportId={item.report_id}
              startTime={item.report_data.info.startTime}
              reportAddress={item.report_data.location.address}
              onCheck={handleCheckReport}
              isChecked={!!checkedReports[item.report_id]}
            />
          )}
        />

    </View>
    <ButtonContainer 
        reports={checkedReports}
      />
    </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ExportReports;
