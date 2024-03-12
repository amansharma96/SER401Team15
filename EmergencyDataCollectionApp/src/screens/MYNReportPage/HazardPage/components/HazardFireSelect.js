import { HazardFire } from "./selectOptions";
import CustomSelect from "../../../../components/CustomForms/NativeBase/CustomSelect/CustomSelect";

const HazardFireSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={HazardFire}
      label="3. Are there any fire hazards?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="myn-report-hazard-page-fire-hazard-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default HazardFireSelect;
