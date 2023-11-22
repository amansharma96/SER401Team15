import * as React from "react";
import { useState } from "react";
import { Text, View, TextInput } from "react-native";

import styles from "./styles";

function ExtraPage() {  
  const [valueNotes, setvalueNotes] = useState(null);

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
            onChange={(item) => {
              setvalueNotes(item.value);
            }}
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
    </View>
  );
}

export default ExtraPage;
