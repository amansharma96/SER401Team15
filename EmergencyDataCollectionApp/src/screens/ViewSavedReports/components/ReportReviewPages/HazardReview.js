import { NativeBaseProvider } from "native-base";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import Theme from "../../../../utils/Theme";
import { formatDate } from "../../../../utils/formatDate/formatDate";
import { hazardTypeOptions } from "../../../HazardReports/components/selectOptions";

const HazardReview = ({ report }) => {
  const hazardReport = report.report_data;

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
        <View style={{ marginBottom: 10 }} />

        <ScrollView>
          <Text style={styles.boldText}>Info:</Text>
          <View style={styles.box}>
            <Text>{`Start Time: ${formatDate(hazardReport.info.startTime) || "N/A"}`}</Text>
            <Text>{`Hazard Type: ${getLabelFromList(hazardReport.info.hazardType, hazardTypeOptions) || "N/A"}`}</Text>
          </View>

          <Text style={styles.boldText}>Additional Info:</Text>
          <View style={styles.box}>
            <Text>{`Notes: ${hazardReport.note.NotesTextArea || "N/A"}`}</Text>
            {hazardReport.hazardPicture.number > 0 ? (
              <Text>{`Picture: ${hazardReport.info.hash + "_" + hazardReport.hazardPicture.number + ".jpeg"}`}</Text>
            ) : (
              <Text>Picture: N/A</Text>
            )}
            <Text>{`Finish Time: ${formatDate(hazardReport.info.endTime) || "N/A"}`}</Text>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};
export default HazardReview;

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
