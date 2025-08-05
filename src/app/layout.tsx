import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yourCustomFont = localFont({
  src: '../../public/fonts/PPEditorialNew-Italic.otf',
  display: 'swap', // Optional: controls font loading behavior
  variable: '--ppe-italic', // Optional: for use with CSS variables
});

export const metadata: Metadata = {
  title: "Adnan Khan Portfolio",
  description: "Adnan Khan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${yourCustomFont.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
