import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import App from "../EmergencyDataCollectionApp/App";

it("Should navigate to main screen", () => {
  const { getByText } = render(<App />);

  const getStartedButton = getByText("Get Started");
  fireEvent.press(getStartedButton);

  expect(getByText("Start a new MYN Report")).toBeTruthy();
  expect(getByText("Review saved MYN Reports")).toBeTruthy();
  expect(getByText("Start a new CERT Report")).toBeTruthy();
  expect(getByText("Review saved CERT Reports")).toBeTruthy();
  expect(getByText("Start a new HAZARD Report")).toBeTruthy();
  expect(getByText("Review saved HAZARD Reports")).toBeTruthy();
  expect(getByText("Copy saved files to USB storage")).toBeTruthy();

  expect(getByText("Instructions")).toBeTruthy();
  expect(getByText("Settings")).toBeTruthy();
});
