import { FC, ReactNode } from "react";
/**
 * Props for the Tabs component.
 *
 * @property {string[]} labels - The labels for each tab.
 * @property {ReactNode[]} children - The content to display for each tab panel.
 * @property {number} [duration=0.3] - The duration of the tab switch animation in seconds.
 * @property {number[]} [easing=[0.42, 0, 0.58, 1]] - The cubic bezier easing function for the tab switch animation.
 */
interface TabsProps {
    labels: string[];
    children: ReactNode[];
    duration?: number;
    easing?: number[];
}
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
declare const Tabs: FC<TabsProps>;
export default Tabs;
