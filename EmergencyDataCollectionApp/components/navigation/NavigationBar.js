import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Page1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Page1!</Text>
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate('App')}// Change this to the correct page to navigate to
      />
    </View>
  );
}

function Page2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page2!</Text>
      <Button
           title="Go to Page1"
           onPress={() => navigation.navigate('App')}// Change this to the correct page to navigate to
           />
    </View>
  );
}

function Page3() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Page3!</Text>
        <Button
            title="Go to Page1"
            onPress={() => navigation.navigate('App')} // Change this to the correct page to navigate to
            />
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

function NavigationBar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Page1" component={Page1} />
            <Tab.Screen name="Page2" component={Page2} />
            <Tab.Screen name="Page3" component={Page3} />
        </Tab.Navigator>
        );
}

export default NavigationBar;