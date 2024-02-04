import { useAtomValue, useSetAtom } from "jotai";
import {
  Box,
  ChevronDownIcon,
  KeyboardAvoidingView,
  NativeBaseProvider,
} from "native-base";
import React, { useState } from "react";
import { View, Text, Alert, Platform, ScrollView } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

import { Animals, AnimalStatus } from "./components/selectOptions";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import CustomTextArea from "../../../components/CustomTextArea/CustomTextArea";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import Theme from "../../../utils/Theme";
import { isAnimalPageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

const AnimalPage = () => {
  const [anyPetsOrFarmAnimals, setAnyPetsOrFarmAnimals] = useState(null);
  const [selectedAnimalStatus, setSelectedAnimalStatus] = useState([]);
  const [animalNotes, setAnimalNotes] = useState(null);
  const [showAnimalStatus, setShowAnimalStatus] = useState(false);
  const [showAnimalTextBox, setShowAnimalTextBox] = useState(false);

  const [
    isAnyPetsOrFarmAnimalsSelectInvalid,
    setIsAnyPetsOrFarmAnimalsSelectInvalid,
  ] = useState(false);
  const [isSelectedAnimalStatusInvalid, setIsSelectedAnimalStatusInvalid] =
    useState(false);
  const [isAnimalNotesInvalid, setIsAnimalNotesInvalid] = useState(false);

  const setIsAnimalPageValidated = useSetAtom(isAnimalPageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const handleAnyPetsOrFarmAnimalsChange = (value) => {
    setAnyPetsOrFarmAnimals(value);
    setIsAnyPetsOrFarmAnimalsSelectInvalid(!value);
    if (value === "YY") {
      setShowAnimalStatus(true);
    } else {
      setShowAnimalStatus(false);
      setSelectedAnimalStatus([]);
      setShowAnimalTextBox(false);
    }
  };
  const handleSelectedAnimalStatusChange = (value) => {
    setSelectedAnimalStatus(value);
    setIsSelectedAnimalStatusInvalid(!value);
    setShowAnimalTextBox(value.some((value) => value.includes("FA")));
  };
  const handleAnimalNotesChange = (value) => {
    setAnimalNotes(value);
    setIsAnimalNotesInvalid(!value);
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!anyPetsOrFarmAnimals) {
      setIsAnyPetsOrFarmAnimalsSelectInvalid(true);
      requiredFieldsList.push("Any Animals");
    }
    if (anyPetsOrFarmAnimals === "YY" && selectedAnimalStatus.length === 0) {
      setIsSelectedAnimalStatusInvalid(true);
      requiredFieldsList.push("Animal Status");
    }
    if (
      !animalNotes &&
      selectedAnimalStatus.some((value) => value.includes("FA"))
    ) {
      setIsAnimalNotesInvalid(true);
      requiredFieldsList.push("Animal Notes");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsAnimalPageValidated(false);
      return;
    }

    setIsAnimalPageValidated(true);
    setTabIndex(tabIndex + 1);
  };

  return (
    <NativeBaseProvider>
      <LineSeparator />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
      >
        <ScrollView>
          <CustomSelect
            items={Animals}
            label="Any pets or farm animals?"
            onChange={handleAnyPetsOrFarmAnimalsChange}
            isInvalid={isAnyPetsOrFarmAnimalsSelectInvalid}
            testID="myn-report-animal-page-any-pets-or-farm-animals-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />

          {showAnimalStatus && (
            <View>
              <Text
                style={{
                  color: Theme.COLORS.TEXT_GREY,
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingBottom: 5,
                }}
              >
                Animal Status*
              </Text>
              <MultiSelect
                style={{
                  borderColor: isSelectedAnimalStatusInvalid
                    ? Theme.COLORS.ERROR
                    : Theme.COLORS.BORDER_COLOR,
                  borderRadius: Theme.RADIUS.DEFAULT,
                  borderWidth: 1,
                  padding: 7,
                }}
                renderRightIcon={() => (
                  <Box mr="1">
                    <ChevronDownIcon color={Theme.COLORS.TEXT_GREY} size="6" />
                  </Box>
                )}
                data={AnimalStatus}
                labelField="label"
                valueField="value"
                placeholder="Multi Select"
                placeholderStyle={{
                  color: Theme.COLORS.TEXT_GREY,
                  fontSize: Theme.TYPOGRAPHY.FONT_SIZE.SMALL,
                }}
                searchPlaceholder="Search..."
                value={selectedAnimalStatus}
                onChange={handleSelectedAnimalStatusChange}
                search
              />
            </View>
          )}

          {showAnimalTextBox && (
            <CustomTextArea
              label="Additional Information about Farm Animals"
              placeholder="Other farm animals, like cows or horses that require attention, please make detailed notes"
              value={animalNotes}
              isRequired
              onChangeText={handleAnimalNotesChange}
              isInvalid={isAnimalNotesInvalid}
              errorMessage="Please fill in the required field"
              testID="myn-report-animal-page-animal-notes-textarea"
              formControlProps={{
                marginTop: 2,
              }}
            />
          )}
        </ScrollView>
        <NavigationButtons validateData={validateData} />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default AnimalPage;
