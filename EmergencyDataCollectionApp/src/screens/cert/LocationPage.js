import * as React from "react";
import { useState } from "react";
import { Text, View, Button, TextInput, Alert, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import { useReportContext } from "../../components/ReportContext";
import { StructureCondition, StructureType } from "../../components/dataLists";
import Theme from "../../utils/Theme";

const LocationPage = ({ navigation }) => {
  const [structType, setStructureType] = React.useState("");
  const [structCondition, setStructureCondition] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [isFocus, setIsFocus] = useState(false);
  const reportObject = useReportContext();

  const onLoad = () => {
    // Set as active screen
    global.CERTpage1Active = false;
    global.CERTpage2Active = true;
    global.CERTpage3Active = false;
    global.CERTpage4Active = false;
    global.CERTpage5Active = false;
    // Check if values in CERTReportObject are not null before setting the state
    if (reportObject.StructureType) {
      setStructureType(reportObject.StructureType);
    }
    if (reportObject.StructureCondition) {
      setStructureCondition(reportObject.StructureCondition);
    }
    if (reportObject.LocationAddress) {
      setAddress(reportObject.LocationAddress);
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

    if (requiredFieldsList.length > 0 && action === 1) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      global.CERTpage2Complete = false;
    } else if (requiredFieldsList.length > 0 && action === 0) {
      global.CERTpage2Complete = false;
    } else {
      reportObject.StructureType = structType;
      reportObject.StructureCondition = structCondition;
      reportObject.LocationAddress = address;
      global.CERTpage2Complete = true;
    }
  };

  function handleClick() {
    check_form(1);
    if (global.CERTpage2Complete) {
      navigation.navigate("Hazards");
    }
  }

  return (
    <ScrollView>
      <View>
        <View>
          <View style={styles.container}>
            <Text style={styles.HEADER1TEXT}>Location Information</Text>
          </View>
          <View style={styles.container}>
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
          <View>
            <Text style={styles.HEADER1TEXT}>Structure Information</Text>
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.bottomButtonContainer}>
            <Button
              title="Next"
              color={Theme.COLORS.BACKGROUND_YELLOW}
              onPress={() => {
                // Navigate using the `navigation` prop that you received
                handleClick();
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default LocationPage;
