import React from "react";
import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  imageAlt = "Card image",
  title,
  subtitle,
  description,
  actions,
  imageHeight = 200,
  fullWidth = false,
  sx = [],
  ...props
}) => {
  const theme = useTheme();

  // Styles for the card and image, dynamically adapting based on the props and theme
  const cardStyles: SxProps<Theme> = {
    maxWidth: fullWidth ? "100%" : 345, // Use full width if specified, else default max width
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[1],
    overflow: "hidden", // Ensures the image doesn't overflow the card
    ...sx,
  };

  const imageStyles: SxProps<Theme> = {
    width: "100%",
    height: imageHeight,
    objectFit: "cover",
  };

  return (
    <Card sx={cardStyles} {...props}>
      <Box component="img" src={imageSrc} alt={imageAlt} sx={imageStyles} />
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

export default ImageCard;
