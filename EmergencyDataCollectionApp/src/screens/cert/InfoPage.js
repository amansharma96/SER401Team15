import React from "react";
import { useState } from "react";
import { Text, View, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useCERTReportContext } from "../../components/CERTReportContext";

import styles from "./styles";
import {
  CERTGroupNum,
  RoadCondition,
  SquadNames,
  visitNumbers,
} from "../../components/dataLists";

const InfoPage = () => {
  const [dateTime, setDateTime] = React.useState(null);
  const [CERTGroupVal, setSelectedCERTGroup] = React.useState(null);
  const [SquadNameVal, setSelectedSquadName] = React.useState(null);
  const [NumVisitVal, setSelectedNumVisit] = React.useState(null);
  const [RoadStatusVal, setSelectedRoadStatus] = React.useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Check if values in CERTReportObject are not null before setting the state
    if (certReportObject.CERTGroupNumber) {
      setSelectedCERTGroup(certReportObject.CERTGroupNumber);
    }
    if (certReportObject.SquadName) {
      setSelectedSquadName(certReportObject.SquadName);
    }
    if (certReportObject.VisitNumber) {
      setSelectedNumVisit(certReportObject.VisitNumber);
    }
    if (certReportObject.RoadAccess) {
      setSelectedRoadStatus(certReportObject.RoadAccess);
    }
  };

  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
  }, []);

  const saveDraft = () => {
    const requiredFieldsList = [];
    if (!dateTime) {
      requiredFieldsList.push("Date & Time");
    }    
    if (!CERTGroupVal) {
      requiredFieldsList.push("CERT Group");
    }    
    if (!SquadNameVal) {
      requiredFieldsList.push("Squad Name");
    }    
    if (!NumVisitVal) {
      requiredFieldsList.push("Visit Number");
    }    
    if (!RoadStatusVal) {
      requiredFieldsList.push("Road Condition");
    }
  
    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return false;
    }
    certReportObject.StartTime = dateTime;
    certReportObject.CERTGroupNumber = CERTGroupVal;
    certReportObject.SquadName = SquadNameVal;
    certReportObject.VisitNumber = NumVisitVal;
    certReportObject.RoadAccess = RoadStatusVal;
    return true;
  };

  return (
    <View>
      <View>
        <Text style={styles.HEADER1TEXT}>General Information</Text>
        <View>
          <Text>*Date & Time: </Text>
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
        <View>
          <Text>*What CERT Group?</Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={CERTGroupNum}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={CERTGroupVal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSelectedCERTGroup(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text style={styles.TEXT}>*What Squad Name?</Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={SquadNames}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={SquadNameVal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSelectedSquadName(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>What number visit is this?</Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={visitNumbers}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={NumVisitVal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSelectedNumVisit(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>What is the status of ROAD access to the structure?</Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={RoadCondition}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={RoadStatusVal}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSelectedRoadStatus(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default InfoPage;
