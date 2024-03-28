"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
//import { sendGTMEvent } from "@next/third-parties/google";
import useGoogleAnalytics from "../../services/useGoogleAnalytics";

export default function Home() {
  const pushEventToDataLayer = useGoogleAnalytics("G-339K42BX2L");

  const handleClick = () => {
    pushEventToDataLayer({ event: "login" });
  };

  return (
    <main className={styles.main}>
      <div>Fetch Data</div>
      <button
        // onClick={() => {
        //   sendGTMEvent({ event: "buttonClicked", value: "xyz" });
        // }}
        onClick={handleClick}
      >
        Click Here for google event
      </button>
      <Link href="productlist">Go to productlist</Link>
      <Link href="productserver">Go to productlist server</Link>
    </main>
  );
}
