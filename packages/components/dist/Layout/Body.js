import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { darken } from "@mui/system"; // MUI utility to darken colors
/**
 * Body component is a flex container that spans the full viewport height and width,
 * adjusting dynamically based on whether a sidebar drawer is open.
 * It also applies a gradient background with a darker shade of the theme's default background.
 *
 * @param {BodyProps} props - The props for the Body component.
 * @returns {JSX.Element} A flex container with dynamic width, height, and background.
 */
const Body = ({ children, isDrawerOpen, drawerWidth, }) => {
    const theme = useTheme();
    const darkerBackgroundColor = darken(theme.palette.background.default, 0.2);
    return (_jsx(Box, { sx: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: isDrawerOpen ? `calc(100vw - ${drawerWidth}px)` : "100vw",
            minHeight: "100vh",
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${darkerBackgroundColor} 100%)`,
            boxSizing: "border-box",
            transition: "min-width 0.3s ease", // Smooth transition
        }, children: children }));
};
export default Body;
//# sourceMappingURL=Body.js.map