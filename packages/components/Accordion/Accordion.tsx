import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

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
const Accordion: FC<AccordionProps> = ({
  title,
  children,
  duration = 0.3,
  easing = [0.42, 0, 0.58, 1],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      toggleAccordion();
    }
  };

  return (
    <section
      style={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <header
        onClick={toggleAccordion}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
        style={{
          padding: "1rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          cursor: "pointer",
        }}
        aria-expanded={isOpen}
      >
        {title}
      </header>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration, ease: easing }}
        style={{
          overflow: "hidden",
          padding: isOpen ? "1rem" : "0 1rem",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </motion.div>
      <noscript>
        <div>{children}</div>
      </noscript>
    </section>
  );
};

export default Accordion;
