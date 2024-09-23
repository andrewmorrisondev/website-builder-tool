import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import { ReactNode } from "react";

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

type FloatingActionButtonProps = {
  icon: ReactNode;
  onClick: () => void;
};

const CustomFloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
}) => <FloatingActionButton onClick={onClick}>{icon}</FloatingActionButton>;

export default CustomFloatingActionButton;
