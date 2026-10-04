import type { ReactNode } from "react";

export function HeroBanner({ children }: { children: ReactNode }) {
  return (
    <section className="hero-sky relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="star" style={{ left: "8%", top: "18%" }} />
        <span className="star" style={{ left: "18%", top: "32%" }} />
        <span className="star" style={{ left: "28%", top: "12%" }} />
        <span className="star" style={{ left: "42%", top: "22%" }} />
        <span className="star" style={{ left: "58%", top: "14%" }} />
        <span className="star" style={{ left: "88%", top: "20%" }} />
        <span className="star" style={{ left: "70%", top: "38%" }} />
        <Moon />
        <Trees />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
        {children}
      </div>
    </section>
  );
}

function Moon() {
  return (
    <div
      className="absolute right-[14%] top-[18%] size-16 rounded-full bg-[#e8eee6] sm:size-20"
      style={{
        boxShadow: "0 0 24px 8px rgb(232 238 230 / 0.35), 0 0 60px 16px rgb(62 224 122 / 0.12)",
      }}
    />
  );
}

function Trees() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-28 w-full text-[#0e1a12] sm:h-36"
      viewBox="0 0 800 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect x="0" y="140" width="800" height="20" fill="#0a140d" />
      {[40, 90, 150, 210, 280, 340, 420, 500, 560, 630, 700, 760].map((x, i) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <rect x="-4" y="118" width="8" height="24" fill="#1a2a1c" />
          <rect
            x={-18 - (i % 3) * 2}
            y={40 + (i % 4) * 8}
            width={36 + (i % 3) * 6}
            height={80}
            fill={i % 2 === 0 ? "#123018" : "#0f2814"}
          />
          <rect x="-10" y={28 + (i % 4) * 8} width="20" height="20" fill="#164020" />
        </g>
      ))}
    </svg>
  );
}
