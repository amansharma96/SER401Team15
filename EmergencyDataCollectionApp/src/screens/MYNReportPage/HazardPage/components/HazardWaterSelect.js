import { HazardWater } from "./selectOptions";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";

const HazardWaterSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={HazardWater}
      label="Are there any water hazards?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="myn-report-hazard-page-water-hazard-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default HazardWaterSelect;
