import { HazardWater } from "./selectOptions";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";

const HazardWaterSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={HazardWater}
      label="5. Are there any water hazards?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="cert-report-hazard-page-water-hazard-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default HazardWaterSelect;
