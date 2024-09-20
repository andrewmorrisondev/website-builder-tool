// Timeline.tsx component
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";

/**
 * Props for the Timeline component.
 *
 * @property {TimelineItemProps[]} items - An array of timeline items to display.
 * @property {number} [duration=0.3] - The duration of the item entry animation in seconds.
 * @property {number[]} [easing=[0.42, 0, 0.58, 1]] - The cubic bezier easing function for the item entry animation.
 */
interface TimelineProps {
  items: TimelineItemProps[];
  duration?: number;
  easing?: number[];
}

/**
 * Props for each item in the Timeline.
 *
 * @property {string} title - The title of the timeline item.
 * @property {string} date - The date of the timeline item.
 * @property {ReactNode} content - The content or description of the timeline item.
 */
interface TimelineItemProps {
  title: string;
  date: string;
  content: ReactNode;
}

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
const Timeline: FC<TimelineProps> = ({
  items,
  duration = 0.3,
  easing = [0.42, 0, 0.58, 1],
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        borderLeft: `2px solid ${theme.palette.divider}`,
        paddingLeft: "1rem",
        position: "relative",
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration, ease: easing }}
          style={{
            position: "relative",
            paddingBottom: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Timeline dot */}
            <Box
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.main,
                position: "absolute",
                left: "-20px",
              }}
            />

            {/* Date */}
            <Box
              component="time"
              dateTime={item.date}
              sx={{
                marginRight: "1rem",
                color: theme.palette.text.secondary,
                fontSize: "0.875rem",
              }}
            >
              {item.date}
            </Box>

            {/* Title */}
            <Box
              component="h3"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              {item.title}
            </Box>
          </Box>

          {/* Content */}
          <Box
            sx={{
              marginTop: "0.5rem",
              color: theme.palette.text.primary,
            }}
          >
            {item.content}
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default Timeline;
