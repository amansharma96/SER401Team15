import { useAtom } from "jotai";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";

import HelperText from "./components/HelperText";
import {
  numberOfVisitOptions,
  roadConditionOptions,
} from "./components/selectOptions";
import CustomDateTimePickerComponent from "../../../components/CustomDateTimePickerComponent/CustomDateTimePickerComponent";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import LineSeparator from "../../../components/LineSeparator/LineSeparator";
import { certReportAtom, certTabsStatusAtom } from "../CERTPageAtoms";
import NavigationButtons from "../components/NavigationButtons";

function InfoPage() {
  const [certReport, setCERTReport] = useAtom(certReportAtom);
  const [certTabsStatus, setCERTTabsStatus] = useAtom(certTabsStatusAtom);
  const [isGroupNameInvalid, setIsGroupNameInvalid] = useState(false);
  const [isSquadNameInvalid, setIsSquadNameInvalid] = useState(false);
  const [isVisitNumberInvalid, setIsVisitNumberInvalid] = useState(false);
  const [isRoadAccessInvalid, setIsRoadAccessInvalid] = useState(false);

  const handleGroupNameChange = (value) => {
    setCERTReport((prevReport) => ({
      ...prevReport,
      GroupName: value,
    }));
    setIsGroupNameInvalid(!value);
  };

  const handleSquadNameChange = (value) => {
    setCERTReport((prevReport) => ({
      ...prevReport,
      SquadName: value,
    }));
    setIsSquadNameInvalid(!value);
  };

  const handleVisitNumberChange = (value) => {
    setCERTReport((prevReport) => ({
      ...prevReport,
      VisitNumber: value,
    }));
    setIsVisitNumberInvalid(!value);
  };

  const handleRoadAccessChange = (value) => {
    setCERTReport((prevReport) => ({
      ...prevReport,
      RoadAccess: value,
    }));
    setIsRoadAccessInvalid(!value);
  };

  const handleDateTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || certReport.info.startTime;
    setCERTReport((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        startTime: currentDate,
      },
    }));
  };

  const validateData = () => {
    const requiredFieldsList = [];
    if (!certReport.info.startTime)
      requiredFieldsList.push("► 1. Date and Time");
    if (!certReport.GroupName) {
      setIsGroupNameInvalid(true);
      requiredFieldsList.push("► 2. CERT Group Name");
    }
    if (!certReport.SquadName) {
      setIsSquadNameInvalid(true);
      requiredFieldsList.push("► 3. CERT Squad Name");
    }
    if (!certReport.VisitNumber) {
      setIsVisitNumberInvalid(true);
      requiredFieldsList.push("► 4. Visit Number");
    }
    if (!certReport.RoadAccess) {
      setIsRoadAccessInvalid(true);
      requiredFieldsList.push("► 5. Road Access");
    }

    if (requiredFieldsList.length > 0 && certTabsStatus.enableDataValidation) {
      Alert.alert(
        "Validation Error",
        "Please fill in all required fields:\n" + requiredFieldsList.join("\n"),
      );
      setCERTTabsStatus((prev) => ({
        ...prev,
        isInfoPageValidated: false,
      }));
      return;
    }

    const currentTabIndex = certTabsStatus.tabIndex;
    setCERTTabsStatus((prev) => ({
      ...prev,
      isInfoPageValidated: true,
      tabIndex: currentTabIndex + 1,
    }));
  };

  return (
    <NativeBaseProvider>
      <LineSeparator />
      <HelperText />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 100}
      >
        <ScrollView>
          <CustomDateTimePickerComponent
            title="1. Select the date and time of the report"
            value={certReport.info.startTime}
            handleDataTimeChange={handleDateTimeChange}
            isRequired
          />
          <CustomInput
            label="2. What is the name of the CERT Group?"
            placeholder="Enter CERT Group Name"
            value={certReport.info.GroupName}
            onChangeText={handleGroupNameChange}
            isInvalid={isGroupNameInvalid}
            errorMessage="Please enter CERT Group Number"
            testID="cert-report-info-page-group-name-input"
            formControlProps={{
              paddingTop: 3,
            }}
          />
          <CustomInput
            label="3. What is the name of the CERT Squad?"
            placeholder="Enter CERT Squad"
            value={certReport.info.SquadName}
            onChangeText={handleSquadNameChange}
            isInvalid={isSquadNameInvalid}
            errorMessage="Please enter CERT Group Number"
            testID="cert-report-info-page-group-name-input"
            formControlProps={{
              paddingTop: 3,
            }}
          />
          <CustomSelect
            items={numberOfVisitOptions}
            label="4. Is this your first visit to the address?"
            onChange={handleVisitNumberChange}
            isInvalid={isVisitNumberInvalid}
            testID="cert-report-location-page-is-first-visit-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
          <CustomSelect
            items={roadConditionOptions}
            label="5. How good is the ROAD access to the location?"
            onChange={handleRoadAccessChange}
            isInvalid={isRoadAccessInvalid}
            testID="cert-report-location-page-road-condition-select"
            formControlProps={{
              paddingBottom: 3,
            }}
          />
        </ScrollView>
        <NavigationButtons validateData={validateData} />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}

export default InfoPage;
