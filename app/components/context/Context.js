"use client";

import { createContext, useState } from "react";

const AppContext = createContext();

function Context({ children }) {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context;
