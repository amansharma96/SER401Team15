import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Theme from "../../../../utils/Theme";

const MYN_Header = (props) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>{props.title}</Text>
        <Text style={styles.textSubtitle}>{props.subtitle}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },
  textHeader: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.XLARGE,
    fontWeight: "bold",
    textAlign: "left",
  },
  textSubtitle: {
    fontSize: Theme.TYPOGRAPHY.FONT_SIZE.MEDIUM,
    textAlign: "left",
  },
  separator: {
    height: 1,
    backgroundColor: Theme.COLORS.SEPARATOR_GREY,
    marginBottom: 20,
  },
});

export default MYN_Header;
