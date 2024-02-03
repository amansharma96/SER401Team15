import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from "react";

import App from "../../App";

describe("Navigation", () => {
  it("Should navigate to MYN reporting page", async () => {
    const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);
    const newMYNreportButton = getByText("Start a new MYN Report");
    fireEvent.press(newMYNreportButton);

    expect(getByTestId("MYNstart")).toBeTruthy();
    cleanup();
  });

  it("Should navigate to saved MYN reports page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);
    const savedMYNreportButton = getByText("Review saved MYN Reports");
    fireEvent.press(savedMYNreportButton);

    expect(getByTestId("MYNsaved")).toBeTruthy();
    cleanup(); */
  });

  it("Should navigate to CERT reporting page", async () => {
    const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);
    const newCERTreportButton = getByText("Start a new CERT Report");
    fireEvent.press(newCERTreportButton);

    expect(getByTestId("CERTstart")).toBeTruthy();
    cleanup();
  });

  it("Should navigate to saved CERT reports page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    const savedCERTreportButton = getByText("Review saved CERT Reports");
    fireEvent.press(savedCERTreportButton);

    expect(getByTestId("CERTsaved")).toBeTruthy();
    cleanup(); */
  });

  it("Should navigate to HAZARD reporting page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    const newHAZARDreportButton = getByText("Start a new HAZARD Report");
    fireEvent.press(newHAZARDreportButton);

    expect(getByTestId("HAZARDstart")).toBeTruthy();
    cleanup();
    */
  });

  it("Should navigate to saved HAZARD reports page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    const savedHAZARDreportButton = getByText("Review saved HAZARD Reports");
    fireEvent.press(savedHAZARDreportButton);

    expect(getByTestId("HAZARDsaved")).toBeTruthy();
    cleanup(); */
  });

  it("Should navigate to export reports page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    const exportReportsButton = getByText("Copy saved files to USB storage");
    fireEvent.press(exportReportsButton);

    expect(getByTestId("Export")).toBeTruthy();
    cleanup(); */
  });

  it("Should navigate to instructions page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    const instructionsButton = getByText("Instructions");
    fireEvent.press(instructionsButton);

    expect(getByTestId("instructions")).toBeTruthy();
    cleanup(); */
  });

  it("Should navigate to settings page", () => {
    /* const { getByText, getByTestId } = render(<App />);

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    const settingsButton = getByText("Settings");
    fireEvent.press(settingsButton);

    expect(getByTestId("settings")).toBeTruthy();
    cleanup(); */
  });
});
