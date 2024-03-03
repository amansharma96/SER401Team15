import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";
import React from "react";

import Theme from "../../../../utils/Theme";

const CustomInput = ({
  label,
  placeholder,
  FormControlSize = "md", // sm, md, lg
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
  errorMessage = "Invalid input",
  displayHelperMessage = false,
  helperMessage = "Input is required",
  value,
  onChange,
  testID,
  inputProps,
  formControlProps,
  h = "$32",
  w = "100%",
}) => {
  return (
    <Box h={h} w={w}>
      <FormControl
        size={FormControlSize}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        {...formControlProps}
      >
        {label && (
          <FormControlLabel mb="$1">
            <FormControlLabelText
              color={Theme.COLORS.TEXT_GREY}
              fontSize={Theme.TYPOGRAPHY.FONT_SIZE.SMALL}
            >
              {label}
            </FormControlLabelText>
          </FormControlLabel>
        )}
        <Input>
          <InputField
            type={inputProps?.type || "text"}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            data-testid={testID}
            {...inputProps}
          />
        </Input>
        {!isInvalid && displayHelperMessage && (
          <FormControlHelper>
            <FormControlHelperText>{helperMessage}</FormControlHelperText>
          </FormControlHelper>
        )}
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{errorMessage}</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
};

export default CustomInput;
