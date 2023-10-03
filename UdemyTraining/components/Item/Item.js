import React from "react";
import { View, Text } from "react-native";

const Item = ({name, price}) => {
    return (
    <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
    </View>
    );
};

export default Item;