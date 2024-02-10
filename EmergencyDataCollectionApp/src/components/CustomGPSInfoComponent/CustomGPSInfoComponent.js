import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text } from "react-native";

import { getAccuracyColor } from "./getAccuracyColor";
import Theme from "../../utils/Theme";
import { GPS_FETCHING_TIMEOUT } from "../../utils/constants/GlobalConstants";
import StatusCard from "../../utils/gps/components/StatusCard/StatusCard";

const CustomGPSInfoComponent = ({
  title = "GPS Coordinates",
  latitude,
  longitude,
  accuracy,
}) => {
  return (
    <NativeBaseProvider>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.gpsContainer}>
          <Text style={[getAccuracyColor(accuracy), styles.gpsText]}>
            {`Coordinates: ${latitude || "N/A"}, ${longitude || "N/A"}
          \nAccuracy: ${accuracy || "N/A"} meters`}
          </Text>
        </View>

        <Box>
          <StatusCard timer={GPS_FETCHING_TIMEOUT} />
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

const styles = {
  titleText: {
    marginTop: 20,
    fontSize: 13,
    color: Theme.COLORS.TEXT_GREY,
    fontWeight: "700",
  },
  gpsContainer: {
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    padding: Theme.SPACING.MEDIUM,
    borderColor: Theme.COLORS.SEPARATOR_GREY,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  gpsText: {
    textAlign: "center",
  },
};

export default CustomGPSInfoComponent;
