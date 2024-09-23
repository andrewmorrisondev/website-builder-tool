import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";
/**
 * Timeline Component
 *
 * This component renders a vertical timeline with animated items. Each item can display a title, date, and content.
 *
 * @example
 * <Timeline
 *   items={[
 *     { title: "Event 1", date: "2024-01-01", content: <p>Details of Event 1</p> },
 *     { title: "Event 2", date: "2024-02-01", content: <p>Details of Event 2</p> }
 *   ]}
 * />
 *
 * @param {TimelineProps} props - The properties to configure the timeline.
 * @returns {JSX.Element} The animated timeline component.
 */
const Timeline = ({ items, duration = 0.3, easing = [0.42, 0, 0.58, 1], }) => {
    const theme = useTheme();
    return (_jsx(Box, { sx: {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            borderLeft: `2px solid ${theme.palette.divider}`,
            paddingLeft: "1rem",
            position: "relative",
        }, children: items.map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, translateY: 50 }, animate: { opacity: 1, translateY: 0 }, transition: { duration, ease: easing }, style: {
                position: "relative",
                paddingBottom: "1rem",
            }, children: [_jsxs(Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                    }, children: [_jsx(Box, { sx: {
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: theme.palette.primary.main,
                                position: "absolute",
                                left: "-20px",
                            } }), _jsx(Box, { component: "time", dateTime: item.date, sx: {
                                marginRight: "1rem",
                                color: theme.palette.text.secondary,
                                fontSize: "0.875rem",
                            }, children: item.date }), _jsx(Box, { component: "h3", sx: {
                                fontSize: "1.25rem",
                                fontWeight: "bold",
                                color: theme.palette.text.primary,
                            }, children: item.title })] }), _jsx(Box, { sx: {
                        marginTop: "0.5rem",
                        color: theme.palette.text.primary,
                    }, children: item.content })] }, index))) }));
};
export default Timeline;
//# sourceMappingURL=Timeline.js.map