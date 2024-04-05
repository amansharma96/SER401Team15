import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import MYNReportPage from "../../screens/MYNReportPage/MYNReportPage";
import ReviewPage from "../../screens/MYNReportPage/ReviewPage/ReviewPage";
import UpdateReportPage from "../../screens/MYNReportPage/UpdateReportPage/UpdateReportPage";
const MynStack = createStackNavigator();

export default function MynNavigation() {
  return (
    <MynStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MYN Report Page"
    >
      <MynStack.Screen name="MYN Report Page" component={MYNReportPage} />
      <MynStack.Screen name="MYN Review Page" component={ReviewPage} />
      <MynStack.Screen
        name="Update MYN Report Page"
        component={UpdateReportPage}
      />
    </MynStack.Navigator>
  );
}
