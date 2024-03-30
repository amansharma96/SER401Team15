import { CalendarDaysIcon, Icon } from "@gluestack-ui/themed";
import { Block, Text, theme } from "galio-framework";
import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";

import Theme from "../../../../utils/Theme";

class DrawerCustomItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            as={CalendarDaysIcon}
            size="md"
            color={focused ? "white" : Theme.COLORS.TEXT_BLACK}
          />
        );
      case "Settings":
        return (
          <Icon
            as={CalendarDaysIcon}
            size="md"
            color={focused ? "white" : Theme.COLORS.TEXT_BLACK}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation, navigateTo } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null,
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title === "Contribute"
            ? Linking.openURL(
                "https://github.com/SER-401-Team-15/SER401Team15",
              ).catch((err) => console.error("An error occurred", err))
            : navigation.navigate(navigateTo)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={!!focused}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 2,
  },
  activeStyle: {
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
});

export default DrawerCustomItem;
