import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { darken } from "@mui/system"; // MUI utility to darken colors

// Define props for the Body component
interface BodyProps {
  /**
   * The content to be displayed inside the Body component.
   * It accepts any valid ReactNode, including JSX elements, strings, etc.
   */
  children: ReactNode;
  
  /**
   * Boolean flag indicating whether the sidebar drawer is open.
   * This affects the width of the Body container.
   */
  isDrawerOpen: boolean;
  
  /**
   * The width of the drawer in pixels.
   * Used to dynamically adjust the Body's width when the drawer is open.
   */
  drawerWidth: number;
}

/**
 * Body component is a flex container that spans the full viewport height and width,
 * adjusting dynamically based on whether a sidebar drawer is open.
 * It also applies a gradient background with a darker shade of the theme's default background.
 * 
 * @param {BodyProps} props - The props for the Body component.
 * @returns {JSX.Element} A flex container with dynamic width, height, and background.
 */
const Body = ({
  children,
  isDrawerOpen,
  drawerWidth,
}: BodyProps): JSX.Element => {
  const theme = useTheme(); // Access MUI theme to customize styling dynamically

  // Generate a darker shade of the background for a gradient effect
  const darkerBackgroundColor = darken(theme.palette.background.default, 0.2); // Darken the default background by 20%

  return (
    <Box
      sx={{
        display: "flex", // Flexbox layout for aligning children
        flexDirection: "column", // Stack children vertically
        justifyContent: "center", // Center children vertically
        alignItems: "center", // Center children horizontally
        minWidth: `calc(100vw - ${isDrawerOpen ? drawerWidth : 0}px)`, // Dynamic width based on drawer state
        minHeight: "100dvh", // Full viewport height (device viewport height)
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${darkerBackgroundColor} 100%)`, // Diagonal gradient from default to darker background
        padding: "1rem", // Padding around the content for spacing
        boxSizing: "border-box", // Ensure padding doesn't affect overall width/height
        transition: "min-width 0.3s ease", // Smooth width transition when the drawer opens/closes
      }}
    >
      {children}
    </Box>
  );
};

export default Body;
