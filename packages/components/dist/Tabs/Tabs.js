import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
/**
 * Tabs Component
 *
 * This component displays a set of tabs that can be switched between.
 * The content for each tab is animated on tab change, with customizable duration and easing.
 *
 * @example
 * <Tabs labels={["Tab 1", "Tab 2"]}>
 *   <div>Content for Tab 1</div>
 *   <div>Content for Tab 2</div>
 * </Tabs>
 *
 * @param {TabsProps} props - The properties to configure the tabs.
 * @returns {JSX.Element} The tab set with animated tab switching.
 */
const Tabs = ({ labels, children, duration = 0.3, easing = [0.42, 0, 0.58, 1], }) => {
    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme();
    const handleKeyPress = (event, index) => {
        if (event.key === "Enter" || event.key === " ") {
            setActiveTab(index);
        }
    };
    return (_jsxs(Box, { sx: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: "4px",
            padding: "1rem",
            backgroundColor: theme.palette.background.default,
        }, children: [_jsx(Box, { role: "tablist", sx: {
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1rem",
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }, children: labels.map((label, index) => (_jsx(Box, { role: "tab", tabIndex: 0, onClick: () => setActiveTab(index), onKeyPress: (e) => handleKeyPress(e, index), "aria-selected": activeTab === index, sx: {
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                        backgroundColor: activeTab === index
                            ? theme.palette.primary.main
                            : theme.palette.background.default,
                        color: activeTab === index
                            ? theme.palette.primary.contrastText
                            : theme.palette.text.primary,
                        borderBottom: activeTab === index
                            ? `2px solid ${theme.palette.primary.main}`
                            : "none",
                    }, children: label }, index))) }), _jsx(motion.div, { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 }, transition: { duration, ease: easing }, children: children[activeTab] }, activeTab), _jsx("noscript", { children: _jsx(Box, { children: children[activeTab] }) })] }));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map