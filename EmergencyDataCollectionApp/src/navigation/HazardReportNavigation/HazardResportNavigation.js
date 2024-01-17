import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import FirstScreen from "../../screens/HazardReports/FirstScreen";
import SecondScreen from "../../screens/HazardReports/SecondScreen";
import ThirdScreen from "../../screens/HazardReports/ThirdScreen";

const Tab = createMaterialTopTabNavigator();

export default function NavigationBar() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 11, fontWeight: "bold" },
      tabBarStyle: { backgroundColor: "#ffcc00", marginTop: 20 },
    }}
    >
      <Tab.Screen name="FirstScreen" component={FirstScreen} />
      <Tab.Screen name="SecondScreen" component={SecondScreen} />
      <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
    </Tab.Navigator>
  );
}
