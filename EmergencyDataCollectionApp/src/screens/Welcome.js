import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Images from "../utils/Images";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.Welcome}
        style={styles.image}
      />
      <Text style={styles.title}>Emergency Ready</Text>
      <Text style={styles.subtitle}>Hazard Reporting</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
});

export default Welcome;
