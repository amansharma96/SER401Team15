import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import MYNReportNavigation from "./src/navigation/MYNNavigation/MYNReportNavigation";
import CERTScreen from "./src/screens/cert/CERTScreen";
import MainScreen from "./src/screens/MainScreen";
import Welcome from "./src/screens/welcome/Welcome";

const Stack = createStackNavigator();

export default function App() {
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
          name="StartNewMYNReport"
          component={MYNReportNavigation}
        />
        <Stack.Screen
          name="StartNewCERTReport"
          component={CERTScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
