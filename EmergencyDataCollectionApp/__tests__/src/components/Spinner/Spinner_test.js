import { render, screen, waitFor } from "@testing-library/react-native";
import React from "react";

import CustomSpinner from "../../../../src/components/Spinner/CustomSpinner.js";

describe("CustomSpinner", () => {
  it("should display the spinner and custom text, then disappear after the specified duration", async () => {
    const customText = "Loading...";
    const duration = 500;

    render(<CustomSpinner text={customText} duration={duration} />);

    // Check if spinner and text are in the document initially
    expect(screen.getByText(customText)).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    // Wait for the specified duration and check if spinner is removed
    await waitFor(
      () => {
        expect(screen.queryByText(customText)).not.toBeInTheDocument();
      },
      { timeout: duration + 100 },
    );
  });
});
