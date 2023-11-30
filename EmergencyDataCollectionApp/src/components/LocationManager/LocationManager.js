import { useState } from "react";
import { Alert } from "react-native";

import {
  GPS_TIMEOUT,
  LOCATION_ACCURACY_THRESHOLD,
} from "../../utils/constants/GlobalConstants";

const useLocationManager = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [fetchTimeout, setFetchTimeout] = useState(null);

  const getGPS = () => {
    if (isFetchingLocation) {
      return;
    }
    setIsFetchingLocation(true);

    const timeout = setTimeout(() => {
      setIsFetchingLocation(false);
      Alert.alert(
        "GPS Timeout: ",
        "Fetching GPS data timed out. Please try again.",
      );
    }, GPS_TIMEOUT);
    setFetchTimeout(timeout);
  };

  const handleLocationUpdate = (location) => {
    console.log("Location Data:", location);
    setIsFetchingLocation(false);

    if (fetchTimeout) {
      clearTimeout(fetchTimeout);
    }

    if (!location || !location.coords) {
      const errorMessage = location?.error || "Failed to fetch location";
      Alert.alert("Location Error: ", errorMessage);
      return;
    }

    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    setAccuracy(location.coords.accuracy);

    if (location.coords.accuracy > LOCATION_ACCURACY_THRESHOLD) {
      Alert.alert(
        "Location Warning: ",
        "Location accuracy is greater than 30 meters. The data may be less precise. You may want to try again.",
      );
    }
  };

  return {
    latitude,
    longitude,
    accuracy,
    isFetchingLocation,
    getGPS,
    handleLocationUpdate,
  };
};

export default useLocationManager;
