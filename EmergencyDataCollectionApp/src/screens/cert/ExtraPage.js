import * as React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

function ExtraPage() {
    return (
      <View style={styles.CONTAINER}>
        <View style={styles.CONTAINER}>
          <Text style={styles.HEADER1TEXT}>Additional Information</Text>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>Notes: </Text>
          </View>
          <View style={styles.CONTAINER_ROW}>
            <TextInput style={{borderWidth: 1, padding: 10, borderRadius: 5, fontSize: 15, width: "100%"}} placeholder="Please enter any notes here"></TextInput>
          </View>
          <View style={styles.CONTAINER_ROW}>
            <Text style={styles.TEXT}>Add Photo:</Text>
          </View>
          <View style={styles.CONTAINER_ROW_TEMP}>
            <Text style={styles.TEXT_TEMP}>+ photo ###photo upload###</Text>
          </View>
        </View>
      </View>
    );
  }

  export default ExtraPage;

  
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