import * as React from "react";
import { useState } from "react";
import { Text, View, TextInput, Alert, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";

function ExtraPage() {
  const [valueNotes, setvalueNotes] = useState(null);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
    // Set as active screen
    global.CERTpage1Active = false;
    global.CERTpage2Active = false;
    global.CERTpage3Active = false;
    global.CERTpage4Active = false;
    global.CERTpage5Active = true;
    // Check if values in CERTReportObject are not null before setting the state
    if (certReportObject.Notes) {
      setvalueNotes(certReportObject.Notes);
    }
  };

  React.useEffect(() => {
    onLoad(); // Call onLoad when the component mounts
    check_form();
  }, []);

  const check_form = () => {
    const requiredFieldsList = [];
    /*if (!valueNotes) {
      requiredFieldsList.push("Date & Time");
    }*/ // Notes not required

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      return false;
    }
    certReportObject.Notes = valueNotes;
    return true;
  };

  const route = useRoute();

  function handleClick() {
    check_form(1);
    if (global.CERTpage1Complete) {
      navigation.navigate("Location");
    }
  }

  return (
    <ScrollView>
      <View>
        <View>
          <View style={styles.container}>
            <Text style={styles.HEADER1TEXT}>Additional Information</Text>
          </View>
          <View style={styles.container}>
            <Text>Notes: </Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                fontSize: 15,
                width: "95%",
              }}
              maxHeight={300}
              labelField="label"
              valueField="value"
              searchPlaceholder="Search..."
              value={valueNotes}
              onChangeText={setvalueNotes}
              placeholder="Please enter any notes here"
            />
          </View>
          <View style={styles.container}>
            <Text>Add Photo:</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.TEXT_TEMP}>+ photo ###photo upload###</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ExtraPage;
