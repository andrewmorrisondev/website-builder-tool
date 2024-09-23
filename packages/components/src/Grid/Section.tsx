// Section.tsx component
import React from "react";
import { Box, useTheme, Typography } from "@mui/material";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  padding?: number;
  backgroundColor?: string;
  textAlign?: "left" | "center" | "right";
}

/**
 * A dynamic section component that allows for customizable layout,
 * theming, and content organization.
 *
 * @param children - The content of the section.
 * @param title - Optional title for the section.
 * @param subtitle - Optional subtitle for the section.
 * @param padding - Padding for the section content.
 * @param backgroundColor - Background color for the section.
 * @param textAlign - Text alignment for the title and subtitle.
 */
const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  padding = 4,
  backgroundColor,
  textAlign = "left",
}) => {
  const theme = useTheme();
  const bgColor = backgroundColor || theme.palette.background.default;

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        padding: theme.spacing(padding),
        textAlign: textAlign,
      }}
    >
      {title && <Typography variant="h4">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
