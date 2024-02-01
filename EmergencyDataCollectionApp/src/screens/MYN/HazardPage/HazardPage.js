import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";

import {
  StructureType,
  StructureCondition,
  HazardFire,
  HazardPropane,
  HazardWater,
  HazardElectrical,
  HazardChemical,
} from "./selectOptions";
import Button from "../../../components/Button";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import { useMYNReportContext } from "../../../components/MYNReportContect";
import styles from "../styles";

const HazardPage = ({ addVisibleTab }) => {
  const [structureType, setStructureType] = useState(null);
  const [structureCondition, setStructureCondition] = useState(null);
  const [hazardFire, setHazardFire] = useState(null);
  const [hazardPropane, setHazardPropane] = useState(null);
  const [hazardWater, setHazardWater] = useState(null);
  const [hazardElectrical, setHazardElectrical] = useState(null);
  const [hazardChemical, setHazardChemical] = useState(null);
  const mynReportObject = useMYNReportContext();

  const [isStructureTypeInvalid, setIsStructureTypeInvalid] = useState(false);
  const [isStructureConditionInvalid, setIsStructureConditionInvalid] =
    useState(false);
  const [isHazardFireInvalid, setIsHazardFireInvalid] = useState(false);
  const [isHazardPropaneInvalid, setIsHazardPropaneInvalid] = useState(false);
  const [isHazardWaterInvalid, setIsHazardWaterInvalid] = useState(false);
  const [isHazardElectricalInvalid, setIsHazardElectricalInvalid] =
    useState(false);
  const [isHazardChemicalInvalid, setIsHazardChemicalInvalid] = useState(false);

  const handleStructureTypeChange = (value) => {
    setStructureType(value);
    setIsStructureTypeInvalid(false);
  };
  const handleStructureConditionChange = (value) => {
    setStructureCondition(value);
    setIsStructureConditionInvalid(false);
  };
  const handleHazardFireChange = (value) => {
    setHazardFire(value);
    setIsHazardFireInvalid(false);
  };
  const handleHazardPropaneChange = (value) => {
    setHazardPropane(value);
    setIsHazardPropaneInvalid(false);
  };
  const handleHazardWaterChange = (value) => {
    setHazardWater(value);
    setIsHazardWaterInvalid(false);
  };
  const handleHazardElectricalChange = (value) => {
    setHazardElectrical(value);
    setIsHazardElectricalInvalid(false);
  };
  const handleHazardChemicalChange = (value) => {
    setHazardChemical(value);
    setIsHazardChemicalInvalid(false);
  };

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
      setIsStructureTypeInvalid(true);
      requiredFieldsList.push("- Structure Type");
    }
    if (!structureCondition) {
      setIsStructureConditionInvalid(true);
      requiredFieldsList.push("- Structure Condition");
    }
    if (!hazardFire) {
      setIsHazardFireInvalid(true);
      requiredFieldsList.push("- Fire Hazard");
    }
    if (!hazardPropane) {
      setIsHazardPropaneInvalid(true);
      requiredFieldsList.push("- Propane or Gas Hazard");
    }
    if (!hazardWater) {
      setIsHazardWaterInvalid(true);
      requiredFieldsList.push("- Water Hazard");
    }
    if (!hazardElectrical) {
      setIsHazardElectricalInvalid(true);
      requiredFieldsList.push("- Electrical Hazard");
    }
    if (!hazardChemical) {
      setIsHazardChemicalInvalid(true);
      requiredFieldsList.push("- Chemical Hazard");
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
      <Text style={styles.textHeader}>STRUCTURE/HAZARDS</Text>
      <View
        style={{
          flex: 1,
        }}
      >
        <NativeBaseProvider>
          <CustomSelect
            items={StructureType}
            label="What type of structure is it?"
            onchange={handleStructureTypeChange}
            isInvalid={isStructureTypeInvalid}
            testID="myn-report-hazard-structure-type-select"
          />
          <CustomSelect
            items={StructureCondition}
            label="What is the structure's condition?"
            onchange={handleStructureConditionChange}
            isInvalid={isStructureConditionInvalid}
            testID="myn-report-hazard-structure-condition-select"
          />
          <CustomSelect
            items={HazardFire}
            label="Are there any fire hazards?"
            onchange={handleHazardFireChange}
            isInvalid={isHazardFireInvalid}
            testID="myn-report-hazard-fire-hazard-select"
          />
          <CustomSelect
            items={HazardPropane}
            label="Are there any propane or gas hazards?"
            onchange={handleHazardPropaneChange}
            isInvalid={isHazardPropaneInvalid}
            testID="myn-report-hazard-propane-hazard-select"
          />
          <CustomSelect
            items={HazardWater}
            label="Are there any water hazards?"
            onchange={handleHazardWaterChange}
            isInvalid={isHazardWaterInvalid}
            testID="myn-report-hazard-water-hazard-select"
          />
          <CustomSelect
            items={HazardElectrical}
            label="Are there any electrical hazards?"
            onchange={handleHazardElectricalChange}
            isInvalid={isHazardElectricalInvalid}
            testID="myn-report-hazard-electrical-hazard-select"
          />
          <CustomSelect
            items={HazardChemical}
            label="Are there any chemical hazards?"
            onchange={handleHazardChemicalChange}
            isInvalid={isHazardChemicalInvalid}
            testID="myn-report-hazard-chemical-hazard-select"
          />
        </NativeBaseProvider>
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
