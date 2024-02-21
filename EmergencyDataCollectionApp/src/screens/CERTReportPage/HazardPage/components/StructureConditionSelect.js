import { StructureCondition } from "./selectOptions";
import CustomSelect from "../../../../components/CustomForms/CustomSelect/CustomSelect";

const StructureConditionSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={StructureCondition}
      label="2. What is the structure's condition?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="cert-report-hazard-page-structure-condition-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default StructureConditionSelect;
