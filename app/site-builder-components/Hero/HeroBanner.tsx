import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

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

/**
 * HeroBanner component - displays a full-width banner with a background image,
 * title, optional subtitle, and a call-to-action button.
 * Fully customizable through props, it aligns with the theme styling.
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
  fullHeight = false, // Default to false, meaning it won't take up full viewport height
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: theme.spacing(8, 4),
        textAlign: align,
        color: theme.palette.common.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:
          align === "center"
            ? "center"
            : align === "right"
              ? "flex-end"
              : "flex-start",
        height: fullHeight ? "100dvh" : "25em", // If fullHeight is true, use 100dvh
      }}
    >
      {/* Main title */}
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>

      {/* Optional subtitle */}
      {subtitle && (
        <Typography variant="h6" gutterBottom>
          {subtitle}
        </Typography>
      )}

      {/* Optional CTA button */}
      {ctaText && (
        <Button
          variant="contained"
          color="primary"
          onClick={onCtaClick}
          sx={{ marginTop: theme.spacing(2) }}
        >
          {ctaText}
        </Button>
      )}
    </Box>
  );
};

export default HeroBanner;
