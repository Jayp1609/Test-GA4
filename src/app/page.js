import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Fetch Data</div>
      <Link href="productlist">Go to productlist</Link>
      <Link href="productserver">Go to productlist server</Link>
    </main>
  );
}
