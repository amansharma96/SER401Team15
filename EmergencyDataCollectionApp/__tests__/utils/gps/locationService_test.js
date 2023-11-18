import { render, waitFor } from "@testing-library/react-native";
import * as Location from "expo-location";
import React from "react";
import { Platform } from "react-native";

import LocationService from "../../../src/utils/gps/locationService";

jest.mock("expo-device", () => ({
  isDevice: jest.fn(),
}));
jest.mock("expo-location", () => ({
  hasServicesEnabledAsync: jest.fn(),
  getProviderStatusAsync: jest.fn(),
  requestForegroundPermissionsAsync: jest.fn(),
  getCurrentPositionAsync: jest.fn(),
  Accuracy: {
    BestForNavigation: "BestForNavigation",
  },
}));

describe("LocationService", () => {
  const mockOnLocationObtained = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });
  afterEach(() => {
    Platform.OS = "android";
    jest.useRealTimers();
  });

  it("renders without crashing on android", () => {
    Platform.OS = "android";
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
  });

  it("renders without crashing on ios", () => {
    Platform.OS = "ios";
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
  });

  it("handles disabled location services", async () => {
    jest.mocked(require("expo-device")).isDevice = true;
    Location.hasServicesEnabledAsync.mockResolvedValue(false);
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
    await waitFor(() => {
      expect(mockOnLocationObtained).toHaveBeenCalledWith({
        error:
          "Location services are disabled. Please enable them in settings.",
      });
    });
  });

  it("handles GPS not available", async () => {
    jest.mocked(require("expo-device")).isDevice = true;
    Location.hasServicesEnabledAsync.mockResolvedValue(true);
    Location.getProviderStatusAsync.mockResolvedValue({
      gpsAvailable: false,
    });
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
    await waitFor(() => {
      expect(mockOnLocationObtained).toHaveBeenCalledWith({
        error:
          "GPS is unavailable at the moment. Please try again later. Check settings to ensure GPS is enabled.",
      });
    });
  });

  it("handles location permission denied", async () => {
    jest.mocked(require("expo-device")).isDevice = true;
    Location.hasServicesEnabledAsync.mockResolvedValue(true);
    Location.getProviderStatusAsync.mockResolvedValue({
      gpsAvailable: true,
    });
    Location.requestForegroundPermissionsAsync.mockResolvedValue({
      status: "denied",
    });
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
    await waitFor(() => {
      expect(mockOnLocationObtained).toHaveBeenCalledWith({
        error: "Permission to access location was denied",
      });
    });
  });

  it("handles location fetched with high accuracy", async () => {
    jest.mocked(require("expo-device")).isDevice = true;
    Location.hasServicesEnabledAsync.mockResolvedValue(true);
    Location.getProviderStatusAsync.mockResolvedValue({
      gpsAvailable: true,
    });
    Location.requestForegroundPermissionsAsync.mockResolvedValue({
      status: "granted",
    });
    Location.getCurrentPositionAsync.mockResolvedValue({
      coords: {
        latitude: 0,
        longitude: 0,
        accuracy: 10,
      },
    });
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
    await waitFor(() => {
      expect(mockOnLocationObtained).toHaveBeenCalledWith({
        coords: {
          latitude: 0,
          longitude: 0,
          accuracy: 10,
        },
      });
    });
  });

  it("handles location fetched with low accuracy", async () => {
    jest.mocked(require("expo-device")).isDevice = true;
    Location.hasServicesEnabledAsync.mockResolvedValue(true);
    Location.getProviderStatusAsync.mockResolvedValue({
      gpsAvailable: true,
    });
    Location.requestForegroundPermissionsAsync.mockResolvedValue({
      status: "granted",
    });
    Location.getCurrentPositionAsync.mockResolvedValue({
      coords: {
        latitude: 0,
        longitude: 0,
        accuracy: 50,
      },
    });
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
    await waitFor(() => {
      expect(mockOnLocationObtained).toHaveBeenCalledWith({
        coords: {
          latitude: 0,
          longitude: 0,
          accuracy: 50,
        },
        error:
          "High accuracy GPS location not available, accuracy is greater than 30 meters",
      });
    });
  });

  it("handles error during location fetching", async () => {
    jest.mocked(require("expo-device")).isDevice = true;
    Location.hasServicesEnabledAsync.mockResolvedValue(true);
    Location.getProviderStatusAsync.mockResolvedValue({
      gpsAvailable: true,
    });
    Location.requestForegroundPermissionsAsync.mockResolvedValue({
      status: "granted",
    });
    Location.getCurrentPositionAsync.mockRejectedValue(new Error("error test"));
    render(<LocationService onLocationObtained={mockOnLocationObtained} />);
    await waitFor(() => {
      expect(mockOnLocationObtained).toHaveBeenCalledWith({
        error: "error test",
      });
    });
  });
});
