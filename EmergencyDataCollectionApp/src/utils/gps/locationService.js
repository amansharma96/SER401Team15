import * as Device from "expo-device";
import * as Location from "expo-location";
import { useEffect } from "react";
import { Platform } from "react-native";

const LocationService = ({ onLocationObtained }) => {
  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS === "android" && !Device.isDevice) {
          onLocationObtained({ error: "Not available on Android Emulator" });
          return;
        }

        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          onLocationObtained({
            error: "Permission to access location was denied",
          });
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        onLocationObtained(location);
      } catch (error) {
        onLocationObtained({
          error: error.message || "An unknown error occurred",
        });
      }
    })();
  }, [onLocationObtained]);

  return null;
};

export default LocationService;
