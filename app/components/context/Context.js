"use client";
import { createContext, useState, } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home"); 

  console.log("Active in Context", activeSection);
  
  return (

    <AppContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
