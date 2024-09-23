import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

// Extending MUI's SpeedDial
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(8),
  right: theme.spacing(8),
}));

type SpeedDialMenuProps = {
  actions: { icon: ReactNode; name: string; onClick: () => void }[];
};

const SpeedDialMenu: React.FC<SpeedDialMenuProps> = ({ actions }) => (
  <StyledSpeedDial
    ariaLabel="SpeedDial Menu"
    icon={<SpeedDialIcon />}
    direction="up"
  >
    {actions.map((action, index) => (
      <SpeedDialAction
        key={index}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={action.onClick}
      />
    ))}
  </StyledSpeedDial>
);

export default SpeedDialMenu;
