import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import Theme from "../../../../utils/Theme";
import { formatDate } from "../../../../utils/formatDate/formatDate";

const ReportCard = ({
  reportId,
  groupName,
  startTime = new Date(),
  address,
  city,
  state,
  zip,
  reportType,
}) => {
  const date = new Date(startTime);
  const formattedDateTime = formatDate(date);

  return (
    <TouchableOpacity style={styles.reportContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.reportHeader}>ID: {reportId}</Text>
        <Text style={styles.reportHeader}>{groupName}</Text>
      </View>
      <Text style={styles.reportTime}>{formattedDateTime}</Text>
      {reportType !== "Hazard" && (
        <Text style={styles.reportAddress}>
          {[
            address || "address",
            city || "city",
            state || "state",
            zip || "zip code",
          ].join(", ")}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ReportCard;

const styles = StyleSheet.create({
  reportContainer: {
    padding: Theme.SPACING.MEDIUM,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    marginBottom: Theme.SPACING.MEDIUM,
    borderRadius: Theme.RADIUS.REPORT_CARD,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: Theme.SPACING.SMALL,
  },
  reportHeader: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    marginRight: Theme.SPACING.MEDIUM,
    fontWeight: "bold",
  },
  reportTime: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
  },
  reportAddress: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
  },
});
