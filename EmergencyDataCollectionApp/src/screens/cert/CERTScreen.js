import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Button, StyleSheet } from "react-native";
import InfoPage from "./InfoPage";
import LocationPage from "./LocationPage";
import HazardsPage from "./HazardsPage";
import PeoplePage from "./PeoplePage";
import ExtraPage from "./ExtraPage";

const Tab = createMaterialTopTabNavigator();

const page1Complete = false;
const page2Complete = false;
const page3Complete = false;
const page4Complete = false;
const page5Complete = true; //No required inputs on this page

function CERTScreen() {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "#111111",
                tabBarLabelStyle: { fontSize: 11, textAlignVertical: "bottom" },
                tabBarStyle: { backgroundColor: "#ffcc00", height: "8%" },
              }}
          >
            <Tab.Group name="CERT Report Page" />
            <Tab.Screen name="Info" component={InfoPage} />
            <Tab.Screen name="Location" component={LocationPage} />
            <Tab.Screen name="Hazards" component={HazardsPage} />
            <Tab.Screen name="People" component={PeoplePage} />
            <Tab.Screen name="Extra Info" component={ExtraPage} />
          </Tab.Navigator>
        </View>
        <View style={styles.SAVEBUTTON}>
          <Button
            title="Save Report"
            // disabled={ !page1Complete || !page2Complete || !page3Complete || !page4Complete || !page5Complete }
            onPress={null} // Change this to saving the report
          />
        </View>
      </View>
  );
}

export default CERTScreen;

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
