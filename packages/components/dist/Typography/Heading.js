import { jsx as _jsx } from "react/jsx-runtime";
import { Typography, useTheme } from "@mui/material";
const Heading = ({ children, variant = "h1", color, align = "left", }) => {
    const theme = useTheme();
    return (_jsx(Typography, { variant: variant, style: { color: color || theme.palette.text.primary }, align: align, component: "div", children: children }));
};
export default Heading;
//# sourceMappingURL=Heading.js.map