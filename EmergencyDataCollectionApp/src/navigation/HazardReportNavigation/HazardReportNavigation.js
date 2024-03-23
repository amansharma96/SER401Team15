import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HazardReportPage from "../../screens/HazardReports/HazardReportScreen";
import { HazardReportProvider } from "../../screens/HazardReports/HazardReportsContext";
import SavedHazardReport from "../../screens/HazardReports/SavedHazardReports";

const HazardStack = createStackNavigator();

export default function HazardNavigation() {
  return (
    <HazardReportProvider>
      <HazardStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HazardReportPage"
      >
        <HazardStack.Screen
          name="HazardReportPage"
          component={HazardReportPage}
        />
        <HazardStack.Screen
          name="HazardReviewPage"
          component={SavedHazardReport}
        />
      </HazardStack.Navigator>
    </HazardReportProvider>
  );
}
