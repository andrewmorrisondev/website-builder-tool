import { jsx as _jsx } from "react/jsx-runtime";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
// Extending MUI's SpeedDial
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(8),
}));
const SpeedDialMenu = ({ actions }) => (_jsx(StyledSpeedDial, { ariaLabel: "SpeedDial Menu", icon: _jsx(SpeedDialIcon, {}), direction: "up", children: actions.map((action, index) => (_jsx(SpeedDialAction, { icon: action.icon, tooltipTitle: action.name, onClick: action.onClick }, index))) }));
export default SpeedDialMenu;
//# sourceMappingURL=SpeedDialMenu.js.map