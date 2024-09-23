import { FC, ReactNode } from "react";
/**
 * Props for the ScrollAnimation component.
 *
 * @property {ReactNode} children - The content to animate during scroll.
 * @property {string} [startOffset="50%"] - The initial Y offset for the animation (e.g., "0%", "50px").
 * @property {string} [endOffset="0%"] - The final Y offset when the element comes into view (e.g., "100%", "-50px").
 * @property {number} [duration=0.8] - The duration of the animation in seconds.
 * @property {number[]} [easing=[0.25, 0.1, 0.25, 1]] - The cubic bezier easing function for the animation.
 */
interface ScrollAnimationProps {
    children: ReactNode;
    startOffset?: string;
    endOffset?: string;
    duration?: number;
    easing?: number[];
}
/**
 * ScrollAnimation Component
 *
 * This component animates its children when they scroll into view.
 * It allows customization of the start and end positions, duration, and easing function for the animation.
 *
 * @example
 * <ScrollAnimation startOffset="50%" endOffset="0%" duration={1}>
 *   <YourComponent />
 * </ScrollAnimation>
 *
 * @param {ScrollAnimationProps} props - The properties to configure the animation.
 * @returns {JSX.Element} The animated children.
 */
declare const ScrollAnimation: FC<ScrollAnimationProps>;
export default ScrollAnimation;
