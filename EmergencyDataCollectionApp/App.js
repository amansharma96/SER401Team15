import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Report from "./src/components/Report"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello SER401!</Text>
      <Report />
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
