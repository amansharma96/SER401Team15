import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Theme from '../utils/Theme';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={Theme.BUTTON} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
export default Button;
