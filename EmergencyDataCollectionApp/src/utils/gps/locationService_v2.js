import * as Device from "expo-device";
import * as Location from "expo-location";
import { useEffect } from "react";
import { Platform } from "react-native";

import {
  LOCATION_ACCURACY_THRESHOLD,
  UPDATE_INTERVAL,
  DISTANCE_INTERVAL,
} from "../constants/GlobalConstants";

const LocationService_v2 = ({ onLocationObtained }) => {
  useEffect(() => {
    let watchId;

    const watchLocation = async () => {
      if (
        !Device.isDevice &&
        (Platform.OS === "android" || Platform.OS === "ios")
      ) {
        return "Location services not available on Emulator/Simulator";
      }

      if (!(await Location.hasServicesEnabledAsync())) {
        return "Location services are disabled. Please enable them in settings.";
      }

      if (Platform.OS === "android") {
        const { gpsAvailable } = await Location.getProviderStatusAsync();
        if (!gpsAvailable) {
        return "GPS is unavailable at the moment. Please try again later. Check settings to ensure GPS is enabled.";
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return "Permission to access location was denied";
      }

      const locationOptions = {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: UPDATE_INTERVAL,
        distanceInterval: DISTANCE_INTERVAL,
      };

      watchId = await Location.watchPositionAsync(
        locationOptions,
        (location) => {
          if (location.coords.accuracy <= LOCATION_ACCURACY_THRESHOLD) {
            onLocationObtained(location);
          } else {
            onLocationObtained({
              ...location,
              error:
                "High accuracy GPS location not available, accuracy is greater than " +
                LOCATION_ACCURACY_THRESHOLD +
                " meters",
            });
          }
        },
      );
    };

    watchLocation().catch((error) => {
      console.error("Error during location watch:", error);
    });

    return () => {
      if (watchId) {
        watchId.remove();
      }
    };
  }, [onLocationObtained]);

  return null;
};

export default LocationService_v2;
