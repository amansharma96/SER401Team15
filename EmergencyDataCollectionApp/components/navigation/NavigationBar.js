import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Text, View, Button } from "react-native";

const TabPage = ({ navigation, title, navigateTo }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}</Text>
      <Button
        title={`Go to ${navigateTo}`}
        onPress={() => navigation.navigate(navigateTo)}
      />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#ffcc00" },
      }}
    >
      <Tab.Screen
        name="Page1"
        children={() => <TabPage title="Page1" navigateTo="Page2" />}
      />
      <Tab.Screen
        name="Page2"
        children={() => <TabPage title="Page2" navigateTo="Page3" />}
      />
      <Tab.Screen
        name="Page3"
        children={() => <TabPage title="Page3" navigateTo="Page1" />}
      />
    </Tab.Navigator>
  );
}

export default NavigationBar;
