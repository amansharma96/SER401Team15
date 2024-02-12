import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CERTReportPage from "../../screens/CERTReportPage/CERTReportPage";
import ReviewPage from "../../screens/CERTReportPage/ReviewPage/ReviewPage";

const CertStack = createStackNavigator();

export default function MynNavigation() {
  return (
    <CertStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CERT Report Page"
    >
      <CertStack.Screen name="CERT Report Page" component={CERTReportPage} />
      <CertStack.Screen name="CERT Review Page" component={ReviewPage} />
    </CertStack.Navigator>
  );
}