import { useState, useCallback } from "react";
import { Alert } from "react-native";

const LocationManager_v2 = () => {
  const [locationData, setLocationData] = useState([]);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  const handleLocationUpdate = useCallback((location) => {
    if (location?.coords) {
      setLocationData((prevData) => [...prevData, location]);
    } else {
      Alert.alert(
        "Location Error: ",
        location?.error || "Failed to fetch location",
      );
    }
  }, []);

  const startFetchingLocation = useCallback(() => {
    setIsFetchingLocation(true);
    setLocationData([]);
  }, []);

  const stopFetchingLocation = useCallback(() => {
    setIsFetchingLocation(false);
  }, []);

  return {
    locationData,
    isFetchingLocation,
    startFetchingLocation,
    stopFetchingLocation,
    handleLocationUpdate,
  };
};

export default LocationManager_v2;
