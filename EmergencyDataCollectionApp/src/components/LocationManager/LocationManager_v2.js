import { useSetAtom } from "jotai";
import { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";

import {
  GPS_FETCHING_TIMEOUT,
  LOCATION_ACCURACY_THRESHOLD,
} from "../../utils/constants/GlobalConstants";
import {
  accuracyAtom,
  latitudeAtom,
  longitudeAtom,
} from "../../utils/gps/GPS_Atom";
import {
  calculateAverageLocationAndAccuracy,
  filterOutliers,
} from "../../utils/gps/gpsUtils";

const LocationManager_v2 = () => {
  const [locationData, setLocationData] = useState([]);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [isLoggingLocationData, setIsLoggingLocationData] = useState(false);
  const setLatitude = useSetAtom(latitudeAtom);
  const setLongitude = useSetAtom(longitudeAtom);
  const setAccuracy = useSetAtom(accuracyAtom);

  const handleLocationUpdate = useCallback((location) => {
    if (
      location?.coords &&
      location.coords.accuracy <= LOCATION_ACCURACY_THRESHOLD
    ) {
      setLocationData((prevData) => [...prevData, location]);
    } else if (location?.coords) {
      console.log(
        `Ignored location with accuracy: ${location.coords.accuracy}`,
      );
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

  const onStartFetch = useCallback(() => {
    startFetchingLocation();

    setTimeout(() => {
      stopFetchingLocation();
      setIsLoggingLocationData(true);
    }, GPS_FETCHING_TIMEOUT);
  }, [startFetchingLocation, stopFetchingLocation]);

  useEffect(() => {
    if (isLoggingLocationData) {
      console.log("Location Data:");
      const filteredData = filterOutliers(locationData);
      console.log(
        "Filtered out",
        locationData.length - filteredData.length,
        "locations",
      );
      console.log("Number of valid locations:", filteredData.length);
      const averageData = calculateAverageLocationAndAccuracy(filteredData);
      console.log(
        "Average Location:",
        averageData.latitude,
        averageData.longitude,
      );
      console.log("Average Accuracy:", averageData.accuracy.toFixed(1));

      if (filteredData.length === 0) {
        Alert.alert(
          "Location Error: ",
          "No valid location data was fetched. Please try again.",
        );
        return;
      }

      if (
        averageData.accuracy > LOCATION_ACCURACY_THRESHOLD &&
        filteredData.length !== 0
      ) {
        Alert.alert(
          "Location Error: ",
          `Average accuracy is ${averageData.accuracy.toFixed(
            1,
          )} which is greater than the threshold of ${LOCATION_ACCURACY_THRESHOLD}. Please try again.`,
        );
        return;
      }

      if (filteredData.length !== 0) {
        setLatitude(averageData.latitude.toFixed(6));
        setLongitude(averageData.longitude.toFixed(6));
        setAccuracy(averageData.accuracy.toFixed(1));
      }

      setIsLoggingLocationData(false);
    }
  }, [isLoggingLocationData, locationData]);

  return {
    locationData,
    isFetchingLocation,
    startFetchingLocation,
    stopFetchingLocation,
    handleLocationUpdate,
    onStartFetch,
  };
};

export default LocationManager_v2;
