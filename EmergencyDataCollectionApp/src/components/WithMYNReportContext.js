// WithMYNReportContext.js
import React from "react";

import { MYNReportContextProvider } from "./MYNReportContect";

const WithMYNReportContext = ({ children }) => {
  return <MYNReportContextProvider>{children}</MYNReportContextProvider>;
};

export default WithMYNReportContext;
