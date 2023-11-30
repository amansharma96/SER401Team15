import * as React from "react";
import { useState } from "react";
import { Text, View, Button, TextInput, Alert, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";
import { StructureCondition, StructureType } from "../../components/dataLists";

function LocationPage() {
  const [structType, setStructureType] = React.useState('');
  const [structCondition, setStructureCondition] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [isFocus, setIsFocus] = useState(false);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Check if values in CERTReportObject are not null before setting the state
    if (certReportObject.StructureType) {
      setStructureType(certReportObject.StructureType);
    }
    if (certReportObject.StructureCondition) {
      setStructureCondition(certReportObject.StructureCondition);
    }
    if (certReportObject.LocationAddress) {
      setAddress(certReportObject.LocationAddress);
    }
  };

  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
    check_form(0);
  }, [structType, structCondition]);

  const check_form = (action) => {
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

    if (requiredFieldsList.length > 0 && action == 1) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      global.CERTpage2Complete = false;
      console.log("invalid_1!: " + global.CERTpage2Complete);
    } else if (requiredFieldsList.length > 0 && action == 0) {
      global.CERTpage2Complete = false;
      console.log("invalid_2!: " + global.CERTpage2Complete);
    } else {
      certReportObject.StructureType = structType;
      certReportObject.StructureCondition = structCondition;
      certReportObject.LocationAddress = address;
      global.CERTpage2Complete = true;
      console.log("Valid!: " + global.CERTpage2Complete);
    }
  };

  function handleClick() {
    check_form(1);
  }

  return (    
    <ScrollView>
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
            onChangeText={setAddress}
            placeholder="Enter Address"
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
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Check Form"
          onPress={handleClick}
        />
      </View>
    </View>    
    </ScrollView>
  );
}
export default LocationPage;
