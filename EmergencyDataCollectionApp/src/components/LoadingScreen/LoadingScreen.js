import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import CustomSpinner from "../CustomSpinner/CustomSpinner";
const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CustomSpinner text="Loading" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
