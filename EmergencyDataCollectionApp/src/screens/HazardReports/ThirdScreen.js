import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import placeHolderImg from "../../../assets/images/maps.png";

export default function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <Image source={placeHolderImg} style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FirstScreen")}
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
    width: 150,
    height: 250,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    width: "90%",
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
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});
