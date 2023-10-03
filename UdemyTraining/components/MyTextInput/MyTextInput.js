import React, {useState} from "react";
import { TextInput, SafeAreaView, Button, Pressable, Text } from "react-native";
// import MyButton from "../MyButton/MyButton";

const MyTextInput = () => {
    const [textValue, setTextValue] = useState('');
    const [passValue, setPassValue] = useState('');
    // Event handler for clicks
    const handleClick = () => {
        // alert('The text has been clicked!');
        console.log(textValue, passValue)
    }
    return (
        <SafeAreaView>
            <TextInput
                style={{borderWidth: 1, padding: 10, borderRadius: 4}}
                value={textValue}
                onChangeText={value => {
                    //console.log(value);
                    setTextValue(value);
                }}
                placeholder={"Please Enter Your Name"}
            />
            <TextInput
                style={{borderWidth: 1, padding: 10, borderRadius: 4}}
                value={passValue}
                onChangeText={value => {
                    //console.log(value);
                    setPassValue(value);
                }}
                secureTextEntry={true}
                //keyboardType={'numeric'} or {'email-address'}
                //autofocus={true}
                //returnKeyType={'done} or {'go'} or {'next'} or {'search'}
                //
                placeholder={"Please Enter Your Password"}
            />
            <Pressable  
                disabled={textValue.length === 0 || passValue.length < 8}
                onPress={() => handleClick()} 
                style={{backgroundColor: 'black'}}
                >
                <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
                    Submit
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default MyTextInput;