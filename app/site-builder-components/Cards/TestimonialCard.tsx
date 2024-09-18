import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/system";

/**
 * Props for the TestimonialCard component.
 */
interface TestimonialCardProps {
  /**
   * The testimonial text to display.
   */
  testimonial: string;

  /**
   * The name of the person who provided the testimonial.
   */
  authorName: string;

  /**
   * The title or position of the person who provided the testimonial.
   */
  authorTitle?: string;

  /**
   * The URL of the author's avatar or profile image.
   */
  authorImage?: string;

  /**
   * Alt text for the author's image, used for accessibility.
   * @default "Author image"
   */
  imageAlt?: string;

  /**
   * Optional actions to display at the bottom of the card (e.g., buttons or links).
   */
  actions?: React.ReactNode;

  /**
   * Custom styles applied to the card using the MUI `sx` prop.
   */
  sx?: SxProps<Theme>;

  /**
   * Custom styles applied to the testimonial text.
   */
  testimonialSx?: SxProps<Theme>;
}

/**
 * TestimonialCard is a highly customizable card component designed to display
 * a customer's testimonial, along with their name, title, and image. It supports
 * additional actions like buttons or links at the bottom of the card.
 *
 * @param {TestimonialCardProps} props - The props used to configure the TestimonialCard.
 * @returns {JSX.Element} The rendered TestimonialCard component.
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  authorName,
  authorTitle,
  authorImage,
  imageAlt = "Author image",
  actions,
  sx = [],
  testimonialSx = [],
  ...props
}) => {
  const theme = useTheme();

  // Styles for the card, dynamically adapted from the theme
  const cardStyles: SxProps<Theme> = {
    maxWidth: 400,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2),
    ...sx,
  };

  const imageStyles: SxProps<Theme> = {
    width: 80,
    height: 80,
    borderRadius: "50%",
    marginBottom: theme.spacing(2),
  };

  return (
    <Card sx={cardStyles} {...props}>
      <CardContent>
        {authorImage && (
          <Avatar src={authorImage} alt={imageAlt} sx={imageStyles} />
        )}
        <Typography
          variant="body1"
          color="textPrimary"
          gutterBottom
          sx={testimonialSx}
        >
          {testimonial}
        </Typography>
        <Typography variant="h6" component="div">
          {authorName}
        </Typography>
        {authorTitle && (
          <Typography variant="subtitle1" color="textSecondary">
            {authorTitle}
          </Typography>
        )}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default TestimonialCard;
