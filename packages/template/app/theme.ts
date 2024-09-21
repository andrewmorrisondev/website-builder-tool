import { createTheme, Theme } from "@mui/material/styles";

// Extend the ThemeOptions type to include accent1 and accent2
declare module "@mui/material/styles" {
  interface Palette {
    accent1: string;
    accent2: string;
  }
  interface PaletteOptions {
    accent1?: string;
    accent2?: string;
  }
}

interface ColorOptions {
  primary: string;
  secondary: string;
  backgroundDefault: string;
  backgroundPaper: string;
  textPrimary: string;
  textSecondary: string;
  accent1: string;
  accent2: string;
}

const getTheme = (options: {
  mode: "light" | "dark";
  colors: ColorOptions;
}): Theme => {
  return createTheme({
    palette: {
      mode: options.mode,
      primary: {
        main: options.colors.primary,
      },
      secondary: {
        main: options.colors.secondary,
      },
      background: {
        default: options.colors.backgroundDefault,
        paper: options.colors.backgroundPaper,
      },
      text: {
        primary: options.colors.textPrimary,
        secondary: options.colors.textSecondary,
      },
      accent1: options.colors.accent1,
      accent2: options.colors.accent2,
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
      fontSize: 16,
      h1: {
        fontSize: "3rem", // 48px
        fontWeight: 700,
        lineHeight: 1.2,
        color: options.colors.textPrimary,
      },
      h2: {
        fontSize: "2.25rem", // 36px
        fontWeight: 600,
        lineHeight: 1.3,
        color: options.colors.textPrimary,
      },
      h3: {
        fontSize: "1.75rem", // 28px
        fontWeight: 500,
        lineHeight: 1.4,
        color: options.colors.textPrimary,
      },
      body1: {
        fontSize: "1rem", // 16px for paragraph text
        lineHeight: 1.5,
        color: options.colors.textPrimary,
      },
      button: {
        textTransform: "none", // No uppercase transformation for buttons
      },
    },
    spacing: (factor: number) => `${0.25 * factor}rem`, // 4px per factor for consistent spacing
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: options.colors.backgroundDefault,
            color: options.colors.textPrimary,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Rounded corners for buttons
            padding: "8px 16px",
            fontSize: "1rem",
            fontWeight: 600,
            boxShadow:
              options.mode === "light"
                ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                : "0px 2px 4px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: options.mode === "light" ? "#f0f0f0" : "#3a3a3a",
            },
          },
        },
      },
    },
  });
};

export default getTheme;
