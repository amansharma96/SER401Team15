import { NativeBaseProvider, Box, Center } from "native-base";
import React, { useState, useCallback } from "react";
import {
  Dimensions,
  Animated,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

// import HazardPage from "./HazardPage/HazardPage";
import InfoPage from "./InfoPage/InfoPage";
import LocationPage from "./LocationPage/LocationPage";
import ReportHeader from "../../components/ReportHeader/ReportHeader";
// import NotePage from "./NotePage/NotePage";
// import PeoplePage from "./PeoplePage/PeoplePage";

const FirstRoute = () => (
  <Center flex={1} my="4">
    <InfoPage />
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    <LocationPage />
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4
  </Center>
);

const FifthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 5
  </Center>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});

const TabsComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Info" },
    { key: "second", title: "Location" },
    { key: "third", title: "Hazard" },
    { key: "fourth", title: "People" },
    { key: "fifth", title: "Note" },
  ]);

  const renderTabBar = useCallback(
    (props) => {
      return (
        <Box flexDirection="row" justifyContent="space-between">
          {props.navigationState.routes.map((route, i) => {
            const isActive = index === i;
            const borderColor = isActive ? "yellow.500" : "transparent";
            return (
              <Pressable
                key={i}
                onPress={() => setIndex(i)}
                style={styles.tabBarPressable}
              >
                <Box
                  borderBottomWidth={isActive ? 3 : 0}
                  borderColor={borderColor}
                  pb="5px"
                  alignItems="center"
                >
                  <Animated.Text
                    style={[
                      styles.tabBarText,
                      { color: isActive ? "#000" : "#a1a1aa" },
                    ]}
                  >
                    {route.title}
                  </Animated.Text>
                </Box>
              </Pressable>
            );
          })}
        </Box>
      );
    },
    [index],
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ marginTop: -5 }}
    />
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <ReportHeader
          title="MYN Reporting"
          subtitle="Creating new MYN Report"
        />
        <TabsComponent />
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  tabBarPressable: {
    paddingVertical: 12,
    alignItems: "center",
  },
  tabBarText: {
    fontSize: 16,
    letterSpacing: -0.5,
  },
});
