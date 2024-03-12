import { StyleSheet } from "react-native";

import Theme from "../../../utils/Theme";

export const getAccuracyColor = (acc) => {
  if (acc !== null && !isNaN(acc)) {
    if (acc < 5) {
      return styles.accuracyGreen;
    } else if (acc >= 5 && acc <= 10) {
      return styles.accuracyYellow;
    } else {
      return styles.accuracyRed;
    }
  } else {
    return styles.accuracyBlack;
  }
};

const styles = StyleSheet.create({
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
