import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";

import CreditsPage from "../../screens/CreditsPage/CreditsPage";

const Tab = createMaterialTopTabNavigator();

function CreditsNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#111111",
          tabBarLabelStyle: { fontSize: 8, textAlignVertical: "bottom" },
          tabBarStyle: { backgroundColor: "#ffcc00", height: "6%" },
        }}
      >
        <Tab.Screen name="Credits" component={CreditsPage} />
      </Tab.Navigator>
    </View>
  );
}

export default CreditsNavigation;
