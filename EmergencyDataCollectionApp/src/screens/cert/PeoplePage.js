import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";


function PeoplePage() {

    const structureTypes = [
      { key: '1', value: 'Structure 1' },
      { key: '2', value: 'Structure 2' },
      { key: '3', value: 'Structure 3' },
      { key: '4', value: 'Structure 4' },
      { key: '5', value: 'Structure 5' },
      { key: '6', value: 'Structure 6' },
      { key: '7', value: 'Structure 7' },
    ]
  
    return (
      <View style={styles.CONTAINER}>
        <View style={styles.CONTAINER}>
          <Text style={styles.HEADER1TEXT}>People Information</Text>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>
              *How many people rescued GREEN status:{" "}
            </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>
              *How many people rescued YELLOW status:{" "}
            </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>*How many people rescued RED status: </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>
              *How many people rescued DECEASED status:
            </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>
              *Location of DECEASED: (only display if DECEASED GREATERTHAN 0){" "}
            </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>*How many people TRAPPED: </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>*How many people needing SHELTER: </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>
              *How many people from other neighborhoods require first aid:{" "}
            </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>
              *How many people from other neighborhoods require shelter:{" "}
            </Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
        </View>
      </View>
    );
}
export default PeoplePage;


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