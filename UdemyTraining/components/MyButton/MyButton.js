import React from "react";
import { Button, Pressable, Text } from "react-native";

const MyButton = () => {
    // Event handler for clicks
    const handleClick = () => {
        alert('The text has been clicked!');
        console.log()
    }
    return (
        // <Button title="Submit" color={blue} style={{backgroundColor: 'grey'}} />
        <Pressable  
            onPress={() => handleClick()} 
            style={{backgroundColor: 'black'}}
            >
            <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
                Submit
            </Text>
        </Pressable>
    );
}

export default MyButton;