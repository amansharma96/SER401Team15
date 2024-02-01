import React, { createContext, useContext, useRef } from "react";

import MYNReportObject from "./MYNReportObject";

const MYNReportContext = createContext();

export const MYNReportContextProvider = ({ initial, children }) => {
  const mynReportObjectRef = useRef(initial);

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
