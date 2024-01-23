import React from "react";
import { ScrollView, View, Text, Button, RefreshControl } from "react-native";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";
import Theme from "../../utils/Theme";

const CERTResults = () => {
  const certReport = useCERTReportContext();
  const [refreshing, setRefreshing] = React.useState(false);

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

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.box}>
        <View style={styles.container}>
          <Text style={styles.boldText}>General Information</Text>
          <Text>{`Start Time: ${certReport.StartTime}`}</Text>
          <Text>{`GPS: ${certReport.Lat}, ${certReport.Long}`}</Text>
          <Text>{`CERT Group Name: ${certReport.certGroupName}`}</Text>
          <Text>{`Squad Name: ${certReport.SquadName}`}</Text>
          <Text>{`Visit Number: ${certReport.VisitNumber}`}</Text>
          <Text>{`Road Access: ${certReport.RoadAccess}`}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.boldText}>Location Data</Text>
          <Text>{`Location Address: ${certReport.LocationAddress}`}</Text>
          <Text>{`Structure Type: ${certReport.StructureType}`}</Text>
          <Text>{`Strucutre Condition: ${certReport.StructureCondition}`}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.boldText}>Hazards</Text>
          <Text>{`Fire Hazards: ${certReport.FireHazards}`}</Text>
          <Text>{`Propane or Gas Hazards: ${certReport.PropaneOrGasHazards}`}</Text>
          <Text>{`Water Hazards: ${certReport.WaterHazards}`}</Text>
          <Text>{`Electrical Hazards: ${certReport.ElectricalHazards}`}</Text>
          <Text>{`Chemical Hazards: ${certReport.ChemicalHazards}`}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.boldText}>Personal</Text>
          <Text>{`Rescued People Green: ${certReport.RescuedPeopleGreen}`}</Text>
          <Text>{`Rescued People Yellow: ${certReport.RescuedPeopleYellow}`}</Text>
          <Text>{`Rescued People Red: ${certReport.RescuedPeopleRed}`}</Text>
          <Text>{`Deceased People: ${certReport.DeceasedPeople}`}</Text>
          <Text>{`Deceased People: ${certReport.DeceasedPeopleLocation}`}</Text>
          <Text>{`People Trapped: ${certReport.PeopleTrapped}`}</Text>
          <Text>{`People Need Shelter: ${certReport.PeopleNeedShelter}`}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.boldText}>Finish</Text>
          <Text>{`Finish Time: ${certReport.FinishTime}`}</Text>
          <Text>{`Notes: ${certReport.Notes}`}</Text>
        </View>

        <View style={styles.SAVEBUTTON}>
          <Button title="Refresh" onPress={handleClick} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CERTResults;
