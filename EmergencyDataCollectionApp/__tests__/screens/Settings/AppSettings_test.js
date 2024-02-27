import { render,} from "@testing-library/react-native";
import React from "react";

import AppSettings from "../../../src/screens/Settings/AppSettings";

describe("AppSettings", () => {
  it("renders correct placeholder texts for input fields", () => {
    const { getByPlaceholderText } = render(<AppSettings />);

    const mynGroupNameInput = getByPlaceholderText("Enter MYN Group Name");
    expect(mynGroupNameInput).toBeDefined();

    const certGroupNumberInput = getByPlaceholderText(
      "Enter Cert Group Number",
    );
    expect(certGroupNumberInput).toBeDefined();

    const certSquadNameInput = getByPlaceholderText("Enter Cert Squad Name");
    expect(certSquadNameInput).toBeDefined();

    const cityInput = getByPlaceholderText("Enter City");
    expect(cityInput).toBeDefined();

    const zipInput = getByPlaceholderText("Enter Zip");
    expect(zipInput).toBeDefined();

    const stateInput = getByPlaceholderText("State");
    expect(stateInput).toBeDefined();
  });
});
