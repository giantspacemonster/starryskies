import Container from "@/components/common/Container/Container";
import styles from "./Intro.module.css";
import { useEffect, useState } from "react";
export default function Intro({ text, visible }) {
  
  return (
    <Container style={{ width: "100%" }}>
      {/* The stars in our background */}
      <div className={visible ? styles.introHeading : styles.fadeIntro}>
        <div className={styles.typewriter}>{text}</div>
      </div>
    </Container>
  );
}
