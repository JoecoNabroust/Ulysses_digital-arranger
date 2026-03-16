import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { ArrangerModeProvider } from "@/context/ArrangerModeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Ulysses: The Digital Arranger",
  description: "A modernist archive interface for Joyce scholarship."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-ui text-base leading-relaxed antialiased`}>
        <ArrangerModeProvider>{children}</ArrangerModeProvider>
      </body>
    </html>
  );
}
