import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

function openDatabase() {
  if (Platform.OS === "web") {
    alert("Expo SQLite is not supported on web!");
    return {
      transaction: () => ({
        executeSql: () => {},
      }),
    };
  }

  return SQLite.openDatabase("saved_reports.db");
}

const db = openDatabase();

export function setupDatabase(callback) {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "create table if not exists reports (report_id integer primary key not null, report_type text, report_data text);",
        [],
        (_, result) => {
          console.log("Table created", result);
          if (callback) callback();
        },
        (t, error) => {
          console.log("Error creating table", error);
          return true;
        },
      );
    },
    (error) => {
      console.log("Transaction error", error);
    },
    () => {
      console.log("Transaction success");
    },
  );
}

export function addReport(reportType, data) {
  if (!reportType || !data) {
    console.log("Report type or data is empty");
    return false;
  }

  db.transaction(
    (tx) => {
      tx.executeSql(
        "insert into reports (report_type, report_data) values (?, ?)",
        [reportType, JSON.stringify(data)],
      );
    },
    (error) => console.log("Error inserting report", error),
    () => console.log("Report added successfully"),
  );
}

export function queryAllReports(setReports) {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from reports;",
      [],
      (_, { rows: { _array } }) =>
        setReports(
          _array.map((row) => ({ ...row, data: JSON.parse(row.data) })),
        ),
      (t, error) => console.log("Error querying reports", error),
    );
  });
}

export function queryReportById(reportId, setReport) {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from reports where report_id = ?;",
      [reportId],
      (_, { rows: { _array } }) =>
        setReport(
          _array.map((row) => ({ ...row, data: JSON.parse(row.data) })),
        ),
      (t, error) => console.log("Error querying report", error),
    );
  });
}

export function queryReportsByType(reportType, setReports) {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from reports where report_type = ?;",
      [reportType],
      (_, { rows: { _array } }) =>
        setReports(
          _array.map((row) => {
            try {
              const parsedData = JSON.parse(row.report_data);
              return { ...row, report_data: parsedData };
            } catch (error) {
              console.error("Error parsing JSON for row", row.report_id, error);
              return { ...row, report_data: null };
            }
          }),
        ),
      (t, error) => console.log("Error querying reports", error),
    );
  });
}

export function logAllReports() {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from reports;",
      [],
      (_, result) => {
        console.log("Reports in database:", result.rows._array);
      },
      (t, error) => {
        console.error("Error querying reports", error);
      },
    );
  });
}

export function logAllReportsByType(reportType) {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from reports where report_type = ?;",
      [reportType],
      (_, result) => {
        console.log(
          `Reports of type ${reportType} in database:`,
          result.rows._array,
        );
      },
      (t, error) => {
        console.error("Error querying reports", error);
      },
    );
  });
}

export function dropTable() {
  db.transaction(
    (tx) => {
      tx.executeSql("drop table reports;", []);
    },
    (error) => console.log("Error dropping table", error),
    () => console.log("Database reset successful"),
  );
}
