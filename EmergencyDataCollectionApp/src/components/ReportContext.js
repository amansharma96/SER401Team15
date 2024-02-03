import React, { createContext, useContext, useRef } from "react";

import ReportObject from "./ReportObject";

const ReportContext = createContext();

global.CERTpage1Complete = false;
global.CERTpage2Complete = false;
global.CERTpage3Complete = false;
global.CERTpage4Complete = false;
global.CERTpage5Complete = true;

global.CERTpage1Active = false;
global.CERTpage2Active = false;
global.CERTpage3Active = false;
global.CERTpage4Active = false;
global.CERTpage5Active = false;

global.MYNpage1Complete = false;
global.MYNpage2Complete = false;
global.MYNpage3Complete = false;
global.MYNpage4Complete = false;
global.MYNpage5Complete = false;
global.MYNpage6Complete = false;
global.MYNpage7Complete = false;

export const ReportContextProvider = ({ initial, children }) => {
  const ReportObjectRef = useRef(initial);

  if (!ReportObjectRef.current) {
    ReportObjectRef.current = new ReportObject();
  }

  return (
    <ReportContext.Provider value={ReportObjectRef.current}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => {
  return useContext(ReportContext);
};
