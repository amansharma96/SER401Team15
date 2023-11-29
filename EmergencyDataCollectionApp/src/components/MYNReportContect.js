import React, { createContext, useContext, useState } from "react";

import MYNReportObject from "./MYNReportObject";

const MYNReportContext = createContext();

export const MYNReportContextProvider = ({ children }) => {
  const [mynReportObject, setMYNReportObject] = useState(new MYNReportObject());

  return (
    <MYNReportContext.Provider value={{ mynReportObject, setMYNReportObject }}>
      {children}
    </MYNReportContext.Provider>
  );
};

export const useMYNReportContext = () => {
  const context = useContext(MYNReportContext);
  if (!context) {
    throw new Error(
      "useMYNReportContext must be used within a MYNReportContextProvider",
    );
  }
  return context;
};
