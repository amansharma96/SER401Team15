import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CERTMain = () => {
  return (
    <View >
      <Text>CERT</Text>
      <TouchableOpacity >
        <Text>New Report</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Saved Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CERTMain;