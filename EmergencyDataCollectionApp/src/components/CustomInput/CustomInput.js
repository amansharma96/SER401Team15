import { Box, FormControl, Input, WarningOutlineIcon } from "native-base";
import React from "react";

const CustomInput = ({
  label,
  placeholder,
  isRequired = true,
  isInvalid = false,
  errorMessage = "Invalid input",
  value,
  onChangeText,
  testID,
  inputProps,
  formControlProps,
  w = "100%",
  maxW,
}) => {
  return (
    <Box alignItems="center">
      <FormControl
        isRequired={isRequired}
        isInvalid={isInvalid}
        w={w}
        maxW={maxW}
        {...formControlProps}
      >
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          testID={testID}
          {...inputProps}
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

export default CustomInput;
