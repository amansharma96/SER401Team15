import { useAtom } from "jotai";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import { hazardReportAtom } from "./HazardPageAtoms";
import NavigationButtons from "./components/NavigationButtons";
import { hazardTypeOptions } from "./components/selectOptions";
import LineSeparator from "../../components/LineSeparator/LineSeparator";
import ReportHeader from "../../components/ReportHeader/ReportHeader";
import Theme from "../../utils/Theme";
import { formatDate } from "../../utils/formatDate/formatDate";

const ThirdScreen = () => {
  const [hazardReport] = useAtom(hazardReportAtom);

  const getLabelFromList = (value, list) => {
    const item = list.find((item) => item.value === value);
    return item ? item.label : value;
  };

  return (
    <>
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

          <Text style={styles.boldText}>Additional Info:</Text>
          <View style={styles.box}>
            <Text>{`Notes: ${hazardReport.note.NotesTextArea}`}</Text>
            {hazardReport.hazardPicture.number > 0 && (
              <Text>{`Picture: ${
                hazardReport.info.hash +
                "_" +
                hazardReport.hazardPicture.number +
                ".jpeg"
              }`}</Text>
            )}
            <Text>{`Finish Time: ${formatDate(
              hazardReport.info.endTime,
            )}`}</Text>
          </View>
        </ScrollView>
        <NavigationButtons />
      </View>
    </>
  );
};
export default ThirdScreen;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: Theme.COLORS.BORDER_COLOR,
    padding: 10,
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: Theme.RADIUS.DEFAULT,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
