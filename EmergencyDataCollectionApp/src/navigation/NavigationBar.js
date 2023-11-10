import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import FirstScreen from '../screens/HazardReports/FirstScreen';
import SecondScreen from '../screens/HazardReports/SecondScreen';
import ThirdScreen from '../screens/HazardReports/ThirdScreen';
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function NavigationBar() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#FFFF" },
        }}>
        <Tab.Screen name="FirstScreen" component={FirstScreen} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} />
        <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
      </Tab.Navigator>
    
  );
}
