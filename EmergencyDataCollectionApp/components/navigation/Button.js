import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = () => {
  const handleClick = () => {
    alert("Tab 1 has been clicked!"); // TODO: remove once done testing
  };

  return (
    <Pressable onPress={handleClick} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Tab 1</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    top: "1%",
    backgroundColor: "#ffcc00",
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  container: {
    flex: 1,
  },
});

export default CustomButton;
