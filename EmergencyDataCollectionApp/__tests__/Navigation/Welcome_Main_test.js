import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import App from "../../App";

jest.mock("../../src/utils/Database/OfflineSQLiteDB", () => ({
  setupDatabase: jest.fn().mockImplementation((callback) => callback()),
}));

it("Should navigate to main screen", () => {
  const { getByText } = render(<App />);

  const getStartedButton = getByText("Get Started");
  fireEvent.press(getStartedButton);

  expect(getByText("New MYN Report")).toBeTruthy();
  expect(getByText("Review MYN Reports")).toBeTruthy();
  expect(getByText("New CERT Report")).toBeTruthy();
  expect(getByText("Review CERT Reports")).toBeTruthy();
  expect(getByText("New HZD Report")).toBeTruthy();
  expect(getByText("Review HZD Reports")).toBeTruthy();
  expect(getByText("Export Reports")).toBeTruthy();

  expect(getByText("Instructions")).toBeTruthy();
  expect(getByText("Settings")).toBeTruthy();
});
