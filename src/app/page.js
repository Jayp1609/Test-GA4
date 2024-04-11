"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
//import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  const handleClick = () => {
    pushEventToDataLayer({ event: "login" });
  };

  return (
    <main className={styles.main}>
      <div>Fetch Data</div>
      <div id="comments-container"></div>
      <button
        // onClick={() => {
        //   sendGTMEvent({ event: "buttonClicked", value: "xyz" });
        // }}
        onClick={handleClick}
      >
        Click Here for google eventsssssss
      </button>
      <Link href="productlist">Go to productlist</Link>
      <Link href="productserver">Go to productlist server</Link>
    </main>
  );
}
