import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import FirstScreen from "../../screens/HazardReports/FirstScreen";
import { HazardReportProvider } from "../../screens/HazardReports/HazardReportsContext";
import SecondScreen from "../../screens/HazardReports/SecondScreen";
import ThirdScreen from "../../screens/HazardReports/ThirdScreen";

const Tab = createMaterialTopTabNavigator();

export default function NavigationBar() {
  return (
    <HazardReportProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 11, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "#ffcc00", marginTop: 20 },
        }}
      >
        <Tab.Screen name="Report" component={FirstScreen} />
        <Tab.Screen name="Notes" component={SecondScreen} />
        <Tab.Screen name="Finalise" component={ThirdScreen} />
      </Tab.Navigator>
    </HazardReportProvider>
  );
}
