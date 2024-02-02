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
            const mynReportObject = new MYNReportObject();
            mynReportObject.dbID = row.ID;
            mynReportObject.StartTime = new Date(row.StartTime);
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
            mynReportObject.AnimalStatus = [];
            mynReportObject.AnimalStatus.push(row.AnimalStatus);
            mynReportObject.AnimalNotes = row.AnimalNotes;
            mynReportObject.FinishTime = new Date(row.EndTime);
            mynReportObject.Notes = row.Notes;
            mynReports.push(mynReportObject);
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
