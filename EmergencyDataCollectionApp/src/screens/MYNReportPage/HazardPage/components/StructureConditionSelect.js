import { StructureCondition } from "./selectOptions";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";

const StructureConditionSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={StructureCondition}
      label="What is the structure's condition?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="myn-report-hazard-page-structure-condition-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default StructureConditionSelect;
