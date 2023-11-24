import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import MainNavigation from "../../src/navigation/MainNavigation";

it("Should navigate to MYN reporting page", () => {
  const { getByText, getByTestId } = render(<MainNavigation />);

  const newMYNreportButton = getByText("Start a new MYN Report");
  fireEvent.press(newMYNreportButton);

  expect(getByTestId("MYNstart")).toBeTruthy();
});

it("Should navigate to saved MYN reports page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const savedMYNreportButton = getByText("Review saved MYN Reports");
  fireEvent.press(savedMYNreportButton);

  expect(getByTestId("MYNsaved")).toBeTruthy(); */
});

it("Should navigate to CERT reporting page", () => {
  const { getByText, getByTestId } = render(<MainNavigation />);

  const newCERTreportButton = getByText("Start a new CERT Report");
  fireEvent.press(newCERTreportButton);

  expect(getByTestId("CERTstart")).toBeTruthy();
});

it("Should navigate to saved CERT reports page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const savedCERTreportButton = getByText("Review saved CERT Reports");
  fireEvent.press(savedCERTreportButton);

  expect(getByTestId("CERTsaved")).toBeTruthy(); */
});

it("Should navigate to HAZARD reporting page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const newHAZARDreportButton = getByText("Start a new HAZARD Report");
  fireEvent.press(newHAZARDreportButton);

  expect(getByTestId("HAZARDstart")).toBeTruthy();
  */
});

it("Should navigate to saved HAZARD reports page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const savedHAZARDreportButton = getByText("Review saved HAZARD Reports");
  fireEvent.press(savedHAZARDreportButton);

  expect(getByTestId("HAZARDsaved")).toBeTruthy(); */
});

it("Should navigate to export reports page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const exportReportsButton = getByText("Copy saved files to USB storage");
  fireEvent.press(exportReportsButton);

  expect(getByTestId("Export")).toBeTruthy(); */
});

it("Should navigate to instructions page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const instructionsButton = getByText("Instructions");
  fireEvent.press(instructionsButton);

  expect(getByTestId("instructions")).toBeTruthy(); */
});

it("Should navigate to settings page", () => {
  /* const { getByText, getByTestId } = render(<MainNavigation />);

  const settingsButton = getByText("Settings");
  fireEvent.press(settingsButton);

  expect(getByTestId("settings")).toBeTruthy(); */
});


