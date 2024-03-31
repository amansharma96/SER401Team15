import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";

import CERTInstructions from "../../screens/Instructions/CERTInstructions";
import HazzardInstructions from "../../screens/Instructions/HazzardInstructions";
import HomeInstructions from "../../screens/Instructions/HomeInstructions";
import MYNInstructions from "../../screens/Instructions/MYNInstructions";

const Tab = createMaterialTopTabNavigator();

function InstructionNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 30 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#111111",
            tabBarLabelStyle: { fontSize: 8, textAlignVertical: "bottom" },
            tabBarStyle: { backgroundColor: "#ffcc00", height: "6%" },
          }}
        >
          <Tab.Screen name="Instructions" component={HomeInstructions} />
          <Tab.Screen name="CERT" component={CERTInstructions} />
          <Tab.Screen name="MYN" component={MYNInstructions} />
          <Tab.Screen name="Hazzard" component={HazzardInstructions} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

export default InstructionNavigation;
