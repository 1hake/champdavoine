import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, League_Spartan, Space_Mono } from "next/font/google";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const heading = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const numeric = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-numeric",
});

export const metadata: Metadata = {
  title: "Colin Champdavoine - Développeur Frontend & Bedroom Music Artist",
  description: "Portfolio de Colin Champdavoine, développeur frontend spécialisé en React, et bedroom music artist a ses heures perdues. Découvrez mes projets tech et créatifs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${numeric.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
