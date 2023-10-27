import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MYNMain = () => {
  return (
    <View style={styles.container}>
      <Text>MYN</Text>
      <TouchableOpacity style={styles.button}>
        <Text>New Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Saved Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MYNMain;