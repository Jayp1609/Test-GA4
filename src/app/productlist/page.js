"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./page.css";
import Script from "next/script";
import User from "../components/user";
//import { redirect } from "next/navigation";

export default function Page() {
  // redirect("/");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
      <h1>Product List</h1>
      <User></User>
      <Image
        src="https://images.pexels.com/photos/16154734/pexels-photo-16154734/free-photo-of-modern-skyscraper-towering-over-city.jpeg?auto=compress&cs=tinysrgb&w=800"
        width={200}
        height={200}
        alt="notihnfff..."
      />
      <div style={{ padding: "20px" }}>
        <button className="bn5">Hover</button>
      </div>
      <div style={{ padding: "20px" }}>
        <button className="bn47">Hover</button>
      </div>
    </div>
  );
}
