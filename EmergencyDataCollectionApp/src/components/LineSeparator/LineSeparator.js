import React from "react";
import { View } from "react-native";

import Theme from "../../utils/Theme";

function LineSeparator() {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: Theme.COLORS.SEPARATOR_GREY,
        marginVertical: 10,
      }}
    />
  );
}

export default LineSeparator;
