import { ReactNode } from "react";
interface SidebarProps {
    isDrawerOpen?: boolean;
    toggleDrawer?: (open: boolean) => () => void;
    drawerWidth?: number;
    children: ReactNode;
}
declare const Sidebar: ({ isDrawerOpen: isDrawerOpenProp, toggleDrawer: toggleDrawerProp, drawerWidth, children, }: SidebarProps) => JSX.Element;
export default Sidebar;
