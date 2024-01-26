import { Box, Progress, Center, NativeBaseProvider } from "native-base";
import React from "react";

const CustomProgressBar = ({
  progress,
  barBgColor = "coolGray.100",
  filledColor = "lime.500",
  width = "90%",
  maxWidth = "400",
  testID,
}) => {
  return (
    <Center w="100%">
      <Box w={width} maxW={maxWidth}>
        <Progress
          bg={barBgColor}
          _filledTrack={{ bg: filledColor }}
          value={progress}
          mx="4"
          testID={testID}
        />
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <CustomProgressBar
        progress={50}
        barBgColor="coolGray.200"
        filledColor="blue.500"
        width="80%"
        maxWidth="400"
        testID="custom-progress-bar"
      />
    </NativeBaseProvider>
  );
};
