import { StyleSheet } from "react-native";

import Theme from "../../utils/Theme";

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "95%",
    alignSelf: "center",
  },
  bottomButtonContainer: {
    marginTop: Theme.SPACING.MEDIUM,
    width: "100%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    color: Theme.COLORS.TEXT_BLACK,
    justifyContent: "center",
    margin: Theme.SPACING.SMALL,
    padding: Theme.BUTTON_PADDING.VERTICAL,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Theme.SPACING.SMALL,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  dateDisplay: {
    borderWidth: 1,
    fontSize: 20,
  },
  dropdown: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  dropdownContainer: {
    marginTop: 20,
  },
  dropdownSmall: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    width: 100,
  },
  dropdownState: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 140,
  },
  gps: {
    borderWidth: 1,
    width: 300,
    height: 80,
    padding: 10,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inlineContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  inlineItem: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: Theme.SPACING.MEDIUM,
    padding: 10,
    width: 200,
  },
  inputSearchStyle: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  inputSmall: {
    borderWidth: 1,
    height: 40,
    margin: Theme.SPACING.MEDIUM,
    padding: 10,
    width: 60,
  },
  locationContainer: {
    marginTop: Theme.SPACING.SMALL,
  },
  Lower: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginTop: "auto",
  },
  selectedTextStyle: {
    color: "black",
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
  },
  textArea: {
    borderColor: "black",
    borderWidth: 1,
    height: 150,
    justifyContent: "flex-start",
    padding: 10,
    textAlign: "left",
    textAlignVertical: "top",
  },
  textAreaContainer: {
    marginTop: 20,
    width: 300,
  },
  textHeader: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.XLARGE,
  },
  textSmall: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
  },
  Upper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: "auto",
  },
  boldText: {
    fontWeight: "bold",
  },
  accuracyGreen: {
    color: Theme.COLORS.SUCCESS,
  },
  accuracyYellow: {
    color: Theme.COLORS.WARNING,
  },
  accuracyRed: {
    color: Theme.COLORS.ERROR,
  },
  accuracyBlack: {
    color: Theme.COLORS.TEXT_BLACK,
  },
});

export default styles;
