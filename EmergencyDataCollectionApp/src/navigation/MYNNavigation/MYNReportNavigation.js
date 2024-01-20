import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import * as React from "react";

import { MYNReportContextProvider } from "../../components/MYNReportContect";
import MYNReportAnimals from "../../screens/MYN/MYNReportAnimals";
import MYNReportLocation from "../../screens/MYN/MYNReportLocation";
import MYNReportPeople from "../../screens/MYN/MYNReportPeople";
import MYNReportStart from "../../screens/MYN/MYNReportStart";
import MYNReprotEnd from "../../screens/MYN/MYNReprotEnd";
import MYNResults from "../../screens/MYN/MYNResults";
import MYNStructAndHazzard from "../../screens/MYN/MYNStructAndHazzard";

const Tab = createMaterialTopTabNavigator();

function MYNReportNavigation({ route }) {
  const { report } = route.params;
  const [visibleTabs, setVisibleTabs] = React.useState(["Start"]);

  const addVisibleTab = (tabName) => {
    if (!visibleTabs.includes(tabName)) {
      setVisibleTabs([...visibleTabs, tabName]);
    }
  };

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      if (visibleTabs.includes("Review")) {
        navigation.navigate("Review");
      } else if (visibleTabs.includes("Finish")) {
        navigation.navigate("Finish");
      } else if (visibleTabs.includes("Animal")) {
        navigation.navigate("Animal");
      } else if (visibleTabs.includes("People")) {
        navigation.navigate("People");
      } else if (visibleTabs.includes("StructHaz")) {
        navigation.navigate("Struct /Haz");
      } else if (visibleTabs.includes("Loc")) {
        navigation.navigate("Loc");
      }
    }
  }, [isFocused, visibleTabs, navigation]);

  const StartComponent = () => <MYNReportStart addVisibleTab={addVisibleTab} />;
  const LocComponent = () => (
    <MYNReportLocation addVisibleTab={addVisibleTab} />
  );
  const StructAndHazComponent = () => (
    <MYNStructAndHazzard addVisibleTab={addVisibleTab} />
  );
  const PeopleComponent = () => (
    <MYNReportPeople addVisibleTab={addVisibleTab} />
  );
  const AnimalComponent = () => (
    <MYNReportAnimals addVisibleTab={addVisibleTab} />
  );
  const FinishComponent = () => <MYNReprotEnd addVisibleTab={addVisibleTab} />;
  const ReviewComponent = () => <MYNResults />;

  return (
    <MYNReportContextProvider initial={report}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 6, fontWeight: "bold", paddingTop: 20 },
          tabBarStyle: { backgroundColor: "#ffcc00" },
        }}
      >
        {isFocused && visibleTabs.includes("Start") && (
          <Tab.Screen name="Start" component={StartComponent} />
        )}
        {isFocused && visibleTabs.includes("Loc") && (
          <Tab.Screen name="Loc" component={LocComponent} />
        )}
        {isFocused && visibleTabs.includes("StructHaz") && (
          <Tab.Screen name="Struct /Haz" component={StructAndHazComponent} />
        )}
        {isFocused && visibleTabs.includes("People") && (
          <Tab.Screen name="People" component={PeopleComponent} />
        )}
        {isFocused && visibleTabs.includes("Animal") && (
          <Tab.Screen name="Animal" component={AnimalComponent} />
        )}
        {isFocused && visibleTabs.includes("Finish") && (
          <Tab.Screen name="Finish" component={FinishComponent} />
        )}
        {isFocused && visibleTabs.includes("Review") && (
          <Tab.Screen name="Review" component={ReviewComponent} />
        )}
      </Tab.Navigator>
    </MYNReportContextProvider>
  );
}

export default MYNReportNavigation;
