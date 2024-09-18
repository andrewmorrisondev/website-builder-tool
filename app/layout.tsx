"use client";
import "./globals.css";
import Link from "next/link";
import { CustomThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";
import { Sidebar, CTAButton } from "./site-builder-components/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <CssBaseline />
          <Sidebar>
            <Link href="/" passHref>
              <CTAButton label="Home" variant="contained" color="primary" />
            </Link>
            <Link href="/about" passHref>
              <CTAButton label="About" variant="outlined" color="secondary" />
            </Link>
          </Sidebar>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
