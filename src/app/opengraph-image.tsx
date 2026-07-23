import { ImageResponse } from "next/og";

export const alt = "Murtamad Pratama - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #061523, #0d2033)",
          color: "white",
          display: "flex",
          height: "100%",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ color: "#8fc0ff", display: "flex", fontSize: 28 }}>
            SOFTWARE ENGINEER
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800 }}>
            Murtamad Pratama
          </div>
          <div style={{ color: "#dce4f0", display: "flex", fontSize: 36 }}>
            Full-Stack TypeScript & Node.js Developer
          </div>
          <div style={{ color: "#8fa0b5", display: "flex", fontSize: 25 }}>
            Enterprise application experience · Medan, Indonesia
          </div>
        </div>
      </div>
    ),
    size,
  );
}
