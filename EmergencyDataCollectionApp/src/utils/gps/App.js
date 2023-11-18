// This is an example on how to use the LocationService component
// Returns a LocationService component that will return the user's location
// Example of returned data: Location Data: {"coords": {"accuracy": 100, "altitude": 88.9000015258789, "altitudeAccuracy": 100, "heading": 0, "latitude": *, "longitude": *, "speed": 0}, "mocked": false, "timestamp": 1700200488002}
// TODO - remove this file

import React from "react";

// import LocationService from "./src/utils/gps/locationService";
import LocationService from "./locationService";

const App = () => {
  const handleLocation = (data) => {
    if (data.error) {
      console.error("Location Error:", data.error);
      if (data.coords) {
        console.log("Location Data (with limited accuracy):", data);
      }
    } else {
      console.log("Location Data:", data);
    }
  };

  return <LocationService onLocationObtained={handleLocation} />;
};

export default App;
