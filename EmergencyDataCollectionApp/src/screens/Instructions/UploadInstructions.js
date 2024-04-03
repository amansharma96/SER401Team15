import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import Images from "../../utils/Images";

const UpLoadInstructions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Copy Files Instructions For Android</Text>
      <Text style={styles.instruction}>
        1. Connect a USB storage device to your Android device.
      </Text>
      <Text style={styles.instruction}>
        2. On your Android device, open Files by Google Files by Google
        <Image source={Images.downArrow}/>
        .
      </Text>
      <Text style={styles.instruction}>
        3. Under 'Storage devices', tap your USB storage device.
      </Text>
      <Text style={styles.instruction}>4. Find the file you want to copy.</Text>
      <Text style={styles.instruction}>
        5. Next to a file you want to copy, tap the{" "}
        <Image source={Images.downArrow} />. If you can't find the{" "}
        <Image source={Images.downArrow} /> next to the files, tap List view
        List.
      </Text>
      <Text style={styles.instruction}>
        - To copy one file: Tap the <Image source={Images.downArrow} /> and then
        Copy to.
      </Text>
      <Text style={styles.instruction}>- To copy multiple files:</Text>
      <Text style={styles.instruction}>
        a. Tap the <Image source={Images.downArrow} /> and then Select.
      </Text>
      <Text style={styles.instruction}>
        b. Next to each file you want to copy, check the circle.
      </Text>
      <Text style={styles.instruction}>
        c. At the top, tap More More and then Copy to.
      </Text>
      <Text style={styles.instruction}>
        6. Choose where you want to copy the file.
      </Text>
      <Text style={styles.instruction}>7. Tap Copy here.</Text>
    </View>
  );
};

export default UpLoadInstructions;
