import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View } from "react-native";

import AnimalPage from "./AnimalPage/AnimalPage";
import HazardPage from "./HazardPage/HazardPage";
import InfoPage from "./InfoPage/InfoPage";
import LocationPage from "./LocationPage/LocationPage";
import NotePage from "./NotePage/NotePage";
import PeoplePage from "./PeoplePage/PeoplePage";
import MYNResults from "./ReviewPage/MYNResults";
import { ReportContextProvider } from "../../components/ReportContext";

const Tab = createMaterialTopTabNavigator();

function TabsNavigation({ navigation }) {
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
              component={InfoPage}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page1) {
                    a.preventDefault();
                  }
                },
              }}
            />
            <Tab.Screen
              name="Loc"
              component={LocationPage}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page2) {
                    a.preventDefault();
                  }
                },
              }}
            />
            <Tab.Screen
              name="Struct /Haz"
              component={HazardPage}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page3) {
                    a.preventDefault();
                  }
                },
              }}
            />
            <Tab.Screen
              name="People"
              component={PeoplePage}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page4) {
                    a.preventDefault();
                  }
                },
              }}
            />
            <Tab.Screen
              name="Animal"
              component={AnimalPage}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page5) {
                    a.preventDefault();
                  }
                },
              }}
            />
            <Tab.Screen
              name="Finish"
              component={NotePage}
              listeners={{
                tabPress: (a) => {
                  // Prevent default action
                  if (!page6) {
                    a.preventDefault();
                  }
                },
              }}
            />
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
              }}
            />
          </Tab.Navigator>
        </ReportContextProvider>
      </View>
    </View>
  );
}

export default TabsNavigation;
