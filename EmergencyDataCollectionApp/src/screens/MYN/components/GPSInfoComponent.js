import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text } from "react-native";

import { getAccuracyColor } from "./getAccuracyColor";
import Theme from "../../../utils/Theme";
import StatusCard from "../../../utils/gps/components/StatusCard/StatusCard";

const GPSInfoComponent = ({ mynReport, GPS_FETCHING_TIMEOUT }) => {
  return (
    <View>
      <View style={styles.gps}>
        <Text style={[getAccuracyColor(mynReport.accuracy), styles.gpsText]}>
          {`GPS*: ${mynReport.lat || "N/A"}, ${mynReport.long || "N/A"}
          \nAccuracy: ${mynReport.accuracy || "N/A"}`}
        </Text>
      </View>
      <NativeBaseProvider>
        <Box>
          <StatusCard timer={GPS_FETCHING_TIMEOUT} />
        </Box>
      </NativeBaseProvider>
    </View>
  );
};

const styles = {
  gps: {
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 45,
    padding: Theme.SPACING.MEDIUM,
    borderColor: Theme.COLORS.TEXT_GREY,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  gpsText: {
    textAlign: "center",
  },
};

export default GPSInfoComponent;
