// Paragraph.tsx component
import React from "react";
import { Typography, useTheme } from "@mui/material";

interface ParagraphProps {
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  color,
  align = "left",
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant="body1"
      style={{ color: color || theme.palette.text.primary }}
      align={align}
      component="p"
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
