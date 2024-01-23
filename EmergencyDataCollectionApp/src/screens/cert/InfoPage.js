import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import Theme from "../../utils/Theme";
import { useCERTReportContext } from "../../components/CERTReportContext";
import {
  CERTGroupNum,
  RoadCondition,
  SquadNames,
  visitNumbers,
} from "../../components/dataLists";

const InfoPage = ({navigation}) => {
  const [dateTime, setDateTime] = React.useState(null);
  const [CERTGroupVal, setSelectedCERTGroup] = React.useState(null);
  const [SquadNameVal, setSelectedSquadName] = React.useState(null);
  const [NumVisitVal, setSelectedNumVisit] = React.useState(null);
  const [RoadStatusVal, setSelectedRoadStatus] = React.useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Set as active screen
    global.CERTpage1Active = true;
    global.CERTpage2Active = false;
    global.CERTpage3Active = false;
    global.CERTpage4Active = false;
    global.CERTpage5Active = false;
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
    check_form(0);
  }, []);

  const check_form = (action) => {
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

    if (requiredFieldsList.length > 0 && action === 1) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      global.CERTpage1Complete = false;
    } else if (requiredFieldsList.length > 0 && action === 0) {
      global.CERTpage1Complete = false;
    } else {
      certReportObject.StartTime = dateTime;
      certReportObject.CERTGroupNumber = CERTGroupVal;
      certReportObject.SquadName = SquadNameVal;
      certReportObject.VisitNumber = NumVisitVal;
      certReportObject.RoadAccess = RoadStatusVal;
      global.CERTpage1Complete = true;
    }
  };

  function handleClick() {
    check_form(1);
    if (global.CERTpage1Complete) {
      navigation.navigate("Location");
    }
  }

  return (
    <ScrollView testID="CERTstart">
      <View>
        <View style={styles.container}>
          <Text style={styles.HEADER1TEXT}>General Information</Text>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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

export default InfoPage;
