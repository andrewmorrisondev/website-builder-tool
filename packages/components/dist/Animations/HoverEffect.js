import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
const HoverEffect = ({ children, scaleOnHover = 0.99, duration = 0.3, easing = [0.42, 0, 0.58, 1], }) => {
    return (_jsxs(_Fragment, { children: [_jsx(motion.div, { whileHover: { scale: scaleOnHover }, transition: { duration, ease: easing }, children: children }), _jsx("noscript", { children: _jsx("div", { children: children }) })] }));
};
export default HoverEffect;
//# sourceMappingURL=HoverEffect.js.map