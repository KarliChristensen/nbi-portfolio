"use client";

import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {

  let [activeSection, setActiveSection] = useState("home");

  const updateActiveSection = (newValue) => {
    setActiveSection(newValue);
  };

  return (
    <AppContext.Provider value={{ activeSection, updateActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
