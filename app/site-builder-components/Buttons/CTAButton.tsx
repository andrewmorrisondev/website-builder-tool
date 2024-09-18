import React from "react";
import { Button, ButtonProps, Tooltip } from "@mui/material";
import { useTheme, PaletteColor } from "@mui/material/styles";

/**
 * Props for the CTAButton component.
 */
interface CTAButtonProps extends Omit<ButtonProps, "color"> {
  /**
   * The variant to use for the button. Options are "contained", "outlined", or "text".
   * @default "contained"
   */
  variant?: "contained" | "outlined" | "text";

  /**
   * The color of the button, which must match a key from the theme's palette.
   * Custom accent colors are also supported.
   * @default "primary"
   */
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

  /**
   * The size of the button. Options are "small", "medium", or "large".
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * The text label to display on the button.
   * @default "Click Me"
   */
  label?: string;

  /**
   * If true, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Function to call when the button is clicked.
   */
  onClick?: () => void;

  /**
   * Optional tooltip text that will be shown when hovering over the button.
   */
  tooltip?: string;
}

/**
 * CTAButton is a customizable call-to-action button component that adapts
 * its styling from the theme. It supports variants, colors, sizes, tooltips,
 * and full-width options. The button's color is dynamically retrieved from the theme.
 *
 * @param {CTAButtonProps} props - The props used to configure the CTAButton.
 * @returns {JSX.Element} The rendered CTAButton component.
 */
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

  /**
   * Helper function to safely get the color from the theme.
   * Falls back to the primary color if the specified color is not found.
   * @returns {string} The resolved color from the theme.
   */
  const getColorFromTheme = (): string => {
    if (color === "inherit") {
      return "inherit";
    }

    const themeColor = theme.palette[color as keyof typeof theme.palette];

    if (color === "accent1" || color === "accent2") {
      return theme.palette[color]; // Custom accent colors
    }

    if (themeColor && (themeColor as PaletteColor).main) {
      return (themeColor as PaletteColor).main;
    }

    return theme.palette.primary.main; // Default to primary.main if no valid color
  };

  // Create the button element with its styles and props
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

  // Wrap the button in a tooltip if tooltip text is provided
  return tooltip ? (
    <Tooltip title={tooltip}>{buttonElement}</Tooltip>
  ) : (
    buttonElement
  );
};

export default CTAButton;
