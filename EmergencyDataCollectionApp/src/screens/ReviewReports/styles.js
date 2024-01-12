import { StyleSheet } from "react-native";

import Theme from "../../utils/Theme"

export default StyleSheet.create({
    header: {
        fontSize: Theme.TYPOGRAPHY.FONT_SIZE.LARGE,
        fontWeight: Theme.TYPOGRAPHY.FONT_WEIGHT.BOLD,
        marginTop: Theme.SPACING.LARGE,
        marginBottom: Theme.SPACING.SMALL,
      },
      reportContainer: {
        padding: Theme.SPACING.MED_LARGE,
        backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
        marginBottom: Theme.SPACING.SMALL,
        borderRadius: Theme.RADIUS.REPORT_CARD,
      },
      reportTitle: {
        fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
        color: Theme.COLORS.TEXT_BLACK,
      },
      reportAddress: {
        fontSize: Theme.TYPOGRAPHY.FONT_SIZE.LARGE,
        color: Theme.COLORS.TEXT_BLACK,
        flexWrap: "wrap",
      },
});