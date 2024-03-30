import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Welcome from "../../screens/Welcome/Welcome";
import AppStack from "../AppStack/AppStack";

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
