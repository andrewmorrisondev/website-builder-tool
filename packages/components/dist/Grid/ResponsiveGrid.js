import { jsx as _jsx } from "react/jsx-runtime";
import { Grid2, useTheme } from "@mui/material";
/**
 * A dynamic and customizable responsive grid component that adjusts
 * based on screen size and theme.
 *
 * @param children - The grid content.
 * @param spacing - The spacing between grid items.
 * @param columns - Number of columns for different screen sizes (xs, sm, md, lg, xl).
 * @param alignItems - Alignment of grid items along the vertical axis.
 * @param justifyContent - Alignment of grid items along the horizontal axis.
 */
const ResponsiveGrid = ({ children, spacing = 2, columns = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }, alignItems = "center", justifyContent = "center", }) => {
    const theme = useTheme();
    return (_jsx(Grid2, { container: true, spacing: spacing, alignItems: alignItems, justifyContent: justifyContent, sx: {
            [theme.breakpoints.up("xs")]: {
                gridTemplateColumns: `repeat(${columns.xs}, 1fr)`,
            },
            [theme.breakpoints.up("sm")]: {
                gridTemplateColumns: `repeat(${columns.sm}, 1fr)`,
            },
            [theme.breakpoints.up("md")]: {
                gridTemplateColumns: `repeat(${columns.md}, 1fr)`,
            },
            [theme.breakpoints.up("lg")]: {
                gridTemplateColumns: `repeat(${columns.lg}, 1fr)`,
            },
            [theme.breakpoints.up("xl")]: {
                gridTemplateColumns: `repeat(${columns.xl}, 1fr)`,
            },
        }, children: children }));
};
export default ResponsiveGrid;
//# sourceMappingURL=ResponsiveGrid.js.map