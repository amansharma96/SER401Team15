import { HazardElectrical } from "./selectOptions";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";

const HazardElectricalSelect = ({ onChange, isInvalid }) => {
  return (
    <CustomSelect
      items={HazardElectrical}
      label="Are there any electrical hazards?"
      onChange={onChange}
      isInvalid={isInvalid}
      testID="myn-report-hazard-page-electrical-hazard-select"
      formControlProps={{
        paddingBottom: 3,
      }}
    />
  );
};

export default HazardElectricalSelect;
