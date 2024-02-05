import { useAtomValue, useSetAtom } from "jotai";
import { NativeBaseProvider, Box } from "native-base";
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

import AnimalPage from "./AnimalPage/AnimalPage";
import HazardPage from "./HazardPage/HazardPage";
import InfoPage from "./InfoPage/InfoPage";
import LocationPage from "./LocationPage/LocationPage";
import {
  isInfoPageValidatedAtom,
  isLocationPageValidatedAtom,
  isHazardPageValidatedAtom,
  isPeoplePageValidatedAtom,
  isAnimalPageValidatedAtom,
  isNotePageValidatedAtom,
  tabIndexAtom,
} from "./MYNPageAtoms";
import NotePage from "./NotePage/NotePage";
import PeoplePage from "./PeoplePage/PeoplePage";
import ReportHeader from "../../components/ReportHeader/ReportHeader";

const InfoRoute = () => (
  <Box flex={1}>
    <InfoPage />
  </Box>
);

const LocationRoute = () => (
  <Box flex={1}>
    <LocationPage />
  </Box>
);

const HazardRoute = () => (
  <Box flex={1}>
    <HazardPage />
  </Box>
);

const PeopleRoute = () => (
  <Box flex={1}>
    <PeoplePage />
  </Box>
);

const AnimalRoute = () => (
  <Box flex={1}>
    <AnimalPage />
  </Box>
);

const NoteRoute = () => (
  <Box flex={1}>
    <NotePage />
  </Box>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  firstTab: InfoRoute,
  secondTab: LocationRoute,
  thirdTab: HazardRoute,
  fourthTab: PeopleRoute,
  fifthTab: AnimalRoute,
  sixthTab: NoteRoute,
});

const TabsComponent = () => {
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);
  const [routes] = useState([
    { key: "firstTab", title: "Info" },
    { key: "secondTab", title: "Location" },
    { key: "thirdTab", title: "Hazard" },
    { key: "fourthTab", title: "People" },
    { key: "fifthTab", title: "Animal" },
    { key: "sixthTab", title: "Note" },
  ]);
  const isInfoPageValidated = useAtomValue(isInfoPageValidatedAtom);
  const isLocationPageValidated = useAtomValue(isLocationPageValidatedAtom);
  const isHazardPageValidated = useAtomValue(isHazardPageValidatedAtom);
  const isPeoplePageValidated = useAtomValue(isPeoplePageValidatedAtom);
  const isAnimalPageValidated = useAtomValue(isAnimalPageValidatedAtom);
  const isNotePageValidated = useAtomValue(isNotePageValidatedAtom);

  const canNavigateToTab = (targetIndex) => {
    const validationStates = [
      isInfoPageValidated,
      isLocationPageValidated,
      isHazardPageValidated,
      isPeoplePageValidated,
      isAnimalPageValidated,
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
            const isDisabled = !canNavigateToTab(i);
            const borderColor = isActive ? "yellow.500" : "transparent";
            const textColor = isActive
              ? "#000"
              : isDisabled
                ? "#d1d1da"
                : "#a1a1aa";
            return (
              <Pressable
                key={i}
                onPress={() => {
                  if (canNavigateToTab(i)) {
                    setTabIndex(i);
                  } else {
                    Alert.alert(
                      "Tab Locked",
                      "Please complete the necessary information in the current tab.",
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
                    style={[styles.tabBarText, { color: textColor }]}
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
    [tabIndex],
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
          paddingHorizontal: 20,
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
