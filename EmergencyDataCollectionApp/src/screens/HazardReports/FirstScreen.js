import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import placeHolderImg from "../../../assets/images/maps.png";
import { Picker } from "@react-native-picker/picker";

export default function FirstScreen({ navigation }) {
  const pickerRef = useRef();
  const [selectedItem, setSelectedItem] = useState("Java");

  function openPicker() {
    pickerRef.current.focus();
  }

  function closePicker() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <Image source={placeHolderImg} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        title="Retry GPS"
        color="black"
        onPress={() => {
          // Your action on button press
        }}
      >
        <Text style={styles.text}>Retry GPS</Text>
      </TouchableOpacity>
      <Text >What Hazard are you reporting?*</Text>
      <View style={styles.pickerContainer}>
        <Picker
          ref={pickerRef}
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
       >
          <Picker.Item label="Storm" value="Storm" />
          <Picker.Item label="Tornado" value="Tornado" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SecondScreen")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FirstScreen")}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel Request</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "black",
    padding: 10,
    width: "90%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  dateContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  pickerContainer: {
    // backgroundColor: "white", 
    borderRadius: 5,
    width: "90%",
    // alignItems: 'flex-start',
    textAlign :'center',
    justifyContent :'center'
  },
});
