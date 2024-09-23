import React from "react";
import { SxProps, Theme } from "@mui/system";
/**
 * Props for the InfoCard component.
 */
export interface InfoCardProps {
    /**
     * The title of the card. It will be displayed prominently at the top.
     * @default "Default Title"
     */
    title?: string;
    /**
     * The subtitle of the card. Displayed below the title in a smaller font.
     */
    subtitle?: string;
    /**
     * The main content of the card. Descriptive text displayed under the subtitle.
     */
    description?: string;
    /**
     * Actions to be rendered at the bottom of the card, typically buttons or icons.
     */
    actions?: React.ReactNode;
    /**
     * Defines the visual style of the card. Can be "elevation" (with shadow) or "outlined" (with border).
     * @default "elevation"
     */
    variant?: "elevation" | "outlined";
    /**
     * URL for an image to be displayed at the top of the card.
     */
    image?: string;
    /**
     * Alt text for the image, used for accessibility.
     * @default "Card image"
     */
    imageAlt?: string;
    /**
     * The height of the image in the card. Can be a number or a string.
     * @default 200
     */
    imageHeight?: string | number;
    /**
     * Determines if the card should take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Custom styles applied to the card using the MUI `sx` prop.
     */
    sx?: SxProps<Theme>;
}
/**
 * InfoCard is a dynamic, theme-styled card component for displaying content such as
 * titles, subtitles, descriptions, images, and actions. It supports both elevation and
 * outlined variants, as well as custom actions.
 *
 * @param {InfoCardProps} props - The props used to configure the InfoCard component.
 * @returns {JSX.Element} The rendered InfoCard component.
 */
declare const InfoCard: React.FC<InfoCardProps>;
export default InfoCard;
