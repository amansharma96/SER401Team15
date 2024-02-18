import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import CustomSelect from "../../../../src/components/CustomSelect/CustomSelect";
import NativeBaseTestUtils from "../../../../src/utils/NativeBaseTestUtils/NativeBaseTestUtils";

describe("CustomSelect Component", () => {
  const mockOnChange = jest.fn();
  const items = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ];

  it("renders correctly with mandatory props", () => {
    const { getAllByLabelText } = render(
      <NativeBaseTestUtils>
        <CustomSelect items={items} onChange={mockOnChange} />
      </NativeBaseTestUtils>,
    );

    expect(getAllByLabelText("Select an option")).toBeTruthy();
  });

  it("handles item selection", () => {
    const { getByRole } = render(
      <NativeBaseTestUtils>
        <CustomSelect items={items} onChange={mockOnChange} />
      </NativeBaseTestUtils>,
    );

    fireEvent(getByRole("button"), "onPress");
    fireEvent(getByRole("text", { name: "Item 2" }), "press");
    expect(mockOnChange).toHaveBeenCalledWith("2");
  });

  it("updates selected value when prop changes", () => {
    const { getByText, rerender } = render(
      <NativeBaseTestUtils>
        <CustomSelect items={items} onChange={mockOnChange} selectedValue="1" />
      </NativeBaseTestUtils>,
    );

    expect(getByText("Item 1")).toBeTruthy();

    rerender(
      <NativeBaseTestUtils>
        <CustomSelect items={items} onChange={mockOnChange} selectedValue="2" />
      </NativeBaseTestUtils>,
    );
    expect(getByText("Item 2")).toBeTruthy();
  });

  it("displays error message when isInvalid is true", () => {
    const { getByText } = render(
      <NativeBaseTestUtils>
        <CustomSelect
          items={items}
          onChange={mockOnChange}
          isInvalid
          errorMessage="Custom error message"
        />
      </NativeBaseTestUtils>,
    );

    expect(getByText("Custom error message")).toBeTruthy();
  });

  it("renders label when provided", () => {
    const { getByText } = render(
      <NativeBaseTestUtils>
        <CustomSelect
          items={items}
          onChange={mockOnChange}
          label="Custom Label"
        />
      </NativeBaseTestUtils>,
    );

    expect(getByText("Custom Label")).toBeTruthy();
  });
});
