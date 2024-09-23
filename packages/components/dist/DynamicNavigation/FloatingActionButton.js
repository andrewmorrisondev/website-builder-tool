import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
// Extending MUI's Floating Action Button (Fab)
const FloatingActionButton = styled(Fab)(({ theme }) => ({
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));
const CustomFloatingActionButton = ({ icon, onClick, }) => _jsx(FloatingActionButton, { onClick: onClick, children: icon });
export default CustomFloatingActionButton;
//# sourceMappingURL=FloatingActionButton.js.map