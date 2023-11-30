import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Button, StyleSheet } from "react-native";

import { CERTReportContextProvider } from "../../components/CERTReportContext";
import CERTResults from "../../screens/cert/CERTResults";
import ExtraPage from "../../screens/cert/ExtraPage";
import HazardsPage from "../../screens/cert/HazardsPage";
import InfoPage from "../../screens/cert/InfoPage";
import LocationPage from "../../screens/cert/LocationPage";
import PeoplePage from "../../screens/cert/PeoplePage";

const Tab = createMaterialTopTabNavigator();

// TODO: implement conditional save button

function CERTReportNavigation() {
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
              tabBarActiveTintColor: "#111111",
              tabBarLabelStyle: { fontSize: 8, textAlignVertical: "bottom" },
              tabBarStyle: { backgroundColor: "#ffcc00", height: "6%" },
            }}
          >
            <Tab.Group name="CERT Report Page" />
            <Tab.Screen name="Info" component={InfoPage} />
            <Tab.Screen name="Location" component={LocationPage} />
            <Tab.Screen name="Hazards" component={HazardsPage} />
            <Tab.Screen name="People" component={PeoplePage} />
            <Tab.Screen name="Extra Info" component={ExtraPage} />
            <Tab.Screen name="Results" component={CERTResults} />
          </Tab.Navigator>
        </CERTReportContextProvider>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          disabled={!page1 || !page2 || !page3 || !page4 || !page5}
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

export default CERTReportNavigation;

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: "column",
    alignItems: "bottom",
    justifyContent: "bottom",
    width: "100%",
  },
  CONTAINER_ROW: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    width: "100%",
  },
  CONTAINER_ROW_TEMP: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  CONTAINER_ROW_DROPDOWN: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  BUTTONCONTAINER: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    width: "75%",
  },
  HEADER1TEXT: {
    fontSize: 20,
    fontWeight: "bold",
  },
  HEADER2TEXT: {
    fontSize: 16,
    fontWeight: "bold",
  },
  TEXT: {
    fontSize: 15,
  },
  TEXT_TEMP: {
    fontSize: 15,
    color: "red",
  },
  SAVEBUTTON: {
    flexDirection: "column",
    verticalAlign: "bottom",
    alignSelf: "center",
    justifyContent: "center",
    width: "75%",
    marginVertical: 20,
  },
});
