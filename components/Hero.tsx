"use client";

import Image from "next/image";
import { useBooking } from "./booking-context";

export default function Hero() {
  const { openBooking } = useBooking();
  return (
    <section
      id="top"
      className="ea-hero"
      style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", minHeight: "90vh" }}
    >
      <div
        className="ea-hero-text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 72px",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#9EA300",
            marginBottom: 34,
          }}
        >
          Private Aviation · Lagos · London · New York
        </div>
        <h1
          className="serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(46px,5.2vw,82px)",
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          A quieter way
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>to arrive.</span>
        </h1>
        <p
          style={{
            maxWidth: 430,
            margin: "34px 0 0",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.75,
            color: "#5A5346",
          }}
        >
          Private jets for the elevated life — business, leisure, and the occasions
          in between. Leased or chartered, always on your terms.
        </p>
        <div style={{ display: "flex", gap: 18, marginTop: 44 }}>
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
              padding: "15px 30px",
              borderRadius: 2,
            }}
          >
            Book a Jet
          </button>
          <a
            href="#services"
            style={{
              textDecoration: "none",
              color: "#5C2D91",
              fontSize: 12,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "15px 8px",
              borderBottom: "1px solid rgba(33,30,26,0.3)",
              alignSelf: "center",
            }}
          >
            Explore Services
          </a>
        </div>
      </div>
      <div
        className="ea-hero-img"
        style={{ position: "relative", width: "100%", minHeight: 560 }}
      >
        <Image
          src="/images/cabin-aisle-1.jpeg"
          alt="Eagle Airways private jet cabin aisle"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
