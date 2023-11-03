import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import {useState} from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

const Tab = createMaterialTopTabNavigator();

function Page1() {
    const [dateTime, setDateTime] = useState("");

    const [CERTGroupVal, setSelectedCERTGroup] = React.useState("");
    const [SquadNameVal, setSelectedSquadName] = React.useState("");
    const [NumVisitVal, setSelectedNumVisit] = React.useState("");
    const [RoadStatusVal, setSelectedRoadStatus] = React.useState("");
  
    const CERTGroup = [
        {key:'1', value:'1'},
        {key:'2', value:'2'},
        {key:'3', value:'3'},
        {key:'4', value:'4'},
        {key:'5', value:'5'},
        {key:'6', value:'6'},
        {key:'7', value:'7'},
    ]

    const SquadName = [
        {key:'1', value:'Name 1'},
        {key:'2', value:'Name 2'},
        {key:'3', value:'Name 3'},
        {key:'4', value:'Name 4'},
    ]

    const NumVisit = [
        {key:'1', value:'1'},
        {key:'2', value:'2'},
        {key:'3', value:'3'},
        {key:'4', value:'4'},
        {key:'5', value:'5'},
        {key:'6', value:'6'},
        {key:'7', value:'7'},
    ]

    const RoadStatus = [
        {key:'1', value:'Good'},
        {key:'2', value:'Poor'},
        {key:'3', value:'Lethal'},
        {key:'4', value:'Impassable'},
    ]

  return (
    <View style={styles.CONTAINER}>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>Situation Report</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Date & Time:   </Text>
          <TextInput 
            style={{borderWidth: 1, padding: 10, borderRadius: 5, fontSize: 15}}
            placeholder="Automatically filled in Time/date"
            value={dateTime}
            onChangeText={value => {setDateTime(value)}}
            ></TextInput>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What CERT Group?</Text>
        </View>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
            <SelectList
                setSelected={(val) => setSelectedCERTGroup(val)} 
                data={CERTGroup} 
                save="value"
            />
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What Squad Name?</Text>
        </View>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
            <SelectList 
                setSelected={(val) => setSelectedSquadName(val)} 
                data={SquadName} 
                save="value"
            />
        </View>
      </View>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER2TEXT}>What number visit is this?</Text>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
            <SelectList 
                setSelected={(val) => setSelectedNumVisit(val)} 
                data={NumVisit} 
                save="value"
            />
        </View>
      </View>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER2TEXT}>
          What is the status of ROAD access to the structure?
        </Text>
        <View style={styles.CONTAINER_ROW_DROPDOWN}>
            <SelectList 
                setSelected={(val) => setSelectedRoadStatus(val)} 
                data={RoadStatus} 
                save="value"
            />
        </View>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          disabled={
            dateTime.length === 0 || 
            CERTGroupVal === "" ||
            SquadNameVal === "" ||
            NumVisitVal === "" ||
            RoadStatusVal === ""
            }
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

function Page2() {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>Location Information</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Address:</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###text entry box###</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###button for GPS/map screen###</Text>
        </View>
      </View>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER2TEXT}>Structure Information</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What type of STRUCTURE is it?</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*What is the STRUCTRE's condition?</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

function Page3() {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>Hazard Information</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Status of FIRE hazards:</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Status of PROPANE or GAS hazards:</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Status of WATER hazards: </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Status of ELECTRICAL hazards:</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*Status of CHEMICAL hazards: </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

function Page4() {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>People Information</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>
            *How many people rescued GREEN status:{" "}
          </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>
            *How many people rescued YELLOW status:{" "}
          </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*How many people rescued RED status: </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>
            *How many people rescued DECEASED status:
          </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>
            *Location of DECEASED: (only display if DECEASED GREATERTHAN 0){" "}
          </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###text-box-entry###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*How many people TRAPPED: </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>*How many people needing SHELTER: </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>
            *How many people from other neighborhoods require first aid:{" "}
          </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>
            *How many people from other neighborhoods require shelter:{" "}
          </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###dropdown###</Text>
        </View>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

function Page5() {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.CONTAINER}>
        <Text style={styles.HEADER1TEXT}>Additional Information</Text>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>Notes: </Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>###text-box-entry###</Text>
        </View>
        <View style={styles.CONTAINER_ROW}>
          <Text style={styles.TEXT}>Add Photo:</Text>
        </View>
        <View style={styles.CONTAINER_ROW_TEMP}>
          <Text style={styles.TEXT_TEMP}>+ photo ###photo upload###</Text>
        </View>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button
          title="Save Report"
          onPress={null} // Change this to saving the report
        />
      </View>
    </View>
  );
}

function CERTScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#111111",
        tabBarLabelStyle: { fontSize: 11, textAlignVertical: "bottom" },
        tabBarStyle: { backgroundColor: "#ffcc00", height: "8%" },
      }}
    >
      <Tab.Group name="CERT Report Page" />
      <Tab.Screen name="Info" component={Page1} />
      <Tab.Screen name="Location" component={Page2} />
      <Tab.Screen name="Hazards" component={Page3} />
      <Tab.Screen name="People" component={Page4} />
      <Tab.Screen name="Extra Info" component={Page5} />
    </Tab.Navigator>
  );
}

export default CERTScreen;

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: "column",
    alignItems: "bottom",
    justifyContent: "bottom",
    width: "100%",
  },
  CONTAINER_ROW: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    width: "100%",
  },
  CONTAINER_ROW_TEMP: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  CONTAINER_ROW_DROPDOWN: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  BUTTONCONTAINER: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    width: "75%",
  },
  HEADER1TEXT: {
    fontSize: 20,
    fontWeight: "bold",
  },
  HEADER2TEXT: {
    fontSize: 16,
    fontWeight: "bold",
  },
  TEXT: {
    fontSize: 15,
  },
  TEXT_TEMP: {
    fontSize: 15,
    color: "red",
  },
  SAVEBUTTON: {
    flexDirection: "column",
    verticalAlign: "bottom",
    alignSelf: "center",
    justifyContent: "center",
    width: "75%",
    marginVertical: 20,
  },
});
