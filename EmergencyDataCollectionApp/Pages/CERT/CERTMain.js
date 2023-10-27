import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Style/stlyes';

const CERTMain = () => {
  return (
    <View style={styles.container}>
      <Text>CERT</Text>
      <TouchableOpacity style={styles.button}>
        <Text>New Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Saved Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CERTMain;