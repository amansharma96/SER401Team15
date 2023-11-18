import * as React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
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
