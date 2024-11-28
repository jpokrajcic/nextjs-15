import type {Metadata} from "next";
import {Inter, Space_Grotesk as SpaceGrotesk} from "next/font/google";

import "./globals.css";
import DesktopNavbar from "@/components/navigation/navbar/DesktopNavbar";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* width=device-width instructs the browser to set the viewport width to
        match the device's width (example: on DPI 3 device with 980x resolution it takes 320px instead of 980px). 
        initial-scale=1 says that we should start at 1x zoom. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <DesktopNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
