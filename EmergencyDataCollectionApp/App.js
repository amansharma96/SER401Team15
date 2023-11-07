import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { IDProvider } from './src/components/IDContext';
import MYNReportNavigation from './src/navigation/MYNNavigation/MYNReportNavigation';

export default function App() {
  const db = SQLite.openDatabase('CERT.db');
  const createTableQuery = `CREATE TABLE IF NOT EXISTS Report (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ReportType TEXT,
    StartTime TEXT,
    Lat REAL,
    Long REAL,
    GroupName TEXT,
    Visits INTEGER,
    RoadAccess TEXT,
    Address TEXT,
    City TEXT,
    State TEXT,
    Zip INTEGER,
    Type TEXT,
    Condition TEXT,
    fHazzard TEXT,
    gHazzard TEXT,
    wHazzard TEXT,
    eHazzard TEXT,
    cHazzard TEXT,
    Green INTEGER,
    Yellow INTEGER,
    Red INTEGER,
    Trapped INTEGER,
    Shelter INTEGER,
    Deceased INTEGER,
    Animals TEXT,
    AnimalStatus TEXT,
    AnimalNotes TEXT,
    EndTime TEXT,
    Notes TEXT
  );`;

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(createTableQuery);
      tx.executeSql('SELECT name FROM sqlite_master WHERE type="table" AND name="Report";', [], (tx, results) => {
        if (results.rows.length > 0) {
          console.log('Report table exists');
        } else {
          console.log('Report table does not exist');
        }
      });
    });
  }, []);

  return (
    <IDProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <MYNReportNavigation />
        </View>
      </NavigationContainer>
    </IDProvider>
  );
}
