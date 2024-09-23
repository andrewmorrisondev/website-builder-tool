import React from "react";
interface ResponsiveGridProps {
    children: React.ReactNode;
    spacing?: number;
    columns?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
}
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
declare const ResponsiveGrid: React.FC<ResponsiveGridProps>;
export default ResponsiveGrid;
