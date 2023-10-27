import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CERTMain from '../CERT/CERTMain';
import HazzardMain from '../Hazzard/HazzardMain';
import MYNMain from '../MYN/MYNMain';

const Tab = createMaterialTopTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CERT" component={CERTMain} />
      <Tab.Screen name="MYN" component={HazzardMain} />
      <Tab.Screen name="HAZZARD" component={MYNMain} />
    </Tab.Navigator>
  );
};

export default MainScreen;
