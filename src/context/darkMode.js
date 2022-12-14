import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const DarkMode = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
