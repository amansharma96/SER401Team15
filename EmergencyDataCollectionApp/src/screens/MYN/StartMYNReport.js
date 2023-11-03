import React, { useState } from "react";
import { View, Text ,TextInput,StyleSheet} from "react-native";
import Theme from "../../utils/Theme";
import Button from "../../components/Button";
import DateTimePicker from "@react-native-comunity/DateTimePicker";

const StartMYNReport = () => {
  const [groupName, setGroupName] = useState("");
  const [date,setDate] = useState(new Date());
  const [show, setShow] = useState(true);

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <View style={Theme.CONTAINER}>
      <Text>Confirm the date time is correct:</Text>
      <DateTimePicker
      value={date}
      mode={date}
      />
      <Text>What is the name of the MYN Group?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setGroupName(text)}
        value={groupName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    datePicker: {
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
  });

export default StartMYNReport;
