//Example of how to use the LocationManager_v2 component
import React from "react";
import { View, Text, Button } from "react-native";

import LocationManager_v2 from "./src/components/LocationManager/LocationManager_v2";
import LocationService_v2 from "./src/utils/gps/locationService_v2";

const App = () => {
  const {
    locationData,
    isFetchingLocation,
    onStartFetch,
    handleLocationUpdate,
  } = LocationManager_v2();

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
