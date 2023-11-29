import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import React from "react";

import WithMYNReportContext from "./src/components/WithMYNReportContext";
import CERTReportNavigation from "./src/navigation/CERTNavigation/CERTReportNavigation";
import MYNReportNavigation from "./src/navigation/MYNNavigation/MYNReportNavigation";
import MYNmodifyReport from "./src/screens/MYN/MYNmodifyReport";
import MainScreen from "./src/screens/MainScreen";
import MYNsavedReports from "./src/screens/SavedReport/MYNsavedReports";
import SavedReports from "./src/screens/SavedReport/SavedReports";
import Welcome from "./src/screens/welcome/Welcome";

const Stack = createStackNavigator();
// Define your components outside the navigation declaration
const MYNsavedReportsComponent = () => (
  <WithMYNReportContext>
    <MYNsavedReports />
  </WithMYNReportContext>
);

const MYNmodifyReportComponent = () => (
  <WithMYNReportContext>
    <MYNmodifyReport />
  </WithMYNReportContext>
);

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SavedReports" component={SavedReports} />
          <Stack.Screen
            name="MYNsavedReports"
            component={MYNsavedReportsComponent}
          />
          <Stack.Screen
            name="MYNmodifyReport"
            component={MYNmodifyReportComponent}
          />
          <Stack.Screen
            name="MYNReportNavigation"
            component={MYNReportNavigation}
            options={{ title: "MYN Report" }}
          />
          <Stack.Screen
            name="CERTReportNavigation"
            component={CERTReportNavigation}
            options={{ title: "CERT Report" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
