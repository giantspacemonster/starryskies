import Container from "@/components/common/Container/Container";
import styles from "./Content.module.css";
import { useEffect, useState } from "react";
export default function Content({ visible }) {
  return (
    <Container style={{ width: "100%" }}>
      {!visible ? (
        <div
          style={{
            padding: "24px",
          }}
        >
          <img
            src="/images/stars2.gif"
            alt="stars"
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "12px",
            }}
          />
          <div className={styles.form}>
            <div style={{ display: "flex" }}>
              <div className={styles.inputLabel}>Longitude</div>
              <input type="text" />
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.inputLabel}>Latitude</div>
              <input type="text" />
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.inputLabel}>Time</div>
              <input type="text" />
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.inputLabel}>Date</div>
              <input type="text" />
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.inputLabel}>Direction</div>
              <input type="text" />
            </div>
          </div>
        </div>
      ) : null}
    </Container>
  );
}
