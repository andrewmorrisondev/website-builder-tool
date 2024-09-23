import { ReactNode } from "react";
interface BodyProps {
    /**
     * The content to be displayed inside the Body component.
     * It accepts any valid ReactNode, including JSX elements, strings, etc.
     */
    children: ReactNode;
    /**
     * Boolean flag indicating whether the sidebar drawer is open.
     * This affects the width of the Body container.
     */
    isDrawerOpen: boolean;
    /**
     * The width of the drawer in pixels.
     * Used to dynamically adjust the Body's width when the drawer is open.
     */
    drawerWidth: number;
}
/**
 * Body component is a flex container that spans the full viewport height and width,
 * adjusting dynamically based on whether a sidebar drawer is open.
 * It also applies a gradient background with a darker shade of the theme's default background.
 *
 * @param {BodyProps} props - The props for the Body component.
 * @returns {JSX.Element} A flex container with dynamic width, height, and background.
 */
declare const Body: ({ children, isDrawerOpen, drawerWidth, }: BodyProps) => JSX.Element;
export default Body;
