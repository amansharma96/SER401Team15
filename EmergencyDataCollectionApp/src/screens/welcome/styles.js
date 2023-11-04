import { StyleSheet, Dimensions } from "react-native";

import Theme from "../../utils/Theme";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  bottomButtonContainer: {
    marginTop: Theme.SPACING.MEDIUM,
  },
  button: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    color: Theme.COLORS.TEXT_BLACK,
    justifyContent: "center",
    margin: Theme.SPACING.SMALL,
    padding: Theme.BUTTON_PADDING.VERTICAL,
    width: width * 0.8,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
    marginBottom: height * 0.06,
  },
  container: {
    alignItems: "center",
    flex: 1,
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
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height * 0.15,
  },
  image: {
    width: width * 0.7,
    height: (width * 0.7) / 1.3,
    borderRadius: Theme.RADIUS.IMAGE,
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
  title: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.XLARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.BOLD,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
  },
  Upper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: "auto",
  },
  buttonText: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.REGULAR,
    textAlign: "center",
  },
});

export default styles;
