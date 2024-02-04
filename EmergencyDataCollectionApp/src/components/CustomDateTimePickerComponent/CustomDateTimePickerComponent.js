import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { formatDate } from "../../screens/MYNReportPage/components/formatDate";
import Theme from "../../utils/Theme";

const CustomDateTimePickerComponent = ({
  title = "Select on site date and time*",
  Report,
  setReport,
  handleDataTimeChange,
}) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.dateDisplay}>{formatDate(Report.startTime)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { marginRight: 5 }]}
          onPress={() =>
            setReport((prev) => ({
              ...prev,
              showDatePicker: true,
              isDatePicker: true,
            }))
          }
        >
          <Text style={styles.buttonText}>Select Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginLeft: 5 }]}
          onPress={() =>
            setReport((prev) => ({
              ...prev,
              showDatePicker: true,
              isDatePicker: false,
            }))
          }
        >
          <Text style={styles.buttonText}>Select Time</Text>
        </TouchableOpacity>
      </View>
      {Report.showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={Report.startTime || new Date()}
          mode={Report.isDatePicker ? "date" : "time"}
          is24Hour
          display="default"
          onChange={handleDataTimeChange}
        />
      )}
    </View>
  );
};

const styles = {
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateDisplay: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    color: Theme.COLORS.TEXT_BLACK,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    padding: Theme.SPACING.SMALL,
    borderColor: Theme.COLORS.SEPARATOR_GREY,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  titleText: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
    color: Theme.COLORS.TEXT_BLACK,
  },
  button: {
    width: "47%",
    borderColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderWidth: 1,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW_OPACITY_20,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  buttonText: {
    textAlign: "center",
    color: Theme.COLORS.TEXT_BLACK,
  },
};

export default CustomDateTimePickerComponent;
