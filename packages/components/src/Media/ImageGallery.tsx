import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveGrid } from "../registry"; // Import your custom ResponsiveGrid

/**
 * Props for the ImageGallery component.
 *
 * @param images - Array of image objects containing src (image source) and alt (image description).
 * @param spacing - The spacing between grid items. Defaults to 2.
 * @param columns - The number of columns for different screen sizes (xs, sm, md, lg, xl).
 * @param onClickImage - Function that is called when an image is clicked. Receives the index of the clicked image.
 */
interface ImageGalleryProps {
  /** Array of images with src (image source) and alt (description). */
  images: { src: string; alt: string }[];

  /** Spacing between grid items, defaults to 2. */
  spacing?: number;

  /** Number of columns for different screen sizes (xs, sm, md, lg, xl), defaults to xs: 12, sm: 6, md: 4, lg: 3, xl: 2. */
  columns?: { xs: number; sm: number; md: number; lg?: number; xl?: number };

  /** Function to handle image click events. Receives the index of the clicked image. */
  onClickImage: (index: number) => void;
}

/**
 * ImageGallery component displays a responsive grid of images.
 *
 * It uses the custom ResponsiveGrid component for flexible layout
 * and adjusts based on screen size, allowing for varying column numbers at
 * different breakpoints.
 *
 * @param {ImageGalleryProps} props - The props for configuring the ImageGallery component.
 * @returns {JSX.Element} The rendered ImageGallery component.
 */
const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  spacing = 2,
  columns = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
  onClickImage,
}) => {
  const theme = useTheme();

  return (
    <ResponsiveGrid spacing={spacing} columns={columns}>
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image.src}
          alt={image.alt}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: theme.shape.borderRadius,
            cursor: "pointer", // Add cursor to indicate the image is clickable
          }}
          onClick={() => onClickImage(index)} // Call onClickImage with the index of the clicked image
        />
      ))}
    </ResponsiveGrid>
  );
};

export default ImageGallery;
