import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { IDProvider } from "./src/components/IDContext";
import MYNReportNavigation from "./src/navigation/MYNNavigation/MYNReportNavigation";

export default function App() {
  return (
    <IDProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <MYNReportNavigation />
        </View>
      </NavigationContainer>
    </IDProvider>
  );
}