// Header.tsx component
// Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";

interface HeaderProps {
  title?: string;
  onActionClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title = "My Website",
  onActionClick,
}) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" onClick={onActionClick}>
          Action
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
