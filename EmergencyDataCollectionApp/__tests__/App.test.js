import { render, waitFor, screen } from "@testing-library/react-native";
import React from "react";

import App from "../App";

describe("App", () => {
  it("renders the NavigationBar", async () => {
    render(<App />);
    const navigationBar = await waitFor(() =>
      screen.getByTestId("navigationBar"),
    );
    expect(navigationBar).toBeTruthy();
  });
});
