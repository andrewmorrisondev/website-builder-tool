// LightboxModal.tsx component
"use client";
import React, { useState } from "react";
import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LightboxModalProps {
  images: { src: string; alt: string }[];
  open: boolean;
  initialIndex?: number;
  onClose: () => void;
}

/**
 * LightboxModal component allows users to view images in a full-screen modal with navigation.
 *
 * @param {LightboxModalProps} props - The props for configuring the LightboxModal component.
 * @returns {JSX.Element} The rendered LightboxModal component.
 */
const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  open,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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

export default LightboxModal;
