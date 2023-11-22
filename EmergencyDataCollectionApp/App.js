import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";

import MYNReportNavigation from "./src/navigation/MYNNavigation/MYNReportNavigation";
import CERTReportNavigation from "./src/navigation/CERTNavigation/CERTReportNavigation";
import MainScreen from "./src/screens/MainScreen";
import Welcome from "./src/screens/welcome/Welcome";
import { dbClass } from "./src/utils/Database/db";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const dbInstance = new dbClass();
    dbInstance.createMYNReport();
    dbInstance.createCERTReport();
    dbInstance.createHazardReport();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="MYNReportNavigation"
          component={MYNReportNavigation}
          options={{ title: "MYN Report" }}
        />
        <Stack.Screen
          name="CERTReportNavigation"
          component={CERTReportNavigation}
          options={{ title: "CERT Report" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
