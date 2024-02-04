import {
  Center,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Input,
} from "native-base";
import React, { useState } from "react";

const CustomSelect = ({
  items,
  placeholder = "Select an option",
  label,
  isRequired = true,
  isInvalid = false,
  isReadOnly = true,
  errorMessage = "Please make a selection!",
  testID,
  onChange,
  enableFilter = false,
  selectProps,
  formControlProps,
  selectedItemStyle,
  maxW = "300",
}) => {
  const [filterText, setFilterText] = useState("");
  const displayedItems = enableFilter
    ? items.filter((item) =>
        item.label.toLowerCase().startsWith(filterText.toLowerCase()),
      )
    : items;

  return (
    <Center>
      <FormControl
        maxW={maxW}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        {...formControlProps}
      >
        {label && <FormControl.Label>{label}</FormControl.Label>}
        {enableFilter && (
          <Input
            placeholder="Type to filter..."
            mt="1"
            value={filterText}
            onChangeText={(text) => setFilterText(text)}
            autoCapitalize="none"
          />
        )}
        <Select
          minWidth="200"
          accessibilityLabel={placeholder}
          placeholder={placeholder}
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
            ...selectedItemStyle,
          }}
          mt="1"
          testID={testID}
          onValueChange={(itemValue) => {
            onChange(itemValue);
            if (enableFilter) setFilterText("");
          }}
          {...selectProps}
        >
          {displayedItems.map(({ label, value }, index) => (
            <Select.Item key={index} label={label} value={value} />
          ))}
        </Select>
        {isInvalid && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorMessage}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
    </Center>
  );
};

export default CustomSelect;
