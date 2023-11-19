import {
  GPS_TIMEOUT,
  LOCATION_ACCURACY_THRESHOLD,
} from "../../../src/utils/constants/GlobalConstants";

describe("Verify Constants", () => {
  it("should have the correct GPS timeout value", () => {
    expect(GPS_TIMEOUT).toBe(8000);
  });

  it("should have the correct location accuracy threshold value", () => {
    expect(LOCATION_ACCURACY_THRESHOLD).toBe(30);
  });
});
