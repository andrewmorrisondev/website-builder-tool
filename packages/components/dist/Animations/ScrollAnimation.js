import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
const ScrollAnimation = ({ children, startOffset = "50%", endOffset = "0%", duration = 0.8, easing = [0.25, 0.1, 0.25, 1], }) => {
    return (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0, translateY: startOffset }, whileInView: { opacity: 1, translateY: endOffset }, viewport: { once: true, amount: 0.5 }, transition: { duration, ease: easing }, children: children }), _jsx("noscript", { children: _jsx("div", { style: { opacity: 1 }, children: children }) })] }));
};
export default ScrollAnimation;
//# sourceMappingURL=ScrollAnimation.js.map