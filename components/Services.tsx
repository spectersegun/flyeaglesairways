const SERVICES = [
  {
    n: "01",
    title: "Business Travel",
    body: "Board on your schedule, close the deal in the air, and arrive composed. Seamless multi-city itineraries between Lagos, London, and New York.",
  },
  {
    n: "02",
    title: "Lifestyle Experiences",
    body: "Weekends that begin at wheels-up. Curated escapes, cultural seasons, and the kind of trips that become the story you tell for years.",
  },
  {
    n: "03",
    title: "Jet Leasing",
    body: "Flexible lease programs for individuals and enterprises — short-term charter through long-term arrangements, managed end to end.",
  },
  {
    n: "04",
    title: "Private Dinners",
    body: "Altitude as the setting. Intimate dinners and celebrations aboard, plated by chefs and paced entirely to the evening you have in mind.",
  },
];

export default function Services() {
  return (
    <section id="services" className="ea-pad" style={{ padding: "0 72px 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(33,30,26,0.15)",
          paddingBottom: 22,
        }}
      >
        <h2
          className="serif"
          style={{ fontWeight: 400, fontSize: "clamp(30px,3.4vw,48px)", margin: 0 }}
        >
          Services
        </h2>
        <span
          style={{
            fontSize: 12,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#8A8375",
          }}
        >
          Four ways to fly with us
        </span>
      </div>

      <div
        className="ea-services"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
      >
        {SERVICES.map((s, i) => {
          const isLeft = i % 2 === 0;
          const isTopRow = i < 2;
          return (
            <div
              key={s.n}
              style={{
                padding: isLeft ? "48px 56px 48px 0" : "48px 0 48px 56px",
                borderBottom: isTopRow ? "1px solid rgba(33,30,26,0.12)" : undefined,
                borderRight: isLeft ? "1px solid rgba(33,30,26,0.12)" : undefined,
              }}
            >
              <div
                className="serif"
                style={{ fontSize: 20, color: "#9EA300", marginBottom: 18 }}
              >
                {s.n}
              </div>
              <h3
                className="serif"
                style={{ fontWeight: 400, fontSize: 30, margin: "0 0 14px" }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#5A5346",
                  margin: 0,
                  maxWidth: 400,
                }}
              >
                {s.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
