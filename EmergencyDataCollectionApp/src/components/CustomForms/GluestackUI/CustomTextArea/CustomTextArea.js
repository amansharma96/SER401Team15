import {
  FormControl,
  VStack,
  Textarea,
  WarningOutlineIcon,
} from "@gluestack-ui/themed";
import React from "react";
import { Text } from "react-native";

const CustomTextArea = ({
  label,
  value,
  placeholder = "Enter text",
  isRequired = false,
  isInvalid = false,
  errorMessage = "Invalid input",
  onChange,
  testID,
  textAreaProps,
  formControlProps,
  w = "100%",
  maxW,
}) => {
  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={isInvalid}
      w={w}
      maxW={maxW}
      {...formControlProps}
    >
      <VStack>
        {label && <Text>{label}</Text>}
        <Textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          testID={testID}
          {...textAreaProps}
        />
        {isInvalid && (
          <Text>
            <WarningOutlineIcon size="xs" /> {errorMessage}
          </Text>
        )}
      </VStack>
    </FormControl>
  );
};

export default CustomTextArea;
