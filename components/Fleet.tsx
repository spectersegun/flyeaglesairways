import Image from "next/image";

export default function Fleet() {
  return (
    <section
      id="fleet"
      style={{ background: "#5C2D91", color: "#EFE9DC", marginTop: 120 }}
    >
      <div
        className="ea-fleet"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div
          className="ea-fleet-img"
          style={{ position: "relative", width: "100%", minHeight: 580 }}
        >
          <Image
            src="/images/fleet-main.png"
            alt="Gulfstream cream-leather cabin"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className="ea-fleet-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "100px 72px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#9EA300",
              marginBottom: 30,
            }}
          >
            The Fleet
          </div>
          <h2
            className="serif"
            style={{
              fontWeight: 300,
              fontSize: "clamp(34px,3.6vw,54px)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Aircraft chosen
            <br />
            for how they <span style={{ fontStyle: "italic" }}>feel</span>.
          </h2>
          <p
            style={{
              maxWidth: 440,
              margin: "30px 0 0",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.75,
              color: "#B8B0A0",
            }}
          >
            Light jets for the quick hop, long-range cabins for the crossing. Each
            maintained to international standard, each staffed by crew who anticipate
            rather than ask.
          </p>
          <div style={{ display: "flex", gap: 56, marginTop: 52 }}>
            <div>
              <div className="serif" style={{ fontSize: 40, fontWeight: 300 }}>
                3
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8F887A",
                  marginTop: 6,
                }}
              >
                Continents served
              </div>
            </div>
            <div>
              <div className="serif" style={{ fontSize: 40, fontWeight: 300 }}>
                24/7
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8F887A",
                  marginTop: 6,
                }}
              >
                Concierge on call
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
