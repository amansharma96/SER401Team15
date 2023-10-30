import React from 'react';
import { View,Text } from 'react-native';
import Button from '../components/Button';
import Theme from '../utils/Theme';

const MainScreen = () => {
  const handleStartNewMYNReport = () => {
    // placeholder for logic
  };

  const handleReviewSavedMYNReports = () => {
    // placeholder for logic
  };

  const handleStartNewCERTReport = () => {
    // placeholder for logic
  };

  const handleReviewSavedCERTReports = () => {
    // placeholder for logic
  };

  const handleStartNewHazardReport = () => {
    // placeholder for logic
  };

  const handleReviewSavedHazardReports = () => {
    // placeholder for logic
  };

  const handleCopyToUSB = () => {
    // placeholder for logic
  };

  const handleInstructions = () => {
    // placeholder for logic
  };

  const handleSettings = () => {
    // placeholder for logic
  };

  return (
    <View >
      <View style={Theme.CONTAINER}>
        <Text>MYN Reporting</Text>        
      </View>
      <View style = {Theme.BUTTONCONTAINER}>
        <Button title="Start a new MYN Report" onPress={handleStartNewMYNReport} />
        <Button title="Review saved MYN Reports" onPress={handleReviewSavedMYNReports} />
      </View>
      <View style={Theme.CONTAINER}>
        <Text>CERT Reporting</Text>
      </View>
      <View style = {Theme.BUTTONCONTAINER}>
        <Button title="Start a new CERT Report" onPress={handleStartNewCERTReport} />
        <Button title="Review saved CERT Reports" onPress={handleReviewSavedCERTReports} />
      </View>
      <View style={Theme.CONTAINER}>
        <Text>HAZARD Reporting</Text>
      </View>
      <View style = {Theme.BUTTONCONTAINER}>
        <Button title="Start a new HAZARD Report" onPress={handleStartNewHazardReport} />
        <Button title="Review saved HAZARD Reports" onPress={handleReviewSavedHazardReports} />
      </View>
      <View style={Theme.CONTAINER}>
        <Text>Other</Text>
      </View>
      <View>
        <Button title="Copy saved files to USB storage" onPress={handleCopyToUSB} />
      </View>
      <View style = {Theme.BUTTONCONTAINER}>
        <Button title="Instructions" onPress={handleInstructions} />
        <Button title="Settings" onPress={handleSettings} />
      </View>
    </View>
  );
};

export default MainScreen;
