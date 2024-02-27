import AsyncStorage from "@react-native-async-storage/async-storage";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import React from "react";

import AppSettings from "./AppSettings/AppSettings";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("AppSettings", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save user data when Save button is pressed with valid input", async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null);
    const { getByText, getByPlaceholderText } = render(<AppSettings />);

    const groupNameInput = getByPlaceholderText("Enter MYN Group Name");
    const certGroupInput = getByPlaceholderText("Enter Cert Group Number");
    const certSquadInput = getByPlaceholderText("Enter Cert Squad Name");
    const cityInput = getByPlaceholderText("Enter City");
    const zipInput = getByPlaceholderText("Enter Zip");
    const saveButton = getByText("Save");

    fireEvent.changeText(groupNameInput, "Test Group");
    fireEvent.changeText(certGroupInput, "12345");
    fireEvent.changeText(certSquadInput, "Test Squad");
    fireEvent.changeText(cityInput, "Test City");
    fireEvent.changeText(zipInput, "54321");
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        "userData",
        JSON.stringify({
          groupName: "Test Group",
          selectedCertGroupNumber: "12345",
          selectedCertSquadName: "Test Squad",
          city: "Test City",
          zip: "54321",
        }),
      );
    });
  });

  it("should display validation error and not save data when Save button is pressed with invalid zip code", async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null); 
    const { getByText, getByPlaceholderText } = render(<AppSettings />);

    const zipInput = getByPlaceholderText("Enter Zip");
    const saveButton = getByText("Save");

    fireEvent.changeText(zipInput, "invalidzip");
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(AsyncStorage.setItem).not.toHaveBeenCalled();
      expect(getByText("Zip code must be a 5-digit number.")).toBeDefined();
    });
  });

});
