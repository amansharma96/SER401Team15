import * as SQLite from "expo-sqlite";

import MYNReportObject from "../../components/MYNReportObject";

const CreateMYNQuery = `CREATE TABLE IF NOT EXISTS MYNReport (
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

const CreateCERTQuery = `CREATE TABLE IF NOT EXISTS CERTReport (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  ReportType TEXT,
  StartTime TEXT,
  Lat REAL,
  Long REAL,
  CertName TEXT,
  SqadName TEXT,
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
  EndTime TEXT,
  Notes TEXT
);`;

const CreateHazardQuery = `CREATE TABLE IF NOT EXISTS HazardReport (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  ReportType TEXT,
  StartTime TEXT,
  Lat REAL,
  Long REAL,    
  EndTime TEXT,
  Notes TEXT
);`;

const db = SQLite.openDatabase("CERT.db");

const addRowMYN = (mynReportObject) => {
  const {
    StartTime,
    Lat,
    Long,
    MYNGroupName,
    VisitNumber,
    RoadAccess,    
    StructureType,
    StructureCondition,
    FireHazards,
    PropaneOrGasHazards,
    WaterHazards,
    ElectricalHazards,
    ChemicalHazards,
    RescuedPeopleGreen,
    RescuedPeopleYellow,
    RescuedPeopleRed,
    PeopleTrapped,
    PeopleNeedShelter,
    DeceasedPeople,
    AnyAnimals,
    AnimalStatus,
    AnimalNotes,
    FinishTime,
    Notes,
    StreetAddress,
    City,
    State,
    Zip,
  } = mynReportObject;

  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO MYNReport (StartTime, Lat, Long, GroupName, Visits, RoadAccess, Address, City, State, Zip, Type, Condition, fHazzard, gHazzard, wHazzard, eHazzard, cHazzard, Green, Yellow, Red, Trapped, Shelter, Deceased, Animals, AnimalStatus, AnimalNotes, EndTime, Notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        StartTime,
        Lat,
        Long,
        MYNGroupName,
        VisitNumber,
        RoadAccess,
        StreetAddress,
        City,
        State,
        Zip,
        StructureType,
        StructureCondition,
        FireHazards,
        PropaneOrGasHazards,
        WaterHazards,
        ElectricalHazards,
        ChemicalHazards,
        RescuedPeopleGreen,
        RescuedPeopleYellow,
        RescuedPeopleRed,
        PeopleTrapped,
        PeopleNeedShelter,
        DeceasedPeople,
        AnyAnimals,
        AnimalStatus,
        AnimalNotes,
        FinishTime,
        Notes,
      ],
    );
  });
};

class dbClass {
  constructor() {
    this.db = db;
  }

  createMYNReport() {
    this.db.transaction((tx) => {
      tx.executeSql(CreateMYNQuery);
      tx.executeSql(
        'SELECT name FROM sqlite_master WHERE type="table" AND name="MYNReport";',
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            console.log("MYNReport table exists");
          } else {
            console.log("MYNReport table does not exist");
          }
        },
      );
    });
  }

  addRowMYN(mynReportObject) {
    addRowMYN(mynReportObject);
  }

  createCERTReport() {
    this.db.transaction((tx) => {
      tx.executeSql(CreateCERTQuery);
      tx.executeSql(
        'SELECT name FROM sqlite_master WHERE type="table" AND name="CERTReport";',
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            console.log("CERTReport table exists");
          } else {
            console.log("CERTReport table does not exist");
          }
        },
      );
    });
  }

  addRowCERT() {
    // insert myReportObject into CERTReport table
  }

  createHazardReport() {
    this.db.transaction((tx) => {
      tx.executeSql(CreateHazardQuery);
      tx.executeSql(
        'SELECT name FROM sqlite_master WHERE type="table" AND name="HazardReport";',
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            console.log("HazardReport table exists");
          } else {
            console.log("HazardReport table does not exist");
          }
        },
      );
    });
  }

  addRowHazard() {
    // insert myReportObject into HazardReport table
  }
}

export { MYNReportObject, dbClass };
