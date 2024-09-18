import React from "react";
import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
  Tooltip,
  useTheme,
  PaletteColor,
} from "@mui/material";
import { SxProps, Theme } from "@mui/system";

interface CustomIconButtonProps extends Omit<MUIIconButtonProps, "color"> {
  icon: React.ReactNode; // The icon element to render inside the button
  color?:
    | "primary"
    | "secondary"
    | "inherit"
    | "error"
    | "success"
    | "info"
    | "warning"
    | "accent1"
    | "accent2";
  size?: "small" | "medium" | "large";
  tooltip?: string; // Optional tooltip text
  variant?: "contained" | "outlined" | "text"; // Button variant, if needed
  shape?: "round" | "square"; // Additional customization for button shape
  onClick?: () => void;
}

const IconButton: React.FC<CustomIconButtonProps> = ({
  icon,
  color = "primary",
  size = "medium",
  tooltip,
  variant = "contained", // Default variant as 'contained'
  shape = "round",
  onClick,
  ...props
}) => {
  const theme = useTheme();

  // Helper function to determine the color from the theme
  const getColorFromTheme = (): string => {
    if (color === "inherit") {
      return "inherit";
    }

    const themeColor = theme.palette[color as keyof typeof theme.palette];

    if (color === "accent1" || color === "accent2") {
      return theme.palette[color];
    }

    if (themeColor && (themeColor as PaletteColor).main) {
      return (themeColor as PaletteColor).main;
    }

    return theme.palette.primary.main;
  };

  const buttonStyles: SxProps<Theme> = {
    borderRadius: shape === "round" ? "50%" : theme.spacing(1), // Adjust shape (round or square)
    color:
      variant === "contained"
        ? theme.palette.common.white
        : getColorFromTheme(),
    backgroundColor:
      variant === "contained" ? getColorFromTheme() : "transparent",
    boxShadow: variant === "contained" ? theme.shadows[2] : "none",
    border:
      variant === "outlined" ? `1px solid ${getColorFromTheme()}` : "none",
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor:
        variant === "contained"
          ? theme.palette.action.hover
          : theme.palette.action.selected,
    },
  };

  const iconButtonElement = (
    <MUIIconButton size={size} onClick={onClick} sx={buttonStyles} {...props}>
      {icon}
    </MUIIconButton>
  );

  return tooltip ? (
    <Tooltip title={tooltip}>{iconButtonElement}</Tooltip>
  ) : (
    iconButtonElement
  );
};

export default IconButton;
