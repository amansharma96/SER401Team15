import * as React from "react";
import { Text, View, TextInput } from "react-native";

import styles from "./styles";

function ExtraPage() {
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
