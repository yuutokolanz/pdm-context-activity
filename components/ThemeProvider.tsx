import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

interface Theme {
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
}

const lightTheme: Theme = {
  backgroundColor: "white",
  textColor: "black",
  primaryColor: "blue"
} 

const darkTheme: Theme = {
  backgroundColor: "black",
  textColor: "white",
  primaryColor: "red"
}

interface ThemeContextProps {
  currentTheme: string;
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export default function ThemeProvider({ children}: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  const contextValue = {
    currentTheme,
    theme,
    toggleTheme: () => {
      setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  }
  
  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  )
}

export function useTheme(){
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be called inside ThemeProvider");
  
  return context;
}