import { useAtomValue } from "jotai";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import ReportHeader from "../../../components/ReportHeader/ReportHeader";
import Theme from "../../../utils/Theme";
import {
  visitNumbers,
  RoadCondition,
  StructureType,
  StructureCondition,
  HazzardFire,
  HazzardPropane,
  HazzardWater,
  HazzardElectrical,
  HazzardChemical,
  Animals,
  AnimalStatus,
} from "../../../utils/constants/dropdownOptions";
import { mynReportAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";
import { formatDate } from "../components/formatDate";

const ReviewPage = () => {
  const mynReport = useAtomValue(mynReportAtom);

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
          title="MYN Reporting"
          subtitle="Review entry before saving"
        />
        <LineSeparator />
        <View style={{ marginBottom: 10 }} />

        <ScrollView>
          <Text style={styles.boldText}>Info:</Text>
          <View style={styles.box}>
            <Text>{`Start Time: ${formatDate(mynReport.info.startTime)}`}</Text>
            <Text>{`GPS: ${mynReport.info.latitude}, ${mynReport.info.longitude}`}</Text>
            <Text>{`Accuracy: ${mynReport.info.accuracy} meters`}</Text>
            <Text>{`MYN Group Name: ${mynReport.info.groupName}`}</Text>
          </View>

          <Text style={styles.boldText}>Location:</Text>
          <View style={styles.box}>
            <Text>{`Visit Number: ${getLabelFromList(
              mynReport.location.numberOfVisit,
              visitNumbers,
            )}`}</Text>
            <Text>{`Road Access: ${getLabelFromList(
              mynReport.location.roadCondition,
              RoadCondition,
            )}`}</Text>
            <Text>{`Location Address: ${mynReport.location.address}`}</Text>
          </View>

          <Text style={styles.boldText}>Structure/Hazards:</Text>
          <View style={styles.box}>
            <Text>{`Structure Type: ${getLabelFromList(
              mynReport.hazard.structureType,
              StructureType,
            )}`}</Text>
            <Text>{`Structure Condition: ${getLabelFromList(
              mynReport.hazard.structureCondition,
              StructureCondition,
            )}`}</Text>
            <Text>{`Fire Hazards: ${getLabelFromList(
              mynReport.hazard.hazardFire,
              HazzardFire,
            )}`}</Text>
            <Text>{`Propane or Gas Hazards: ${getLabelFromList(
              mynReport.hazard.hazardPropane,
              HazzardPropane,
            )}`}</Text>
            <Text>{`Water Hazards: ${getLabelFromList(
              mynReport.hazard.hazardWater,
              HazzardWater,
            )}`}</Text>
            <Text>{`Electrical Hazards: ${getLabelFromList(
              mynReport.hazard.hazardElectrical,
              HazzardElectrical,
            )}`}</Text>
            <Text>{`Chemical Hazards: ${getLabelFromList(
              mynReport.hazard.hazardChemical,
              HazzardChemical,
            )}`}</Text>
          </View>

          <Text style={styles.boldText}>Personnel:</Text>
          <View style={styles.box}>
            <Text>{`Rescued People Green: ${mynReport.people.greenPersonal}`}</Text>
            <Text>{`Rescued People Yellow: ${mynReport.people.yellowPersonal}`}</Text>
            <Text>{`Rescued People Red: ${mynReport.people.redPersonal}`}</Text>
            <Text>{`People Trapped: ${mynReport.people.trappedPersonal}`}</Text>
            <Text>{`People Need Shelter: ${mynReport.people.personalRequiringShelter}`}</Text>
            <Text>{`Deceased People: ${mynReport.people.deceasedPersonal}`}</Text>
            <Text>{`Deceased People Location: ${mynReport.people.deceasedPersonalLocation}`}</Text>
          </View>

          <Text style={styles.boldText}>Animals:</Text>
          <View style={styles.box}>
            <Text>{`Any Animals: ${getLabelFromList(
              mynReport.animal.anyPetsOrFarmAnimals,
              Animals,
            )}`}</Text>
            <Text>{`Animal status: ${getLabelFromList(
              mynReport.animal.selectedAnimalStatus,
              AnimalStatus,
            )}`}</Text>
            <Text>{`Animal Notes: ${mynReport.animal.animalNotes}`}</Text>
          </View>

          <Text style={styles.boldText}>Notes:</Text>
          <View style={styles.box}>
            <Text>{`Notes: ${mynReport.note.NotesTextArea}`}</Text>
            <Text>{`Picture: ${
              mynReport.info.hash +
              "_" +
              mynReport.hazardPicture.number +
              ".jpeg"
            }`}</Text>
            <Text>{`Finish Time: ${formatDate(mynReport.info.endTime)}`}</Text>
          </View>
          <NavigationButtons />
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

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

export default ReviewPage;
