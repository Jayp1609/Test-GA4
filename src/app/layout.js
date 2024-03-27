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
      
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7HS8SEPRD4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-7HS8SEPRD4');
</script>
      </head>
      <GoogleTagManager gtmId="GTM-NDQHW6GD" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
