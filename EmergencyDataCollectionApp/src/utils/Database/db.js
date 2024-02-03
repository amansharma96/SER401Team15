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
  Visits TEXT,
  RoadAccess TEXT,
  LocationAddress TEXT,
  Address TEXT,
  City TEXT,
  State TEXT,
  Zip TEXT,
  Type TEXT,
  Condition TEXT,
  fHazzard TEXT,
  gHazzard TEXT,
  wHazzard TEXT,
  eHazzard TEXT,
  cHazzard TEXT,
  Green TEXT,
  Yellow TEXT,
  Red TEXT,
  Trapped TEXT,
  Shelter TEXT,
  Deceased TEXT,
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
        formattedAnimalStatus,
        AnimalNotes,
        FinishTime,
        Notes,
        LocationAddress,
        StreetAddress,
        City,
        State,
        Zip,
        formattedFinishTime,
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
   * Retrieve all MYN reports from the MYNReport table.
   * @param {function} callback - Callback function to handle the retrieved reports.
   */
  getReport(callback) {
    this.db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Report ORDER BY ID", [], (tx, results) => {
        const reports = [];
        const len = results.rows.length;

        for (let i = 0; i < len; i++) {
          const row = results.rows.item(i);
          const ReportObject = new ReportObject();
          ReportObject.dbID = row.ID;
          ReportObject.StartTime = new Date(row.StartTime);
          ReportObject.Lat = row.Lat;
          ReportObject.Long = row.Long;
          ReportObject.Accuracy = row.Accuracy;
          ReportObject.MYNGroupName = row.GroupName;
          ReportObject.VisitNumber = row.Visits;
          ReportObject.RoadAccess = row.RoadAccess;
          ReportObject.LocationAddress = row.LocationAddress;
          ReportObject.StreetAddress = row.Address;
          ReportObject.City = row.City;
          ReportObject.State = row.State;
          ReportObject.Zip = row.Zip;
          ReportObject.StructureType = row.Type;
          ReportObject.StructureCondition = row.Condition;
          ReportObject.FireHazards = row.fHazzard;
          ReportObject.PropaneOrGasHazards = row.gHazzard;
          ReportObject.WaterHazards = row.wHazzard;
          ReportObject.ElectricalHazards = row.eHazzard;
          ReportObject.ChemicalHazards = row.cHazzard;
          ReportObject.RescuedPeopleGreen = row.Green;
          ReportObject.RescuedPeopleYellow = row.Yellow;
          ReportObject.RescuedPeopleRed = row.Red;
          ReportObject.PeopleTrapped = row.Trapped;
          ReportObject.PeopleNeedShelter = row.Shelter;
          ReportObject.DeceasedPeople = row.Deceased;
          ReportObject.DeceasedPeopleLocation = row.DeceasedPeopleLocation;
          ReportObject.AnyAnimals = row.Animals;
          ReportObject.AnimalStatus = [];
          ReportObject.AnimalStatus.push(row.AnimalStatus);
          ReportObject.AnimalNotes = row.AnimalNotes;
          ReportObject.FinishTime = new Date(row.EndTime);
          ReportObject.Notes = row.Notes;
          reports.push(ReportObject);
        }
        callback(reports);
      });
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
      tx.executeSql("DROP TABLE IF EXISTS Report;");

      // Recreate MYNReport table
      tx.executeSql(CreateQuery);

      console.log("Database reset successful");
    });
  }
  printAllEntries() {
    this.db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Report ORDER BY ID", [], (tx, results) => {
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
      });
    });
  }
}

export { reportObject, dbClass };
