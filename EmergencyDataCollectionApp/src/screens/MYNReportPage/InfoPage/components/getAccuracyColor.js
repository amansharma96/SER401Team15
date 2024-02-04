import styles from "../../styles";

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
