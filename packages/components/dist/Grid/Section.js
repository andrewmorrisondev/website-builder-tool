import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, useTheme, Typography } from "@mui/material";
/**
 * A dynamic section component that allows for customizable layout,
 * theming, and content organization.
 *
 * @param children - The content of the section.
 * @param title - Optional title for the section.
 * @param subtitle - Optional subtitle for the section.
 * @param padding - Padding for the section content.
 * @param backgroundColor - Background color for the section.
 * @param textAlign - Text alignment for the title and subtitle.
 */
const Section = ({ children, title, subtitle, padding = 4, backgroundColor, textAlign = "left", }) => {
    const theme = useTheme();
    const bgColor = backgroundColor || theme.palette.background.default;
    return (_jsxs(Box, { sx: {
            backgroundColor: bgColor,
            padding: theme.spacing(padding),
            textAlign: textAlign,
        }, children: [title && _jsx(Typography, { variant: "h4", children: title }), subtitle && _jsx(Typography, { variant: "subtitle1", children: subtitle }), _jsx(Box, { children: children })] }));
};
export default Section;
//# sourceMappingURL=Section.js.map