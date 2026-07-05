"use client";

import Logo from "./Logo";
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
          color: "#211E1A",
          display: "flex",
          alignItems: "center",
          gap: 13,
        }}
      >
        <Logo size={40} />
        <span style={{ fontSize: 13, letterSpacing: "4.5px", fontWeight: 400 }}>
          EAGLE AIRWAYS
        </span>
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
            background: "#211E1A",
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
