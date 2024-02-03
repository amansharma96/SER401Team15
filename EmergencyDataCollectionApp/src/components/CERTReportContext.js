import React, { createContext, useContext, useRef } from "react";

import CERTReportObject from "./CERTReportObject";

const CERTReportContext = createContext();

global.CERTpage1Complete = false;
global.CERTpage2Complete = false;
global.CERTpage3Complete = false;
global.CERTpage4Complete = false;
global.CERTpage5Complete = false;

global.CERTpage1Active = false;
global.CERTpage2Active = false;
global.CERTpage3Active = false;
global.CERTpage4Active = false;
global.CERTpage5Active = false;

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
