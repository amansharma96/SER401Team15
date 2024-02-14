import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";

import Button from "../../components/Button";
import CERTInstructions from "../../screens/instructions/CERTInstructions";
import HazzardInstructions from "../../screens/instructions/HazzardInstructions";
import HomeInstructions from "../../screens/instructions/HomeInstructions";
import MYNInstructions from "../../screens/instructions/MYNInstructions";

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
      <View>
        <Button
          title="Return"
          onPress={() => {
            navigation.navigate("Temp");
          }}
        />
      </View>
    </View>
  );
}

export default InstructionNavigation;
