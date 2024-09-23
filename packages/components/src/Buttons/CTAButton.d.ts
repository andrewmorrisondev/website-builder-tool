import React from "react";
import { ButtonProps } from "@mui/material";
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
    color?: "primary" | "secondary" | "inherit" | "error" | "success" | "info" | "warning" | "accent1" | "accent2";
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
     * Optional icon to display alongside the label.
     */
    icon?: React.ReactNode;
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
declare const CTAButton: React.FC<CTAButtonProps>;
export default CTAButton;
