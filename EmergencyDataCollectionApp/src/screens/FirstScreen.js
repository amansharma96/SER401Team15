import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import placeHolderImg from "./maps.png";
import { Picker } from "@react-native-picker/picker";

export default function FirstScreen({ navigation }) {
  const pickerRef = useRef();
  const [selectedItem, setSelectedItem] = useState("Java");
 
  function open() {
    pickerRef.current.focus();
  }

  function close() {
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
          /* Implement GPS retry logic here */
        }}
      >
        <Text style={styles.text}>Retry GPS</Text>
      </TouchableOpacity>
      <Picker
        ref={pickerRef}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
        
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SecondScreen")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
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
    marginBottom:10

  },
  button: {
    backgroundColor: "black",
    padding: 10,
    width: "90%", // Adjust the width as needed
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
    // backgroundColor :'yellow',
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
