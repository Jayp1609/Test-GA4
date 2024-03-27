"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>

      <body className={inter.className}>
        <main>{children}</main>
        <GoogleTagManager gtmId="GTM-NDQHW6GD" />
      </body>
    </html>
  );
}
