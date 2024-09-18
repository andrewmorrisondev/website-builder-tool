"use client";
import React, { useState, ReactNode } from "react";
import { Drawer, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Icon for close button
import MenuIcon from "@mui/icons-material/Menu"; // Icon for menu button
import { IconButton } from "../registry"; // Assuming IconButton is a custom component

// Interface for the Sidebar component props
interface SidebarProps {
  isDrawerOpen?: boolean; // Controls if the drawer is open (optional, defaults to false)
  toggleDrawer?: (open: boolean) => () => void; // Function to toggle the drawer open/close state (optional, default provided)
  drawerWidth?: number; // Width of the drawer in pixels (optional, defaults to 240)
  children: ReactNode; // Children elements to render inside the drawer
}

const Sidebar = ({
  isDrawerOpen: isDrawerOpenProp, // Optional, controlled state for the drawer open/close
  toggleDrawer: toggleDrawerProp, // Optional function to toggle drawer
  drawerWidth = 240, // Default width of the drawer if not provided
  children, // Children to be rendered inside the drawer
}: SidebarProps): JSX.Element => {
  // Local state if isDrawerOpen is not passed as a prop
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(
    isDrawerOpenProp || false,
  );

  // Default toggle function if not provided
  const defaultToggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Use the passed toggleDrawer or default one
  const toggleDrawer = toggleDrawerProp || defaultToggleDrawer;

  return (
    <div>
      {/* Button to open the drawer */}
      <IconButton
        icon={<MenuIcon />}
        onClick={toggleDrawer(true)}
        sx={{
          margin: "1rem",
          marginRight: "2rem",
          position: "fixed",
          zIndex: 1300,
          display: isDrawerOpen ? "none" : "block", // Hide button when drawer is open
        }}
      />

      <Drawer
        anchor="left"
        open={isDrawerOpen} // Controls the visibility of the drawer
        onClose={toggleDrawer(false)} // Function called when drawer is closed
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
        <div
          style={{
            width: drawerWidth,
            padding: "1rem",
          }}
        >
          {/* Box containing the drawer title and close button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/* Close button inside the drawer */}
            <IconButton icon={<CloseIcon />} onClick={toggleDrawer(false)} />
          </Box>
          {/* Render the children inside the drawer */}
          <Box sx={{ paddingTop: "1rem" }}>{children}</Box>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
