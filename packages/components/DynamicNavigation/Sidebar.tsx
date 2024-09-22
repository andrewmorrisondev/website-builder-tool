"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { Drawer, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Icon for close button
import MenuIcon from "@mui/icons-material/Menu";
import { CTAButton } from "@components/registry";

// Interface for the Sidebar component props
interface SidebarProps {
  isDrawerOpen?: boolean; // Controls if the drawer is open (optional, defaults to false)
  toggleDrawer?: (open: boolean) => () => void; // Function to toggle the drawer open/close state (optional, default provided)
  drawerWidth?: number; // Width of the drawer in pixels (optional, defaults to 240)
  children: ReactNode; // Children elements to render inside the drawer
}

const Sidebar = ({
  isDrawerOpen: isDrawerOpenProp = false, // Optional, controlled state for the drawer open/close, default to false
  toggleDrawer: toggleDrawerProp, // Optional function to toggle drawer
  drawerWidth = 240, // Default width of the drawer if not provided
  children, // Children to be rendered inside the drawer
}: SidebarProps): JSX.Element => {
  // Local state for isDrawerOpen if it is not passed as a prop
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(isDrawerOpenProp);

  // Update the local state when the prop isDrawerOpenProp changes
  useEffect(() => {
    setDrawerOpen(isDrawerOpenProp);
  }, [isDrawerOpenProp]);

  // Default toggle function if not provided
  const defaultToggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Use the passed toggleDrawer function or the default one
  const toggleDrawer = toggleDrawerProp || defaultToggleDrawer;

  return (
    <>
                  {/* Menu button */}
                  <CTAButton
              icon={<MenuIcon />}
              onClick={() => defaultToggleDrawer(true)}
              sx={{
                position: "fixed",
                top: "1rem",
                left: "1rem",
                zIndex: 1000,
              }}
            ></CTAButton>
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      variant="persistent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      >
      <Box
        sx={{
          width: drawerWidth,
          padding: "1rem",
        }}
        >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          >
          <h3>Nothing to See here 👀</h3>
          <CTAButton
            icon={<CloseIcon />}
            onClick={() => toggleDrawer(true)}
            ></CTAButton>
        </Box>
        {children}
      </Box>
    </Drawer>
            </>
  );
};

export default Sidebar;
