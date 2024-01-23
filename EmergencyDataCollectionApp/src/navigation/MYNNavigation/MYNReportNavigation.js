/**
 * @module MYNReportNavigation
 * @description React Navigation component managing the flow of the MYN report and ensureing data is shared between pages.
 */

//React Native Imports
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Button } from "react-native";

//Context provider for MYN, is responsible for data being shared between pages.
import { MYNReportContextProvider } from "../../components/MYNReportContect";
//Custom Imports
import MYNReportAnimals from "../../screens/MYN/MYNReportAnimals";
import MYNReportLocation from "../../screens/MYN/MYNReportLocation";
import MYNReportPeople from "../../screens/MYN/MYNReportPeople";
import MYNReportStart from "../../screens/MYN/MYNReportStart";
import MYNReprotEnd from "../../screens/MYN/MYNReprotEnd";
import MYNResults from "../../screens/MYN/MYNResults";
import MYNStructAndHazzard from "../../screens/MYN/MYNStructAndHazzard";

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

  function check_status() {
    setpage1(global.MYNpage1Complete);
    setpage2(global.MYNpage2Complete);
    setpage3(global.MYNpage3Complete);
    setpage4(global.MYNpage4Complete);
    setpage5(global.MYNpage5Complete);
    setpage6(global.MYNpage6Complete);
    setpage7(global.MYNpage7Complete);
  }

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
        <MYNReportContextProvider>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 6,
                fontWeight: "bold",
                paddingTop: 20,
              },
              tabBarStyle: { backgroundColor: "#ffcc00" },
            }}
          >
            <Tab.Group name="MynReport" />
            <Tab.Screen name="Start" component={MYNReportStart} />
            <Tab.Screen name="Loc" component={MYNReportLocation} />
            <Tab.Screen name="Struct /Haz" component={MYNStructAndHazzard} />
            <Tab.Screen name="People" component={MYNReportPeople} />
            <Tab.Screen name="Animal" component={MYNReportAnimals} />
            <Tab.Screen name="Finish" component={MYNReprotEnd} />
            <Tab.Screen name="Review" component={MYNResults} />
          </Tab.Navigator>
        </MYNReportContextProvider>
      </View>
      <View>
        <Button
          title="Save Report"
          disabled={
            !page1 || !page2 || !page3 || !page4 || !page5 || !page6 || !page7
          }
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

export default MYNReportNavigation;
