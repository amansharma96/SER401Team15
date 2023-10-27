import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './Pages/Main/MainScreen';

const Tab = createMaterialTopTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}


