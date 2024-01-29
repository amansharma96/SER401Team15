import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Button, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import { useReportContext } from "../../components/ReportContext";
import { dbClass } from "../../utils/Database/db";

const CERTResults = () => {  
  const [page1, setpage1] = React.useState(global.CERTpage1Complete);
  const [page2, setpage2] = React.useState(global.CERTpage2Complete);
  const [page3, setpage3] = React.useState(global.CERTpage3Complete);
  const [page4, setpage4] = React.useState(global.CERTpage4Complete);
  const [page5, setpage5] = React.useState(global.CERTpage5Complete);
  const [refreshing, setRefreshing] = React.useState(false);
  const reportObject = useReportContext();
  const isFocused = useIsFocused();
  const [localReport, setLocalReport] = useState(reportObject);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleClick = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    handleClick();
  }, []);

  useEffect(() => {
    if (isFocused) {
      // Update local state when mynReport changes
      setLocalReport(reportObject);
    }
  }, [isFocused, reportObject]);

  /**
   * @description Function to save the MYN report to the database.
   *
   * @function saveReport
   */
  const saveReport = () => {
    const db = new dbClass();
    db.addRow(reportObject);
    db.printAllEntries();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boldText}>General Information</Text>
          <Text>{`Start Time: ${reportObject.StartTime}`}</Text>
          <Text>{`GPS: ${reportObject.Lat}, ${reportObject.Long}`}</Text>
          <Text>{`CERT Group Name: ${reportObject.GroupName}`}</Text>
          <Text>{`Squad Name: ${reportObject.SquadName}`}</Text>
          <Text>{`Visit Number: ${reportObject.VisitNumber}`}</Text>
          <Text>{`Road Access: ${reportObject.RoadAccess}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Location Address: ${reportObject.LocationAddress}`}</Text>
          <Text>{`Structure Type: ${reportObject.StructureType}`}</Text>
          <Text>{`Strucutre Condition: ${reportObject.StructureCondition}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Hazards</Text>
          <Text>{`Fire Hazards: ${reportObject.FireHazards}`}</Text>
          <Text>{`Propane or Gas Hazards: ${reportObject.PropaneOrGasHazards}`}</Text>
          <Text>{`Water Hazards: ${reportObject.WaterHazards}`}</Text>
          <Text>{`Electrical Hazards: ${reportObject.ElectricalHazards}`}</Text>
          <Text>{`Chemical Hazards: ${reportObject.ChemicalHazards}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${reportObject.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${reportObject.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${reportObject.RescuedPeopleRed}`}</Text>
          <Text>{`Deceased People: ${reportObject.DeceasedPeople}`}</Text>
          <Text>{`Deceased People: ${reportObject.DeceasedPeopleLocation}`}</Text>
          <Text>{`People Trapped: ${reportObject.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${reportObject.PeopleNeedShelter}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Finish</Text>
          <Text>{`Finish Time: ${reportObject.FinishTime}`}</Text>
          <Text>{`Notes: ${reportObject.Notes}`}</Text>
        </View>

        <View style={styles.SAVEBUTTON}>
          <Button title="Refresh" onPress={handleClick} />
          <Button
            title="Save Report"
            disabled={!page1 || !page2 || !page3 || !page4 || !page5}
            onPress={saveReport} // Change this to saving the report
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CERTResults;
