import { Box, TextArea, FormControl, WarningOutlineIcon } from "native-base";
import React from "react";

import Theme from "../../../utils/Theme";

const CustomTextArea = ({
  label,
  value,
  placeholder = "Enter text",
  isRequired = false,
  isInvalid = false,
  errorMessage = "Invalid input",
  onChangeText,
  testID,
  textAreaProps,
  formControlProps,
  w = "100%",
  maxW,
}) => {
  const borderColor = isInvalid
    ? Theme.COLORS.ERROR
    : Theme.COLORS.BORDER_COLOR;

  return (
    <Box alignItems="center" w="100%">
      <FormControl
        isRequired={isRequired}
        isInvalid={isInvalid}
        w={w}
        maxW={maxW}
        {...formControlProps}
      >
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <TextArea
          value={value}
          onChangeText={onChangeText}
          accessibilityLabel={placeholder}
          placeholder={placeholder}
          mt="1"
          testID={testID}
          borderColor={borderColor}
          {...textAreaProps}
        />
        {isInvalid && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorMessage}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
    </Box>
  );
};

export default CustomTextArea;
