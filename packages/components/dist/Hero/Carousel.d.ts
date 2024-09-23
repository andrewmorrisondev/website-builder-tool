import React from "react";
/**
 * Props for the Carousel component.
 * @typedef {object} CarouselProps
 * @property {React.ReactNode[]} items - Array of items (React elements) to display in the carousel.
 * @property {number} [interval=3000] - Time in milliseconds between automatic slides. Defaults to 3000ms.
 */
interface CarouselProps {
    items: React.ReactNode[];
    interval?: number;
}
/**
 * Carousel component to display a set of items with navigation controls.
 * Automatically cycles through items after a specified interval.
 *
 * @param {CarouselProps} props - Props for the Carousel component.
 * @returns {JSX.Element} The rendered Carousel component.
 *
 * @example
 * // Usage example:
 * <Carousel
 *   items={[<Component1 />, <Component2 />, <Component3 />]}
 *   interval={5000} // Optional: auto-slide every 5 seconds
 * />
 */
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
