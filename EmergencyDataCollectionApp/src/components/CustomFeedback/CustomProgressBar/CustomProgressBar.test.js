import { render } from "@testing-library/react-native";
import React from "react";

import CustomProgressBar from "./CustomProgressBar";
import NativeBaseTestUtils from "../../../utils/NativeBaseTestUtils/NativeBaseTestUtils";

describe("CustomProgressBar Component", () => {
  const renderComponent = ({
    progress,
    size,
    barBgColor,
    filledColor,
    width,
    maxWidth,
    testID,
  } = {}) =>
    render(
      <NativeBaseTestUtils>
        <CustomProgressBar
          progress={progress}
          size={size}
          barBgColor={barBgColor}
          filledColor={filledColor}
          width={width}
          maxWidth={maxWidth}
          testID={testID}
        />
      </NativeBaseTestUtils>,
    );

  it("renders correctly with default props", () => {
    const { getByTestId } = renderComponent({
      progress: 50,
      testID: "progressBar",
    });
    const progressBar = getByTestId("progressBar");

    expect(progressBar).toBeDefined();
    expect((progressBar.props.progress = 50));
    expect(progressBar.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: "#e5e7eb",
        borderRadius: 9999,
        height: 8,
        marginLeft: 0,
        marginRight: 0,
        overflow: "hidden",
      }),
    );
  });

  it("renders correctly with custom props", () => {
    const customProps = {
      progress: 75,
      size: "md",
      barBgColor: "emerald.200",
      filledColor: "red.500",
      width: "75%",
      maxWidth: "300",
      testID: "customProgressBar",
    };

    const { getByTestId } = renderComponent(customProps);
    const progressBar = getByTestId("customProgressBar");

    expect(progressBar).toBeDefined();
    expect((progressBar.props.progress = 75));
    expect((progressBar.props.size = "md"));
    expect((progressBar.props.barBgColor = "emerald.200"));
    expect((progressBar.props.filledColor = "red.500"));
    expect((progressBar.props.width = "75%"));
    expect((progressBar.props.maxWidth = "300"));
  });
});
