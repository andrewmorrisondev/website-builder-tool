import React from "react";
import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
  Tooltip,
  useTheme,
  PaletteColor,
} from "@mui/material";
import { SxProps, Theme } from "@mui/system";

/**
 * Props for the CustomIconButton component.
 */
interface CustomIconButtonProps extends Omit<MUIIconButtonProps, "color"> {
  /**
   * The icon to display inside the button, usually an element from MUI Icons.
   */
  icon: React.ReactNode;

  /**
   * The color of the button. It can be a color from the theme palette or custom colors like accent1 or accent2.
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
   * The size of the icon button. It can be "small", "medium", or "large".
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * Optional tooltip text to be displayed when the button is hovered over.
   */
  tooltip?: string;

  /**
   * The visual variant of the button. It can be "contained", "outlined", or "text".
   * @default "contained"
   */
  variant?: "contained" | "outlined" | "text";

  /**
   * The shape of the button. If "round", the button will be a circle; if "square", it will have square corners.
   * @default "round"
   */
  shape?: "round" | "square";

  /**
   * Callback function to handle the button click event.
   */
  onClick?: () => void;

  /**
   * Optional styles to apply to the button.
   */
  sx?: SxProps<Theme>;
}

/**
 * CustomIconButton is a dynamic icon button component that adapts its color and style from the theme.
 * It supports various configurations, including different shapes, sizes, colors, and variants, and can display an optional tooltip.
 *
 * @param {CustomIconButtonProps} props - The props used to configure the CustomIconButton.
 * @returns {JSX.Element} A customizable IconButton component.
 */
const IconButton: React.FC<CustomIconButtonProps> = ({
  icon,
  color = "primary",
  size = "medium",
  tooltip,
  variant = "contained",
  shape = "round",
  onClick,
  sx = {}, // Ensure sx prop is provided by default
  ...props
}) => {
  const theme = useTheme();

  /**
   * Helper function to get the color from the theme.
   * It checks if the specified color exists in the palette or returns a default color.
   * @returns {string} The resolved color from the theme palette.
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

    return theme.palette.primary.main; // Fallback to primary color
  };

  // Define the button styles dynamically based on the props
  const defaultButtonStyles: SxProps<Theme> = {
    borderRadius: shape === "round" ? "50%" : theme.spacing(1),
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

  // Merge default styles with the sx prop passed by the user
  const mergedStyles: SxProps<Theme> = { ...defaultButtonStyles, ...sx };

  // Render the icon button with optional tooltip
  const iconButtonElement = (
    <MUIIconButton size={size} onClick={onClick} sx={mergedStyles} {...props}>
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
