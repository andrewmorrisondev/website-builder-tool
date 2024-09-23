import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography, useTheme } from "@mui/material";
const Footer = ({ content = "© 2024 My Website. All rights reserved.", }) => {
    const theme = useTheme();
    return (_jsx(Box, { sx: {
            display: "flex",
            justifyContent: "center",
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[900],
            color: theme.palette.common.white,
        }, children: _jsx(Typography, { variant: "body2", children: content }) }));
};
export default Footer;
//# sourceMappingURL=Footer.js.map