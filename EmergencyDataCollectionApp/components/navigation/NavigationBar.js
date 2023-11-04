import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Text, View, Button } from "react-native";

const Tab = createMaterialTopTabNavigator();

function Page1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page1!</Text>
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate("App")} // Change this to the correct page to navigate to
      />
    </View>
  );
}

function Page2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page2!</Text>
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate("App")} // Change this to the correct page to navigate to
      />
    </View>
  );
}

function Page3({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page3!</Text>
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate("App")} // Change this to the correct page to navigate to
      />
    </View>
  );
}

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#ffcc00" },
      }}
    >
      <Tab.Screen name="Page1" component={Page1} />
      <Tab.Screen name="Page2" component={Page2} />
      <Tab.Screen name="Page3" component={Page3} />
    </Tab.Navigator>
  );
}

export default NavigationBar;
