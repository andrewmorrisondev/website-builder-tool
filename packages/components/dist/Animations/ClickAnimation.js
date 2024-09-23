import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
const ClickAnimation = ({ children, scaleOnClick = 0.97, opacityOnClick = 0.9, duration = 0.2, easing = [0.42, 0, 0.58, 1], }) => {
    return (_jsxs(_Fragment, { children: [_jsx(motion.div, { whileTap: { scale: scaleOnClick, opacity: opacityOnClick }, transition: { duration, ease: easing }, children: children }), _jsx("noscript", { children: _jsx("div", { children: children }) })] }));
};
export default ClickAnimation;
//# sourceMappingURL=ClickAnimation.js.map