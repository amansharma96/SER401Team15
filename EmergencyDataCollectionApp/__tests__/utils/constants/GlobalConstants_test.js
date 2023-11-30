import {
  GPS_TIMEOUT,
  LOCATION_ACCURACY_THRESHOLD,
  UPDATE_INTERVAL,
  DISTANCE_INTERVAL,
  GPS_FETCHING_TIMEOUT,
} from "../../../src/utils/constants/GlobalConstants";

describe("Verify Constants", () => {
  it("should have the correct GPS timeout value", () => {
    expect(GPS_TIMEOUT).toBe(8000);
  });

  it("should have the correct location accuracy threshold value", () => {
    expect(LOCATION_ACCURACY_THRESHOLD).toBe(10);
  });

  it("should have the correct update interval value", () => {
    expect(UPDATE_INTERVAL).toBe(500);
  });

  it("should have the correct distance interval value", () => {
    expect(DISTANCE_INTERVAL).toBe(0);
  });

  it("should have the correct GPS fetching timeout value", () => {
    expect(GPS_FETCHING_TIMEOUT).toBe(20000);
  });
});
