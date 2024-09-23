import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

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
const Tabs: FC<TabsProps> = ({
  labels,
  children,
  duration = 0.3,
  easing = [0.42, 0, 0.58, 1],
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();

  const handleKeyPress = (event: React.KeyboardEvent, index: number): void => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveTab(index);
    }
  };

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
        padding: "1rem",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Tab Labels */}
      <Box
        role="tablist"
        sx={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        {labels.map((label, index) => (
          <Box
            key={index}
            role="tab"
            tabIndex={0}
            onClick={() => setActiveTab(index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            aria-selected={activeTab === index}
            sx={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              backgroundColor:
                activeTab === index
                  ? theme.palette.primary.main
                  : theme.palette.background.default,
              color:
                activeTab === index
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              borderBottom:
                activeTab === index
                  ? `2px solid ${theme.palette.primary.main}`
                  : "none",
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* Tab Content */}
      <motion.div
        key={activeTab} // Ensure the animation runs when the active tab changes
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration, ease: easing }}
      >
        {children[activeTab]}
      </motion.div>

      <noscript>
        <Box>{children[activeTab]}</Box>
      </noscript>
    </Box>
  );
};

export default Tabs;
