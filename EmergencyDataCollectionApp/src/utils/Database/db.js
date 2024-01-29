import * as SQLite from "expo-sqlite";

import reportObject from "../../components/ReportObject";

/**
 * SQL query for creating the MYNReport table.
 */
const CreateQuery = `CREATE TABLE IF NOT EXISTS Report (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  ReportType TEXT,
  StartTime TEXT,
  GroupName TEXT,
  SquadName INTEGER,
  Visits INTEGER,
  RoadAccess INTEGER,
  Address TEXT,
  City TEXT,
  State TEXT,
  Zip INTEGER,
  CERTSearched TEXT,
  Lat REAL,
  Long REAL,
  ALT REAL,
  Accuracy REAL,
  sType INTEGER,
  sCondition INTEGER,
  fHazzard INTEGER,
  gHazzard INTEGER,
  wHazzard INTEGER,
  eHazzard INTEGER,
  cHazzard INTEGER,
  Green INTEGER,
  Yellow INTEGER,
  Red INTEGER,
  Deceased INTEGER,
  DeceasedPeopleLocation TEXT,
  Trapped INTEGER,
  Shelter INTEGER,
  otherAid INTEGER,
  otherShelter INTEGER,
  Animals TEXT,
  AnimalStatus TEXT,
  AnimalNotes TEXT,
  HazardType INTEGER,
  EndTime TEXT,
  Notes TEXT
);`;

/**
 * SQLite database instance.
 */
const db = SQLite.openDatabase("CERT.db");

  /**
 * Function to add a report to the Report table.
 * @param {object} reportObject - The report object to be added.
 * @throws Will log errors to the console if insertion fails.
 */
  const addRowReport = (reportObject) => {
    console.log("Adding Report:");
    console.log(reportObject);
  
    // FIX: Enter the fields for all reports (WIP)
    const {
      StartTime,
      Lat,
      Long,
      Accuracy,
      GroupName,
      SquadName,
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
    } = reportObject;


  // Convert Date objects to string
  const formattedFinishTime = FinishTime.toISOString();
  const formattedStartTime = StartTime.toISOString();

  // Convert array to string for AnimalStatus
  const formattedAnimalStatus = Array.isArray(AnimalStatus)
    ? AnimalStatus.join(",")
    : AnimalStatus;

  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Report (StartTime, Lat, Long,Accuracy, GroupName, Visits, RoadAccess, LocationAddress, Address, City, State, Zip, Type, Condition, fHazzard, gHazzard, wHazzard, eHazzard, cHazzard, Green, Yellow, Red, Trapped, Shelter, Deceased, DeceasedPeopleLocation, Animals, AnimalStatus, AnimalNotes, EndTime, Notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)",
      [
        // FIX: Enter the fields for all reports (WIP)
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
    this.createReport();
  }
  
  // ##################### START GENERIC REPORT #####################

  /**
   * Create the Report table.
   */
  createReport() {
    this.db.transaction((tx) => {
      tx.executeSql(CreateQuery);
      tx.executeSql(
        'SELECT name FROM sqlite_master WHERE type="table" AND name="Report";',
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            console.log("Report table exists");
          } else {
            console.log("Report table does not exist");
          }
        },
      );
    });
  }

  /**
   * Place holder for now
   */
  addRow() {
    addRow(reportObject);
  }

  /**
   * Retrieve all MYN reports from the MYNReport table.
   * @param {function} callback - Callback function to handle the retrieved reports.
   */
  getMYNReport(callback) {
    this.db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Report ORDER BY ID",
        [],
        (tx, results) => {
          const reports = [];
          const len = results.rows.length;

          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);

            const reportObject = new reportObject();
            // FIX: Enter the fields for all reports (WIP)
            reportObject.dbID = row.ID;
            reportObject.StartTime = row.StartTime;
            reportObject.Lat = row.Lat;
            reportObject.Long = row.Long;
            reportObject.Accuracy = row.Accuracy;
            reportObject.MYNGroupName = row.GroupName;
            reportObject.VisitNumber = row.Visits;
            reportObject.RoadAccess = row.RoadAccess;
            reportObject.LocationAddress = row.LocationAddress;
            reportObject.StreetAddress = row.Address;
            reportObject.City = row.City;
            reportObject.State = row.State;
            reportObject.Zip = row.Zip;
            reportObject.StructureType = row.Type;
            reportObject.StructureCondition = row.Condition;
            reportObject.FireHazards = row.fHazzard;
            reportObject.PropaneOrGasHazards = row.gHazzard;
            reportObject.WaterHazards = row.wHazzard;
            reportObject.ElectricalHazards = row.eHazzard;
            reportObject.ChemicalHazards = row.cHazzard;
            reportObject.RescuedPeopleGreen = row.Green;
            reportObject.RescuedPeopleYellow = row.Yellow;
            reportObject.RescuedPeopleRed = row.Red;
            reportObject.PeopleTrapped = row.Trapped;
            reportObject.PeopleNeedShelter = row.Shelter;
            reportObject.DeceasedPeople = row.Deceased;
            reportObject.DeceasedPeopleLocation = row.DeceasedPeopleLocation;
            reportObject.AnyAnimals = row.Animals;
            reportObject.AnimalStatus = row.AnimalStatus;
            reportObject.AnimalNotes = row.AnimalNotes;
            reportObject.FinishTime = row.EndTime;
            reportObject.Notes = row.Notes;
            reports.push(reportObject);
          }
          callback(reports);
        },
      );
    });
  }

  /**
   * Clear all data in the Report table.
   */
  clearTable() {
    this.db.transaction((tx) => {
      tx.executeSql("DELETE Table Report");
    });
  }

  /**
   * Clear specific rows in the Report table by their IDs.
   * @param {Array<number>} idsToDelete - Array of IDs to be deleted.
   */
  clearTableByID(idsToDelete) {
    if (!idsToDelete || idsToDelete.length === 0) {
      return;
    }
    const placeholders = idsToDelete.map(() => "?").join(",");
    const deleteQuery = `DELETE FROM Report WHERE ID IN (${placeholders})`;
    this.db.transaction((tx) => {
      tx.executeSql(deleteQuery, idsToDelete, (tx, results) => {
        console.log(results);
      });
    });
  }

  // ##################### END GENERIC REPORT #####################

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
  printAllEntries() {
    this.db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Report ORDER BY ID",
        [],
        (tx, results) => {
          const len = results.rows.length;

          if (len > 0) {
            console.log("Printing all Report entries:");
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              console.log(`Entry ID: ${row.ID}`);
              console.log("StartTime:", row.StartTime);
              console.log("---------------------------");
            }
          } else {
            console.log("No entries found in Report");
          }
        },
      );
    });
  }
}

export { reportObject, dbClass };
