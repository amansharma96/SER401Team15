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
  reportItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: Theme.SPACING.MED_LARGE,
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    marginBottom: Theme.SPACING.SMALL,
    borderRadius: Theme.RADIUS.REPORT_CARD,
    justifyContent: "space-between",
  },
  reportContent: {
    flexShrink: 1,
  },
  reportTitle: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.REGULAR,
  },
  reportAddress: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    color: Theme.COLORS.TEXT_GREY,
    flexWrap: "wrap",
  },
  checkboxContainer: {
    paddingLeft: Theme.SPACING.MEDIUM,
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
});
