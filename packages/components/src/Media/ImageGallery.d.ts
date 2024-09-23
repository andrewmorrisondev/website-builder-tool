import React from "react";
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
    images: {
        src: string;
        alt: string;
    }[];
    /** Spacing between grid items, defaults to 2. */
    spacing?: number;
    /** Number of columns for different screen sizes (xs, sm, md, lg, xl), defaults to xs: 12, sm: 6, md: 4, lg: 3, xl: 2. */
    columns?: {
        xs: number;
        sm: number;
        md: number;
        lg?: number;
        xl?: number;
    };
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
declare const ImageGallery: React.FC<ImageGalleryProps>;
export default ImageGallery;
