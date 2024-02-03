import { Box, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";

// import { getAccuracyColor } from "./getAccuracyColor";
import Theme from "../../../utils/Theme";
import StatusCard from "../../../utils/gps/components/StatusCard/StatusCard";

const GPSInfoComponent = ({
  hazardReport,
  GPS_FETCHING_TIMEOUT,
  onLocationUpdate: onParentLocationUpdate,
}) => {
  const [location, setLocation] = useState(null);

  const handleLocationUpdate = (newLocation) => {
    setLocation(newLocation);

    // Call the parent's onLocationUpdate function with the new location
    if (onParentLocationUpdate) {
      onParentLocationUpdate(newLocation);
    }
  };

  return (
    <View>
      <Text style={styles.titleText}>
        * Please fetch your GPS coordinates by clicking the button below.
      </Text>
      <View style={styles.gps}>
        <Text>
          {`GPS*: ${location ? location.coords.latitude : "N/A"}, ${
            location ? location.coords.longitude : "N/A"
          }
        \nAccuracy: ${location ? location.coords.accuracy : "N/A"}`}
        </Text>
      </View>
      <NativeBaseProvider>
        <Box>
          <StatusCard
            timer={GPS_FETCHING_TIMEOUT}
            onLocationUpdate={handleLocationUpdate}
          />
        </Box>
      </NativeBaseProvider>
    </View>
  );
};

const styles = {
  gps: {
    borderWidth: 1,
    marginBottom: 45,
    marginTop: 10,
    padding: Theme.SPACING.MEDIUM,
    borderColor: Theme.COLORS.TEXT_GREY,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  gpsText: {
    textAlign: "center",
  },
  titleText: {
    marginTop: 20,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    fontWeight: "bold",
    color: Theme.COLORS.TEXT_BLACK,
  },
};

export default GPSInfoComponent;
