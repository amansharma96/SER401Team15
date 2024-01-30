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

export const MYNReportContextProvider = ({ initial, children }) => {

  const mynReportObjectRef = useRef(initial);

  if (!mynReportObjectRef.current) {
    console.log("CONTEXT DIDN'T WORK ! !")
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
