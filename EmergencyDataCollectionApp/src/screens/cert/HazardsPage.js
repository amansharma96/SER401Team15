import * as React from "react";
import { useState } from "react";
import { Text, View, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";
import {
  HazzardChemical,
  HazzardElectrical,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
} from "../../components/dataLists";

function HazardsPage() {
  const [valueHazzardFire, setvalueFire] = useState(null);
  const [valueHazzardPropane, setvaluePropane] = useState(null);
  const [valueHazzardWater, setvalueWater] = useState(null);
  const [valueHazzardElectrical, setvalueElectrical] = useState(null);
  const [valueHazzardChemical, setvalueChemical] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Check if values in CERTReportObject are not null before setting the state
    if (certReportObject.c) {
      setvalueFire(certReportObject.FireHazards);
    }
    if (certReportObject.PropaneOrGasHazards) {
      setvaluePropane(certReportObject.PropaneOrGasHazards);
    }
    if (certReportObject.WaterHazards) {
      setvalueWater(certReportObject.WaterHazards);
    }
    if (certReportObject.ElectricalHazards) {
      setvalueElectrical(certReportObject.ElectricalHazards);
    }
    if (certReportObject.ChemicalHazards) {
      setvalueChemical(certReportObject.ChemicalHazards);
    }
  };

  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
  }, []);

  const check_form = () => {
    const requiredFieldsList = [];
    if (!valueHazzardFire) {
      requiredFieldsList.push("FIRE Hazard");
    }
    if (!valueHazzardPropane) {
      requiredFieldsList.push("PROPANE/GAS Hazard");
    }
    if (!valueHazzardWater) {
      requiredFieldsList.push("WATER Hazard");
    }
    if (!valueHazzardElectrical) {
      requiredFieldsList.push("ELECTRICAL Hazard");
    }
    if (!valueHazzardChemical) {
      requiredFieldsList.push("CHEMICAL Hazard");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return false;
    }
    certReportObject.FireHazards = valueHazzardFire;
    certReportObject.PropaneOrGasHazards = valueHazzardPropane;
    certReportObject.WaterHazards = valueHazzardWater;
    certReportObject.ElectricalHazards = valueHazzardElectrical;
    certReportObject.ChemicalHazards = valueHazzardChemical;
    return true;
  };

  return (
    <View>
      <View>
        <Text style={styles.HEADER1TEXT}>Hazard Information</Text>
        <View>
          <Text>*Status of FIRE hazards:</Text>
          <Dropdown
            style={styles.dropdown}
            data={HazzardFire}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueHazzardFire}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setvalueFire(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*Status of PROPANE or GAS hazards:</Text>
          <Dropdown
            style={styles.dropdown}
            data={HazzardPropane}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueHazzardPropane}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setvaluePropane(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*Status of WATER hazards: </Text>
          <Dropdown
            style={styles.dropdown}
            data={HazzardWater}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueHazzardWater}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setvalueWater(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*Status of ELECTRICAL hazards:</Text>
          <Dropdown
            style={styles.dropdown}
            data={HazzardElectrical}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueHazzardElectrical}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setvalueElectrical(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text>*Status of CHEMICAL hazards: </Text>
          <Dropdown
            style={styles.dropdown}
            data={HazzardChemical}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "" : ""}
            searchPlaceholder="Search..."
            value={valueHazzardChemical}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setvalueChemical(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default HazardsPage;
