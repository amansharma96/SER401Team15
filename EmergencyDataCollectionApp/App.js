import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

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

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CERT" component={CERTMain} />
      <Tab.Screen name="MYN" component={HazzardMain} />
      <Tab.Screen name="HAZZARD" component={MYNMain} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffcc00',
    color: '#000000',
  },
});
