import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './src/navigation/NavigationBar';

export default function App() {
  return (
    
    <NavigationContainer>
    <StatusBar style="auto"/>
      
      <NavigationBar />
    </NavigationContainer>
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
