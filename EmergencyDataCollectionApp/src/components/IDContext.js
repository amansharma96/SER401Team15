// IDContext.js
import React, { createContext, useState } from 'react';

export const IDContext = createContext();

export const IDProvider = ({ children }) => {
  const [ID, setID] = useState(null);

  return <IDContext.Provider value={{ ID, setID }}>{children}</IDContext.Provider>;
};
