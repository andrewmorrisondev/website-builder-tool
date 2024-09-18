"use client";
import React, {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import getTheme from "../theme";

interface ThemeContextProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
  updateColors: (
    primary: string,
    secondary: string,
    accent1: string,
    accent2: string,
  ) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  toggleTheme: () => {},
  updateColors: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // State to manage mode and colors
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [primaryColor, setPrimaryColor] = useState("#1976d2"); // Default primary color
  const [secondaryColor, setSecondaryColor] = useState("#dc004e"); // Default secondary color
  const [accentColor1, setAccentColor1] = useState(""); // New accent color state
  const [accentColor2, setAccentColor2] = useState(""); // New accent color state
  const [backgroundColor, setBackgroundColor] = useState(""); // Background color state

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedPrimaryColor = localStorage.getItem("primaryColor");
    const savedSecondaryColor = localStorage.getItem("secondaryColor");
    const savedBackgroundColor = localStorage.getItem("backgroundColor");
    const savedAccentColor1 = localStorage.getItem("accentColor1");
    const savedAccentColor2 = localStorage.getItem("accentColor2");

    if (savedTheme) {
      setMode(savedTheme as "light" | "dark");
    } else {
      setMode(prefersDarkMode ? "dark" : "light");
    }

    if (savedPrimaryColor) {
      setPrimaryColor(savedPrimaryColor);
    }

    if (savedSecondaryColor) {
      setSecondaryColor(savedSecondaryColor);
    }

    if (savedBackgroundColor) {
      setBackgroundColor(savedBackgroundColor);
    }

    if (savedAccentColor1) {
      setAccentColor1(savedAccentColor1);
    }

    if (savedAccentColor2) {
      setAccentColor2(savedAccentColor2);
    }
  }, [prefersDarkMode]);

  const toggleTheme = (): void => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  // Function to dynamically update colors and background color, now accepting accent colors
  const updateColors = (
    primary: string,
    secondary: string,
    accent1: string,
    accent2: string,
  ): void => {
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
    setAccentColor1(accent1);
    setAccentColor2(accent2);
    setBackgroundColor(primary); // Use the primary color as the background
    localStorage.setItem("primaryColor", primary);
    localStorage.setItem("secondaryColor", secondary);
    localStorage.setItem("backgroundColor", primary); // Save background color
    localStorage.setItem("accentColor1", accent1);
    localStorage.setItem("accentColor2", accent2);
  };

  // Memoize the theme to optimize performance
  const theme = useMemo(
    () =>
      getTheme({
        mode,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          backgroundDefault:
            backgroundColor || (mode === "light" ? "#f5f5f5" : "#333A3F"),
          backgroundPaper: mode === "light" ? "#ffffff" : "#424242",
          textPrimary: mode === "light" ? "#000000" : "#ffffff",
          textSecondary: mode === "light" ? "#5f5f5f" : "#e0e0e0",
          accent1: accentColor1, // Add the accent colors
          accent2: accentColor2, // Add the accent colors
        },
      }),
    [
      mode,
      primaryColor,
      secondaryColor,
      backgroundColor,
      accentColor1,
      accentColor2,
    ], // Keep them in the dependency array
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, updateColors }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
