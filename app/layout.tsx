import type { Metadata } from "next";
import "./globals.css";
import { CustomThemeProvider } from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Andrew Morrison | Software Engineer",
  description: "Andrew Morrison's Portfolio Website",
};

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
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
