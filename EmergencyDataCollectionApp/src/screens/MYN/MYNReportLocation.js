import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import Button from "../../components/Button";
import { visitNumbers,RoadCondition,USStates } from "../../components/dataLists";

const MYNReportLocation = () => {
    

    const DropdownComponent = () => {
        const [valueVisit, setValueVisit] = useState(null);
        const [valueRoadCondition, setValueRoadCondition] = useState(null);
        const [isFocus, setIsFocus] = useState(false);       
        const [address, onChangeAddress] = React.useState('123 Generic address');
        const [city, onChangeCity] = React.useState('hometown');
        const [valueState, setValueState] = React.useState(null);
        const [zip, onChangeZip] = React.useState('55555');

        //Pleace holder until logic can be developed
        const [latitude, setLatitude] = useState(41.40338);
        const [longitude, setLongitude] = useState(2.17403);

        const saveDraft = () =>{
            //place holder for logic
          }
        const getGPS = () =>{
            //place holder for logic
            setLatitude(42.40338);
            setLongitude(3.17403);
          }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Is this your first visit to this address?*</Text>
                <Dropdown
                    style={[styles.dropdown]}                    
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}                    
                    data={visitNumbers}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={valueVisit}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValueVisit(item.value);
                        setIsFocus(false);
                    }}
                />
                <Text style={styles.text}>How good is the ROAD access to this location?*</Text>
                <Text style={styles.textSmall}>
                    Hint: BLOCKED=downed tree or rubble.
                    {'\n'}DAMAGED=slide or washout.
                    {'\n'}DOWNED=power lines block access
                </Text>
                <Dropdown
                    style={[styles.dropdown]}                    
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    
                    data={RoadCondition}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={valueRoadCondition}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValueRoadCondition(item.value);
                        setIsFocus(false);
                    }}
                />
                <Text>What is the addres?*</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeAddress}
                    value={address}
                />  
                <Text>What is the city?*</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeCity}
                    value={city}
                />  
                <Text>What is the state?*</Text>
                <Dropdown
                    style={[styles.dropdownState]}                    
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}                    
                    data={USStates}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={valueState}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setValueState(item.value);
                    setIsFocus(false);
                    }}
                />
                <Text>What is the zip?*</Text>
                <TextInput 
                    style={styles.inputSmall }
                    onChangeText={onChangeZip}
                    value={zip}
                />  
                <Text style={styles.gps}>{`GPS*: ${latitude}, ${longitude}.`}</Text>
                <Button style={styles.bottomButtonContainer} title="ReTry GPS" onPress={getGPS}/>
                <Text>* are required fields</Text>
                <Button style={styles.bottomButtonContainer} title="Save current draft of report" onPress={saveDraft}/>
            </View>
                
            
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },        
        dropdown: {
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            borderRadius: 5,
            width: 280,
        },
        dropdownState: {
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            borderRadius: 5,
            width: 140,
        },        
        selectedTextStyle: {
            color: 'black',
        },
        inputSearchStyle: {
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            padding: 10,
            
        },        
        text: {
            fontSize: 20,
        },
        textSmall: {
            fontSize: 10,
        },
        input: {
            height: 40,
            width: 200 ,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          },
          inputSmall: {
            height: 40,
            width: 60 ,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          },
          gps:{
            borderWidth: 1,
          }
    });

    return <DropdownComponent />;
};

export default MYNReportLocation;
