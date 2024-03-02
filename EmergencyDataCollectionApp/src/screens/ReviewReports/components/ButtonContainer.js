import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";

import styles from "../styles";

export const ButtonContainer = (reports) => {

    const handleExport = () => {

    }

    const handleDelete = () => {

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