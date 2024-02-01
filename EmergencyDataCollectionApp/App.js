import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CERTReportNavigation from "./src/navigation/CERTNavigation/CERTReportNavigation";
import HazardReportNavigation from "./src/navigation/HazardReportNavigation/HazardResportNavigation";
import InstructionNavigation from "./src/navigation/InstructionNavigation/InstructionNavigation";
import MYNReportNavigation from "./src/navigation/MYNNavigation/MYNReportNavigation";
import MainScreen from "./src/screens/MainScreen";
import MYNreview from "./src/screens/ReviewReports/MYNreview";
import SavedReports from "./src/screens/SavedReport/SavedReports";
import Welcome from "./src/screens/welcome/Welcome";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SavedReports" component={SavedReports} />
          <Stack.Screen
            name="MYNReportNavigation"
            component={MYNReportNavigation}
            options={{ title: "MYN Report" }}
            initialParams={{ loadedReport: null }}
          />
          <Stack.Screen
            name="MYNreview"
            component={MYNreview}
            options={{ title: "MYN Review" }}
          />
          <Stack.Screen
            name="CERTReportNavigation"
            component={CERTReportNavigation}
            options={{ title: "CERT Report" }}
          />
          <Stack.Screen
            name="StartNewHazardReport"
            component={HazardReportNavigation}
          />
          <Stack.Screen
            name="InstructionNavigation"
            component={InstructionNavigation}
            options={{ title: "Instructions" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
