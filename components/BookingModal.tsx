"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useBooking, jetMailto } from "./booking-context";

const JETS = [
  {
    name: "Gulfstream G4",
    img: "/images/jet-g4.jpeg",
    label: "Long-range · Cream cabin",
  },
  {
    name: "Challenger 604",
    img: "/images/jet-604.jpeg",
    label: "Wide cabin · Warm woods",
  },
];

export default function BookingModal() {
  const { open, closeBooking } = useBooking();

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeBooking]);

  if (!open) return null;

  const selectJet = (jet: string) => {
    closeBooking();
    window.location.href = jetMailto(jet);
  };

  return (
    <div
      onClick={closeBooking}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "rgba(20,18,15,0.58)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ea-modal"
        style={{
          position: "relative",
          background: "#F4F0E8",
          maxWidth: 860,
          width: "100%",
          borderRadius: 4,
          padding: "56px 56px 48px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
        }}
      >
        <button
          onClick={closeBooking}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18,
            right: 22,
            border: "none",
            background: "none",
            fontSize: 28,
            lineHeight: 1,
            color: "#5A5346",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#A8875A",
            marginBottom: 14,
          }}
        >
          Book a Jet
        </div>
        <h2
          className="serif"
          style={{ fontWeight: 300, fontSize: "clamp(28px,3.2vw,40px)", margin: "0 0 8px" }}
        >
          Which aircraft shall we ready?
        </h2>
        <p style={{ fontWeight: 300, fontSize: 15, color: "#5A5346", margin: "0 0 34px" }}>
          Choose a jet and we&apos;ll open a pre-filled enquiry with your details.
        </p>
        <div
          className="ea-jetgrid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
        >
          {JETS.map((jet) => (
            <div
              key={jet.name}
              style={{
                border: "1px solid rgba(33,30,26,0.14)",
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 200 }}>
                <Image
                  src={jet.img}
                  alt={jet.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 22 }}>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#8A8375",
                    marginBottom: 8,
                  }}
                >
                  {jet.label}
                </div>
                <h3
                  className="serif"
                  style={{ fontWeight: 400, fontSize: 26, margin: "0 0 16px" }}
                >
                  {jet.name}
                </h3>
                <button
                  onClick={() => selectJet(jet.name)}
                  style={{
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                    color: "#F4F0E8",
                    background: "#211E1A",
                    fontSize: 12,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: 13,
                    borderRadius: 2,
                  }}
                >
                  Select this jet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
