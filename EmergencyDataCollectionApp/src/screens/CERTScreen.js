import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

function Page1({navigation}) {
  return (
    <View style={styles.CONTAINER}>
            <View style={styles.CONTAINER}>
                <Text  style={styles.HEADERTEXT}>Situation Report</Text>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>Date & Time: </Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>What CERT Group? ###dropdown### </Text>
                </View>
                <View style={styles.CONTAINER_ROW}>
                    <Text  style={styles.TEXT}>Date & Time: </Text>
                </View>
            </View>
      
        <Button
            style={styles.SAVEBUTTON}
            title="Save Report"
            onPress={() => navigation.navigate("MainScreen")}// Change this to display swiping arrows when all required info is not filled out
        />
    </View>
  );
}

function Page2({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page2</Text>
      <Button
           title="Go to Page1"
           onPress={() => navigation.navigate("MainScreen")}// Change this to the correct page to navigate to
           />
    </View>
  );
}

function Page3({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Page3</Text>
        <Button
            title="Go to Page1"
            onPress={() => navigation.navigate("MainScreen")} // Change this to the correct page to navigate to
            />
      </View>
    );
  }

  function Page4({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Page4</Text>
        <Button
            title="Go to Page1"
            onPress={() => navigation.navigate("MainScreen")} // Change this to the correct page to navigate to
            />
      </View>
    );
  }

  function Page5({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Page5</Text>
        <Button
            title="Go to Page1"
            onPress={() => navigation.navigate("MainScreen")} // Change this to the correct page to navigate to
            />
      </View>
    );
  }

function CERTScreen() {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#111111',
                tabBarLabelStyle: { fontSize: 11, textAlignVertical: "bottom" },
                tabBarStyle: { backgroundColor: "#ffcc00", height: "8%" },
            }}>
            <Tab.Group name="CERT Report Page"/>
            <Tab.Screen name="Info" component={Page1} />
            <Tab.Screen name="Location" component={Page2} />
            <Tab.Screen name="Hazards" component={Page3} />
            <Tab.Screen name="People" component={Page4} />
            <Tab.Screen name="Notes" component={Page5} />
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
    BUTTONCONTAINER: {
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "center",
    },
    HEADERTEXT: {              
      fontSize: 20,
      fontWeight: 'bold',
    },
    TEXT: {              
        fontSize: 15,
    },
    SAVEBUTTON: {
        flexDirection: "column",
        verticalAlign: "bottom",
        justifyContent: "center",
    },
  });