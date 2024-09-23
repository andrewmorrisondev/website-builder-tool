import { jsx as _jsx } from "react/jsx-runtime";
import { Typography, useTheme } from "@mui/material";
const Subheading = ({ children, variant = "h4", color, align = "left", }) => {
    const theme = useTheme();
    return (_jsx(Typography, { variant: variant, style: { color: color || theme.palette.text.secondary }, align: align, component: "div", children: children }));
};
export default Subheading;
//# sourceMappingURL=Subheading.js.map