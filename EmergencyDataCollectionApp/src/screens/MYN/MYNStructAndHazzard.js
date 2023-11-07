import React, { useState,useContext } from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import Button from "../../components/Button";
import {
  StructureType,
  StructureCondition,
  HazzardChemical,
  HazzardElectrical,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
} from "../../components/dataLists";
import { IDContext } from "../../components/IDContext";

const MYNStructAndHazzard = () => {
  const { ID } = useContext(IDContext);
  const [valueStructureType, setvalueStructureType] = useState(null);
  const [valueStructureCondition, setvalueStructureCondition] = useState(null);
  const [valueHazzardFire, setvalueFire] = useState(null);
  const [valueHazzardPropane, setvaluePropane] = useState(null);
  const [valueHazzardWater, setvalueWater] = useState(null);
  const [valueHazzardElectrical, setvalueElectrical] = useState(null);
  const [valueHazzardChemical, setvalueChemical] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const saveDraft = () => {
    //place holder for logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.Upper}>
        <Text style={styles.textHeader}>STRUCTURE/HAZARDS</Text>
        <Text>What Type of Structure is it?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={StructureType}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueStructureType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvalueStructureType(item.value);
            setIsFocus(false);
          }}
        />
        <Text>What is the STRUCTURE'S condition?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={StructureCondition}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueStructureCondition}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvalueStructureCondition(item.value);
            setIsFocus(false);
          }}
        />
        <Text>Are there any fire hazards?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={HazzardFire}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueHazzardFire}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvalueFire(item.value);
            setIsFocus(false);
          }}
        />
        <Text>Any Propane or Gas Hazards?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={HazzardPropane}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueHazzardPropane}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvaluePropane(item.value);
            setIsFocus(false);
          }}
        />
        <Text>Any Water Hazards?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={HazzardWater}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueHazzardWater}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvalueWater(item.value);
            setIsFocus(false);
          }}
        />
        <Text>Any Electrical hazards?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={HazzardElectrical}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueHazzardElectrical}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvalueElectrical(item.value);
            setIsFocus(false);
          }}
        />
        <Text>Any Chemical hazards?*</Text>
        <Dropdown
          style={styles.dropdown}
          data={HazzardChemical}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueHazzardChemical}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setvalueChemical(item.value);
            setIsFocus(false);
          }}
        />
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
export default MYNStructAndHazzard;
