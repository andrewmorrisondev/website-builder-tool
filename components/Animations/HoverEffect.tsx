import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

/**
 * Props for the HoverEffect component.
 *
 * @property {ReactNode} children - The content that will be wrapped with hover effect.
 * @property {number} [scaleOnHover=0.99] - The scale transformation applied when the element is hovered (e.g., 1.1 for enlarging).
 * @property {number} [duration=0.3] - The duration of the hover animation in seconds.
 * @property {number[]} [easing=[0.42, 0, 0.58, 1]] - The cubic bezier easing function for the hover animation.
 */
interface HoverEffectProps {
  children: ReactNode;
  scaleOnHover?: number;
  duration?: number;
  easing?: number[];
}

/**
 * HoverEffect Component
 *
 * This component applies a scale effect to its children when hovered.
 * It allows customization of the scale factor, animation duration, and easing function.
 *
 * @example
 * <HoverEffect scaleOnHover={1.05} duration={0.4}>
 *   <YourComponent />
 * </HoverEffect>
 *
 * @param {HoverEffectProps} props - The properties to configure the hover animation.
 * @returns {JSX.Element} The animated children with hover effect.
 */
const HoverEffect: FC<HoverEffectProps> = ({
  children,
  scaleOnHover = 0.99,
  duration = 0.3,
  easing = [0.42, 0, 0.58, 1],
}) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: scaleOnHover }}
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

export default HoverEffect;
