import { createContext, useState, ReactNode, useContext } from "react";

// Define the type for the theme context
type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

// Create the theme context
export const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

// Create a custom hook to access the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Define the props type for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Create the ThemeProvider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Value for the theme context
  const value = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
