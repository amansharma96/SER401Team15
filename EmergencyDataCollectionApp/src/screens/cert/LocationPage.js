import * as React from "react";
import { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useCERTReportContext } from "../../components/CERTReportContext";

import styles from "./styles";
import { StructureCondition, StructureType } from "../../components/dataLists";

function LocationPage() {
  const [structType, setStructureType] = React.useState(null);
  const [structCondition, setStructureCondition] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Check if values in CERTReportObject are not null before setting the state
    if (certReportObject.StructureType) {
      setSelectedCERTGroup(certReportObject.StructureType);
    }
    if (certReportObject.StructureCondition) {
      setSelectedSquadName(certReportObject.StructureCondition);
    }
    if (certReportObject.LocationAddress) {
      setSelectedNumVisit(certReportObject.LocationAddress);
    }
  };

  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
  }, []);

  const check_form = () => {
    const requiredFieldsList = [];
    if (!structType) {
      requiredFieldsList.push("Structure Type");
    }    
    if (!structCondition) {
      requiredFieldsList.push("Structure Condition");
    }    
    if (!address) {
      requiredFieldsList.push("Address");
    }
  
    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return false;
    }
    certReportObject.StructureType = structType;
    certReportObject.StructureCondition = structCondition;
    certReportObject.LocationAddress = address;
    return true;
  };

  return (
    <View>
      <View>
        <Text style={styles.HEADER1TEXT}>Location Information</Text>
        <View>
          <Text>*Address:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              fontSize: 15,
              width: "100%",
            }}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={address}
            onChange={(item) => {
              setAddress(item.value);
            }}
            placeholder="Please Enter Address"
          />
          <View style={styles.button}>
            <Button
              title="GPS DATA"
              onPress={null} // Change this to saving the report
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.HEADER1TEXT}>Structure Information</Text>
        <View>
          <Text>*What type of STRUCTURE is it?</Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={StructureType}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={structType}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setStructureType(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What is the STRUCTRE's condition?</Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={StructureCondition}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={structCondition}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setStructureCondition(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default LocationPage;
