import { FC, ReactNode } from "react";
/**
 * Props for the Accordion component.
 *
 * @property {string} title - The title/header of the accordion.
 * @property {ReactNode} children - The content to display when the accordion is open.
 * @property {number} [duration=0.3] - The duration of the open/close animation in seconds.
 * @property {number[]} [easing=[0.42, 0, 0.58, 1]] - The cubic bezier easing function for the open/close animation.
 */
interface AccordionProps {
    title: string;
    children: ReactNode;
    duration?: number;
    easing?: number[];
}
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
declare const Accordion: FC<AccordionProps>;
export default Accordion;
