import { render } from "@testing-library/react-native";
import React from "react";

import Welcome from "../../../src/screens/welcome/Welcome";

describe("<Welcome />", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<Welcome />);
    expect(getByText("Emergency Ready")).toBeTruthy();
    expect(getByText("Hazard Reporting")).toBeTruthy();
    expect(getByTestId("welcomeImage")).toBeTruthy();
    expect(getByTestId("getStartedButton")).toBeTruthy();
    expect(getByText("Get Started")).toBeTruthy();
  });
});
