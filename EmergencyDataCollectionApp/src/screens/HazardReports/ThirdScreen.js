import { useAtom } from "jotai";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import { NativeBaseProvider } from "native-base";

import { hazardReportAtom } from "./HazardPageAtoms";
import LineSeparator from "../../components/LineSeparator/LineSeparator";
import ReportHeader from "../../components/ReportHeader/ReportHeader";
import { formatDate } from "../../utils/formatDate/formatDate";
import NavigationButtons from "./components/NavigationButtons";
import {
  hazardTypeOptions
} from "./components/selectOptions";

const ThirdScreen = () => {
  const [hazardReport] = useAtom(hazardReportAtom);

  const getLabelFromList = (value, list) => {
    const item = list.find((item) => item.value === value);
    return item ? item.label : value;
  };

  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <ReportHeader
          title="Hazard Reporting"
          subtitle="Review entry before saving"
        />
        <LineSeparator />
        <View style={{ marginBottom: 10 }} />

        <ScrollView>
          <Text style={styles.boldText}>Info:</Text>
          <View style={styles.box}>
            <Text>{`Start Time: ${formatDate(
              hazardReport.info.startTime,
            )}`}</Text>
            <Text>{`Hazard Type: ${getLabelFromList(
              hazardReport.info.hazardType,
              hazardTypeOptions,
            )}`}</Text>
          </View>

          <Text style={styles.boldText}>Notes:</Text>
          <View style={styles.box}>
            <Text>{`Notes: ${hazardReport.note.NotesTextArea}`}</Text>
            <Text>{`Picture: ${ hazardReport.info.hash + "_" + 
              hazardReport.hazardPicture.number + ".jpeg"}`}</Text>
            <Text>{`Finish Time: ${formatDate(
              hazardReport.info.endTime,
            )}`}</Text>
          </View>
          <NavigationButtons />
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}
export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  BUTTON: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ffcc00",
    color: "#000000",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 250,
    borderWidth: 1,
    borderColor: "black",
  },
  dateContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 5,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
