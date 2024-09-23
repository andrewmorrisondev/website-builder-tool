"use client";
import "../globals.css";
import Link from "next/link";
import { useState } from "react";
import { CustomThemeProvider } from "./context/ThemeContext";
import { CssBaseline, Box } from "@mui/material";
import { Sidebar, CTAButton, Body } from "@components/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = 250;

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <html lang="en">
        <body>
          <CustomThemeProvider>
            <CssBaseline />
            {/* Sidebar */}
            <Sidebar
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
              drawerWidth={drawerWidth}
            >
              <Link href="/" passHref>
                <CTAButton label="Home" variant="contained" color="primary" />
              </Link>
              <Link href="/about" passHref>
                <CTAButton label="About" variant="outlined" color="secondary" />
              </Link>
            </Sidebar>

            {/* Main content */}
            <Box
              component="main"
              sx={{
                transition: "margin-left 0.3s ease",
                marginLeft: isDrawerOpen ? `${drawerWidth}px` : 0,
              }}
            >
              <Body isDrawerOpen={isDrawerOpen} drawerWidth={drawerWidth}>
                {children}
              </Body>
            </Box>
          </CustomThemeProvider>
        </body>
      </html>
    </>
  );
}

