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
    return false;
  }

  setHazardPageValidated(true);
  setTabIndex(tabIndex + 1);
  return true;
};

export default ValidateHazardData;
