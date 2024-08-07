// Importing CSS globally
import "./globals.css";
// Importing Poppins font from Google Fonts
import { Poppins } from "next/font/google";
// Importing ThemeProvider from your components
import { ThemeProvider } from "./components/theme-provider";

// Importing Metadata type from Next.js
import type { Metadata } from "next";

// Initializing Poppins font with specified options
const font = Poppins({ subsets: ["latin"], weight: "500" });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Namaz Timer",
  description: "Generated by create next app",
};

// RootLayout component definition
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Added missing closing tag for link */}
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>

      </head>
      
      <body className={font.className}>
        {/* Wrapped ThemeProvider around children */}
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
