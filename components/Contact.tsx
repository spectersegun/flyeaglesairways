"use client";

import { useBooking } from "./booking-context";

export default function Contact() {
  const { openBooking } = useBooking();
  return (
    <section
      id="contact"
      className="ea-section"
      style={{ background: "#EDE6D8", padding: "110px 72px" }}
    >
      <div
        className="ea-contact"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 72,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#9EA300",
              marginBottom: 26,
            }}
          >
            Begin an Inquiry
          </div>
          <h2
            className="serif"
            style={{
              fontWeight: 300,
              fontSize: "clamp(36px,4.2vw,60px)",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Tell us where
            <br />
            you&apos;d like to go.
          </h2>
          <p
            style={{
              maxWidth: 440,
              margin: "28px 0 0",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.75,
              color: "#5A5346",
            }}
          >
            Every journey with Eagle Airways begins with a conversation. Share the
            outline and our team will design the rest — discreetly, and without
            obligation.
          </p>
          <button
            onClick={openBooking}
            style={{
              display: "inline-block",
              marginTop: 40,
              border: "none",
              cursor: "pointer",
              color: "#F4F0E8",
              background: "#5C2D91",
              fontSize: 12,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "16px 34px",
              borderRadius: 2,
            }}
          >
            Book a Jet →
          </button>
          <div
            style={{
              marginTop: 24,
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.95,
              color: "#5A5346",
            }}
          >
            <a
              href="mailto:info@flyeagleairways.com"
              style={{
                color: "#5A5346",
                textDecoration: "none",
                borderBottom: "1px solid rgba(33,30,26,0.25)",
              }}
            >
              info@flyeagleairways.com
            </a>
            <br />
            <a
              href="https://flyeagleairways.com"
              style={{
                color: "#5A5346",
                textDecoration: "none",
                borderBottom: "1px solid rgba(33,30,26,0.25)",
              }}
            >
              flyeagleairways.com
            </a>
          </div>
        </div>
        <div style={{ paddingTop: 8 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#8A8375",
              marginBottom: 16,
            }}
          >
            Head Office
          </div>
          <address
            className="serif"
            style={{
              fontStyle: "normal",
              fontSize: 22,
              lineHeight: 1.55,
              color: "#2A261F",
            }}
          >
            Eagle Airways
            <br />
            Suite A86
            <br />
            NAF Office Complex
            <br />
            International and Local Airport Road
            <br />
            Ikeja,
            <br />
            Lagos.
          </address>
          <div
            style={{
              width: 36,
              height: 1,
              background: "rgba(33,30,26,0.2)",
              margin: "32px 0",
            }}
          />
          <div
            style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "#5A5346" }}
          >
            Charter &amp; Leasing enquiries
            <br />
            Available around the clock
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#8A8375",
            }}
          >
            Telephone
          </div>
          <a
            href="tel:+2349111290000"
            className="serif"
            style={{
              display: "inline-block",
              marginTop: 8,
              fontSize: 22,
              color: "#5C2D91",
              textDecoration: "none",
            }}
          >
            +234 911 129 0000
          </a>
        </div>
      </div>
    </section>
  );
}
