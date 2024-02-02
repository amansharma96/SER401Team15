import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View, Button } from "react-native";

import CERTInstructions from "../../screens/instructions/CERTInstructions";
import HazzardInstructions from "../../screens/instructions/HazzardInstructions";
import MYNInstructions from "../../screens/instructions/MYNInstructions";
import Theme from "../../utils/Theme";
import styles from "../CERTNavigation/styles";

const Tab = createMaterialTopTabNavigator();

function CERTReportNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 30 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#111111",
            tabBarLabelStyle: { fontSize: 8, textAlignVertical: "bottom" },
            tabBarStyle: { backgroundColor: "#ffcc00", height: "6%" },
          }}
        >
          <Tab.Screen name="CERT" component={CERTInstructions} />
          <Tab.Screen name="MYN" component={MYNInstructions} />
          <Tab.Screen name="Hazzard" component={HazzardInstructions} />
        </Tab.Navigator>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Return"
          color={Theme.COLORS.BACKGROUND_YELLOW}
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        />
      </View>
    </View>
  );
}

export default CERTReportNavigation;
