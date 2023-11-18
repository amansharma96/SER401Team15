import { useState } from "react";
import { Alert } from "react-native";

const useLocationManager = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [fetchTimeout, setFetchTimeout] = useState(null); // New state variable for the timer

  const getGPS = () => {
    if (isFetchingLocation) {
      return;
    }
    setIsFetchingLocation(true);

    const timeout = setTimeout(() => {
      setIsFetchingLocation(false);
      Alert.alert(
        "Timeout Error: ",
        "Fetching GPS data timed out. Please try again.",
      );
    }, 8000);
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

    if (location.coords.accuracy > 30) {
      Alert.alert(
        "Location Warning: ",
        "Location accuracy is greater than 30 meters. The data may be less precise.",
      );
    }
  };

  return {
    latitude,
    longitude,
    isFetchingLocation,
    getGPS,
    handleLocationUpdate,
  };
};

export default useLocationManager;
