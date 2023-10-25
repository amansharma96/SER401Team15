import React from "react";
import { Pressable, StyleSheet, View, Text, SafeAreaView } from "react-native";

const NavigationBar = () => {
    // Event handler for clicks
    const handleClick1 = () => {
        alert('Tab 1 has been clicked!');
        console.log()
    }
    const handleClick2 = () => {
        alert('Tab 2 has been clicked!');
        console.log()
    }
    return (
        // for each button needed, add a "pressable"
        <View
            style={[
                styles.container,
                {
                flexDirection: 'row',
                },
            ]}>
            <View style={{flex: 1}}>
                <Pressable  
                    onPress={() => handleClick1()} 
                    style={{
                        top: '1%',
                        backgroundColor: '#ffcc00', 
                        width: '100%'}}
                    >
                    <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
                        Tab 1
                    </Text>
                </Pressable>
            </View>
            <View style={{flex: 2}}>
                <Pressable  
                    onPress={() => handleClick2()} 
                    style={{
                        top: '1%',
                        backgroundColor: '#ffcc00', 
                        width: '100%'}}
                    >
                    <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
                        Tab 2
                    </Text>
                </Pressable>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default NavigationBar;