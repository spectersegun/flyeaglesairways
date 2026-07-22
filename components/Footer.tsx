import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="ea-pad"
      style={{
        background: "#5C2D91",
        color: "#B8B0A0",
        padding: "56px 72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      <Image
        src="/images/logo-light.png"
        alt="Eagle Airways"
        width={106}
        height={52}
        style={{ height: 52, width: "auto" }}
      />
      <div style={{ fontSize: 12, letterSpacing: "1px", color: "#8F887A" }}>
        flyeagleairways.com · info@flyeagleairways.com · © 2026 Eagle Airways
      </div>
    </footer>
  );
}
