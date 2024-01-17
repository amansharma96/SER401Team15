import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import Button from "../../components/Button";

export default function SecondScreen({ navigation }) {

  const cancelRequestAction = () => {
    navigation.popToTop();
    navigation.navigate("MainScreen");
  };
  
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter something here" />
      </View>
      <View style={styles.buttonRow}>
        <Button
          style={[styles.uploadButton]}
          onPress={() => {}}
          title="Upload Picture"
        />
        <Button
          style={[styles.takePictureButton]}
          onPress={() => {}}
          title="Take Picture"
        />
      </View>
      <Button
        onPress={() => navigation.navigate("ThirdScreen")}
        title="Next"
      />
      <Button onPress={() => navigation.goBack()} title="Go Back"/>
      <Button  title="Cancel Request" onPress={()=>navigation.navigate("MainScreen")}/>
    
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
  inputContainer: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 200,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
});
