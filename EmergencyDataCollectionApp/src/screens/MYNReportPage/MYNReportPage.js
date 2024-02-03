import { NativeBaseProvider, Box, Center } from "native-base";
import React, { useState, useCallback } from "react";
import { Dimensions, StatusBar, Animated, Pressable } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
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

const FifthRote = () => (
    <Center flex={1} my="4">
        This is Tab 5
    </Center>
)

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
    fifth: FifthRote
});

const TabsComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Info" },
    { key: "second", title: "Location" },
    { key: "third", title: "Hazard" },
    { key: "fourth", title: "People" },
    { key: "fifth", title: "Notes" }
  ]);

  const renderTabBar = useCallback(
    (props) => {
      const inputRange = props.navigationState.routes.map((_, i) => i);
      return (
        <Box flexDirection="row">
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5,
              ),
            });
            // These color values can be adjusted or moved outside the component for theming or customization
            const color = index === i ? "#000" : "#a1a1aa";
            const borderColor = index === i ? "cyan.500" : "coolGray.200";

            return (
              <Pressable
                key={i} // Added key for list items
                onPress={() => setIndex(i)}
                style={{ flex: 1, alignItems: "center", padding: 12 }}
              >
                <Animated.Text style={{ opacity, color }}>
                  {route.title}
                </Animated.Text>
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
      style={{ marginTop: StatusBar.currentHeight }}
    />
  );
};

export default () => {
  return (
    <NativeBaseProvider>
        <TabsComponent />
    </NativeBaseProvider>
  );
};
