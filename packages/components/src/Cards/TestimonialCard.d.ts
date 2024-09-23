import React from "react";
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
declare const TestimonialCard: React.FC<TestimonialCardProps>;
export default TestimonialCard;
