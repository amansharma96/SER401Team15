import * as Device from "expo-device";
import * as Location from "expo-location";
import { useEffect } from "react";
import { Platform } from "react-native";

const LocationService = ({ onLocationObtained }) => {
  useEffect(() => {
    (async () => {
      try {
        if (
          (Platform.OS === "android" || Platform.OS === "ios") &&
          !Device.isDevice
        ) {
          onLocationObtained({
            error: "Location services not available on Emulator/Simulator",
          });
          return;
        }

        const isLocationEnabled = await Location.hasServicesEnabledAsync();
        if (!isLocationEnabled) {
          onLocationObtained({
            error:
              "Location services are disabled. Please enable them in settings.",
          });
          return;
        }

        const isGpsAvailable = (await Location.getProviderStatusAsync())
          .gpsAvailable;
        if (!isGpsAvailable) {
          onLocationObtained({
            error:
              "GPS is unavailable at the moment. Please try again later. Check settings to ensure GPS is enabled.",
          });
          return;
        }

        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          onLocationObtained({
            error: "Permission to access location was denied",
          });
          return;
        }

        const locationOptions = {
          accuracy: Location.Accuracy.BestForNavigation,
          timeout: 15000,
        };

        const locationPromise =
          Location.getCurrentPositionAsync(locationOptions);

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Location request timed out after 15s")),
            locationOptions.timeout,
          ),
        );

        const location = await Promise.race([locationPromise, timeoutPromise]);

        if (location.coords.accuracy > 30) {
          onLocationObtained({
            ...location,
            error:
              "High accuracy GPS location not available, accuracy is greater than 30 meters",
          });
          return;
        }

        onLocationObtained(location);
      } catch (error) {
        onLocationObtained({
          error:
            error.message ||
            "An unknown error occurred while fetching location",
        });
      }
    })();
  }, [onLocationObtained]);

  return null;
};

export default LocationService;
