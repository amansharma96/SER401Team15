import * as React from "react";
import { useState } from "react";
import { Text, View, TextInput, Alert, Button } from "react-native";

import styles from "./styles";
import { useCERTReportContext } from "../../components/CERTReportContext";

function ExtraPage() {
  const [valueNotes, setvalueNotes] = useState(null);
  const certReportObject = useCERTReportContext();

  const onLoad = () => {
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

  function handleClick() {
    check_form();
  }

  return (
    <View>
      <View>
        <Text style={styles.HEADER1TEXT}>Additional Information</Text>
        <View>
          <Text>Notes: </Text>
        </View>
        <View>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              fontSize: 15,
              width: "100%",
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
        <View>
          <Text>Add Photo:</Text>
        </View>
        <View>
          <Text style={styles.TEXT_TEMP}>+ photo ###photo upload###</Text>
        </View>
      </View>
      <View style={styles.SAVEBUTTON}>
        <Button title="Check Form" onPress={handleClick} />
      </View>
    </View>
  );
}

export default ExtraPage;
