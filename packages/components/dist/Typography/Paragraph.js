import { jsx as _jsx } from "react/jsx-runtime";
import { Typography, useTheme } from "@mui/material";
const Paragraph = ({ children, color, align = "left", }) => {
    const theme = useTheme();
    return (_jsx(Typography, { variant: "body1", style: { color: color || theme.palette.text.primary }, align: align, component: "p", children: children }));
};
export default Paragraph;
//# sourceMappingURL=Paragraph.js.map