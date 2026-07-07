"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Destination = {
  city: string;
  continent: string;
  blurb: string;
  img: string;
};

const DESTINATIONS: Destination[] = [
  {
    city: "Lagos",
    continent: "Africa",
    blurb: "Our home port on the Atlantic — where every Eagle journey begins.",
    img: "/images/destinations/lagos.jpg",
  },
  {
    city: "London",
    continent: "Europe",
    blurb: "A three-hour reach into the heart of the old world.",
    img: "/images/destinations/london.jpg",
  },
  {
    city: "New York",
    continent: "North America",
    blurb: "Manhattan by dusk, on the far side of the Atlantic.",
    img: "/images/destinations/newyork.jpg",
  },
  {
    city: "Beijing",
    continent: "Asia",
    blurb: "Eastward to the capital of the world's oldest continuous state.",
    img: "/images/destinations/beijing.jpg",
  },
  {
    city: "Mumbai",
    continent: "Asia",
    blurb: "The Gateway of India, and the shores of the subcontinent.",
    img: "/images/destinations/mumbai.jpg",
  },
  {
    city: "Sydney",
    continent: "Oceania",
    blurb: "The harbour, the bridge, the sails — the edge of the Pacific.",
    img: "/images/destinations/sydney.jpg",
  },
  {
    city: "Fiji",
    continent: "Oceania",
    blurb: "Where the map runs out and the water turns to glass.",
    img: "/images/destinations/fiji.jpg",
  },
];

const CARD = 360;
const GAP = 20;
const STEP = CARD + GAP; // 380
const LOOP_W = STEP * DESTINATIONS.length;
const SPEED = 0.05; // px per ms — a slow, unhurried drift

export default function Destinations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const paused = useRef(false);
  const visible = useRef(true);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    // Pause the drift when the slider is off-screen (saves CPU/battery).
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
    <section
      id="destinations"
      className="ea-pad"
      style={{ padding: "120px 72px 40px" }}
    >
      <div style={{ maxWidth: 680, marginBottom: 52 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#9EA300",
            marginBottom: 26,
          }}
        >
          Every continent, one house
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
          From Lagos, we reach the world.
        </h2>
        <p
          style={{
            maxWidth: 540,
            margin: "26px 0 0",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.75,
            color: "#5A5346",
          }}
        >
          Africa, Europe, the Americas, Asia and the Pacific — Eagle Airways flies
          between them all. A private cabin, a single crew, and no continent out of
          reach.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <div
          ref={viewportRef}
          className="gallery-viewport"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div
            ref={trackRef}
            className="gallery-track"
            style={{ gap: GAP }}
          >
            {/* Duplicated once for a seamless loop */}
            {[...DESTINATIONS, ...DESTINATIONS].map((d, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 ${CARD}px`,
                  aspectRatio: "4 / 5",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 3,
                }}
              >
                <Image
                  src={d.img}
                  alt={`${d.city}, ${d.continent}`}
                  fill
                  sizes="360px"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(20,14,30,0) 38%, rgba(20,14,30,0.82) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 26,
                    right: 26,
                    bottom: 26,
                    color: "#F4F0E8",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#C7CB5A",
                      marginBottom: 10,
                    }}
                  >
                    {d.continent}
                  </div>
                  <div
                    className="serif"
                    style={{
                      fontWeight: 300,
                      fontSize: 30,
                      lineHeight: 1.05,
                      marginBottom: 10,
                    }}
                  >
                    {d.city}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 300,
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: "rgba(244,240,232,0.82)",
                    }}
                  >
                    {d.blurb}
                  </p>
                </div>
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
