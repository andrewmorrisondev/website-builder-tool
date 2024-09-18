import React from "react";
import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
const InfoCard: React.FC<InfoCardProps> = ({
  title = "Default Title",
  subtitle,
  description,
  actions,
  variant = "elevation",
  image,
  imageAlt = "Card image",
  imageHeight = 200,
  fullWidth = false,
  sx = [],
  ...props
}) => {
  const theme = useTheme();

  const cardStyles: SxProps<Theme> = {
    maxWidth: fullWidth ? "100%" : 345, // Optional full width, default 345px
    boxShadow: variant === "elevation" ? theme.shadows[1] : "none",
    border:
      variant === "outlined" ? `1px solid ${theme.palette.divider}` : "none",
    borderRadius: theme.spacing(2),
    overflow: "hidden", // To ensure image doesn't overflow the card
    ...sx,
  };

  const imageStyles: SxProps<Theme> = {
    width: "100%",
    height: imageHeight,
    objectFit: "cover",
    display: image ? "block" : "none", // Hide if no image provided
  };

  return (
    <Card sx={cardStyles} {...props}>
      {image && (
        <Box component="img" src={image} alt={imageAlt} sx={imageStyles} />
      )}
      <CardContent>
        {title && (
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        )}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default InfoCard;
