import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

/**
 * Props for the ClickAnimation component.
 *
 * @property {ReactNode} children - The content that will be wrapped with click animation.
 * @property {number} [scaleOnClick=0.95] - The scale transformation applied when the element is clicked (e.g., 0.95 for slight shrink).
 * @property {number} [opacityOnClick=0.9] - The opacity change applied when clicked (e.g., 0.9 for a slight fade).
 * @property {number} [duration=0.2] - The duration of the click animation in seconds.
 * @property {number[]} [easing=[0.42, 0, 0.58, 1]] - The cubic bezier easing function for the click animation.
 */
interface ClickAnimationProps {
  children: ReactNode;
  scaleOnClick?: number;
  opacityOnClick?: number;
  duration?: number;
  easing?: number[];
}

/**
 * ClickAnimation Component
 *
 * This component applies an animation when the element is clicked.
 * You can customize the scale and opacity changes, as well as the animation duration and easing.
 *
 * @example
 * <ClickAnimation scaleOnClick={0.9} duration={0.3}>
 *   <YourComponent />
 * </ClickAnimation>
 *
 * @param {ClickAnimationProps} props - The properties to configure the click animation.
 * @returns {JSX.Element} The animated children with click effect.
 */
const ClickAnimation: FC<ClickAnimationProps> = ({
  children,
  scaleOnClick = 0.97,
  opacityOnClick = 0.9,
  duration = 0.2,
  easing = [0.42, 0, 0.58, 1],
}) => {
  return (
    <>
      <motion.div
        whileTap={{ scale: scaleOnClick, opacity: opacityOnClick }}
        transition={{ duration, ease: easing }}
      >
        {children}
      </motion.div>
      {/* Fallback content in case JavaScript is disabled */}
      <noscript>
        <div>{children}</div>
      </noscript>
    </>
  );
};

export default ClickAnimation;
