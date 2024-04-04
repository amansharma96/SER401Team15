import React from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./styles";

const CERTInstructions = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.placehodler}>Starting a CERT report</Text>
        <Text style={styles.text}>
          Select the <Text style={{ fontWeight: "bold" }}>New CERT</Text> report
          button. There are 5 sections you will go through. INFO, LOCATION,
          HAZARD, PEOPLE, and NOTE
        </Text>
        <Text style={styles.placehodler}>The info section:</Text>
        <Text style={styles.text}>
          First an automatic date and timestamp as you start the report. You can
          manually edit these if needed. Next identify your CERT group. This is
          already filled in if you used the{" "}
          <Text style={{ fontWeight: "bold" }}>SET USER DEFAULTS</Text> button
          and preloaded the information. Next identify your Squad name. Then
          note accessibility to site.
        </Text>
        <Text style={styles.placehodler}>The Location Section:</Text>
        <Text style={styles.text}>
          This section collects information related to your visit to this site,
          including street address and capturing the GPS coordinates. We will
          automatically capture GPS location. For most accurate results please
          stand at the center of the property away from the street and near the
          front door. If the GPS location accuracy is low the data will appear
          red in color. Try again. You may need to move. Yellow indicates a bit
          more accuracy. If the data shows green you are good to accept the
          data.
        </Text>
        <Text style={styles.placehodler}>The Hazard Section:</Text>
        <Text style={styles.text}>
          This section collects information about conditions around the outside
          of the Structure and will help you determine if you go inside.
          Information related to power, water, fire, gas , structural conditions
          etc.
        </Text>
        <Text style={styles.placehodler}>The People Section:</Text>
        <Text style={styles.text}>
          This section lets you note the number of people you find and their
          medical condition and what kind of help they may require.
        </Text>
        <Text style={styles.placehodler}>The Note Section:</Text>
        <Text style={styles.text}>
          This is the final step in the information collection process. You have
          the opportunity to take a photo to document unusual situations and
          enter any additional notes that you feel are needed to describe the
          situation. There will be an automatic date and time stamp as you
          finish the report.
        </Text>
        <Text style={styles.text}>
          You will have an opportunity to review and edit this report before
          saving this file.
        </Text>
      </View>
    </ScrollView>
  );
};

export default CERTInstructions;
