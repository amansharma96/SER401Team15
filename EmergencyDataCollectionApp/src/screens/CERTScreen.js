import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

function Page1({navigation}) {
  return (
    <View style={styles.CONTAINER}>
        <View style={styles.CONTAINER}>
            <Text  style={styles.HEADER1TEXT}>Situation Report</Text>
            <View style={styles.CONTAINER_ROW}>
                <Text  style={styles.TEXT}>*Date & Time:</Text>
            </View>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
            </View>
            <View style={styles.CONTAINER_ROW}>
                <Text  style={styles.TEXT}>*What CERT Group?</Text>
            </View>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
            </View>
            <View style={styles.CONTAINER_ROW}>
                <Text  style={styles.TEXT}>*What Squad Name?</Text>
            </View>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
            </View>
        </View>
        <View style={styles.CONTAINER}>
            <Text  style={styles.HEADER2TEXT}>What number visit is this?</Text>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>* ###Visit numer dropdown###</Text>
            </View>
        </View>
        <View style={styles.CONTAINER}>
            <Text  style={styles.HEADER2TEXT}>What is the status of ROAD access to the structure?</Text>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>* ###ROAD status dropdown###</Text>
            </View>
        </View>
        <View style={styles.SAVEBUTTON}>
            <Button
                title="Save Report"
                onPress={() => navigation.navigate("MainScreen")}// Change this to display swiping arrows when all required info is not filled out
            />
        </View>        
    </View>
  );
}

function Page2({navigation}) {
  return (
    <View style={styles.CONTAINER}>
        <View style={styles.CONTAINER}>
            <Text  style={styles.HEADER1TEXT}>Location Information</Text>
            <View style={styles.CONTAINER_ROW}>
                <Text  style={styles.TEXT}>*Address:</Text>
            </View>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###text entry box###</Text>
            </View>        
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###button for GPS/map screen###</Text>
            </View>
        </View>
        <View style={styles.CONTAINER}>
            <Text  style={styles.HEADER2TEXT}>Structure Information</Text>
            <View style={styles.CONTAINER_ROW}>
                <Text  style={styles.TEXT}>*What type of STRUCTURE is it?</Text>
            </View>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
            </View>
            <View style={styles.CONTAINER_ROW}>
                <Text  style={styles.TEXT}>*What is the STRUCTRE's condition?</Text>
            </View>
            <View style={styles.CONTAINER_ROW_TEMP}>
                <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
            </View>
        </View>
        <View style={styles.SAVEBUTTON}>
            <Button
                title="Save Report"
                onPress={() => navigation.navigate("MainScreen")}// Change this to display swiping arrows when all required info is not filled out
            />
        </View>        
    </View>
  );
}

function Page3({navigation}) {
    return (
        <View style={styles.CONTAINER}>
            <View style={styles.CONTAINER}>
                <Text  style={styles.HEADER1TEXT}>Hazard Information</Text>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*Status of FIRE hazards:</Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*Status of PROPANE or GAS hazards:</Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*Status of WATER hazards: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*Status of ELECTRICAL hazards:</Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*Status of CHEMICAL hazards: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
            </View>
            <View style={styles.SAVEBUTTON}>
                <Button
                    title="Save Report"
                    onPress={() => navigation.navigate("MainScreen")}// Change this to display swiping arrows when all required info is not filled out
                />
            </View>        
        </View>
    );
  }

  function Page4({navigation}) {
    return (
        <View style={styles.CONTAINER}>
            <View style={styles.CONTAINER}>
                <Text  style={styles.HEADER1TEXT}>People Information</Text>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people rescued GREEN status: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people rescued YELLOW status: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people rescued RED status: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people rescued DECEASED status:</Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*Location of DECEASED:  (only display if DECEASED GREATERTHAN 0) </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###text-box-entry###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people TRAPPED: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people needing SHELTER: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people from other neighborhoods require first aid: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>*How many people from other neighborhoods require shelter: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###dropdown###</Text>
                </View>
            </View>
            <View style={styles.SAVEBUTTON}>
                <Button
                    title="Save Report"
                    onPress={() => navigation.navigate("MainScreen")}// Change this to display swiping arrows when all required info is not filled out
                />
            </View>        
        </View>
    );
  }

  function Page5({navigation}) {
    return (
        <View style={styles.CONTAINER}>
            <View style={styles.CONTAINER}>
                <Text  style={styles.HEADER1TEXT}>Additional Information</Text>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>Notes: </Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>###text-box-entry###</Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>Add Photo:</Text>
                </View>
                <View style={styles.CONTAINER_ROW_TEMP}>
                    <Text  style={styles.TEXT_TEMP}>+ photo ###photo upload###</Text>
                </View>
            </View>
            <View style={styles.SAVEBUTTON}>
                <Button
                    title="Save Report"
                    onPress={() => navigation.navigate("MainScreen")}// Change this to display swiping arrows when all required info is not filled out
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
            }}>
            <Tab.Group name="CERT Report Page"/>
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