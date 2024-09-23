import { FC, ReactNode } from "react";
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
declare const Timeline: FC<TimelineProps>;
export default Timeline;
