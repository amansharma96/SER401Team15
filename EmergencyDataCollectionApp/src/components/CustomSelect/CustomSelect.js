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
  onchange,
  enableFilter = false,
  selectProps,
  formControlProps,
  selectedItemStyle,
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
        w="3/4"
        maxW="300"
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
            onchange(itemValue);
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
