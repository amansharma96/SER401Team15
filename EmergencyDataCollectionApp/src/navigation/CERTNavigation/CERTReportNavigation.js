import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import Theme from "../../utils/Theme";
import { View, Button } from "react-native";

import styles from "./styles";
import { CERTReportContextProvider } from "../../components/CERTReportContext";
import CERTResults from "../../screens/cert/CERTResults";
import ExtraPage from "../../screens/cert/ExtraPage";
import HazardsPage from "../../screens/cert/HazardsPage";
import InfoPage from "../../screens/cert/InfoPage";
import LocationPage from "../../screens/cert/LocationPage";
import PeoplePage from "../../screens/cert/PeoplePage";
import Theme from "../../utils/Theme";

const Tab = createMaterialTopTabNavigator();

// TODO: implement conditional save button

function CERTReportNavigation({ navigation }) {
  const [page1, setpage1] = React.useState(global.CERTpage1Complete);
  const [page2, setpage2] = React.useState(global.CERTpage2Complete);
  const [page3, setpage3] = React.useState(global.CERTpage3Complete);
  const [page4, setpage4] = React.useState(global.CERTpage4Complete);
  const [page5, setpage5] = React.useState(global.CERTpage5Complete);

  function check_status() {
    setpage1(global.CERTpage1Complete);
    setpage2(global.CERTpage2Complete);
    setpage3(global.CERTpage3Complete);
    setpage4(global.CERTpage4Complete);
    setpage5(global.CERTpage5Complete);
  }

  React.useEffect(() => {
    check_status();
  }, [
    global.CERTpage1Complete,
    global.CERTpage2Complete,
    global.CERTpage3Complete,
    global.CERTpage4Complete,
    global.CERTpage5Complete,
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 30 }}>
        <CERTReportContextProvider>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#000000",
              tabBarInactiveTintColor: "#888888",
              tabBarLabelStyle: { fontSize: 8, textAlignVertical: "bottom" },
              tabBarStyle: { backgroundColor: "#ffcc00", height: "6%" },
            }}
          >
            <Tab.Group name="CERT Report Page" />
            <Tab.Screen name="Info" component={InfoPage}/>
            <Tab.Screen name="Location" component={LocationPage} 
              listeners={{
                tabPress: a => {
                  // Prevent default action
                  if (!page1) {
                    a.preventDefault();
                  }
                },
              }} />
            <Tab.Screen name="Hazards" component={HazardsPage} 
              listeners={{
                tabPress: b => {
                  // Prevent default action
                  if (!page2) {
                    b.preventDefault();
                  }
                },
              }} />
            <Tab.Screen name="People" component={PeoplePage} 
              listeners={{
                tabPress: c => {
                  // Prevent default action
                  if (!page3) {
                    c.preventDefault();
                  }
                },
              }} />
            <Tab.Screen name="Extra Info" component={ExtraPage} 
              listeners={{
                tabPress: d => {
                  // Prevent default action
                  if (!page4) {
                    d.preventDefault();
                  }
                },
              }} />
            <Tab.Screen name="Results" component={CERTResults} 
              listeners={{
                tabPress: e => {
                  // Prevent default action
                  if (!page1 || !page2 || !page3 || !page4) {
                    e.preventDefault();
                  }
                },
              }} />
          </Tab.Navigator>
        </CERTReportContextProvider>
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
            // Navigate using the `navigation` prop that you received
            navigation.navigate("MainScreen");
          }}
        />
      </View>
    </View>
  );
}

export default CERTReportNavigation;
