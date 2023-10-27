import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CERTMain = () => {
  return (
    <View style={styles.container}>
      <Text>Page One</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CERTMain;