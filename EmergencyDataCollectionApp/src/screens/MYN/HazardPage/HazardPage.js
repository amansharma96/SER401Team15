import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import Button from "../../../components/Button";
import { useMYNReportContext } from "../../../components/MYNReportContect";
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

const HazardPage = ({ addVisibleTab }) => {
  const [structureType, setStructureType] = useState(null);
  const [structureCondition, setStructureCondition] = useState(null);
  const [hazardFire, setHazardFire] = useState(null);
  const [hazardPropane, setHazardPropane] = useState(null);
  const [hazardWater, setHazardWater] = useState(null);
  const [hazardElectrical, setHazardElectrical] = useState(null);
  const [hazardChemical, setHazardChemical] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const mynReportObject = useMYNReportContext();

  const onLoad = () => {
    // Check if values in mynReportObject are not null before setting the state
    if (mynReportObject.StructureType) {
      setStructureType(mynReportObject.StructureType);
    }
    if (mynReportObject.StructureCondition) {
      setStructureCondition(mynReportObject.StructureCondition);
    }
    if (mynReportObject.FireHazards) {
      setHazardFire(mynReportObject.FireHazards);
    }
    if (mynReportObject.PropaneOrGasHazards) {
      setHazardPropane(mynReportObject.PropaneOrGasHazards);
    }
    if (mynReportObject.WaterHazards) {
      setHazardWater(mynReportObject.WaterHazards);
    }
    if (mynReportObject.ElectricalHazards) {
      setHazardElectrical(mynReportObject.ElectricalHazards);
    }
    if (mynReportObject.ChemicalHazards) {
      setHazardChemical(mynReportObject.ChemicalHazards);
    }
  };
  // Load data on component mount
  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
  }, []);

  const saveDraft = () => {
    const requiredFieldsList = [];
    if (!structureType) {
      requiredFieldsList.push("Structure Type");
    }
    if (!structureCondition) {
      requiredFieldsList.push("Structure Condition");
    }
    if (!hazardFire) {
      requiredFieldsList.push("Fire Hazard");
    }
    if (!hazardPropane) {
      requiredFieldsList.push("Propane or Gas Hazard");
    }
    if (!hazardWater) {
      requiredFieldsList.push("Water Hazard");
    }
    if (!hazardElectrical) {
      requiredFieldsList.push("Electrical Hazard");
    }
    if (!hazardChemical) {
      requiredFieldsList.push("Chemical Hazard");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return;
    }
    mynReportObject.StructureType = structureType;
    mynReportObject.StructureCondition = structureCondition;
    mynReportObject.FireHazards = hazardFire;
    mynReportObject.PropaneOrGasHazards = hazardPropane;
    mynReportObject.WaterHazards = hazardWater;
    mynReportObject.ElectricalHazards = hazardElectrical;
    mynReportObject.ChemicalHazards = hazardChemical;
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
          value={structureType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setStructureType(item.value);
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
          value={structureCondition}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setStructureCondition(item.value);
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
          value={hazardFire}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setHazardFire(item.value);
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
          value={hazardPropane}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setHazardPropane(item.value);
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
          value={hazardWater}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setHazardWater(item.value);
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
          value={hazardElectrical}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setHazardElectrical(item.value);
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
          value={hazardChemical}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setHazardChemical(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.Lower}>
        <Text>* are required fields</Text>
        <Button
          style={styles.bottomButtonContainer}
          title="Next"
          onPress={saveDraft}
        />
      </View>
    </View>
  );
};
export default HazardPage;
