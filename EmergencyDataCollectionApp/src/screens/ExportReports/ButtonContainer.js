import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
  import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    AlertDialogBody,
    Icon,
    AlertCircleIcon,
    Heading,
    Button,
    ButtonText
  } from "@gluestack-ui/themed";

import { queryReportById, removeReportById } from "../../utils/Database/OfflineSQLiteDB";
import Theme from "../../utils/Theme";
import exportToCSV from "../../utils/Database/export";
import styles from "../ViewSavedReports/styles";

export const ButtonContainer = ({reports}) => {
    const navigation = useNavigation();
    const [showAlertDialog, setShowAlertDialog] = React.useState(false)

    function compileReports(callback) {
        const compiledReports = [];
        for (var k in reports) {
            if(reports[k.toString()]) { 
                compiledReports.push(k);
            }
        }
        callback(compiledReports);
    }
    

    const handleExport = () => {
        console.log("reports being exported: " + JSON.stringify(reports, null, 2));
        compileReports(exportToCSV);
        navigation.navigate("MainScreen");
    }

    const handleDelete = () => {
        setShowAlertDialog(false);
        for (var k in reports) {
            if(reports[k.toString()]) { 
                console.log("Report being deleted: " + k);
                removeReportById(k);
            }
            
        }
        navigation.navigate("MainScreen");
    }

    return (
        <>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleExport}
                style={styles.exportButton}
            >
                <Text style={styles.selectAllButtonText}>
                    {"Export"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setShowAlertDialog(true)}
                style={styles.deleteButton}
            >
                <Text style={styles.selectAllButtonText}>
                    {"Delete"}
                </Text>
            </TouchableOpacity>
            </View>
            <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false)
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
              <Heading size="lg">WARNING</Heading>
              <Icon
                as={AlertCircleIcon}
                color={Theme.COLORS.WARNING}
              />
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size={Theme.TYPOGRAPHY.FONT_SIZE.LARGE}>
              Once reports are deleted, they can no longer be edited or exported in the app. Make
              sure all reports are properly exported and transferred from your device before deleting.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                handleDelete();
              }}
            >
              <ButtonText>Okay</ButtonText>
            </Button>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowAlertDialog(false)
              }}
            >
              <ButtonText>Go back</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </>

    );
};