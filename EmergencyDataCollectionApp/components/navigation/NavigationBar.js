import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Page1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Page1!</Text>
    </View>
  );
}

function Page2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page2!</Text>
    </View>
  );
}

function Page3() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Page3!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Page3" component={Page3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBar;