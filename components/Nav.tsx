"use client";

import Image from "next/image";
import { useBooking } from "./booking-context";

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#4A4438",
  fontSize: 12,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
};

export default function Nav() {
  const { openBooking } = useBooking();
  return (
    <nav
      className="ea-pad"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 48px",
        background: "rgba(244,240,232,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(33,30,26,0.10)",
      }}
    >
      <a
        href="#top"
        style={{
          textDecoration: "none",
          color: "#5C2D91",
          display: "flex",
          alignItems: "center",
          gap: 13,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Eagle Airways"
          width={97}
          height={54}
          priority
          style={{ height: 54, width: "auto" }}
        />
      </a>
      <div
        className="ea-navlinks"
        style={{ display: "flex", alignItems: "center", gap: 38 }}
      >
        <a href="#experience" style={linkStyle}>
          Experience
        </a>
        <a href="#services" style={linkStyle}>
          Services
        </a>
        <a href="#gallery" style={linkStyle}>
          Cabins
        </a>
        <a href="#film" style={linkStyle}>
          Film
        </a>
        <a href="#fleet" style={linkStyle}>
          Fleet
        </a>
        <button
          onClick={openBooking}
          style={{
            border: "none",
            cursor: "pointer",
            color: "#F4F0E8",
            background: "#5C2D91",
            fontSize: 12,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "12px 26px",
            borderRadius: 2,
          }}
        >
          Book a Jet
        </button>
      </div>
    </nav>
  );
}
