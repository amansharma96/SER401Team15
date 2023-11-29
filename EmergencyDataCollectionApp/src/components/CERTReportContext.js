import React, { createContext, useContext, useRef } from "react";

import CERTReportObject from "./CERTReportObject";

const CERTReportContext = createContext();

global.CERTpage1Complete = false;
global.CERTpage2Complete = false;
global.CERTpage3Complete = false;
global.CERTpage4Complete = false;
global.CERTpage5Complete = true;

export const CERTReportContextProvider = ({ children }) => {
  // Use useRef to ensure that the same object instance is preserved across renders
  const certReportObjectRef = useRef();

  if (!certReportObjectRef.current) {
    certReportObjectRef.current = new CERTReportObject();
  }

  return (
    <CERTReportContext.Provider value={certReportObjectRef.current}>
      {children}
    </CERTReportContext.Provider>
  );
};

export const useCERTReportContext = () => {
  return useContext(CERTReportContext);
};
