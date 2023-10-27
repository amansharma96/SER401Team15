import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HazzardMain = () => {
  return (
    <View style={styles.container}>
      <Text>Hazzards</Text>
      <TouchableOpacity style={styles.button}>
        <Text>New Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Saved Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HazzardMain;