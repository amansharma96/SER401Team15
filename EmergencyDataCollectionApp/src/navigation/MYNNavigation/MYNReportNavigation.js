/**
 * @module MYNReportNavigation
 * @description React Navigation component managing the flow of the MYN report and ensureing data is shared between pages.
 */

//React Native Imports
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";

//Context provider for MYN, is responsible for data being shared between pages.
import { MYNReportContextProvider } from "../../components/MYNReportContect";
//Custom Imports
import MYNReportAnimals from "../../screens/MYN/AnimalPage/MYNReportAnimals";
import HazardPage from "../../screens/MYN/HazardPage/HazardPage";
import MYNReportStart from "../../screens/MYN/InfoPage/MYNReportStart";
import MYNReportLocation from "../../screens/MYN/LocationPage/MYNReportLocation";
import MYNResults from "../../screens/MYN/MYNResults";
import MYNReprotEnd from "../../screens/MYN/NotesPage/MYNReprotEnd";
import MYNReportPeople from "../../screens/MYN/PeoplePage/MYNReportPeople";

const Tab = createMaterialTopTabNavigator();

/**
 * Main Function for navigation
 *
 * @function MYNReportNavigation
 * @returns {JSX.Element}
 */
function MYNReportNavigation() {
  const [visibleTabs, setVisibleTabs] = React.useState(["Start"]);

  /**
   * Function to control tab view of the MYN report and add new tabs.
   *
   * @function addVisibleTab
   * @param {string} tabName - The name of the tab to be added.
   */
  const addVisibleTab = (tabName) => {
    if (!visibleTabs.includes(tabName)) {
      setVisibleTabs([...visibleTabs, tabName]);
    }
  };

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  // Effect to navigate to the appropriate tab when the component is focused
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
  // Define each screen as a component
  const StartComponent = () => <MYNReportStart addVisibleTab={addVisibleTab} />;
  const LocComponent = () => (
    <MYNReportLocation addVisibleTab={addVisibleTab} />
  );
  const StructAndHazComponent = () => (
    <HazardPage addVisibleTab={addVisibleTab} />
  );
  const PeopleComponent = () => (
    <MYNReportPeople addVisibleTab={addVisibleTab} />
  );
  const AnimalComponent = () => (
    <MYNReportAnimals addVisibleTab={addVisibleTab} />
  );
  const FinishComponent = () => <MYNReprotEnd addVisibleTab={addVisibleTab} />;
  const ReviewComponent = () => <MYNResults />;

  const route = useRoute();
  const loadedReport = route.params.loadedReport;
  if (loadedReport) {
    addVisibleTab("Loc");
    addVisibleTab("StructHaz");
    addVisibleTab("People");
    addVisibleTab("Animal");
    addVisibleTab("Finish");
    addVisibleTab("Review");
  }

  return (
    <MYNReportContextProvider initial={loadedReport}>
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
