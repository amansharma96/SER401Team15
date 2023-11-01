import { View } from "react-native";
import NavigationBar from "./components/navigation/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";

import MYNReportStart from "./src/screens/MYN/MYNReportStart";

export default function App() {
  return (
    <View>
      <MYNReportStart/>
    </View>
  );
}