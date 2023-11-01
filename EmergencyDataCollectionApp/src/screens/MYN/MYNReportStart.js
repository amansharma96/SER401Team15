import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MYNReportStart = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(true);
  const [selectedDateTime, setSelectedDateTime] = useState(date.toISOString());

  const showDatepicker = () => {
    setShow(true);
    setIsDatePicker(!isDatePicker);
  };

  const handleConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setSelectedDateTime(currentDate.toISOString());
  };

  const formatDate = (date) => {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
      .getDate()
      .toString()
      .padStart(2, '0')}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Text>On site date and time*:</Text>
      <Text style={styles.dateDisplay}>{formatDate(date)}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Select Date" onPress={showDatepicker} />
        </View>
        <View style={styles.button}>
          <Button title="Select Time" onPress={showDatepicker} />
        </View>
      </View>      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={isDatePicker ? 'date' : 'time'}
          is24Hour={true}
          display="default"
          onChange={handleConfirm}
        />
      )}
      <Text>What is the name of the MYN Group?*</Text>
      <TextInput 
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      />
      <Text>* are required fields</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    width: 200 ,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dateDisplay: {
    borderWidth: 1,
  }
});

export default MYNReportStart;
