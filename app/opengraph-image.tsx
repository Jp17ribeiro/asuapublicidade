import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 88, color: "#fff", background: "radial-gradient(circle at 85% 18%, #123d5b 0%, #08111f 35%, #050a12 75%)" }}>
      <div style={{ display: "flex", color: "#38c5ff", fontSize: 23, letterSpacing: 5, fontWeight: 700 }}>MARKETING • DESIGN • TECNOLOGIA</div>
      <div style={{ display: "flex", marginTop: 36, fontSize: 76, fontWeight: 800, lineHeight: 1.08 }}>Sua marca merece<br />ser lembrada.</div>
      <div style={{ display: "flex", marginTop: 48, color: "#a7b9c9", fontSize: 30 }}>A SUA PUBLICIDADE</div>
    </div>,
    size
  );
}
