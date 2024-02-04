import { Box, TextArea, FormControl, WarningOutlineIcon } from "native-base";
import React from "react";

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
}) => {
  return (
    <Box alignItems="center" w="100%">
      <FormControl
        isRequired={isRequired}
        isInvalid={isInvalid}
        w="75%"
        maxW="300px"
        {...formControlProps}
      >
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <TextArea
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          testID={testID}
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
