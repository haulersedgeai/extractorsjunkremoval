import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — Junk Removal, Cleanouts & Light Demolition`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0B1220 0%, #0066CC 60%, #0084FF 100%)",
          color: "white",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              background: "#FFB400",
              color: "#0B1220",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            E
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1 }}>
              Extractors Junk Removal
            </div>
            <div style={{ fontSize: 22, opacity: 0.85, marginTop: 4 }}>
              Cypress · Anaheim · Long Beach · OC & LA
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2 }}>
            Same-day junk removal,
          </div>
          <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, color: "#FFB400" }}>
            cleanouts & light demo.
          </div>
          <div style={{ fontSize: 30, marginTop: 28, opacity: 0.9 }}>
            Upfront pricing · Licensed & insured · Family-owned
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "2px solid rgba(255,255,255,0.25)",
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 800 }}>{SITE.phoneDisplay}</div>
          <div style={{ fontSize: 24, opacity: 0.85 }}>extractorsjunkremoval.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
