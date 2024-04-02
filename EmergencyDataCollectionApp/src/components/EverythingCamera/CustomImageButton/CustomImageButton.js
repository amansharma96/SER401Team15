import { ImageUp, Camera } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import Theme from "../../../utils/Theme";

const CustomImageButton = ({
  onPress,
  onPressIn,
  onPressOut,
  buttonText,
  isPressed,
  isUploadButton = true,
}) => (
  <View style={styles.buttonGroup}>
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isPressed
            ? Theme.COLORS.BACKGROUND_YELLOW_OPACITY_20
            : Theme.COLORS.BACKGROUND_YELLOW,
        },
        styles.shadow,
      ]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.8}
    >
      {isUploadButton ? (
        <ImageUp size={34} color={Theme.COLORS.BACKGROUND_WHITE} />
      ) : (
        <Camera size={34} color={Theme.COLORS.BACKGROUND_WHITE} />
      )}
    </TouchableOpacity>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </View>
);

const styles = StyleSheet.create({
  buttonGroup: {
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 9999,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default CustomImageButton;
