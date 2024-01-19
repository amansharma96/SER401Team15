import { render } from "@testing-library/react-native";

import CustomAlert from "../../../../src/components/Alert/CustomAlert.js";

describe("CustomAlertComponent", () => {
  it("renders the custom alert with the correct text", () => {
    const { getByText } = render(<CustomAlert />);

    expect(
      getByText(
        "We have updated our terms of service. Please review and accept to continue using our service.",
      ),
    ).toBeTruthy();
  });
});
