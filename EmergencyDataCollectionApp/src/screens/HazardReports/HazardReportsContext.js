// HazardReportContext.js
import React, { createContext, useState } from 'react';

const HazardReportContext = createContext();

export const HazardReportProvider = ({ children }) => {
  const [hazardReport, setHazardReport] = useState({
    ReportType: '',
    StartTime: new Date().toLocaleString(),
    Lat: null,
    Long: null,
    Accuracy: null,
    EndTime: '',
    Notes: '',
  });

  const saveHazardReport = (data) => {
    setHazardReport(data);
  };

  return (
    <HazardReportContext.Provider value={{ hazardReport, saveHazardReport }}>
      {children}
    </HazardReportContext.Provider>
  );
};

export default HazardReportContext;
