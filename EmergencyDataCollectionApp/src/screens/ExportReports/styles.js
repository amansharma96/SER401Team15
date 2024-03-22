import { StyleSheet, Dimensions } from "react-native";

import Theme from "../../utils/Theme";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  reportContainer: {
    padding: Theme.SPACING.SMALL,
    marginBottom: Theme.SPACING.SMALL,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reportText: {
    flexDirection: "column",
  },
  reportTime: {
    marginLeft: Theme.SPACING.MED_LARGE,
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
    color: Theme.COLORS.TEXT_GREY,
  },
  reportAddress: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MED_LARGE,
    color: Theme.COLORS.TEXT_BLACK,
    flexWrap: "wrap",
  },
  area: {
    flex: 1,
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
    borderColor: Theme.COLORS.SEPARATOR_GREY,
    _hover: {
      borderColor: Theme.COLORS.SEPARATOR_GREY,
      backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
    },
    _pressed: {
      borderColor: Theme.COLORS.SEPARATOR_GREY,
      backgroundColor: Theme.COLORS.BACKGROUND_WHITE,
    },
  },
  checkboxPressed: {
    borderColor: Theme.COLORS.SEPARATOR_GREY,
  },
  selectAllButton: {
    marginVertical: Theme.SPACING.SMALL,
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
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: Theme.SPACING.LARGE,
    paddingVertical: Theme.SPACING.XLARGE,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  exportButton: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderRadius: Theme.RADIUS.BUTTON,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    paddingHorizontal: Theme.BUTTON_PADDING.HORIZONTAL,
  },
  deleteButton: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderRadius: Theme.RADIUS.BUTTON,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    paddingHorizontal: Theme.BUTTON_PADDING.HORIZONTAL,
  },
});
