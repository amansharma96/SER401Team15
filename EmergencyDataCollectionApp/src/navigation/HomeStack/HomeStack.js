import { Icon, MenuIcon } from "@gluestack-ui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Pressable } from "react-native";

import ExportReports from "../../screens/ExportReports/ExportReports";
import SavedHazardReports from "../../screens/HazardReports/SavedHazardReports";
import MainScreen from "../../screens/MainMenu/MainScreen";
import SavedReports from "../../screens/SavedReport/SavedReports";
import ViewSavedReports from "../../screens/ViewSavedReports/ViewSavedReports";
import Theme from "../../utils/Theme";
import CERTReportNavigation from "../CERTNavigation/CERTReportNavigation";
import HazardReportNavigation from "../HazardReportNavigation/HazardReportNavigation";
import MynNavigation from "../MynNavigation/MynNavigation";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerStyle: {
            backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
            shadowColor: Theme.COLORS.TEXT_BLACK,
            shadowOpacity: 0.5,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
          },
          cardStyle: { backgroundColor: Theme.COLORS.BACKGROUND_WHITE },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{
                paddingLeft: 20,
                paddingTop: 3,
              }}
            >
              <Icon as={MenuIcon} size="xl" />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="MYNReportNavigation"
        component={MynNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CERTReportNavigation"
        component={CERTReportNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StartNewHazardReport"
        component={HazardReportNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Saved Reports"
        component={ViewSavedReports}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Export Reports"
        component={ExportReports}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="SavedReports" component={SavedReports} />
      <Stack.Screen
        name="SavedHazardReports"
        component={SavedHazardReports}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
