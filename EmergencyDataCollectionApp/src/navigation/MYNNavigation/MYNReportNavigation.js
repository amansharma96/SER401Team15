/**
 * @module MYNReportNavigation
 * @description React Navigation component managing the flow of the MYN report and ensureing data is shared between pages.
 */

//React Native Imports
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Button } from "react-native";
import {
  useRoute,
} from "@react-navigation/native";

//Context provider for MYN, is responsible for data being shared between pages.
import { ReportContextProvider } from "../../components/ReportContext";
//Custom Imports
import MYNReportAnimals from "../../screens/MYN/MYNReportAnimals";
import MYNReportLocation from "../../screens/MYN/MYNReportLocation";
import MYNReportPeople from "../../screens/MYN/MYNReportPeople";
import MYNReportStart from "../../screens/MYN/MYNReportStart";
import MYNReprotEnd from "../../screens/MYN/MYNReprotEnd";
import MYNResults from "../../screens/MYN/MYNResults";
import MYNStructAndHazzard from "../../screens/MYN/MYNStructAndHazzard";
import styles from "./styles";
import Theme from "../../utils/Theme";

const Tab = createMaterialTopTabNavigator();

/**
 * Main Function for navigation
 *
 * @function MYNReportNavigation
 * @returns {JSX.Element}
 */
function MYNReportNavigation({ navigation }) {  
  const [page1, setpage1] = React.useState(global.MYNpage1Complete);
  const [page2, setpage2] = React.useState(global.MYNpage2Complete);
  const [page3, setpage3] = React.useState(global.MYNpage3Complete);
  const [page4, setpage4] = React.useState(global.MYNpage4Complete);
  const [page5, setpage5] = React.useState(global.MYNpage5Complete);
  const [page6, setpage6] = React.useState(global.MYNpage6Complete);
  const [page7, setpage7] = React.useState(global.MYNpage7Complete);

  const route = useRoute();
  const loadedReport = route.params.loadedReport;

  function check_status() {
    setpage1(global.MYNpage1Complete);
    setpage1(global.MYNpage2Complete);
    setpage1(global.MYNpage3Complete);
    setpage1(global.MYNpage4Complete);
    setpage1(global.MYNpage5Complete);
    setpage1(global.MYNpage6Complete);
    setpage1(global.MYNpage7Complete);
  }

  // Effect to navigate to the appropriate tab when the component is focused
  React.useEffect(() => {
    check_status();
  }, [
    global.MYNpage1Complete,
    global.MYNpage2Complete,
    global.MYNpage3Complete,
    global.MYNpage4Complete,
    global.MYNpage5Complete,
    global.MYNpage6Complete,
    global.MYNpage7Complete,
  ]);
  

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 30 }}>
        <ReportContextProvider>
        <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#000000",
              tabBarInactiveTintColor: "#888888",
              tabBarLabelStyle: { fontSize: 8, textAlignVertical: "bottom" },
              tabBarStyle: { backgroundColor: "#ffcc00", height: "6%" },
              swipeEnabled: false,
            }}
          >
            <Tab.Group name="MYN Report Page" />
            <Tab.Screen 
              name="Start" 
              component={MYNReportStart} 
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page1) {
                    a.preventDefault();
                  }
                },
              }}/>
            <Tab.Screen 
              name="Loc" 
              component={MYNReportLocation}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page2) {
                    a.preventDefault();
                  }
                },
              }}/>
            <Tab.Screen 
              name="Struct /Haz" 
              component={MYNStructAndHazzard}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page3) {
                    a.preventDefault();
                  }
                },
              }}/>
            <Tab.Screen 
              name="People" 
              component={MYNReportPeople}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page4) {
                    a.preventDefault();
                  }
                },
              }}/>
            <Tab.Screen 
              name="Animal" 
              component={MYNReportAnimals}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page5) {
                    a.preventDefault();
                  }
                },
              }}/>
            <Tab.Screen 
              name="Finish" 
              component={MYNReprotEnd}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page6) {
                    a.preventDefault();
                  }
                },
              }}/>
            <Tab.Screen 
              name="Review" 
              component={MYNResults}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page7) {
                    a.preventDefault();
                  }
                },
              }}/>
          </Tab.Navigator>
        </ReportContextProvider>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          disabled={!page1 || !page2 || !page3 || !page4 || !page5}
          onPress={null} // Change this to saving the report
        />
        <Button
          title="Return"
          color={Theme.COLORS.BACKGROUND_YELLOW}
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        />
      </View>
    </View>
  );
}

export default MYNReportNavigation;
