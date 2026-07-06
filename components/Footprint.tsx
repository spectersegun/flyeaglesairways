import Logo from "./Logo";

export default function Footprint() {
  return (
    <section className="ea-section" style={{ padding: "110px 72px", textAlign: "center" }}>
      <div
        style={{
          fontSize: 11,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#9EA300",
          marginBottom: 28,
        }}
      >
        A quietly global house
      </div>
      <div
        className="serif"
        style={{
          fontWeight: 300,
          fontSize: "clamp(30px,4vw,58px)",
          letterSpacing: "1px",
          display: "flex",
          gap: 26,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span>Lagos</span>
        <Logo size={30} />
        <span>London</span>
        <Logo size={30} />
        <span>New York</span>
      </div>
      <p
        style={{
          maxWidth: 520,
          margin: "30px auto 0",
          fontWeight: 300,
          fontSize: 15,
          lineHeight: 1.7,
          color: "#5A5346",
        }}
      >
        Nigerian roots, an international reach — owned and run by people who move
        between these cities the way others cross town.
      </p>
    </section>
  );
}
