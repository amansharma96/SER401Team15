import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { formatDate } from "./formatDate";
import Theme from "../../../utils/Theme";

const CustomDateTimePickerComponent = ({
  mynReport,
  setMynReport,
  handleDataTimeChange,
}) => {
  return (
    <View>
      <Text style={styles.titleText}>On site date and time*:</Text>
      <Text style={styles.dateDisplay}>{formatDate(mynReport.startTime)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setMynReport((prev) => ({
              ...prev,
              showDatePicker: true,
              isDatePicker: true,
            }))
          }
        >
          <Text style={styles.buttonText}>Select Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setMynReport((prev) => ({
              ...prev,
              showDatePicker: true,
              isDatePicker: false,
            }))
          }
        >
          <Text style={styles.buttonText}>Select Time</Text>
        </TouchableOpacity>
      </View>
      {mynReport.showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={mynReport.startTime || new Date()}
          mode={mynReport.isDatePicker ? "date" : "time"}
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
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    color: Theme.COLORS.TEXT_BLACK,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    padding: Theme.SPACING.SMALL,
    borderColor: Theme.COLORS.TEXT_GREY,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  titleText: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    fontWeight: "bold",
    color: Theme.COLORS.TEXT_BLACK,
  },
  button: {
    width: "40%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  buttonText: {
    textAlign: "center",
    color: Theme.COLORS.TEXT_BLACK,
  },
};

export default CustomDateTimePickerComponent;
