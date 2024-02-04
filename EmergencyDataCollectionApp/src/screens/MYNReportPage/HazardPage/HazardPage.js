import { useAtomValue, useSetAtom } from "jotai/index";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import HazardChemicalSelect from "./components/HazardChemicalSelect";
import HazardElectricalSelect from "./components/HazardElectricalSelect";
import HazardFireSelect from "./components/HazardFireSelect";
import HazardPropaneSelect from "./components/HazardPropaneSelect";
import HazardWaterSelect from "./components/HazardWaterSelect";
import StructureConditionSelect from "./components/StructureConditionSelect";
import StructureTypeSelect from "./components/StructureTypeSelect";
import ValidateHazardData from "./components/validateHazardData";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
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

  const handleValidation = () => {
    ValidateHazardData({
      structureType,
      setIsStructureTypeInvalid,
      structureCondition,
      setIsStructureConditionInvalid,
      hazardFire,
      setIsHazardFireInvalid,
      hazardPropane,
      setIsHazardPropaneInvalid,
      hazardWater,
      setIsHazardWaterInvalid,
      hazardElectrical,
      setIsHazardElectricalInvalid,
      hazardChemical,
      setIsHazardChemicalInvalid,
      setHazardPageValidated,
      setTabIndex,
      tabIndex,
    });
  };

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <LineSeparator />
        <ScrollView>
          <StructureTypeSelect
            onChange={handleStructureTypeChange}
            isInvalid={isStructureTypeInvalid}
          />
          <StructureConditionSelect
            onChange={handleStructureConditionChange}
            isInvalid={isStructureConditionInvalid}
          />
          <HazardFireSelect
            onChange={handleHazardFireChange}
            isInvalid={isHazardFireInvalid}
          />
          <HazardPropaneSelect
            onChange={handleHazardPropaneChange}
            isInvalid={isHazardPropaneInvalid}
          />
          <HazardWaterSelect
            onChange={handleHazardWaterChange}
            isInvalid={isHazardWaterInvalid}
          />
          <HazardElectricalSelect
            onChange={handleHazardElectricalChange}
            isInvalid={isHazardElectricalInvalid}
          />
          <HazardChemicalSelect
            onChange={handleHazardChemicalChange}
            isInvalid={isHazardChemicalInvalid}
          />
        </ScrollView>
        <NavigationButtons validateData={handleValidation} />
      </View>
    </NativeBaseProvider>
  );
};
export default HazardPage;
