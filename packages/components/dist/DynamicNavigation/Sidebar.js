"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Drawer, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Icon for close button
import CTAButton from "../Buttons/CTAButton";
const Sidebar = ({ isDrawerOpen: isDrawerOpenProp = false, // Optional, controlled state for the drawer open/close, default to false
toggleDrawer: toggleDrawerProp, // Optional function to toggle drawer
drawerWidth = 240, // Default width of the drawer if not provided
children, // Children to be rendered inside the drawer
 }) => {
    // Local state for isDrawerOpen if it is not passed as a prop
    const [isDrawerOpen, setDrawerOpen] = useState(isDrawerOpenProp);
    // Update the local state when the prop isDrawerOpenProp changes
    useEffect(() => {
        setDrawerOpen(isDrawerOpenProp);
    }, [isDrawerOpenProp]);
    // Default toggle function if not provided
    const defaultToggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    // Use the passed toggleDrawer function or the default one
    const toggleDrawer = toggleDrawerProp || defaultToggleDrawer;
    return (_jsx(Drawer, { anchor: "left", open: isDrawerOpen, onClose: toggleDrawer(false), variant: "persistent", sx: {
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
            },
        }, children: _jsxs(Box, { sx: {
                width: drawerWidth,
                padding: "1rem",
            }, children: [_jsxs(Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("h3", { children: "Nothing to See here \uD83D\uDC40" }), _jsx(CTAButton, { icon: _jsx(CloseIcon, {}), onClick: () => toggleDrawer(true) })] }), children] }) }));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map