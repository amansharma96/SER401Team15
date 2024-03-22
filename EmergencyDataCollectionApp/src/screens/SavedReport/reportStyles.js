import {
  Platform,
  StyleSheet,
  StatusBar as RNStatusBar,
  Dimensions,
} from "react-native";

import Theme from "../../utils/Theme";

const { width, height } = Dimensions.get("window");

const statusBarHeight =
  Platform.OS === "android" ? RNStatusBar.currentHeight : 0;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: statusBarHeight + height * 0.02,
    padding: width * 0.08,
    backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
  },
  reportGroup: {
    marginBottom: Theme.SPACING.MEDIUM,
  },
  groupTitle: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.LARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.BOLD,
    marginBottom: Theme.SPACING.SMALL,
  },
  reportContainer: {
    padding: Theme.SPACING.MED_LARGE,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    marginBottom: Theme.SPACING.SMALL,
    borderRadius: Theme.RADIUS.REPORT_CARD,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  reportItemContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexShrink: 1,
  },
  reportContent: {
    flexShrink: 1,
  },
  reportTitle: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.REGULAR,
  },
  iconAndTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reportIcon: {
    marginRight: Theme.SPACING.SMALL,
    color: Theme.ICON_COLOR.BLACK,
    fontSize: Theme.ICON_SIZE.MEDIUM,
  },
  reportAddress: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    color: Theme.COLORS.TEXT_GREY,
    flexWrap: "wrap",
  },
  checkbox: {
    marginLeft: Theme.SPACING.MED_LARGE,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
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
