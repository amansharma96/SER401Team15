import React from "react";
import { ScrollView, View, Text, Button, RefreshControl } from "react-native";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";
import { dbClass } from "../../utils/Database/db";

const CERTResults = () => {  
  const [page1, setpage1] = React.useState(global.CERTpage1Complete);
  const [page2, setpage2] = React.useState(global.CERTpage2Complete);
  const [page3, setpage3] = React.useState(global.CERTpage3Complete);
  const [page4, setpage4] = React.useState(global.CERTpage4Complete);
  const [page5, setpage5] = React.useState(global.CERTpage5Complete);
  const [refreshing, setRefreshing] = React.useState(false);
  const certReport = useCERTReportContext();
  const isFocused = useIsFocused();
  const [localCERTReport, setLocalCERTReport] = useState(certReport);

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
      setLocalCERTReport(certReport);
    }
  }, [isFocused, certReport]);

  /**
   * @description Function to save the MYN report to the database.
   *
   * @function saveReport
   */
  const saveReport = () => {
    const db = new dbClass();
    db.addRowCERT(certReport);
    db.printAllCERTEntries();
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
          <Text>{`Start Time: ${certReport.StartTime}`}</Text>
          <Text>{`GPS: ${certReport.Lat}, ${certReport.Long}`}</Text>
          <Text>{`CERT Group Name: ${certReport.certGroupName}`}</Text>
          <Text>{`Squad Name: ${certReport.SquadName}`}</Text>
          <Text>{`Visit Number: ${certReport.VisitNumber}`}</Text>
          <Text>{`Road Access: ${certReport.RoadAccess}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Location Address: ${certReport.LocationAddress}`}</Text>
          <Text>{`Structure Type: ${certReport.StructureType}`}</Text>
          <Text>{`Strucutre Condition: ${certReport.StructureCondition}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Hazards</Text>
          <Text>{`Fire Hazards: ${certReport.FireHazards}`}</Text>
          <Text>{`Propane or Gas Hazards: ${certReport.PropaneOrGasHazards}`}</Text>
          <Text>{`Water Hazards: ${certReport.WaterHazards}`}</Text>
          <Text>{`Electrical Hazards: ${certReport.ElectricalHazards}`}</Text>
          <Text>{`Chemical Hazards: ${certReport.ChemicalHazards}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${certReport.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${certReport.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${certReport.RescuedPeopleRed}`}</Text>
          <Text>{`Deceased People: ${certReport.DeceasedPeople}`}</Text>
          <Text>{`Deceased People: ${certReport.DeceasedPeopleLocation}`}</Text>
          <Text>{`People Trapped: ${certReport.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${certReport.PeopleNeedShelter}`}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boldText}>Finish</Text>
          <Text>{`Finish Time: ${certReport.FinishTime}`}</Text>
          <Text>{`Notes: ${certReport.Notes}`}</Text>
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
