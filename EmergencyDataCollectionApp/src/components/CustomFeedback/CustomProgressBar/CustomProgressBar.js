import { Box, Progress, Center } from "native-base";
import React from "react";

import Theme from "../../../utils/Theme";

const CustomProgressBar = ({
  progress,
  size = "sm",
  barBgColor = "coolGray.200",
  filledColor = Theme.COLORS.BACKGROUND_YELLOW,
  width = "100%",
  maxWidth = "400",
  testID,
}) => {
  return (
    <Center w="100%">
      <Box w={width} maxW={maxWidth}>
        <Progress
          size={size}
          bg={barBgColor}
          _filledTrack={{ bg: filledColor }}
          value={progress}
          mx="0"
          testID={testID}
        />
      </Box>
    </Center>
  );
};

export default CustomProgressBar;
