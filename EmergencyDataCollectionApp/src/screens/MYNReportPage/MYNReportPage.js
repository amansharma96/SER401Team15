import {useAtomValue, useSetAtom} from "jotai";
import { NativeBaseProvider, Box, Center } from "native-base";
import React, { useState, useCallback } from "react";
import {
  Dimensions,
  Animated,
  Pressable,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import HazardPage from "./HazardPage/HazardPage";
import InfoPage from "./InfoPage/InfoPage";
import LocationPage from "./LocationPage/LocationPage";
import {
  isInfoPageValidatedAtom,
  isLocationPageValidatedAtom,
  isHazardPageValidatedAtom,
  isPeoplePageValidatedAtom,
  isNotePageValidatedAtom,
    tabIndexAtom
} from "./MYNPageAtoms";
import ReportHeader from "../../components/ReportHeader/ReportHeader";
import NotePage from "./NotePage/NotePage";
import PeoplePage from "./PeoplePage/PeoplePage";

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
    <HazardPage />
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my="4">
    <PeoplePage />
  </Center>
);

const FifthRoute = () => (
  <Center flex={1} my="4">
    <NotePage />
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
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);
  const [routes] = useState([
    { key: "first", title: "Info" },
    { key: "second", title: "Location" },
    { key: "third", title: "Hazard" },
    { key: "fourth", title: "People" },
    { key: "fifth", title: "Note" },
  ]);
  const isInfoPageValidated = useAtomValue(isInfoPageValidatedAtom);
  const isLocationPageValidated = useAtomValue(isLocationPageValidatedAtom);
  const isHazardPageValidated = useAtomValue(isHazardPageValidatedAtom);
  const isPeoplePageValidated = useAtomValue(isPeoplePageValidatedAtom);
  const isNotePageValidated = useAtomValue(isNotePageValidatedAtom);

  const canNavigateToTab = (targetIndex) => {
    const validationStates = [
      isInfoPageValidated,
      isLocationPageValidated,
      isHazardPageValidated,
      isPeoplePageValidated,
      isNotePageValidated,
    ];

    for (let i = 0; i < targetIndex; i++) {
      if (!validationStates[i]) {
        return false;
      }
    }

    return true;
  };

  const renderTabBar = useCallback(
    (props) => {
      return (
        <Box flexDirection="row" justifyContent="space-between">
          {props.navigationState.routes.map((route, i) => {
            const isActive = tabIndex === i;
            const borderColor = isActive ? "yellow.500" : "transparent";
            return (
              <Pressable
                key={i}
                onPress={() => {
                  if (canNavigateToTab(i)) {
                    setTabIndex(i);
                  } else {
                    Alert.alert(
                      "Tab Locked",
                      "Please complete the necessary information in the previous tabs.",
                    );
                  }
                }}
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
    [tabIndex, isInfoPageValidatedAtom],
  );

  return (
    <TabView
      navigationState={{ index: tabIndex, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setTabIndex}
      initialLayout={initialLayout}
      swipeEnabled={false}
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
