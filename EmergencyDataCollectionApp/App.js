import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartMYNReport from "./src/screens/MYN/StartMYNReport";

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Hello SER401!</Text>
      <StatusBar style="auto" />
    </View>
    */
    <View>
      <StartMYNReport />
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
