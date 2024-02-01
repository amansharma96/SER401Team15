/**
 * @module ExportButton
 * @params {} reports
 * @returns {}
 */
import React from "react";
import * as FileSystem from 'expo-file-system';

import { dbClass } from "../../utils/Database/db";

const folderName = FileSystem.documentDirectory + 'changeMe/';

async function checkFolder() {
  const folderInfo = await FileSystem.getInfoAsync(folderName);
  if (!folderInfo.exists) {
    console.log("Creating folder...");
    await FileSystem.makeDirectoryAsync(folderName, { intermediates: true });
  }
}

/**
 * 
 * @param {MYNReportObject} reports 
 */
async function deleteReports({ reports }) {
  const db = new dbClass();
  const ids = [];
  reports.array.forEach(el => {
    ids.push(el.dbID);
  });
  db.clearMYNTableByID(ids);

  // need to determine naming system for csv files to know which ones to delete
  await FileSystem.deleteAsync(folderName);
}

export const ExportButton = ({ reports }) => {
  // TODO create folder with id and date
  FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'reports', {});
  reports.array.forEach(element => {
    // TODO append to csv file (Cody?)
  });

  // will need to talk to sponsor about how they want to handle file exporting.
  // it is not possible to write to directories (devices) outside of the app's
  // directories. This is a security measure that can not be circumvented.
}