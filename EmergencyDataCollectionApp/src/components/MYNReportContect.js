import React, { createContext, useContext, useRef } from "react";

import MYNReportObject from "./MYNReportObject";

const MYNReportContext = createContext();
global.MYNpage1Complete = false;
global.MYNpage2Complete = false;
global.MYNpage3Complete = false;
global.MYNpage4Complete = false;
global.MYNpage5Complete = false;
global.MYNpage6Complete = false;
global.MYNpage7Complete = true;

export const MYNReportContextProvider = ({ children }) => {
  // Use useRef to ensure that the same object instance is preserved across renders
  const mynReportObjectRef = useRef();

  if (!mynReportObjectRef.current) {
    mynReportObjectRef.current = new MYNReportObject();
  }

  return (
    <MYNReportContext.Provider value={mynReportObjectRef.current}>
      {children}
    </MYNReportContext.Provider>
  );
};

export const useMYNReportContext = () => {
  return useContext(MYNReportContext);
};
