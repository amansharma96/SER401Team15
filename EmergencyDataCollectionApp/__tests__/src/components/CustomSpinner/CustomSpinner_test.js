import { render } from "@testing-library/react-native";
import React from "react";

import CustomSpinner from "../../../../src/components/CustomSpinner/CustomSpinner";
import NativeBaseTestUtils from "../../../../src/utils/NativeBaseTestUtils/NativeBaseTestUtils";
import Theme from "../../../../src/utils/theme";

describe("CustomSpinner", () => {
  it("renders correctly with default props", () => {
    const { getByTestId, getByText } = render(
      <NativeBaseTestUtils>
        <CustomSpinner testID="spinner" />
      </NativeBaseTestUtils>,
    );
    expect(getByTestId("spinner")).toBeTruthy();
    expect(getByText("Loading")).toBeTruthy();
  });

  it("renders with custom props", () => {
    const customProps = {
      text: "Fetching Data",
      spinnerSize: "sm",
      spinnerColor: Theme.COLORS.BACKGROUND_YELLOW,
      fontSize: "lg",
      textColor: Theme.COLORS.BACKGROUND_YELLOW,
      testID: "custom-spinner",
    };

    const { getByText } = render(
      <NativeBaseTestUtils>
        <CustomSpinner {...customProps} />
      </NativeBaseTestUtils>,
    );

    expect(getByText(customProps.text)).toBeTruthy();
  });
});
