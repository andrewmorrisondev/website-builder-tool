import React from "react";
import { SxProps, Theme } from "@mui/system";
/**
 * Props for the ImageCard component.
 */
interface ImageCardProps {
    /**
     * The URL of the image to display in the card.
     */
    imageSrc: string;
    /**
     * Alt text for the image, used for accessibility.
     * @default "Card image"
     */
    imageAlt?: string;
    /**
     * Title of the card, displayed prominently at the top.
     */
    title?: string;
    /**
     * Subtitle of the card, displayed below the title.
     */
    subtitle?: string;
    /**
     * Description of the card, displayed below the subtitle.
     */
    description?: string;
    /**
     * Actions to be rendered at the bottom of the card, typically buttons or icons.
     */
    actions?: React.ReactNode;
    /**
     * The height of the image. Can be a string (e.g., '200px') or a number.
     * @default 200
     */
    imageHeight?: string | number;
    /**
     * If true, the card will take the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Custom styles applied to the card using MUI's sx prop.
     */
    sx?: SxProps<Theme>;
}
/**
 * ImageCard is a highly dynamic, theme-styled component that displays an image along with a title, subtitle, description, and optional actions.
 *
 * It is customizable with props like image source, alt text, title, subtitle, description, and actions.
 * The card can be styled using the MUI sx prop and can adapt to full-width behavior.
 *
 * @param {ImageCardProps} props - The props to configure the ImageCard.
 * @returns {JSX.Element} A dynamic image card component.
 */
declare const ImageCard: React.FC<ImageCardProps>;
export default ImageCard;
