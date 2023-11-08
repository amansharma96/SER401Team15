import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import MYNReportAnimals from "../../screens/MYN/MYNReportAnimals";
import MYNReportLocation from "../../screens/MYN/MYNReportLocation";
import MYNReportPeople from "../../screens/MYN/MYNReportPeople";
import MYNReportStart from "../../screens/MYN/MYNReportStart";
import MYNReprotEnd from "../../screens/MYN/MYNReprotEnd";
import MYNResults from "../../screens/MYN/MYNResults";
import MYNStructAndHazzard from "../../screens/MYN/MYNStructAndHazzard";

const Tab = createMaterialTopTabNavigator();

function MYNReportNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 5, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#ffcc00", marginTop: 20 },
      }}
    >
      <Tab.Screen name="Start" component={MYNReportStart} />
      <Tab.Screen name="Location" component={MYNReportLocation} />
      <Tab.Screen name="Struct \Hazard" component={MYNStructAndHazzard} />
      <Tab.Screen name="People" component={MYNReportPeople} />
      <Tab.Screen name="Animals" component={MYNReportAnimals} />
      <Tab.Screen name="Finish" component={MYNReprotEnd} />
      <Tab.Screen name="Review" component={MYNResults} />
    </Tab.Navigator>
  );
}

export default MYNReportNavigation;
