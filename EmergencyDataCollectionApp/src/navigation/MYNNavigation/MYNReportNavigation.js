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
  const [visibleTabs, setVisibleTabs] = React.useState(["Start"]);

  const addVisibleTab = (tabName) => {
    if (!visibleTabs.includes(tabName)) {
      setVisibleTabs([...visibleTabs, tabName]);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 6, fontWeight: "bold", paddingTop: 20 },
        tabBarStyle: { backgroundColor: "#ffcc00" },
      }}
    >
      {visibleTabs.includes("Start") && (
        <Tab.Screen name="Start">
          {() => <MYNReportStart addVisibleTab={addVisibleTab} />}
        </Tab.Screen>
      )}
      {visibleTabs.includes("Loc") && (
        <Tab.Screen name="Loc">
          {() => <MYNReportLocation addVisibleTab={addVisibleTab} />}
        </Tab.Screen>
      )}
      {visibleTabs.includes("Struct \Haz") && (
        <Tab.Screen name="Struct \Haz" component={MYNStructAndHazzard} />
      )}
      {visibleTabs.includes("People") && (
        <Tab.Screen name="People" component={MYNReportPeople} />
      )}
      {visibleTabs.includes("Animal") && (
        <Tab.Screen name="Animal" component={MYNReportAnimals} />
      )}
      {visibleTabs.includes("Finish") && (
        <Tab.Screen
          name="Finish"
          component={() => <MYNReprotEnd addVisibleTab={addVisibleTab} />}
        />
      )}
      {visibleTabs.includes("Review") && (
        <Tab.Screen name="Review" component={MYNResults} />
      )}
    </Tab.Navigator>
  );
}

export default MYNReportNavigation;