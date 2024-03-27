"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Fetch Data</div>
      <button
        onClick={() => {
          sendGTMEvent({ event: "buttonClicked", value: "xyz" });
        }}
      >
        Click Here for google event
      </button>
      <Link href="productlist">Go to productlist</Link>
      <Link href="productserver">Go to productlist server</Link>
    </main>
  );
}
