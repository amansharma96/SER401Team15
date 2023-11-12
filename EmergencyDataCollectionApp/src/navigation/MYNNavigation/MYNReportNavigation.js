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

  const StartComponent = () => <MYNReportStart addVisibleTab={addVisibleTab} />;
  const LocComponent = () => <MYNReportLocation addVisibleTab={addVisibleTab} />;
  const StructAndHazComponent = () => <MYNStructAndHazzard addVisibleTab={addVisibleTab}/>;
  const PeopleComponent = () => <MYNReportPeople addVisibleTab={addVisibleTab}/>;
  const AnimalComponent = () => <MYNReportAnimals addVisibleTab={addVisibleTab}/>;
  const FinishComponent = () => <MYNReprotEnd addVisibleTab={addVisibleTab} />;
  const ReviewComponent = () => <MYNResults />;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 6, fontWeight: "bold", paddingTop: 20 },
        tabBarStyle: { backgroundColor: "#ffcc00" },
      }}
    >
      {visibleTabs.includes("Start") && (
        <Tab.Screen name="Start" component={StartComponent} />
      )}
      {visibleTabs.includes("Loc") && (
        <Tab.Screen name="Loc" component={LocComponent} />
      )}
      {visibleTabs.includes("Struct \Haz") && (
        <Tab.Screen name="Struct \Haz" component={StructAndHazComponent} />
      )}
      {visibleTabs.includes("People") && (
        <Tab.Screen name="People" component={PeopleComponent} />
      )}
      {visibleTabs.includes("Animal") && (
        <Tab.Screen name="Animal" component={AnimalComponent} />
      )}
      {visibleTabs.includes("Finish") && (
        <Tab.Screen name="Finish" component={FinishComponent} />
      )}
      {visibleTabs.includes("Review") && (
        <Tab.Screen name="Review" component={ReviewComponent} />
      )}
    </Tab.Navigator>
  );
}

export default MYNReportNavigation;