import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../../components/Button";
import placeHolderImg from "../../../assets/images/maps.png";

export default function ThirdScreen({ navigation }) {
  const cancelRequestAction = () => {
    navigation.popToTop();
    navigation.navigate("MainScreen");
  };
  
 
 
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>{new Date().toLocaleString()}</Text>
      </View>
      <Image source={placeHolderImg} style={styles.image} />

      <Button title="next" onPress={() => navigation.navigate("FirstScreen")}/>
      <Button title="Back" onPress={() => navigation.navigate('SecondScreen')}/>
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
  image: {
    width: 150,
    height: 250,
    borderWidth: 1,
    borderColor: "black",
  },

  dateContainer: {
    borderColor: "black",
    borderWidth: 1,

    padding: 10,
  },
});
