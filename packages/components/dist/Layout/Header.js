import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
const Header = ({ title = "My Website", onActionClick, }) => {
    const theme = useTheme();
    return (_jsx(AppBar, { position: "static", sx: { backgroundColor: theme.palette.primary.main }, children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: title }), _jsx(Button, { color: "inherit", onClick: onActionClick, children: "Action" })] }) }));
};
export default Header;
//# sourceMappingURL=Header.js.map