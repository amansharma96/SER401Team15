import React, { useContext, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import Button from "../../components/Button";
import { IDContext } from "../../components/IDContext";

import {
  visitNumbers,
  RoadCondition,
  States,
} from "../../components/dataLists";

const MYNReportLocation = () => {
  const DropdownComponent = () => {
    const { ID}  = useContext(IDContext);
    const [valueVisit, setValueVisit] = useState(null);
    const [valueRoadCondition, setValueRoadCondition] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [address, onChangeAddress] = React.useState("123 Generic address");
    const [city, onChangeCity] = React.useState("hometown");
    const [valueState, setValueState] = React.useState(null);
    const [zip, onChangeZip] = React.useState("5555");
    

    const saveDraft = () => {
      console.log(ID);
    };

    return (
      <View style={styles.container}>
        <View style={styles.Upper}>
          <Text style={styles.textHeader}>LOCATION</Text>
          <Text>Is this your first visit to this address?*</Text>
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
            value={valueVisit}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueVisit(item.value);
              setIsFocus(false);
            }}
          />
          <Text>How good is the ROAD access to this location?*</Text>
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
            value={valueRoadCondition}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValueRoadCondition(item.value);
              setIsFocus(false);
            }}
          />
          <Text>Address*</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
          />
          <Text>City*</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCity}
            value={city}
          />
          <View style={styles.inlineContainer}>
            <View style={styles.inlineItem}>
              <Text>State?*</Text>
              <Dropdown
                style={[styles.dropdownSmall, { marginRight: 10 }]} // Adjust the margin as needed
                data={States}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "" : ""}
                searchPlaceholder="Search..."
                value={valueState}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValueState(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <View style={styles.inlineItem}>
              <Text>Zip?*</Text>
              <TextInput
                style={[styles.inputSmall, { marginLeft: 10 }]} // Adjust the margin as needed
                onChangeText={onChangeZip}
                value={zip}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View style={styles.Lower}>
          <Text>* are required fields</Text>
          <Button
            style={styles.bottomButtonContainer}
            title="Save current draft of report"
            onPress={saveDraft}
          />
        </View>
      </View>
    );
  };

  return <DropdownComponent />;
};

export default MYNReportLocation;
