import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Dimensions } from "react-native";

import CustomDrawerContent from "../../screens/MainMenu/components/CustomDrawerContent/CustomDrawerContent";
import Settings from "../../screens/Settings/AppSettings";
import HomeStack from "../HomeStack/HomeStack";
import InstructionNavigation from "../InstructionNavigation/InstructionNavigation";
import { NativeBaseProvider } from "native-base";

const { width } = Dimensions.get("screen");

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <NativeBaseProvider>
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      screenOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizontal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="HomeDrawer"
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="AppSetting"
        component={Settings}
        options={{
          headerShown: true,
          title: "Settings",
        }}
      />
      <Drawer.Screen
        name="Instructions"
        component={InstructionNavigation}
        options={{
          headerShown: true,
          title: "Instructions",
        }}
      />
    </Drawer.Navigator>
    </NativeBaseProvider>
  );
}

export default AppStack;
