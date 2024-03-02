import {
  FormControl,
  VStack,
  Text,
  Select,
  SelectTrigger,
  SelectList,
  SelectOption,
  Input,
  WarningOutlineIcon,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";

const CustomSelect = ({
  items, // required
  onChange, // required
  selectedValue,
  placeholder = "Select an option",
  label,
  isRequired = true,
  isInvalid = false,
  isReadOnly = false,
  errorMessage = "Please make a selection!",
  testID,
  enableFilter = false,
  selectProps,
  formControlProps,
  selectedItemStyle,
  w = "100%",
  maxW,
}) => {
  const [filterText, setFilterText] = useState("");
  const [selected, setSelected] = useState(selectedValue);

  useEffect(() => {
    setSelected(selectedValue);
  }, [selectedValue]);

  const handleChange = (itemValue) => {
    onChange(itemValue);
    setSelected(itemValue);
  };

  const filteredItems = enableFilter
    ? items.filter((item) =>
        item.label.toLowerCase().includes(filterText.toLowerCase()),
      )
    : items;

  return (
    <FormControl
      {...formControlProps}
      w={w}
      maxW={maxW}
      isRequired={isRequired}
      isInvalid={isInvalid}
    >
      <VStack>
        {label && <Text>{label}</Text>}
        {enableFilter && (
          <Input
            placeholder="Type to filter..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            isReadOnly={isReadOnly}
          />
        )}
        <Select
          {...selectProps}
          value={selected}
          onChange={handleChange}
          testID={testID}
        >
          <SelectTrigger placeholder={placeholder} />
          <SelectList>
            {filteredItems.map((item, index) => (
              <SelectOption
                key={index}
                value={item.value}
                style={selectedItemStyle}
              >
                {item.label}
              </SelectOption>
            ))}
          </SelectList>
        </Select>
        {isInvalid && (
          <Text>
            <WarningOutlineIcon size="xs" /> {errorMessage}
          </Text>
        )}
      </VStack>
    </FormControl>
  );
};

export default CustomSelect;
