import { StructureType } from "./selectOptions";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";

const StructureTypeSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={StructureType}
      label="What type of structure is it?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="myn-report-hazard-page-structure-type-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default StructureTypeSelect;
