import { useContext,createContext } from "react";


export  const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});


// Wrap all components in ThemeProvider
export const ThemeProvider = ThemeContext.Provider

// Use useTheme hook in your components
export const useTheme = () => useContext(ThemeContext)