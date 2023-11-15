import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter something here" />
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.uploadButton]} onPress={() => {}}>
          <Text style={styles.buttonText}>Upload Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.takePictureButton]} onPress={() => {}}>
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ThirdScreen")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel Request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  inputContainer: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 200,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    width: "90%",
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: "black",
    padding: 10,
    width: "35%",
    textAlign: "center",
  },
  takePictureButton: {
    backgroundColor: "black",
    padding: 10,
    width: "35%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  dateContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
