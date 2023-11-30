import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import CERTReportNavigation from "./CERTNavigation/CERTReportNavigation";
import MYNReportNavigation from "./MYNNavigation/MYNReportNavigation";
import MainScreen from "./MainScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Home" }}
        />
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
