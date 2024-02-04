import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import {
  StructureType,
  StructureCondition,
  HazzardChemical,
  HazzardElectrical,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
} from "../../../components/dataLists";
import styles from "../styles";
import {isHazardPageValidated, tabIndexAtom} from "../MYNPageAtoms";
import {useAtomValue, useSetAtom} from "jotai/index";


const HazardPage = () => {
  const [valueStructureType, setvalueStructureType] = useState(null);
  const [valueStructureCondition, setvalueStructureCondition] = useState(null);
  const [valueHazzardFire, setvalueFire] = useState(null);
  const [valueHazzardPropane, setvaluePropane] = useState(null);
  const [valueHazzardWater, setvalueWater] = useState(null);
  const [valueHazzardElectrical, setvalueElectrical] = useState(null);
  const [valueHazzardChemical, setvalueChemical] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const setHazardPageValidated = useSetAtom(isHazardPageValidated);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom)

  const validateData = () => {
    const requiredFieldsList = [];
    if (!valueStructureType) {
      requiredFieldsList.push("Structure Type");
    }
    if (!valueStructureCondition) {
      requiredFieldsList.push("Structure Condition");
    }
    if (!valueHazzardFire) {
      requiredFieldsList.push("Fire Hazzard");
    }
    if (!valueHazzardPropane) {
      requiredFieldsList.push("Propane or Gas Hazzard");
    }
    if (!valueHazzardWater) {
      requiredFieldsList.push("Water Hazzard");
    }
    if (!valueHazzardElectrical) {
      requiredFieldsList.push("Electrical Hazzard");
    }
    if (!valueHazzardChemical) {
      requiredFieldsList.push("Chemical Hazzard");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setHazardPageValidated(false);
      return;
    }

    setHazardPageValidated(true);
    setTabIndex(tabIndex + 1);
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
    </View>
  );
};
export default HazardPage;
