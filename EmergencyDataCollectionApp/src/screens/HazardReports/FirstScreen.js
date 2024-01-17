import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import placeHolderImg from "../../../assets/images/maps.png";
import { Hazards } from "../../components/dataLists";

import Button from "../../components/Button";
export default function FirstScreen({ navigation }) {
  const [valueHazard, setValueHazard] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const cancelRequest = () => {
    navigation.popToTop();
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <Image source={placeHolderImg} style={styles.image} />
      <Button
        title="Retry GPS"
        onPress={() => {
          // Your action on button press
        }}
      />
      <Text style={styles.text}>Retry GPS</Text>

      <Text>What Hazard are you reporting?*</Text>
      <View style={styles.pickerContainer}>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={Hazards}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "" : ""}
          searchPlaceholder="Search..."
          value={valueHazard}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValueHazard(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <Button
        onPress={() => navigation.navigate("SecondScreen")}
        title="Next"
      />

      <Button onPress={() => navigation.navigate("MainScreen")} title="Back" />
      <Button
        title="Cancel Request"
        onPress={() => navigation.navigate("MainScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 10,
  },
  pickerContainer: {
    // backgroundColor: "white",
    borderRadius: 5,
    width: "90%",
    // alignItems: 'flex-start',
    textAlign: "center",
    justifyContent: "center",
  },
  btn :{
    width: '100px',
  }
});
