/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PLACEHOLDER — designed image stand-ins
   Three variants: frame · flow · result
   Each uses palette from the work so it feels intentional
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const Placeholder = ({ kind, caption, palette = ["#e8d9c2", "#3a3a3a", "#1a1a1a"], height = 380, label }) => {
  const [c1, c2, c3] = palette;

  /* Shared meta corner — looks like a contact sheet annotation */
  const Meta = () => (
    <div style={{
      position: "absolute", left: "1rem", top: "1rem",
      ...T.label, fontSize: "0.58rem", color: "rgba(26,26,26,0.45)",
      display: "flex", alignItems: "center", gap: "0.5rem",
    }}>
      <span style={{ width: 18, height: 1, background: "rgba(26,26,26,0.35)" }} />
      <span>{label || "PLACEHOLDER"}</span>
    </div>
  );

  const Caption = () => caption && (
    <div style={{
      position: "absolute", left: "1rem", bottom: "1rem", right: "1rem",
      ...T.label, fontSize: "0.6rem", color: "rgba(26,26,26,0.45)",
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      paddingTop: "0.55rem",
      borderTop: "1px solid rgba(26,26,26,0.18)",
    }}>
      <span>{caption}</span>
      <span style={{ opacity: 0.55 }}>fig.</span>
    </div>
  );

  const baseStyle = {
    position: "relative", width: "100%", height,
    background: c1, border: "1px solid rgba(26,26,26,0.1)",
    overflow: "hidden",
  };

  if (kind === "frame") {
    /* Phone-screen abstraction — three stacked rules */
    return (
      <div style={baseStyle}>
        <Meta />
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(38%, 180px)", aspectRatio: "9/16",
          background: c1, border: `1px solid ${c2}`,
          boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
          display: "flex", flexDirection: "column",
          padding: "1rem 0.85rem",
        }}>
          <div style={{ height: 6, width: 32, background: c2, opacity: 0.4, marginBottom: "1rem" }} />
          <div style={{ height: 14, background: c2, opacity: 0.9, marginBottom: "0.5rem" }} />
          <div style={{ height: 8, background: c2, opacity: 0.45, width: "70%", marginBottom: "1.5rem" }} />
          <div style={{ height: 1, background: c2, opacity: 0.2, marginBottom: "0.8rem" }} />
          <div style={{ height: 6, background: c2, opacity: 0.5, marginBottom: "0.4rem" }} />
          <div style={{ height: 6, background: c2, opacity: 0.35, marginBottom: "0.4rem", width: "85%" }} />
          <div style={{ height: 6, background: c2, opacity: 0.5, marginBottom: "0.4rem", width: "60%" }} />
          <div style={{ flex: 1 }} />
          <div style={{ height: 28, background: c3, marginBottom: "0.5rem" }} />
        </div>
        {/* Decorative stripes corners */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: 80, height: 80, opacity: 0.5,
          background: `repeating-linear-gradient(45deg, transparent 0 8px, ${c2}22 8px 9px)`,
        }} />
        <Caption />
      </div>
    );
  }

  if (kind === "flow") {
    /* Four-step horizontal flow */
    const steps = (caption || "A → B → C → D").split("→").map(s => s.trim()).slice(0, 4);
    return (
      <div style={baseStyle}>
        <Meta />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "0 2.5rem",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: "1rem", width: "100%", alignItems: "center",
          }}>
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div style={{
                  aspectRatio: "1", background: i === 0 ? c2 : c1,
                  border: `1px solid ${c2}`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  padding: "0.5rem",
                  position: "relative",
                }}>
                  <div style={{
                    ...T.label, fontSize: "0.58rem",
                    color: i === 0 ? c1 : c2,
                    opacity: 0.85,
                  }}>
                    0{i + 1}
                  </div>
                  <div style={{
                    ...T.bodyS, fontSize: "0.78rem",
                    color: i === 0 ? c1 : c3,
                    marginTop: "0.4rem", textAlign: "center", lineHeight: 1.2,
                  }}>
                    {s}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <Caption />
      </div>
    );
  }

  if (kind === "figjam") {
    /* FigJam-style sticky notes + connectors — designed thinking board */
    const stickies = [
      { x: 8,  y: 18, w: 22, label: "WHY",    text: "為什麼選擇\n變得這麼難？", c: "#ffd6a8" },
      { x: 35, y: 12, w: 24, label: "RESEARCH", text: "18-25 訪談\n4 個模式", c: "#c8e3c5" },
      { x: 64, y: 22, w: 22, label: "INSIGHT", text: "探索缺少\n長期機制", c: "#f4c7c7" },
      { x: 14, y: 55, w: 26, label: "FLOW",   text: "Explore →\nReflect →\nPattern", c: "#cdd9f0" },
      { x: 46, y: 60, w: 22, label: "AI",     text: "反問\n不是給答案", c: "#e4d2f0" },
      { x: 72, y: 58, w: 20, label: "UI",     text: "柔和\n不評判", c: "#fff0b3" },
    ];
    return (
      <div style={{ ...baseStyle, background: "#f4f2ed" }}>
        <Meta />
        {/* Dotted grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(${c2}22 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          opacity: 0.6,
        }} />
        {/* Connector lines */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M 30 30 Q 40 40 47 22" stroke={c3} strokeWidth="0.15" fill="none" opacity="0.35" strokeDasharray="0.6 0.6" />
          <path d="M 59 24 Q 65 30 72 30" stroke={c3} strokeWidth="0.15" fill="none" opacity="0.35" strokeDasharray="0.6 0.6" />
          <path d="M 22 38 Q 25 50 27 62" stroke={c3} strokeWidth="0.15" fill="none" opacity="0.35" strokeDasharray="0.6 0.6" />
          <path d="M 40 65 Q 50 67 57 68" stroke={c3} strokeWidth="0.15" fill="none" opacity="0.35" strokeDasharray="0.6 0.6" />
          <path d="M 68 65 Q 75 65 82 65" stroke={c3} strokeWidth="0.15" fill="none" opacity="0.35" strokeDasharray="0.6 0.6" />
        </svg>
        {/* Stickies */}
        {stickies.map((s, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${s.x}%`, top: `${s.y}%`,
            width: `${s.w}%`,
            background: s.c,
            padding: "0.65rem 0.7rem 0.7rem",
            transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (0.4 + (i * 0.15))}deg)`,
            boxShadow: "0 4px 10px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)",
            fontFamily: "'Noto Serif TC', serif",
          }}>
            <div style={{
              ...T.label, fontSize: "0.5rem", color: "#3a3a3a", opacity: 0.55,
              marginBottom: "0.3rem",
            }}>{s.label}</div>
            <div style={{
              fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.35,
              color: "#1a1a1a", whiteSpace: "pre-line",
            }}>{s.text}</div>
          </div>
        ))}
        {/* Cursor label */}
        <div style={{
          position: "absolute", right: "1.2rem", top: "1.2rem",
          display: "flex", alignItems: "center", gap: "0.4rem",
        }}>
          <div style={{
            width: 0, height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "10px solid #1a1a1a",
            transform: "rotate(-30deg)",
          }} />
          <span style={{
            ...T.label, fontSize: "0.52rem", color: "#1a1a1a",
            background: "#1a1a1a", color: "#fff",
            padding: "0.18rem 0.45rem",
          }}>YU</span>
        </div>
        <Caption />
      </div>
    );
  }

  if (kind === "result") {
    /* Report-style card with bars */
    return (
      <div style={baseStyle}>
        <Meta />
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(70%, 360px)", padding: "1.5rem 1.75rem",
          background: "#fcfaf5", border: `1px solid ${c2}`,
          boxShadow: "0 18px 32px rgba(0,0,0,0.07)",
        }}>
          <div style={{
            ...T.label, fontSize: "0.58rem", color: c3, opacity: 0.55,
            marginBottom: "0.85rem",
            display: "flex", justifyContent: "space-between",
          }}>
            <span>REPORT · 2025</span>
            <span>01 / 03</span>
          </div>
          <div style={{ height: 12, background: c3, opacity: 0.9, marginBottom: "0.4rem", width: "85%" }} />
          <div style={{ height: 6, background: c3, opacity: 0.4, marginBottom: "1.2rem", width: "55%" }} />
          {[78, 92, 64, 81].map((w, i) => (
            <div key={i} style={{ marginBottom: "0.55rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                <div style={{ height: 5, background: c2, opacity: 0.65, width: 40 }} />
                <div style={{ ...T.label, fontSize: "0.5rem", color: c3, opacity: 0.55 }}>{w}</div>
              </div>
              <div style={{ height: 4, background: c2, opacity: 0.18, position: "relative" }}>
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: `${w}%`,
                  background: c3, opacity: 0.85,
                }} />
              </div>
            </div>
          ))}
        </div>
        <Caption />
      </div>
    );
  }

  /* Default: striped panel with caption */
  return (
    <div style={{ ...baseStyle, background: c1 }}>
      <Meta />
      <div style={{
        position: "absolute", inset: 0,
        background: `repeating-linear-gradient(45deg, transparent 0 12px, ${c2}22 12px 13px)`,
      }} />
      <Caption />
    </div>
  );
};

/* Small placeholder used inside Hero preview ribbon */
const WorkThumb = ({ work, height = 110, onClick }) => {
  const [c1, c2, c3] = work.palette || ["#e8d9c2", "#3a3a3a", "#1a1a1a"];
  return (
    <button
      onClick={onClick}
      style={{
        all: "unset", cursor: "pointer", display: "block",
        width: "100%", textAlign: "left",
      }}
    >
      <div style={{
        position: "relative", height, background: c1,
        border: "1px solid rgba(26,26,26,0.12)",
        overflow: "hidden",
        transition: "transform 0.5s cubic-bezier(.2,.8,.2,1)",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        {/* Mini phone */}
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 38, height: 60, background: "#fcfaf5",
          border: `1px solid ${c2}`,
          padding: "5px 4px",
        }}>
          <div style={{ height: 3, background: c3, opacity: 0.85, marginBottom: 3 }} />
          <div style={{ height: 2, background: c2, opacity: 0.5, marginBottom: 6, width: "70%" }} />
          <div style={{ height: 1, background: c2, opacity: 0.2, marginBottom: 4 }} />
          <div style={{ height: 1, background: c2, opacity: 0.4, marginBottom: 2 }} />
          <div style={{ height: 1, background: c2, opacity: 0.4, marginBottom: 2, width: "80%" }} />
          <div style={{ height: 1, background: c2, opacity: 0.4, marginBottom: 2, width: "60%" }} />
        </div>
        {/* Top-left index */}
        <div style={{
          position: "absolute", left: "0.65rem", top: "0.55rem",
          ...T.label, fontSize: "0.54rem", color: c3, opacity: 0.55,
        }}>
          {work.id}
        </div>
      </div>
      <div style={{ marginTop: "0.7rem" }}>
        <div style={{ ...T.h4, fontSize: "0.92rem", color: C.ink, marginBottom: "0.2rem" }}>
          {work.title}
        </div>
        <div style={{ ...T.label, fontSize: "0.58rem", color: C.ghost }}>
          {work.category} · {work.year}
        </div>
      </div>
    </button>
  );
};

Object.assign(window, { Placeholder, WorkThumb, ImageSlot });

/* ImageSlot — designed empty state for upcoming screenshots
   Subtle hatched background + soft caption telling the user "drop image here later" */
function ImageSlot({ palette = ["#e8d9c2", "#3a3a3a", "#1a1a1a"], height, aspect, caption, label, src }) {
  const [c1, c2, c3] = palette;

  const wrapperStyle = aspect
    ? { width: "100%", aspectRatio: aspect }
    : { width: "100%", height: height || 400 };

  if (src) {
    // Transparent display — no white bg, no border — so the image sits directly on the page
    return (
      <div style={{
        position: "relative",
        ...wrapperStyle,
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <img src={src} alt={label || "screenshot"} loading="lazy" style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
        }} />
      </div>
    );
  }

  return (
    <div style={{
      position: "relative",
      ...wrapperStyle,
      background: c1, border: `1px dashed rgba(26,26,26,0.25)`,
      overflow: "hidden",
    }}>
      {/* Crosshair pattern - very subtle */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.6,
        backgroundImage: `
          linear-gradient(45deg, transparent 49.6%, ${c2}10 49.8%, ${c2}10 50.2%, transparent 50.4%),
          linear-gradient(-45deg, transparent 49.6%, ${c2}10 49.8%, ${c2}10 50.2%, transparent 50.4%)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Label top-left */}
      <div style={{
        position: "absolute", left: "1.25rem", top: "1.25rem",
        ...T.label, fontSize: "0.58rem",
        color: c3, opacity: 0.55,
        display: "flex", alignItems: "center", gap: "0.55rem",
      }}>
        <span style={{ width: 22, height: 1, background: c3, opacity: 0.5 }} />
        {label || "IMAGE SLOT"}
      </div>

      {/* Center prompt */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 2rem",
      }}>
        <div style={{
          width: 38, height: 38,
          border: `1px solid ${c3}`, opacity: 0.4,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "1.1rem",
          position: "relative",
        }}>
          <span style={{ position: "absolute", width: 14, height: 1, background: c3 }} />
          <span style={{ position: "absolute", width: 1, height: 14, background: c3 }} />
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontStyle: "italic", fontSize: "1rem", color: c3, opacity: 0.6,
          marginBottom: "0.45rem",
        }}>
          screenshot pending
        </div>
        <div style={{
          ...T.label, fontSize: "0.58rem", color: c3, opacity: 0.42,
        }}>
          {caption || "DROP IMAGE HERE LATER"}
        </div>
      </div>

      {/* Bottom hairline + corner mark */}
      <div style={{
        position: "absolute", left: "1.25rem", right: "1.25rem", bottom: "1.25rem",
        ...T.label, fontSize: "0.55rem", color: c3, opacity: 0.4,
        display: "flex", justifyContent: "space-between",
        paddingTop: "0.5rem",
        borderTop: `1px dashed ${c3}`, borderColor: `rgba(26,26,26,0.15)`,
      }}>
        <span>aspect : auto</span>
        <span>待補</span>
      </div>
    </div>
  );
}
