import { HazardPropane } from "./selectOptions";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";

const HazardPropaneSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={HazardPropane}
      label="4. Are there any propane or gas hazards?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="cert-report-hazard-page-propane-hazard-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default HazardPropaneSelect;
