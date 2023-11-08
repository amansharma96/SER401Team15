import * as React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

function LocationPage() {
    const [structureType, setStructureType] = React.useState("");
    const [structureCondition, setStructureCondition] = React.useState("");
  
    const structureTypes = [
      { key: '1', value: 'Structure 1' },
      { key: '2', value: 'Structure 2' },
      { key: '3', value: 'Structure 3' },
      { key: '4', value: 'Structure 4' },
      { key: '5', value: 'Structure 5' },
      { key: '6', value: 'Structure 6' },
      { key: '7', value: 'Structure 7' },
    ]
  
    const structureConditions = [
      { key: '1', value: 'Good' },
      { key: '2', value: 'Poor' },
      { key: '3', value: 'Hazardous' },
    ]
  
    return (
      <View style={styles.CONTAINER}>
        <View style={styles.CONTAINER}>
          <Text style={styles.HEADER1TEXT}>Location Information</Text>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>*Address:</Text>
          </View>
          <View style={styles.CONTAINER_ROW_TEMP}>
            <TextInput style={{borderWidth: 1, padding: 10, borderRadius: 5, fontSize: 15, width: "100%"}} placeholder="Please Enter Adress"></TextInput>
          </View>
          <View style={styles.CONTAINER_ROW_TEMP}>
            <View style={styles.SAVEBUTTON}>
              <Button
                title="GPS DATA"
                onPress={null} // Change this to saving the report
              />
            </View>
          </View>
        </View>
        <View style={styles.CONTAINER}>
          <Text style={styles.HEADER2TEXT}>Structure Information</Text>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>*What type of STRUCTURE is it?</Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureType(val)} data={structureTypes} save="value" />
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>*What is the STRUCTRE's condition?</Text>
          </View>
          <View style={styles.CONTAINER_ROW_DROPDOWN}>
              <SelectList setSelected={(val) => setStructureCondition(val)} data={structureConditions} save="value" />
          </View>
        </View>
      </View>
    );
}
export default LocationPage;


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