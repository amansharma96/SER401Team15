import React, { createContext, useState } from "react";

import {
  addReport,
  queryReportsByType,
} from "../../utils/Database/OfflineSQLiteDB";
const HazardReportContext = createContext();

export const HazardReportProvider = ({ children }) => {
  const [hazardReport, setHazardReport] = useState({
    ReportType: "",
    StartTime: new Date().toLocaleString(),
    Lat: null,
    Long: null,
    Accuracy: null,
    Picture: null,
    EndTime: "",
    Notes: "",
  });
  const [isUpdateMode, setUpdateMode] = useState(false);
  const [hazardReports, setHazardReports] = useState([hazardReport]);

  const saveHazardReport = (data) => {
    setHazardReport(data);
    setHazardReports((prevReports) => [...prevReports, data]);
  };
  const saveHazardReportToDB = () => {
    const data = {
      hazardPicture: {
        number: hazardReport.Picture ? 1 : 0, // update this as needed
      },
      info: {
        reportType: "HAZARD",
        hash: 0, // update this as needed
        reportID: "", // update this as needed
        groupName: "", // update this as needed
        squadName: "", // update this as needed
        startTime: hazardReport.StartTime,
        endTime: hazardReport.EndTime,
        numberOfVisit: "", // update this as needed
        roadCondition: "", // update this as needed
        hazardType: "", // update this as needed
      },
      location: {
        structureType: "", // update this as needed
        structureCondition: "", // update this as needed
        address: "", // update this as needed
        city: "", // update this as needed
        state: "", // update this as needed
        zip: "", // update this as needed
        latitude: hazardReport.Lat,
        longitude: hazardReport.Long,
        accuracy: hazardReport.Accuracy,
      },
      hazard: {
        // update these fields as needed
      },
      people: {
        // update these fields as needed
      },
      note: {
        NotesTextArea: hazardReport.Notes,
      },
    };

    addReport("Hazard", data, (success, error) => {
      if (success) {
        console.log("Hazard report added successfully");
      } else {
        console.error("Error adding hazard report", error);
      }
    });
  };
  const getAllHazardReportsFromDB = () => {
    queryReportsByType("Hazard", setHazardReports);
  };
  const updateHazardReportInDB = (id, data) => {};

  return (
    <HazardReportContext.Provider
      value={{
        hazardReport,
        hazardReports,
        saveHazardReport,
        saveHazardReportToDB,
        getAllHazardReportsFromDB,
        updateHazardReportInDB,
        isUpdateMode,
        setUpdateMode,
      }}
    >
      {children}
    </HazardReportContext.Provider>
  );
};

export default HazardReportContext;
