import { Theme } from "@gluestack-style/react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    marginTop: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
  cancelButton: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    borderColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderWidth: 1,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  Savebutton: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
});

export default styles;
