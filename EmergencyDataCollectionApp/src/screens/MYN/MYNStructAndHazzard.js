import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import Button from "../../components/Button";
import { useMYNReportContext } from "../../components/MYNReportContect";
import {
  StructureType,
  StructureCondition,
  HazzardChemical,
  HazzardElectrical,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
} from "../../components/dataLists";

const MYNStructAndHazzard = ({ addVisibleTab }) => {
  const [valueStructureType, setvalueStructureType] = useState(null);
  const [valueStructureCondition, setvalueStructureCondition] = useState(null);
  const [valueHazzardFire, setvalueFire] = useState(null);
  const [valueHazzardPropane, setvaluePropane] = useState(null);
  const [valueHazzardWater, setvalueWater] = useState(null);
  const [valueHazzardElectrical, setvalueElectrical] = useState(null);
  const [valueHazzardChemical, setvalueChemical] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const mynReportObject = useMYNReportContext();
  const [requiredFields, setRequiredFields] = useState([]);

  const onLoad = () => {
    // Check if values in mynReportObject are not null before setting the state
    if (mynReportObject.StructureType) {
      setvalueStructureType(mynReportObject.StructureType);
    }
    if (mynReportObject.StructureCondition) {
      setvalueStructureCondition(mynReportObject.StructureCondition);
    }
    if (mynReportObject.FireHazards) {
      setvalueFire(mynReportObject.FireHazards);
    }
    if (mynReportObject.PropaneOrGasHazards) {
      setvaluePropane(mynReportObject.PropaneOrGasHazards);
    }
    if (mynReportObject.WaterHazards) {
      setvalueWater(mynReportObject.WaterHazards);
    }
    if (mynReportObject.ElectricalHazards) {
      setvalueElectrical(mynReportObject.ElectricalHazards);
    }
    if (mynReportObject.ChemicalHazards) {
      setvalueChemical(mynReportObject.ChemicalHazards);
    }
  };

  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
  }, []);

  const saveDraft = () => {
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
      setRequiredFields(requiredFieldsList);
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFields.join("\n"),
      );
      return;
    }
    mynReportObject.StructureType = valueStructureType;
    mynReportObject.StructureCondition = valueStructureCondition;
    mynReportObject.FireHazards = valueHazzardFire;
    mynReportObject.PropaneOrGasHazards = valueHazzardPropane;
    mynReportObject.WaterHazards = valueHazzardWater;
    mynReportObject.ElectricalHazards = valueHazzardElectrical;
    mynReportObject.ChemicalHazards = valueHazzardChemical;
    addVisibleTab("People");
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
          title="Validate Anwsers"
          onPress={saveDraft}
        />
      </View>
    </View>
  );
};
export default MYNStructAndHazzard;
