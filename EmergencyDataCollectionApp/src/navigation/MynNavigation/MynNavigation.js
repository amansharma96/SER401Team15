import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import MYNReportPage from "../../screens/MYNReportPage/MYNReportPage";
import ReviewPage from "../../screens/MYNReportPage/ReviewPage/ReviewPage";

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
    </MynStack.Navigator>
  );
}
