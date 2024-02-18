import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import CustomTextArea from "../../../../src/components/CustomTextArea/CustomTextArea";
import NativeBaseTestUtils from "../../../../src/utils/NativeBaseTestUtils/NativeBaseTestUtils";

describe("CustomTextArea Component", () => {
  const mockOnChangeText = jest.fn();

  it("renders correctly with default props", () => {
    const { getByPlaceholderText } = render(
      <NativeBaseTestUtils>
        <CustomTextArea onChangeText={mockOnChangeText} />
      </NativeBaseTestUtils>,
    );

    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("displays provided label", () => {
    const { getByText } = render(
      <NativeBaseTestUtils>
        <CustomTextArea label="Test Label" onChangeText={mockOnChangeText} />
      </NativeBaseTestUtils>,
    );

    expect(getByText("Test Label")).toBeTruthy();
  });

  it("shows custom placeholder when provided", () => {
    const { getByPlaceholderText } = render(
      <NativeBaseTestUtils>
        <CustomTextArea
          placeholder="Custom Placeholder"
          onChangeText={mockOnChangeText}
        />
      </NativeBaseTestUtils>,
    );

    expect(getByPlaceholderText("Custom Placeholder")).toBeTruthy();
  });

  it("calls onChangeText when text changes", () => {
    const { getByPlaceholderText } = render(
      <NativeBaseTestUtils>
        <CustomTextArea onChangeText={mockOnChangeText} />
      </NativeBaseTestUtils>,
    );

    fireEvent.changeText(getByPlaceholderText("Enter text"), "New text");
    expect(mockOnChangeText).toHaveBeenCalledWith("New text");
  });

  it("renders error message when isInvalid is true", () => {
    const { getByText } = render(
      <NativeBaseTestUtils>
        <CustomTextArea
          isInvalid
          errorMessage="Custom Error Message"
          onChangeText={mockOnChangeText}
        />
      </NativeBaseTestUtils>,
    );

    expect(getByText("Custom Error Message")).toBeTruthy();
  });
});
