"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <GoogleTagManager gtmId="GTM-NDQHW6GD" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
