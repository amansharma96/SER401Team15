import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    //for testing MainScreen
    /*
    <View style={styles.container}>
      <MainScreen />
    </View>
    */
    <View style={styles.container}>
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
