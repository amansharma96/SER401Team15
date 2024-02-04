import { Alert } from "react-native";

const ValidateHazardData = ({
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
}) => {
  const requiredFieldsList = [];
  if (!structureType) {
    setIsStructureTypeInvalid(true);
    requiredFieldsList.push("► 1. Structure Type");
  }
  if (!structureCondition) {
    setIsStructureConditionInvalid(true);
    requiredFieldsList.push("► 2. Structure Condition");
  }
  if (!hazardFire) {
    setIsHazardFireInvalid(true);
    requiredFieldsList.push("► 3. Fire Hazard");
  }
  if (!hazardPropane) {
    setIsHazardPropaneInvalid(true);
    requiredFieldsList.push("► 4. Propane or Gas Hazard");
  }
  if (!hazardWater) {
    setIsHazardWaterInvalid(true);
    requiredFieldsList.push("► 5. Water Hazard");
  }
  if (!hazardElectrical) {
    setIsHazardElectricalInvalid(true);
    requiredFieldsList.push("► 6. Electrical Hazard");
  }
  if (!hazardChemical) {
    setIsHazardChemicalInvalid(true);
    requiredFieldsList.push("► 7. Chemical Hazard");
  }

  if (requiredFieldsList.length > 0) {
    Alert.alert(
      "Validation Error",
      "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
    );
    setHazardPageValidated(false);
    return false;
  }

  setHazardPageValidated(true);
  setTabIndex(tabIndex + 1);
  return true;
};

export default ValidateHazardData;
