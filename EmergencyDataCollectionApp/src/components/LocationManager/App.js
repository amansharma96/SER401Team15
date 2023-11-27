//Example of how to use the LocationManager_v2 component
import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import LocationManager_v2 from "./src/components/LocationManager/LocationManager_v2";
import { GPS_FETCHING_TIMEOUT } from "./src/utils/constants/GlobalConstants";
import LocationService_v2 from "./src/utils/gps/locationService_v2";

const App = () => {
  const [isLoggingLocationData, setIsLoggingLocationData] = useState(false);

  const {
    locationData,
    isFetchingLocation,
    startFetchingLocation,
    stopFetchingLocation,
    handleLocationUpdate,
  } = LocationManager_v2();

  const onStartFetch = () => {
    startFetchingLocation();

    setTimeout(() => {
      stopFetchingLocation();
      setIsLoggingLocationData(true);
    }, GPS_FETCHING_TIMEOUT);
  };

  useEffect(() => {
    if (isLoggingLocationData) {
      console.log("Location Data:");
      locationData.forEach((location, index) => {
        console.log(`Location ${index}:`, location);
      });
      setIsLoggingLocationData(false);
    }
  }, [isLoggingLocationData, locationData]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Start Fetching Location" onPress={onStartFetch} />
      {isFetchingLocation && (
        <LocationService_v2 onLocationObtained={handleLocationUpdate} />
      )}
      <Text>Location Data Count: {locationData.length}</Text>
      {locationData.map((location, index) => (
        <Text key={index}>
          Latitude: {location.coords.latitude}, Longitude:{" "}
          {location.coords.longitude}, accuracy:{" "}
          {location.coords.accuracy.toFixed(1)}
        </Text>
      ))}
    </View>
  );
};

export default App;
