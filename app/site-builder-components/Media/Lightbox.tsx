import React, { useState } from "react";
import { Dialog, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

/**
 * Props for the Lightbox component.
 *
 * @param images - An array of image objects containing src (image source) and alt (image description).
 * @param open - Boolean to control whether the lightbox is open.
 * @param onClose - Function to handle the closing of the lightbox.
 * @param initialIndex - The index of the initially displayed image (defaults to 0).
 */
interface LightboxProps {
  /** Array of images with src (image source) and alt (description). */
  images: { src: string; alt: string }[];

  /** Controls whether the lightbox is open. */
  open: boolean;

  /** Function to close the lightbox. */
  onClose: () => void;

  /** The index of the initially displayed image (optional, defaults to 0). */
  initialIndex?: number;
}

/**
 * Lightbox component that displays images in a full-screen modal, allowing users
 * to navigate between images using Next and Prev buttons.
 *
 * @param {LightboxProps} props - The props for configuring the Lightbox component.
 * @returns {JSX.Element} The rendered Lightbox component.
 *
 * The Lightbox is fully responsive and provides a modal view of images with
 * navigation buttons and a close button for accessibility.
 */
const Lightbox: React.FC<LightboxProps> = ({
  images,
  open,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  /**
   * Move to the next image in the array.
   */
  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Move to the previous image in the array.
   */
  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          sx={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        {/* Close Button */}
        <IconButton
          sx={{ position: "absolute", top: 16, right: 16 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        {/* Previous Button */}
        <IconButton
          sx={{ position: "absolute", left: 16 }}
          onClick={handlePrev}
        >
          Prev
        </IconButton>
        {/* Next Button */}
        <IconButton
          sx={{ position: "absolute", right: 16 }}
          onClick={handleNext}
        >
          Next
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default Lightbox;
