import "react-native-gesture-handler"; // Must be at the top of the file

import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import WelcomeStack from "./src/navigation/WelcomeStack/WelcomeStack";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
