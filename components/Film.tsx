"use client";

import { useEffect, useRef } from "react";

type Clip = { key: string; src: string; poster: string; caption: string };

const CLIPS: Clip[] = [
  {
    key: "1",
    src: "/videos/film-1.mp4",
    poster: "/videos/film-1.jpg", // generate a poster still (see README)
    caption: "Wheels-up · Lagos",
  },
  {
    key: "2",
    src: "/videos/film-2.mp4",
    poster: "/videos/film-2.jpg",
    caption: "Cabin service · In flight",
  },
];

function VideoCard({ clip }: { clip: Clip }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const storageKey = `ea-vid-${clip.key}`;
    const show = (visible: boolean) => {
      if (btnRef.current) btnRef.current.style.opacity = visible ? "1" : "0";
    };
    const onLoaded = () => {
      const t = parseFloat(localStorage.getItem(storageKey) || "0");
      // Only resume if not near the end (avoids seeking to end of short clips).
      if (t > 0 && t < v.duration - 0.5) v.currentTime = t;
    };
    const onTime = () => localStorage.setItem(storageKey, String(v.currentTime));
    const onPlay = () => show(false);
    const onPause = () => show(true);
    const onEnded = () => {
      show(true);
      localStorage.removeItem(storageKey);
    };
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, [clip.key]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <figure style={{ margin: 0, width: 340, maxWidth: "100%" }}>
      <div
        style={{
          position: "relative",
          aspectRatio: "9 / 16",
          borderRadius: 4,
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 26px 60px rgba(0,0,0,0.45)",
        }}
      >
        <video
          ref={videoRef}
          src={clip.src}
          poster={clip.poster}
          playsInline
          preload="metadata"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <button
          ref={btnRef}
          onClick={toggle}
          aria-label="Play video"
          style={{
            position: "absolute",
            inset: 0,
            margin: 0,
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(180deg, rgba(20,18,15,0.15), rgba(20,18,15,0.55))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.35s",
          }}
        >
          <span
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              border: "1px solid rgba(244,240,232,0.75)",
              background: "rgba(27,25,21,0.35)",
              backdropFilter: "blur(3px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "11px 0 11px 18px",
                borderColor: "transparent transparent transparent #F4F0E8",
                marginLeft: 4,
              }}
            />
          </span>
        </button>
      </div>
      <figcaption
        style={{
          marginTop: 18,
          fontSize: 11,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#8F887A",
        }}
      >
        {clip.caption}
      </figcaption>
    </figure>
  );
}

export default function Film() {
  return (
    <section
      id="film"
      className="ea-section"
      style={{ background: "#1B1915", color: "#EFE9DC", padding: "120px 72px" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
            marginBottom: 60,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#A8875A",
                marginBottom: 26,
              }}
            >
              In motion
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
              A closer look, in the air and on the ground.
            </h2>
          </div>
          <p
            style={{
              maxWidth: 300,
              margin: 0,
              fontWeight: 300,
              fontSize: 14,
              lineHeight: 1.75,
              color: "#9A9284",
            }}
          >
            A few moments from recent journeys — tap to play.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 36,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {CLIPS.map((clip) => (
            <VideoCard key={clip.key} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
