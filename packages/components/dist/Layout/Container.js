import { jsx as _jsx } from "react/jsx-runtime";
import { Container as MUIContainer, useTheme } from "@mui/material";
const Container = ({ children, maxWidth = "lg" }) => {
    const theme = useTheme();
    return (_jsx(MUIContainer, { maxWidth: maxWidth, sx: { padding: theme.spacing(3) }, children: children }));
};
export default Container;
//# sourceMappingURL=Container.js.map