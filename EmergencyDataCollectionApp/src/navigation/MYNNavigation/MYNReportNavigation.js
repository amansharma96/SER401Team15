import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import MYNReportAnimals from "../../screens/MYN/MYNReportAnimals";
import MYNReportLocation from "../../screens/MYN/MYNReportLocation";
import MYNReportPeople from "../../screens/MYN/MYNReportPeople";
import MYNReportPeopleCont from "../../screens/MYN/MYNReportPeopleCont";
import MYNReportStart from "../../screens/MYN/MYNReportStart";
import MYNReprotEnd from "../../screens/MYN/MYNReprotEnd";
import MYNStructAndHazzard from "../../screens/MYN/MYNStructAndHazzard";

const Tab = createMaterialTopTabNavigator();

function MYNReportNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 8 },
        tabBarStyle: { backgroundColor: "#ffcc00" },
      }}
    >
      <Tab.Screen name="Start" component={MYNReportStart} />
      <Tab.Screen name="Location" component={MYNReportLocation} />
      <Tab.Screen name="Struct\Hazzards" component={MYNStructAndHazzard} />
      <Tab.Screen name="People" component={MYNReportPeople} />
      <Tab.Screen name="People cont" component={MYNReportPeopleCont} />
      <Tab.Screen name="Animals" component={MYNReportAnimals} />
      <Tab.Screen name="End" component={MYNReprotEnd} />
    </Tab.Navigator>
  );
}

export default MYNReportNavigation;
