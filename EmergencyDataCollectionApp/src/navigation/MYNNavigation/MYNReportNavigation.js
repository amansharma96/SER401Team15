import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsFocused } from "@react-navigation/native";
import { View, Button } from "react-native";
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

function MYNReportNavigation({ navigation }) {
  const [visibleTabs, setVisibleTabs] = React.useState(["Start"]);

  const addVisibleTab = (tabName) => {
    if (!visibleTabs.includes(tabName)) {
      setVisibleTabs([...visibleTabs, tabName]);
    }
  };

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
  }, [isFocused, visibleTabs]);

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
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <View style={{ flex: 30 }}>
        <MYNReportContextProvider>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 6, fontWeight: "bold", paddingTop: 20 },
              tabBarStyle: { backgroundColor: "#ffcc00" },
            }}>
            <Tab.Screen name="Start" component={StartComponent} />
            <Tab.Screen name="Loc" component={LocComponent} />
            <Tab.Screen name="Struct /Haz" component={StructAndHazComponent} />
            <Tab.Screen name="People" component={PeopleComponent} />
            <Tab.Screen name="Animal" component={AnimalComponent} />
            <Tab.Screen name="Finish" component={FinishComponent} />
            <Tab.Screen name="Review" component={ReviewComponent} />
          </Tab.Navigator>
        </MYNReportContextProvider>
        </View>
      </View>
      <View>
          <Button
            title="Return"
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              navigation.navigate("MainScreen");
            }}
          />
      </View>
    </View>
  );
}

export default MYNReportNavigation;
