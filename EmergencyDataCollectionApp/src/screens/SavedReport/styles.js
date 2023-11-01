import { Platform, StyleSheet, StatusBar as RNStatusBar } from "react-native";

import Theme from "../../utils/Theme";

// const { width, height } = Dimensions.get("window");

const statusBarHeight =
  Platform.OS === "android" ? RNStatusBar.currentHeight : 0;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
  },
  container: {
    paddingTop: statusBarHeight + 10,
    padding: 30,
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
    padding: 20,
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
    fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.BOLD,
  },
  reportAddress: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    color: Theme.COLORS.TEXT_GREY,
    flexWrap: "wrap",
  },
});
