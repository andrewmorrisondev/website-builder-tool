import React from "react";
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
    fullHeight?: boolean;
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
declare const HeroBanner: React.FC<HeroBannerProps>;
export default HeroBanner;
