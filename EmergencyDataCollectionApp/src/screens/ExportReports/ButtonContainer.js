import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";

import { queryReportById } from "../../utils/Database/OfflineSQLiteDB";
import exportToCSV from "../../utils/Database/export";
import styles from "../ViewSavedReports/styles";

export const ButtonContainer = ({reports}) => {
    const navigation = useNavigation();
    function compileReports(callback) {
        const compiledReports = [];
        for (var k in reports) {
            if(reports[k.toString()]) { 
            queryReportById(k, (report) => {
                    console.log(JSON.stringify(report, null, 2))
                    compiledReports.push(report);
                });
            }
            
        }
        callback(compiledReports);
    }
    

    const handleExport = () => {
        
        console.log("reports being exported: " + JSON.stringify(reports, null, 2));
        // compileReports(exportToCSV);
        navigation.navigate("MainScreen");
    }

    const handleDelete = () => {
        
        console.log("reports being deleted: " + JSON.stringify(reports, null, 2));
        compileReports(console.log);
        // console.log("reports being deleted: " + 1);
        navigation.navigate("MainScreen");
    }

    return (
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
                onPress={handleDelete}
                style={styles.deleteButton}
            >
                <Text style={styles.selectAllButtonText}>
                    {"Delete"}
                </Text>
            </TouchableOpacity>
        </View>

    );
};