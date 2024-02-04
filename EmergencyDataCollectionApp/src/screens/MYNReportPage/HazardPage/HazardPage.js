import { useAtomValue, useSetAtom } from "jotai/index";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { View, Alert, ScrollView } from "react-native";

import {
  StructureType,
  StructureCondition,
  HazardFire,
  HazardPropane,
  HazardWater,
  HazardElectrical,
  HazardChemical,
} from "./components/selectOptions";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import Theme from "../../../utils/Theme";
import { isHazardPageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

const HazardPage = () => {
  const [structureType, setStructureType] = useState(null);
  const [structureCondition, setStructureCondition] = useState(null);
  const [hazardFire, setHazardFire] = useState(null);
  const [hazardPropane, setHazardPropane] = useState(null);
  const [hazardWater, setHazardWater] = useState(null);
  const [hazardElectrical, setHazardElectrical] = useState(null);
  const [hazardChemical, setHazardChemical] = useState(null);

  const [isStructureTypeInvalid, setIsStructureTypeInvalid] = useState(false);
  const [isStructureConditionInvalid, setIsStructureConditionInvalid] =
    useState(false);
  const [isHazardFireInvalid, setIsHazardFireInvalid] = useState(false);
  const [isHazardPropaneInvalid, setIsHazardPropaneInvalid] = useState(false);
  const [isHazardWaterInvalid, setIsHazardWaterInvalid] = useState(false);
  const [isHazardElectricalInvalid, setIsHazardElectricalInvalid] =
    useState(false);
  const [isHazardChemicalInvalid, setIsHazardChemicalInvalid] = useState(false);

  const setHazardPageValidated = useSetAtom(isHazardPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

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

  const validateData = () => {
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
      setHazardPageValidated(false);
      return;
    }

    setHazardPageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 1,
          backgroundColor: Theme.COLORS.SEPARATOR_GREY,
          marginVertical: 10,
        }}
      />
      <ScrollView>
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
      </ScrollView>
      <NavigationButtons validateData={validateData} />
    </View>
  );
};
export default HazardPage;
