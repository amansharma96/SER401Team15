import React from "react";
import {Text} from "react-native";
import style from "./style";

const MyText = () => {
    
    // return for the component
    return (
        <Text style={style.text}>
            Hello, React Native World!
        </Text>
    );
};

export default MyText;