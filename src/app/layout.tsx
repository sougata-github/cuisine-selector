import "./globals.css";

import { ColorProvider } from "@/components/context/ColorContext";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Geist } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuisines",
  description: "Select your favourite cuisines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(geistSans.className, "antialiased overflow-hidden")}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ColorProvider>
              <main className="max-w-4xl mx-auto px-5 h-screen">
                {children}
              </main>
            </ColorProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
