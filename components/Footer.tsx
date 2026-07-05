import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="ea-pad"
      style={{
        background: "#211E1A",
        color: "#B8B0A0",
        padding: "56px 72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 13, color: "#F4F0E8" }}>
        <Logo size={38} />
        <span style={{ fontSize: 13, letterSpacing: "4.5px" }}>EAGLE AIRWAYS</span>
      </div>
      <div style={{ fontSize: 12, letterSpacing: "1px", color: "#8F887A" }}>
        flyeagleairways.com · info@flyeaglesairways.com · © 2026 Eagle Airways
      </div>
    </footer>
  );
}
