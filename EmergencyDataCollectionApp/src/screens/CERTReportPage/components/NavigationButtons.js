import { useNavigation } from "@react-navigation/native";
import { useAtom, useAtomValue } from "jotai/index";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { imagesAtom } from "../../../components/EverythingCamera/ImagesAtom";
import { saveImages } from "../../../components/EverythingCamera/components/saveImage/saveImage";
import { addReport } from "../../../utils/Database/OfflineSQLiteDB";
import Theme from "../../../utils/Theme";
import { certReportAtom, certTabsStatusAtom } from "../CERTPageAtoms";

const Button = ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity style={buttonStyle} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const NavigationButtons = ({ validateData }) => {
  const [certTabsStatus, setCERTTabsStatus] = useAtom(certTabsStatusAtom);
  const certReport = useAtomValue(certReportAtom);
  const navigation = useNavigation();
  const images = useAtomValue(imagesAtom);

  const handleCancelPress = () => {
    navigation.navigate("MainScreen");
  };

  const handleBackToReportPage = () => {
    navigation.navigate("CERT Report Page");
    const currentTabIndex = certTabsStatus.tabIndex;
    setCERTTabsStatus({ ...certTabsStatus, tabIndex: currentTabIndex - 1 });
  };

  const handleGoToReviewPage = () => {
    navigation.navigate("CERT Review Page");
    const currentTabIndex = certTabsStatus.tabIndex;
    setCERTTabsStatus({ ...certTabsStatus, tabIndex: currentTabIndex + 1 });
  };

  const handleBackPress = () => {
    const currentTabIndex = certTabsStatus.tabIndex;
    setCERTTabsStatus({ ...certTabsStatus, tabIndex: currentTabIndex - 1 });
  };

  const handleNextPress = () => {
    validateData();
  };

  const handleSavePress = () => {
    addReport("CERT", certReport);
    let fileName = "ReadyNeighborCustomName";
    if (certReport.info.hash !== 0 && certReport.info.hash !== null) {
      fileName = certReport.info.hash;
    }
    if (Array.isArray(images) && images.length > 0) {
      saveImages(images, fileName).then((r) => console.log("saved", r));
    }
    navigation.navigate("MainScreen");
  };

  let leftButton;
  let rightButton;

  if (certTabsStatus.tabIndex === 0) {
    leftButton = (
      <Button
        title="Cancel"
        onPress={handleCancelPress}
        buttonStyle={styles.cancelButton}
      />
    );
  } else if (certTabsStatus.tabIndex === 5) {
    leftButton = (
      <Button
        title="Edit"
        onPress={handleBackToReportPage}
        buttonStyle={styles.cancelButton}
      />
    );
  } else {
    leftButton = (
      <Button
        title="Back"
        onPress={handleBackPress}
        buttonStyle={styles.cancelButton}
      />
    );
  }

  if (certTabsStatus.tabIndex === 4) {
    rightButton = (
      <Button
        title="Review"
        onPress={handleGoToReviewPage}
        buttonStyle={styles.button}
      />
    );
  } else if (certTabsStatus.tabIndex === 5) {
    rightButton = (
      <Button
        title="Save"
        onPress={handleSavePress}
        buttonStyle={styles.button}
      />
    );
  } else {
    rightButton = (
      <Button
        title="Next"
        onPress={handleNextPress}
        buttonStyle={styles.button}
      />
    );
  }

  return (
    <View style={styles.container}>
      {leftButton}
      {rightButton}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  cancelButton: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    borderColor: Theme.COLORS.BACKGROUND_YELLOW,
    borderWidth: 1,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  button: {
    padding: Theme.BUTTON_PADDING.VERTICAL,
    alignItems: "center",
    width: "48%",
    backgroundColor: Theme.COLORS.BACKGROUND_YELLOW,
    paddingVertical: Theme.BUTTON_PADDING.VERTICAL,
    borderRadius: Theme.RADIUS.BUTTON,
  },
  text: {
    color: Theme.COLORS.TEXT_BLACK,
  },
};

export default NavigationButtons;
