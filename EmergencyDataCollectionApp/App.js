import { StatusBar } from "expo-status-bar";
// import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";

// import SavedReports from "./src/screens/savedReport/SavedReports";
// import Welcome from "./src/screens/welcome/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      {/*Uncomment the following line to see the Welcome screen*/}
      {/*<Welcome />*/}

      {/*Uncomment the following line to see the SavedReports screen*/}
      {/*<NativeBaseProvider>*/}
      {/*  <SavedReports />*/}
      {/*</NativeBaseProvider>*/}

      <Text>Hello SER401!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
