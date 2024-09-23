import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
/**
 * Accordion Component
 *
 * This component displays a collapsible section with a title.
 * The open/close animation and styling are controlled via props and the theme.
 *
 * @example
 * <Accordion title="Accordion Title" duration={0.3}>
 *   <p>Accordion content goes here...</p>
 * </Accordion>
 *
 * @param {AccordionProps} props - The properties to configure the accordion.
 * @returns {JSX.Element} The accordion with customizable title and content.
 */
const Accordion = ({ title, children, duration = 0.3, easing = [0.42, 0, 0.58, 1], }) => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            toggleAccordion();
        }
    };
    return (_jsxs("section", { style: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: "4px",
            overflow: "hidden",
        }, children: [_jsx("header", { onClick: toggleAccordion, onKeyPress: handleKeyPress, role: "button", tabIndex: 0, style: {
                    padding: "1rem",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    cursor: "pointer",
                }, "aria-expanded": isOpen, children: title }), _jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }, transition: { duration, ease: easing }, style: {
                    overflow: "hidden",
                    padding: isOpen ? "1rem" : "0 1rem",
                    backgroundColor: theme.palette.background.default,
                }, children: children }), _jsx("noscript", { children: _jsx("div", { children: children }) })] }));
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map