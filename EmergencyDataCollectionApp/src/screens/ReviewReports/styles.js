import { StyleSheet, Dimensions } from "react-native";

import Theme from "../../utils/Theme";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  header: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.LARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.BOLD,
    marginTop: Theme.SPACING.LARGE,
    marginBottom: Theme.SPACING.SMALL,
  },
  reportContainer: {
    padding: Theme.SPACING.SMALL,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    marginBottom: Theme.SPACING.SMALL,
    borderRadius: Theme.RADIUS.REPORT_CARD,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reportText: {
    flexDirection: "column",
  },
  reportTime: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    color: Theme.COLORS.TEXT_GREY,
  },
  reportAddress: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.LARGE,
    color: Theme.COLORS.TEXT_BLACK,
    flexWrap: "wrap",
  },
  area: {
    flex: 1,
    paddingTop: height * 0.02,
    backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
  },
  list: {
    paddingHorizontal: width * 0.06,
  },
  checkboxIcon: {
    color: Theme.COLORS.BACKGROUND_YELLOW,
  },
  checkboxChecked: {
    backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
    borderColor: Theme.COLORS.BACKGROUND_WHITE,
    _hover: {
      borderColor: Theme.COLORS.BACKGROUND_WHITE,
      backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
    },
    _pressed: {
      borderColor: Theme.COLORS.BACKGROUND_WHITE,
      backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
    },
  },
  checkboxPressed: {
    borderColor: Theme.COLORS.BACKGROUND_WHITE,
  },
  selectAllButton: {
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    paddingHorizontal: Theme.BUTTON_PADDING.HORIZONTAL,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  selectAllButtonText: {
    color: Theme.COLORS.TEXT_BLACK,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.REGULAR,
    textAlign: "center",
  },
});
