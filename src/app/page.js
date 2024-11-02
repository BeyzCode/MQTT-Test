// app/page.js atau pages/index.js
"use client"; // gunakan ini jika Next.js versi 13+

import { useState } from "react";

export default function Home() {
  // State untuk mengatur apakah lampu menyala atau mati
  const [isLampOn, setIsLampOn] = useState(false);

  // Fungsi untuk menyalakan lampu
  const turnOn = () => setIsLampOn(true);

  // Fungsi untuk mematikan lampu
  const turnOff = () => setIsLampOn(false);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.lamp,
          backgroundColor: isLampOn ? "yellow" : "#333",
        }}
      />
      <div style={styles.buttons}>
        <button
          style={{ ...styles.button, backgroundColor: "green", color: "white" }}
          onClick={turnOn}
        >
          On
        </button>
        <button
          style={{ ...styles.button, backgroundColor: "red", color: "white" }}
          onClick={turnOff}
        >
          Off
        </button>
      </div>
    </div>
  );
}

// CSS-in-JS styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
  },
  lamp: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  },
  buttons: {
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "0 10px",
    cursor: "pointer",
  },
};
