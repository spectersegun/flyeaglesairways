"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const IMAGES = [
  "/images/cabin-seat.jpeg",
  "/images/cabin-aisle-2.jpeg",
  "/images/cabin-map.jpeg",
  "/images/cabin-aisle-3.jpeg",
  "/images/cabin-camel-2.jpeg",
  "/images/cabin-camel-3.jpeg",
  "/images/cabin-camel-4.jpeg",
];

const CARD = 320;
const GAP = 14;
const STEP = CARD + GAP; // 334
const LOOP_W = STEP * IMAGES.length;
const SPEED = 0.055; // px per ms — deliberately slow/quiet

export default function CabinCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const paused = useRef(false);
  const visible = useRef(true);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    // Pause the loop when the carousel is off-screen (saves CPU/battery).
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(viewport);

    let raf = 0;
    let last: number | null = null;
    const tick = (t: number) => {
      if (last != null && !paused.current && visible.current) {
        offset.current += (t - last) * SPEED;
        if (offset.current >= LOOP_W) offset.current -= LOOP_W;
        track.style.transform = `translateX(${-offset.current}px)`;
      }
      last = t;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const nudge = (dir: number) => {
    offset.current = ((offset.current + dir * STEP) % LOOP_W + LOOP_W) % LOOP_W;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-offset.current}px)`;
    }
  };

  const arrowStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "1px solid rgba(33,30,26,0.18)",
    background: "#F4F0E8",
    color: "#5C2D91",
    fontFamily: "var(--font-serif), Georgia, serif",
    fontSize: 26,
    lineHeight: 1,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 22px rgba(27,25,21,0.12)",
    zIndex: 2,
  };

  return (
    <section id="gallery" className="ea-pad" style={{ padding: "120px 72px 20px" }}>
      <div style={{ maxWidth: 640, marginBottom: 52 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#9EA300",
            marginBottom: 26,
          }}
        >
          A look inside
        </div>
        <h2
          className="serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(32px,3.6vw,54px)",
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          Cream leather, warm woods, and light that lasts the whole flight.
        </h2>
      </div>

      <div style={{ position: "relative" }}>
        <div
          ref={viewportRef}
          className="gallery-viewport"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div ref={trackRef} className="gallery-track">
            {/* Duplicated once for a seamless loop */}
            {[...IMAGES, ...IMAGES].map((src, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 ${CARD}px`,
                  aspectRatio: "3 / 4",
                  position: "relative",
                }}
              >
                <Image
                  src={src}
                  alt="Eagle Airways cabin interior"
                  fill
                  sizes="320px"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => nudge(-1)}
          aria-label="Previous"
          style={{ ...arrowStyle, left: -20 }}
        >
          ‹
        </button>
        <button
          onClick={() => nudge(1)}
          aria-label="Next"
          style={{ ...arrowStyle, right: -20 }}
        >
          ›
        </button>
      </div>
    </section>
  );
}
