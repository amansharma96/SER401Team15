import { StyleSheet } from "react-native";

import Theme from "../../utils/Theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  instruction: {
    fontSize: 12,
    marginBottom: 10,
  },
  placehodler: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
  accordion: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    padding: 10,
  },
});

export default styles;
