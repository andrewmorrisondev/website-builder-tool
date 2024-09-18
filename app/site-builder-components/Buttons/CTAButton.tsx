import React from "react";
import { Button, ButtonProps, Tooltip } from "@mui/material";
import { useTheme, PaletteColor } from "@mui/material/styles";

interface CTAButtonProps extends Omit<ButtonProps, "color"> {
  variant?: "contained" | "outlined" | "text";
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
  label?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  tooltip?: string; // Optional tooltip text
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  label = "Click Me",
  fullWidth = false,
  onClick,
  tooltip,
  ...props
}) => {
  const theme = useTheme();

  // Helper function to safely get the color from the theme
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

  const buttonElement = (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2, 4),
        textTransform: "none",
        fontSize: theme.typography.button.fontSize,
        fontWeight: theme.typography.button.fontWeight,
        color:
          variant === "contained"
            ? theme.palette.common.white
            : getColorFromTheme(),
        backgroundColor:
          variant === "contained" ? getColorFromTheme() : "transparent",
        boxShadow: variant === "contained" ? theme.shadows[1] : "none",
        "&:hover": {
          backgroundColor:
            variant === "contained"
              ? theme.palette.action.hover
              : theme.palette.action.selected,
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );

  return tooltip ? (
    <Tooltip title={tooltip}>{buttonElement}</Tooltip>
  ) : (
    buttonElement
  );
};

export default CTAButton;
