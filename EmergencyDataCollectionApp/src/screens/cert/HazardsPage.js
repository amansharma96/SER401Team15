import * as React from "react";
import { useState } from "react";
import { Text, View, Button, Alert, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import styles from "./styles";
import Theme from "../../utils/Theme";
import { useCERTReportContext } from "../../components/CERTReportContext";
import {
  HazzardChemical,
  HazzardElectrical,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
} from "../../components/dataLists";

const HazardsPage = ({navigation}) => {
  const [valueHazzardFire, setvalueFire] = useState(null);
  const [valueHazzardPropane, setvaluePropane] = useState(null);
  const [valueHazzardWater, setvalueWater] = useState(null);
  const [valueHazzardElectrical, setvalueElectrical] = useState(null);
  const [valueHazzardChemical, setvalueChemical] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Set as active screen
    global.CERTpage1Active = false;
    global.CERTpage2Active = false;
    global.CERTpage3Active = true;
    global.CERTpage4Active = false;
    global.CERTpage5Active = false;
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
    check_form(0);
  }, []);

  const check_form = (action) => {
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

    if (requiredFieldsList.length > 0 && action === 1) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      global.CERTpage3Complete = false;
    } else if (requiredFieldsList.length > 0 && action === 0) {
      global.CERTpage3Complete = false;
    } else {
      certReportObject.FireHazards = valueHazzardFire;
      certReportObject.PropaneOrGasHazards = valueHazzardPropane;
      certReportObject.WaterHazards = valueHazzardWater;
      certReportObject.ElectricalHazards = valueHazzardElectrical;
      certReportObject.ChemicalHazards = valueHazzardChemical;
      global.CERTpage3Complete = true;
    }
  };

  function handleClick() {
    check_form(1);
    if (global.CERTpage3Complete) {
      navigation.navigate("People");
    }
  }

  return (
    <ScrollView>
      <View>
        <View>
          <View style={styles.container}>
            <Text style={styles.HEADER1TEXT}>Hazard Information</Text>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
          <View style={styles.container}>
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
                check_form(0);
              }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.bottomButtonContainer}>
          <Button
            title="Next"
            color={Theme.COLORS.BACKGROUND_YELLOW}
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              handleClick();
            }}
          />
        </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default HazardsPage;
