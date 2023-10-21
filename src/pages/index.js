import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Intro from "@/components/deco/Intro/Intro";
import Stars from "@/components/deco/Stars/Stars";
import Content from "@/components/deco/Content/Content";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Starry Skies</title>
        <meta name="description" content="What we could be!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title} style={{fontSize: "4em", lineHeight: "0"}}>Starry Skies</h1>
        <Intro text="Let us rediscover the stars, relight the night. 🌃🌟🌌" visible={visible} />
        <Content visible={visible} />
        <div style={{ width: "100%" }}>
          {/* The stars in our background */}
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </main>
    </>
  );
}
