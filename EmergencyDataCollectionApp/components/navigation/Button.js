import React from "react";
import { Pressable, StyleSheet, Text} from "react-native";

const Tab = createMaterialTopTabNavigator();

const Button = () => {
    // Event handler for clicks
    const handleClick1 = () => {
        alert('Tab 1 has been clicked!');
        console.log()
    }
    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default Button;