/**
 * @module ExportButton
 * @param {Object[]} reports report objects that are checked on saved reports screen
 * @returns {JSX.Element} rendered component
 */
import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";
import * as FileSystem from 'expo-file-system';
import * as Device from 'expo-device';

import { dbClass } from "../../utils/Database/db";
import styles from "./reportStyles";

const folderName = FileSystem.documentDirectory + 'EmergencyAppReports/';

async function checkFolder() {
  const folderInfo = await FileSystem.getInfoAsync(folderName);
  if (!folderInfo.exists) {
    console.log("Creating folder...");
    await FileSystem.makeDirectoryAsync(folderName, { intermediates: true });
  }
}

/**
 * 
 * @param {MYNReportObject[]} reports 
 */
async function deleteReports({ reports }) {
  // needs to be changed to account for new db structure
  const db = new dbClass();
  const ids = [];
  reports.array.forEach(el => {
    ids.push(el.dbID);
  });
  db.clearMYNTableByID(ids);

  await FileSystem.deleteAsync(folderName);
}

/**
 * 
 * @param {string} content content to be written to file in string format 
 */
async function writeReport({content}) {
  try {
    const fileName = 'dsfnsdkjfn.csv';
    await FileSystem.writeAsStringAsync(folderName + fileName, content, {});

  } catch (e) {
    console.log('Error creating report file');
  }
  
}

export const ExportButton = ({ reports }) => {
  const handleExport = () => {
    checkFolder();
    reports.array.forEach(el => {
      // -----> el.formatCsv();
      writeReport(el);
    });
    deleteReports(reports);
  }

  return (
      <TouchableOpacity
        onPress={handleExport}
        style={styles.selectAllButton}
      >
        <Text style={styles.selectAllButtonText}>
          Export selected reports
        </Text>
      </TouchableOpacity>
  )
}

export default ExportButton;