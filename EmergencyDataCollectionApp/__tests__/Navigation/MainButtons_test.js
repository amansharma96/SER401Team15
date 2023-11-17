import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import MainNavigation from "../../src/navigation/MainNavigation";

it("Should navigate to MYN reporting page", () => {
  const { getByText, getByTestId } = render(<MainNavigation />);

  const newMYNreportButton = getByText("Start a new MYN Report");
  fireEvent.press(newMYNreportButton);

  expect(getByTestId("MYNstart")).toBeTruthy();
});
