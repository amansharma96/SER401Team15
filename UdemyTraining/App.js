/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Item from './components/Item/Item';
import MyText from './components/MyText/MyText';
import MyImage from './components/MyImage/MyImage';
import MyTextInput from './components/MyTextInput/MyTextInput';

//ScrollView

const App = () => {
  return (
    <SafeAreaView>  
      <ScrollView>    
        <View style={{backgroundColor: 'lightblue',height: 100}}>
          <Text>Header Container</Text>
        </View>
        <View style={{backgroundColor: 'grey',height: 100}}>
          <MyText />
        </View>
        <MyTextInput />
        <Item name={"chair"} price={30} />
        <Item name={"cup"} price={30} />
        <Item name={"spoon"} price={30} />
      </ScrollView>
      <MyImage />
    </SafeAreaView>
  )
}

export default App;
