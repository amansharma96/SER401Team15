import { Spinner, HStack, Heading } from "native-base";
import React from "react";

import Theme from "../../../utils/Theme";

const CustomSpinner = ({
  text = "Loading",
  spinnerSize = "lg",
  spinnerColor = Theme.COLORS.BACKGROUND_YELLOW,
  fontSize = "md",
  textColor = Theme.COLORS.BACKGROUND_YELLOW,
  testID,
}) => {
  return (
    <HStack
      space={2}
      alignItems="center"
      justifyContent="center"
      testID={testID}
    >
      <Spinner
        color={spinnerColor}
        size={spinnerSize}
        accessibilityLabel={text}
      />
      <Heading color={textColor} fontSize={fontSize}>
        {text}
      </Heading>
    </HStack>
  );
};

export default CustomSpinner;
