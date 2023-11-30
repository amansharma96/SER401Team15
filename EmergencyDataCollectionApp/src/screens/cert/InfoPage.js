import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

function InfoPage() {
  //const page1Complete = false;

  const [dateTime, setDateTime] = useState("");
  const [CERTGroupVal, setSelectedCERTGroup] = React.useState("");
  const [SquadNameVal, setSelectedSquadName] = React.useState("");
  const [NumVisitVal, setSelectedNumVisit] = React.useState("");
  const [RoadStatusVal, setSelectedRoadStatus] = React.useState("");

  const CERTGroup = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
  ];

  const SquadName = [
    { key: "1", value: "Name 1" },
    { key: "2", value: "Name 2" },
    { key: "3", value: "Name 3" },
    { key: "4", value: "Name 4" },
  ];

  const NumVisit = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
  ];

  const RoadStatus = [
    { key: "1", value: "Good" },
    { key: "2", value: "Poor" },
    { key: "3", value: "Lethal" },
    { key: "4", value: "Impassable" },
  ];

  return (
    <View style={styles.CONTAINER} testID="CERTstart">
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>Situation Report</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Date & Time: </Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              fontSize: 15,
            }}
            placeholder="Automatically filled in Time/date"
            value={dateTime}
            onChangeText={(value) => {
              setDateTime(value);
            }}
          />
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What CERT Group?</Text>
        </View>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
          <SelectList
            setSelected={(val) => setSelectedCERTGroup(val)}
            data={CERTGroup}
            save="value"
          />
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What Squad Name?</Text>
        </View>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
          <SelectList
            setSelected={(val) => setSelectedSquadName(val)}
            data={SquadName}
            save="value"
          />
        </View>
      </View>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER2TEXT}>What number visit is this?</Text>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
          <SelectList
            setSelected={(val) => setSelectedNumVisit(val)}
            data={NumVisit}
            save="value"
          />
        </View>
      </View>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER2TEXT}>
          What is the status of ROAD access to the structure?
        </Text>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
          <SelectList
            setSelected={(val) => setSelectedRoadStatus(val)}
            data={RoadStatus}
            save="value"
          />
        </View>
      </View>
    </View>
  );
}

export default InfoPage;

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: "column",
    alignItems: "bottom",
    justifyContent: "bottom",
    width: "100%",
  },
  CONTAINER_ROW: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    width: "100%",
  },
  CONTAINER_ROW_TEMP: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  CONTAINER_ROW_DROPDOWN: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  BUTTONCONTAINER: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    width: "75%",
  },
  HEADER1TEXT: {
    fontSize: 20,
    fontWeight: "bold",
  },
  HEADER2TEXT: {
    fontSize: 16,
    fontWeight: "bold",
  },
  TEXT: {
    fontSize: 15,
  },
  TEXT_TEMP: {
    fontSize: 15,
    color: "red",
  },
  SAVEBUTTON: {
    flexDirection: "column",
    verticalAlign: "bottom",
    alignSelf: "center",
    justifyContent: "center",
    width: "75%",
    marginVertical: 20,
  },
});
