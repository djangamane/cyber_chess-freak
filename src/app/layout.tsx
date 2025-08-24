import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";
import SpaceshipLayout from "./components/SpaceshipLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planetary Chess - Counter-Racism Strategic Command Center",
  description: "Educational gaming platform using chess and game theory to combat systemic racism. Join the mission for social change through strategic thinking.",
  keywords: "planetary chess, counter-racism, educational gaming, social justice, chess strategy, systemic racism",
  authors: [{ name: "Dr. Francis Cress Welsing and Dr. Amos Wilson" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TransitionProvider>
          <SpaceshipLayout>
            {children}
          </SpaceshipLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}