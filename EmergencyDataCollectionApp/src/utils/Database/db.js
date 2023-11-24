import * as SQLite from "expo-sqlite";

import MYNReportObject from "../../components/MYNReportObject";

/**
 * SQL query for creating the MYNReport table.
 */
const CreateMYNQuery = `CREATE TABLE IF NOT EXISTS MYNReport (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  ReportType TEXT,
  StartTime TEXT,
  Lat REAL,
  Long REAL,
  Accuracy REAL,
  GroupName TEXT,
  Visits INTEGER,
  RoadAccess TEXT,
  LocationAddress TEXT,
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
  DeceasedPeopleLocation TEXT,
  Animals TEXT,
  AnimalStatus TEXT,
  AnimalNotes TEXT,
  EndTime TEXT,
  Notes TEXT
);`;

/**
 * SQL query for creating the CERTReport table.
 */
const CreateCERTQuery = `CREATE TABLE IF NOT EXISTS CERTReport (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  ReportType TEXT,
  StartTime TEXT,
  Lat REAL,
  Long REAL,
  Accuracy REAL,
  CertName TEXT,
  SqadName TEXT,
  Visits INTEGER,
  RoadAccess TEXT,
  LocationAddress TEXT,
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
  DeceasedPeopleLocation TEXT,
  EndTime TEXT,
  Notes TEXT
);`;

/**
 * SQL query for creating the HazardReport table.
 */
const CreateHazardQuery = `CREATE TABLE IF NOT EXISTS HazardReport (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  ReportType TEXT,
  StartTime TEXT,
  Lat REAL,
  Long REAL,
  Accuracy REAL, 
  EndTime TEXT,
  Notes TEXT
);`;

/**
 * SQLite database instance.
 */
const db = SQLite.openDatabase("CERT.db");

/**
 * Function to add a MYN report to the MYNReport table.
 * @param {object} mynReportObject - The MYN report object to be added.
 * @throws Will log errors to the console if insertion fails.
 */
const addRowMYN = (mynReportObject) => {
  console.log("Adding MYN Report:");
  console.log(mynReportObject);

  const {
    StartTime,
    Lat,
    Long,
    Accuracy,
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
    DeceasedPeopleLocation,
    AnyAnimals,
    AnimalStatus,
    AnimalNotes,
    FinishTime,
    Notes,
    LocationAddress,
    StreetAddress,
    City,
    State,
    Zip,
  } = mynReportObject;

  // Convert Date objects to string
  const formattedFinishTime = FinishTime.toISOString();
  const formattedStartTime = StartTime.toISOString();

  // Convert array to string for AnimalStatus
  const formattedAnimalStatus = Array.isArray(AnimalStatus)
    ? AnimalStatus.join(",")
    : AnimalStatus;

  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO MYNReport (StartTime, Lat, Long,Accuracy, GroupName, Visits, RoadAccess, LocationAddress, Address, City, State, Zip, Type, Condition, fHazzard, gHazzard, wHazzard, eHazzard, cHazzard, Green, Yellow, Red, Trapped, Shelter, Deceased, DeceasedPeopleLocation, Animals, AnimalStatus, AnimalNotes, EndTime, Notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)",
      [
        formattedStartTime,
        Lat,
        Long,
        Accuracy,
        MYNGroupName,
        VisitNumber,
        RoadAccess,
        LocationAddress,
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
        DeceasedPeopleLocation,
        AnyAnimals,
        formattedAnimalStatus,
        AnimalNotes,
        formattedFinishTime,
        Notes,
      ],
      (_, results) => {
        if (results.insertId) {
          console.log("Insertion successful, ID:", results.insertId);
        } else {
          console.log("Insertion failed");
          console.error(results.message); // Log the error message
        }
      },
      (_, error) => {
        console.error("Transaction error:", error);
      },
    );
  });
};
/**
 * Class representing the SQLite database operations.
 * @class
 */
class dbClass {
  /**
   * Create a database instance and initialize MYN, CERT, and Hazard tables.
   * @constructor
   */
  constructor() {
    this.db = db;
    this.createMYNReport();
    this.createCERTReport();
    this.createHazardReport();
  }
  /**
   * Create the MYNReport table.
   */
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
  /**
   * Add a MYN report to the MYNReport table.
   * @param {object} mynReportObject - The MYN report object to be added.
   */
  addRowMYN(mynReportObject) {
    addRowMYN(mynReportObject);
  }
  /**
   * Retrieve all MYN reports from the MYNReport table.
   * @param {function} callback - Callback function to handle the retrieved reports.
   */
  getMYNReport(callback) {
    this.db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM MYNReport ORDER BY ID",
        [],
        (tx, results) => {
          const mynReports = [];
          const len = results.rows.length;

          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);

            const mynReportObject = new MYNReportObject();
            mynReportObject.dbID = row.ID;
            mynReportObject.StartTime = row.StartTime;
            mynReportObject.Lat = row.Lat;
            mynReportObject.Long = row.Long;
            mynReportObject.Accuracy = row.Accuracy;
            mynReportObject.MYNGroupName = row.GroupName;
            mynReportObject.VisitNumber = row.Visits;
            mynReportObject.RoadAccess = row.RoadAccess;
            mynReportObject.LocationAddress = row.LocationAddress;
            mynReportObject.StreetAddress = row.Address;
            mynReportObject.City = row.City;
            mynReportObject.State = row.State;
            mynReportObject.Zip = row.Zip;
            mynReportObject.StructureType = row.Type;
            mynReportObject.StructureCondition = row.Condition;
            mynReportObject.FireHazards = row.fHazzard;
            mynReportObject.PropaneOrGasHazards = row.gHazzard;
            mynReportObject.WaterHazards = row.wHazzard;
            mynReportObject.ElectricalHazards = row.eHazzard;
            mynReportObject.ChemicalHazards = row.cHazzard;
            mynReportObject.RescuedPeopleGreen = row.Green;
            mynReportObject.RescuedPeopleYellow = row.Yellow;
            mynReportObject.RescuedPeopleRed = row.Red;
            mynReportObject.PeopleTrapped = row.Trapped;
            mynReportObject.PeopleNeedShelter = row.Shelter;
            mynReportObject.DeceasedPeople = row.Deceased;
            mynReportObject.DeceasedPeopleLocation = row.DeceasedPeopleLocation;
            mynReportObject.AnyAnimals = row.Animals;
            mynReportObject.AnimalStatus = row.AnimalStatus;
            mynReportObject.AnimalNotes = row.AnimalNotes;
            mynReportObject.FinishTime = row.EndTime;
            mynReportObject.Notes = row.Notes;
            mynReports.push(mynReportObject);
          }
          callback(mynReports);
        },
      );
    });
  }
  /**
   * Clear all data in the MYNReport table.
   */
  clearMYNTable() {
    this.db.transaction((tx) => {
      tx.executeSql("DELETE Table MYNReport");
    });
  }
  /**
   * Clear specific rows in the MYNReport table by their IDs.
   * @param {Array<number>} idsToDelete - Array of IDs to be deleted.
   */
  clearMYNTableByID(idsToDelete) {
    if (!idsToDelete || idsToDelete.length === 0) {
      return;
    }
    const placeholders = idsToDelete.map(() => "?").join(",");
    const deleteQuery = `DELETE FROM MYNReport WHERE ID IN (${placeholders})`;
    this.db.transaction((tx) => {
      tx.executeSql(deleteQuery, idsToDelete, (tx, results) => {
        console.log(results);
      });
    });
  }
  /**
   * Create the CERTReport table.
   */
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
  /**
   * Place holder for now
   */
  addRowCERT() {
    // insert myReportObject into CERTReport table
  }
  /**
   * Create the HazardReport table.
   */
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
  /**
   * Place holder for now
   */
  addRowHazard() {
    // insert myReportObject into HazardReport table
  }

  /**Dev function only */
  resetDatabase() {
    this.db.transaction((tx) => {
      // Drop existing tables
      tx.executeSql("DROP TABLE IF EXISTS MYNReport;");
      tx.executeSql("DROP TABLE IF EXISTS CERTReport;");
      tx.executeSql("DROP TABLE IF EXISTS HazardReport;");

      // Recreate MYNReport table
      tx.executeSql(CreateMYNQuery);

      // Recreate CERTReport table
      tx.executeSql(CreateCERTQuery);

      // Recreate HazardReport table
      tx.executeSql(CreateHazardQuery);

      console.log("Database reset successful");
    });
  }
  printAllMYNEntries() {
    this.db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM MYNReport ORDER BY ID",
        [],
        (tx, results) => {
          const len = results.rows.length;

          if (len > 0) {
            console.log("Printing all MYNReport entries:");
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              console.log(`Entry ID: ${row.ID}`);
              console.log("StartTime:", row.StartTime);
              console.log("---------------------------");
            }
          } else {
            console.log("No entries found in MYNReport");
          }
        },
      );
    });
  }
}

export { MYNReportObject, dbClass };
