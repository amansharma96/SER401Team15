import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import LineSeparator from "../../../../components/LineSeparator/LineSeparator";
import { removeReportById } from "../../../../utils/Database/OfflineSQLiteDB";
import CertReview from "../ReportReviewPages/CertReview";
import HazardReview from "../ReportReviewPages/HazardReview";
import MYNReview from "../ReportReviewPages/MYNReview";
const ReportDetailsModal = ({ report, visible, onClose }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    removeReportById(report.report_id, (success, error) => {
      if (success) {
        setIsDeleted(true);
      } else {
        console.error("Error deleting report:", error);
      }
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="times" size={20} color="#000" />
        </TouchableOpacity>
        {isDeleted ? (
          <Text style={styles.deletedText}>Deleted successfully</Text>
        ) : (
          <ScrollView style={styles.Report}>
            <Text style={styles.modalText}>Report Details</Text>
            <LineSeparator />
            {report &&
              (report.report_type === "CERT" ? (
                <CertReview report={report} />
              ) : report.report_type === "Hazard" ? (
                <HazardReview report={report} />
              ) : report.report_type === "MYN" ? (
                <MYNReview report={report} />
              ) : (
                <>
                  <Text style={styles.heading}>error</Text>
                </>
              ))}
          </ScrollView>
        )}
        {!isDeleted && (
          <TouchableOpacity style={styles.DeleteButton} onPress={handleDelete}>
            <Text style={styles.delBtn}>Delete report</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    margin: 0,

    backgroundColor: "white",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "left",
  },
  deletedText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
    padding: 10,
    margin: 10,
    zIndex: 1,
  },
  Report: {
    width: "100%",
    marginTop: 40,
  },
  DeleteButton: {
    backgroundColor: "#FFCC00",
    padding: 10,
    borderRadius: 5,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  delBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ReportDetailsModal;
