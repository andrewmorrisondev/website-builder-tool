// Footer.tsx component
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface FooterProps {
  content?: string;
}

const Footer: React.FC<FooterProps> = ({
  content = "© 2024 My Website. All rights reserved.",
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
      }}
    >
      <Typography variant="body2">{content}</Typography>
    </Box>
  );
};

export default Footer;
