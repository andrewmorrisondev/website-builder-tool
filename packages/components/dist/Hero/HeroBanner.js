"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { keyframes } from "@emotion/react"; // To handle keyframes animation
// Keyframes for the scroll animation
const bounceAnimation = keyframes `
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
const HeroBanner = ({ title, subtitle, backgroundImage, ctaText, onCtaClick, align = "center", fullHeight = false, }) => {
    const theme = useTheme();
    const [hasScrolled, setHasScrolled] = useState(false);
    // Detect user scroll and hide the scroll encourager
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            }
            else {
                setHasScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (_jsxs(Box, { sx: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: theme.spacing(8, 4),
            textAlign: align,
            color: theme.palette.common.white,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: align === "center"
                ? "center"
                : align === "right"
                    ? "flex-end"
                    : "flex-start",
            height: fullHeight ? "100dvh" : "25em",
            position: "relative", // Important for positioning the scroll encourager
            width: "100%",
        }, children: [_jsx(Typography, { variant: "h2", gutterBottom: true, children: title }), subtitle && (_jsx(Typography, { variant: "h6", gutterBottom: true, children: subtitle })), ctaText && (_jsx(Button, { variant: "contained", color: "primary", onClick: onCtaClick, sx: { marginTop: theme.spacing(2) }, children: ctaText })), fullHeight && (_jsxs(Box, { sx: {
                    position: "absolute",
                    bottom: theme.spacing(4),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    animation: `${bounceAnimation} 2s infinite`,
                    cursor: "pointer",
                    color: theme.palette.common.white,
                    opacity: hasScrolled ? 0 : 1, // Fade out when user scrolls
                    transition: "opacity 0.5s ease-in-out", // Smooth fade effect
                }, children: [_jsxs(Box, { sx: {
                            display: { xs: "none", md: "block" }, // Show only on desktop
                        }, children: [_jsx(Typography, { variant: "body1", children: "Scroll Down" }), _jsx(KeyboardArrowDownIcon, { sx: { fontSize: "2rem" } })] }), _jsx(Box, { sx: {
                            display: { xs: "block", md: "none" }, // Show only on mobile
                        }, children: _jsx(KeyboardArrowDownIcon, { sx: { fontSize: "3rem" } }) })] }))] }));
};
export default HeroBanner;
//# sourceMappingURL=HeroBanner.js.map