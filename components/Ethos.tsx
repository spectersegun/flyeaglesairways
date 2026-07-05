export default function Ethos() {
  return (
    <section
      id="experience"
      className="ea-section"
      style={{
        padding: "130px 72px",
        maxWidth: 1000,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#A8875A",
          marginBottom: 34,
        }}
      >
        The Ethos
      </div>
      <p
        className="serif"
        style={{
          fontWeight: 300,
          fontSize: "clamp(26px,3vw,40px)",
          lineHeight: 1.42,
          margin: 0,
          letterSpacing: "-0.3px",
        }}
      >
        Eagle Airways was built by people who live thoughtfully across three
        continents — and believe travel should reflect the same care. We serve
        those who value discretion, generosity, and time well spent, and who give
        back to the communities that raised them.
      </p>
      <div
        style={{ width: 44, height: 1, background: "#A8875A", margin: "52px auto 0" }}
      />
    </section>
  );
}
