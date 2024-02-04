import { useSetAtom, useAtomValue } from "jotai";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Alert, ScrollView, Platform } from "react-native";

import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import { personal } from "../../../components/dataLists";
import { isPeoplePageValidatedAtom, tabIndexAtom } from "../MYNPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

const PeoplePage = () => {
  const [greenPersonal, setGreenPersonal] = useState(null);
  const [yellowPersonal, setYellowPersonal] = useState(null);
  const [redPersonal, setRedPersonal] = useState(null);
  const [deceasedPersonal, setDeceasedPersonal] = useState(null);
  const [trappedPersonal, setTrappedPersonal] = useState(null);
  const [personalRequiringShelter, setPersonalRequiringShelter] =
    useState(null);
  const [deceasedPersonalLocation, setDeceasedPersonalLocation] =
    useState(null);

  const [isGreenPersonalSelectInvalid, setIsGreenPersonalSelectInvalid] =
    useState(false);
  const [isYellowPersonalSelectInvalid, setIsYellowPersonalSelectInvalid] =
    useState(false);
  const [isRedPersonalSelectInvalid, setIsRedPersonalSelectInvalid] =
    useState(false);
  const [isDeceasedPersonalSelectInvalid, setIsDeceasedPersonalSelectInvalid] =
    useState(false);
  const [isTrappedPersonalSelectInvalid, setIsTrappedPersonalSelectInvalid] =
    useState(false);
  const [
    isPersonalRequiringShelterSelectInvalid,
    setIsPersonalRequiringShelterSelectInvalid,
  ] = useState(false);
  const [
    isDeceasedPersonalLocationInvalid,
    setIsDeceasedPersonalLocationInvalid,
  ] = useState(false);

  const [showLocation, setShowLocation] = useState(false);

  const setIsPeoplePageValidated = useSetAtom(isPeoplePageValidatedAtom);
  const tabIndex = useAtomValue(tabIndexAtom);
  const setTabIndex = useSetAtom(tabIndexAtom);

  const handleGreenPersonalChange = (value) => {
    setGreenPersonal(value);
    setIsGreenPersonalSelectInvalid(!value);
  };
  const handleYellowPersonalChange = (value) => {
    setYellowPersonal(value);
    setIsYellowPersonalSelectInvalid(!value);
  };
  const handleRedPersonalChange = (value) => {
    setRedPersonal(value);
    setIsRedPersonalSelectInvalid(!value);
  };
  const handleTrappedPersonalChange = (value) => {
    setTrappedPersonal(value);
    setIsTrappedPersonalSelectInvalid(!value);
  };
  const handlePersonalRequiringShelterChange = (value) => {
    setPersonalRequiringShelter(value);
    setIsPersonalRequiringShelterSelectInvalid(!value);
  };
  const handleDeceasedPersonalChange = (value) => {
    setDeceasedPersonal(value);
    setIsDeceasedPersonalSelectInvalid(!value);
    if (value > 0) {
      setShowLocation(true);
    } else {
      setShowLocation(false);
    }
  };
  const handleDeceasedPersonalLocationChange = (value) => {
    setDeceasedPersonalLocation(value);
    setIsDeceasedPersonalLocationInvalid(!value);
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!greenPersonal) {
      setIsGreenPersonalSelectInvalid(true);
      requiredFieldsList.push("► 1. Green Personal");
    }
    if (!yellowPersonal) {
      setIsYellowPersonalSelectInvalid(true);
      requiredFieldsList.push("► 2. Yellow Personal");
    }
    if (!redPersonal) {
      setIsRedPersonalSelectInvalid(true);
      requiredFieldsList.push("► 3. Red Personal");
    }
    if (!deceasedPersonal) {
      setIsDeceasedPersonalSelectInvalid(true);
      requiredFieldsList.push("► 4. Deceased Personal");
    }
    if (!trappedPersonal) {
      setIsTrappedPersonalSelectInvalid(true);
      requiredFieldsList.push("► 5. Trapped Personal");
    }
    if (!personalRequiringShelter) {
      setIsPersonalRequiringShelterSelectInvalid(true);
      requiredFieldsList.push("► 6. Personal Requiring Shelter");
    }
    if (!deceasedPersonalLocation && deceasedPersonal > 0) {
      setIsDeceasedPersonalLocationInvalid(true);
      requiredFieldsList.push("► 7. Deceased Personal Location");
    }

    if (requiredFieldsList.length > 0) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setIsPeoplePageValidated(false);
      return;
    }

    setIsPeoplePageValidated(true);
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
            items={personal}
            label="1. How many rescued people are GREEN?"
            onChange={handleGreenPersonalChange}
            isInvalid={isGreenPersonalSelectInvalid}
            testID="myn-report-people-page-rescued-green-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={personal}
            label="2. How many rescued people are YELLOW?"
            onChange={handleYellowPersonalChange}
            isInvalid={isYellowPersonalSelectInvalid}
            testID="myn-report-people-page-rescued-yellow-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={personal}
            label="3. How many rescued people are RED?"
            onChange={handleRedPersonalChange}
            isInvalid={isRedPersonalSelectInvalid}
            testID="myn-report-people-page-rescued-red-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={personal}
            label="4. How many people are TRAPPED?"
            onChange={handleTrappedPersonalChange}
            isInvalid={isTrappedPersonalSelectInvalid}
            testID="myn-report-people-page-trapped-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={personal}
            label="5. How many people need SHELTER?"
            onChange={handlePersonalRequiringShelterChange}
            isInvalid={isPersonalRequiringShelterSelectInvalid}
            testID="myn-report-people-page-shelter-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={personal}
            label="6. How many rescued people are DECEASED?"
            onChange={handleDeceasedPersonalChange}
            isInvalid={isDeceasedPersonalSelectInvalid}
            testID="myn-report-people-page-rescued-deceased-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          {showLocation && (
            <CustomInput
              label="7. Where is the location of the deceased?"
              onChangeText={handleDeceasedPersonalLocationChange}
              value={deceasedPersonalLocation}
              isInvalid={isDeceasedPersonalLocationInvalid}
              testID="myn-report-people-page-deceased-location-input"
            />
          )}
        </ScrollView>
        <NavigationButtons validateData={validateData} />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default PeoplePage;
