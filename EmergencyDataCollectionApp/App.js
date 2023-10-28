import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import NavigationBar from "./components/navigation/NavigationBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <NavigationBar testID="navigationBar" />
      </NavigationContainer>
      <StatusBar style="auto" testID="statusBar" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
