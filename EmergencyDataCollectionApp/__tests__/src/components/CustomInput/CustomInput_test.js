import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import CustomInput from "../../../../src/components/CustomInput/CustomInput";
import NativeBaseTestUtils from "../../../../src/utils/NativeBaseTestUtils/NativeBaseTestUtils";

describe("CustomInput Component", () => {
  const setup = (props = {}) =>
    render(
      <NativeBaseTestUtils>
        <CustomInput {...props} />
      </NativeBaseTestUtils>,
    );

  it("should render correctly with the minimum required props", () => {
    const { getByPlaceholderText } = setup({ placeholder: "Enter text" });
    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("should display the label when provided", () => {
    const { getByText } = setup({ label: "Test Label" });
    expect(getByText("Test Label")).toBeTruthy();
  });

  it("should indicate required status when isRequired is true", () => {
    const { getByText } = setup({ label: "Test Label", isRequired: true });
    expect(getByText("*")).toBeTruthy();
  });

  it("should not indicate required status when isRequired is false", () => {
    const { queryByText } = setup({ label: "Test Label", isRequired: false });
    expect(queryByText("*")).toBeFalsy();
  });

  it("should display error message when isInvalid is true", () => {
    const { getByText } = setup({
      isInvalid: true,
      errorMessage: "Error message",
    });
    expect(getByText("Error message")).toBeTruthy();
  });

  it("should not display error message when isInvalid is false", () => {
    const { queryByText } = setup({ isInvalid: false });
    expect(queryByText("Error message")).toBeFalsy();
  });

  it("should call onChangeText when input changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = setup({
      onChangeText: onChangeTextMock,
      placeholder: "Enter text",
    });

    fireEvent.changeText(getByPlaceholderText("Enter text"), "New text");
    expect(onChangeTextMock).toHaveBeenCalledWith("New text");
  });

  it("accepts inputProps and applies them to the input element", () => {
    const { getByTestId } = setup({
      inputProps: {
        testID: "custom-input",
        accessibilityLabel: "custom-input",
      },
    });
    expect(getByTestId("custom-input")).toBeTruthy();
  });

  it("applies additional formControlProps to the FormControl", () => {
    const formControlTestId = "form-control";
    const { getByTestId } = setup({
      formControlProps: { testID: formControlTestId },
    });
    expect(getByTestId(formControlTestId)).toBeTruthy();
  });
});
