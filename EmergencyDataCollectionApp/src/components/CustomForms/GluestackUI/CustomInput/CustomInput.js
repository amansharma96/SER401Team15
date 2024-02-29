import {
  FormControl,
  VStack,
  Text,
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from "@gluestack-ui/themed";
import { WarningOutlineIcon } from "native-base";
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
    <FormControl {...formControlProps} w={w} maxW={maxW}>
      <VStack space="xs">
        {label && <Text>{label}</Text>}
        <Input>
          <InputField
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            testID={testID}
            isRequired={isRequired}
            isInvalid={isInvalid}
            {...inputProps}
          />
          {isInvalid && (
            <InputSlot>
              <Text>{errorMessage}</Text>
              <InputIcon as={<WarningOutlineIcon />} />
            </InputSlot>
          )}
        </Input>
      </VStack>
    </FormControl>
  );
};

export default CustomInput;
