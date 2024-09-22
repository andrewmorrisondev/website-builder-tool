"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { keyframes } from "@emotion/react"; // For keyframes animation

/**
 * Props for the HeroBanner component.
 * @typedef {object} HeroBannerProps
 * @property {string} title - The main title of the hero banner.
 * @property {string} [subtitle] - An optional subtitle for the hero banner.
 * @property {string} [backgroundImage] - URL for the background image.
 * @property {string} [ctaText] - Text for the call-to-action (CTA) button.
 * @property {() => void} [onCtaClick] - Function to handle CTA button click.
 * @property {"left" | "center" | "right"} [align="center"] - Text alignment, defaults to "center".
 * @property {boolean} [fullHeight=false] - Whether the banner should take up the full viewport height.
 */
interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  align?: "left" | "center" | "right";
  fullHeight?: boolean; // New prop to control full viewport height
}

// Keyframes for the scroll encourager bounce animation
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

/**
 * HeroBanner component - displays a full-width banner with a background image,
 * title, optional subtitle, and a call-to-action button.
 * Fully customizable through props, it aligns with the theme styling.
 *
 * The component detects when the user scrolls and fades out a scroll-down indicator.
 * It is highly responsive and adapts its content alignment and size based on the viewport.
 *
 * @param {HeroBannerProps} props - The props for the HeroBanner component.
 * @returns {JSX.Element} The rendered HeroBanner component.
 *
 * @example
 * // Example usage of HeroBanner:
 * <HeroBanner
 *   title="Welcome to Our Platform"
 *   subtitle="Building a better future"
 *   backgroundImage="https://example.com/banner.jpg"
 *   ctaText="Get Started"
 *   onCtaClick={() => console.log('CTA clicked')}
 *   align="center"
 *   fullHeight={true}
 * />
 */
const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  onCtaClick,
  align = "center",
  fullHeight = false,
}) => {
  const theme = useTheme(); // Get the current theme for styling
  const [hasScrolled, setHasScrolled] = useState(false); // State to detect if the user has scrolled

  // Scroll event handler to detect when the user scrolls the page
  useEffect(() => {
    // Use debounced or throttled scrolling to improve performance
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setHasScrolled(true); // User has scrolled, hide the scroll encourager
      } else {
        setHasScrolled(false); // No scrolling yet, show the scroll encourager
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, // Set background image URL
        backgroundSize: "cover", // Ensure background image covers the entire banner
        backgroundPosition: "center", // Center the background image
        padding: theme.spacing(8, 4), // Responsive padding using theme spacing
        textAlign: align, // Align text based on the 'align' prop
        color: theme.palette.common.white, // Ensure text is readable on dark backgrounds
        display: "flex", // Flexbox to center content vertically and horizontally
        flexDirection: "column", // Stack elements vertically
        justifyContent: "center", // Center the content vertically
        alignItems:
          align === "center"
            ? "center"
            : align === "right"
            ? "flex-end"
            : "flex-start", // Align content based on the 'align' prop
        height: fullHeight ? ['100vh', '100dvh'] : "25em", // Use 100vh or 100dvh for full height support
        position: "relative", // Necessary for positioning the scroll encourager
        width: "100%", // Make sure the banner takes up the full width
      }}
    >
      {/* Main title, using typography variants for responsive sizing */}
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>

      {/* Optional subtitle, conditionally rendered if provided */}
      {subtitle && (
        <Typography variant="h6" gutterBottom>
          {subtitle}
        </Typography>
      )}

      {/* Optional CTA button, conditionally rendered if provided */}
      {ctaText && (
        <Button
          variant="contained"
          color="primary"
          onClick={onCtaClick} // Trigger CTA click handler
          sx={{ marginTop: theme.spacing(2) }} // Add some margin for spacing
        >
          {ctaText}
        </Button>
      )}

      {/* Scroll encourager, displayed only when fullHeight is true */}
      {fullHeight && (
        <Box
          sx={{
            position: "absolute", // Position it at the bottom of the banner
            bottom: theme.spacing(4), // Slight padding from the bottom
            display: "flex", // Center horizontally
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Take full width
            animation: `${bounceAnimation} 2s infinite`, // Bounce animation
            cursor: "pointer", // Indicate interactivity
            color: theme.palette.common.white, // White text/icon color
            opacity: hasScrolled ? 0 : 1, // Fade out when user scrolls
            transition: "opacity 0.5s ease-in-out", // Smooth transition for fading
          }}
        >
          {/* Scroll encourager for desktop view */}
          <Box
            sx={{
              display: { xs: "none", md: "block" }, // Show only on larger screens
            }}
          >
            <Typography variant="body1">Scroll Down</Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: "2rem" }} />
          </Box>

          {/* Scroll encourager for mobile view */}
          <Box
            sx={{
              display: { xs: "block", md: "none" }, // Show only on smaller screens
            }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: "3rem" }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeroBanner;
