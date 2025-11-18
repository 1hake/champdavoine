import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const heading = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
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
      <body className={`${heading.variable} ${body.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
