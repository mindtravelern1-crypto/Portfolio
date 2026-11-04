/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO — first screen, works peek below
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const HeroCat = ({ compact = false }) => (
  <div style={{
    width: compact ? 96 : "100%",
    height: compact ? 96 : 380,
    margin: compact ? "0 0 1rem" : 0,
    overflow: "hidden",
    borderRadius: compact ? 14 : 18,
    pointerEvents: "none",
  }}>
    <img
      src="assets/works/04-cat.png"
      alt="CATI 手繪貓咪"
      style={{
        width: "100%",
        height: "140%",
        objectFit: "cover",
        objectPosition: "center 8%",
        display: "block",
      }}
    />
  </div>
);

const PILLAR_LINES = [
{ gray: "透過", noun: "內容", outcome: "理解人", suffix: "" },
{ gray: "透過", noun: "產品", outcome: "放大幫助", suffix: "" },
{ gray: "透過", noun: "方法", outcome: "賦能他人", suffix: "" }];


const Hero = () => {
  const isMobile = useIsMobile();

  const btn = {
    ...T.label,
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textDecoration: "none",
    display: "inline-block",
    padding: "0.85rem 1.35rem",
    cursor: "pointer",
  };

  return (
    <section style={{
      position: "relative",
      minHeight: "auto",
      padding: isMobile ? "5.5rem 1.25rem 2.5rem" : "6.5rem 3rem 3rem",
      display: "flex", flexDirection: "column",
      background: C.bg0,
      overflow: "hidden"
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
        gap: isMobile ? 0 : "2rem",
        alignItems: "center",
        padding: isMobile ? "1.5rem 0 0.5rem" : "2rem 0 0.5rem",
        position: "relative", zIndex: 2
      }}>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.9rem",
          marginBottom: "1.75rem",
          opacity: 0, animation: "fup 0.8s ease 0.1s forwards"
        }}>
          <span style={{ width: 32, height: 1, background: C.accent }} />
          <span style={{ ...T.label, color: C.accent, fontSize: "0.8rem" }}>
            心理系 · 體驗設計 · 跨域學習中
          </span>
        </div>

        {isMobile && <HeroCat compact />}

        <h1 style={{
          margin: 0,
          maxWidth: 1000,
          fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
          fontWeight: 400,
          fontSize: "clamp(1.65rem, 3.2vw, 2.35rem)",
          lineHeight: 1.45,
          letterSpacing: "-0.015em",
          color: C.ink
        }}>
          {PILLAR_LINES.map((p, i) =>
          <div key={i} style={{
            opacity: 0,
            animation: `fup 0.95s cubic-bezier(.2,.8,.2,1) ${0.2 + i * 0.12}s forwards`
          }}>
              <span style={{ color: C.faint }}>{p.gray}</span>
              <span style={{ margin: "0 0.2em" }}>{p.noun}</span>
              <span style={{
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond','Noto Serif TC',serif",
              fontWeight: 400
            }}>{p.outcome}</span>
            </div>
          )}
        </h1>

        <div style={{
          maxWidth: 520, marginTop: "1.75rem",
          opacity: 0, animation: "fup 0.85s ease 0.7s forwards"
        }}>
          <p style={{ ...T.body, color: C.mid, margin: 0, fontSize: "1rem" }}>
            我是東吳心理系大三，預計 2028 畢業，正在找體驗設計相關實習。這份作品集是我試著理解
            <em className="latin" style={{ opacity: 0.9, margin: "0 0.15em" }}>「人怎麼成長」</em>
            的過程。
          </p>
        </div>

        <div style={{
          marginTop: "1.75rem", display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap",
          opacity: 0, animation: "fup 0.8s ease 0.9s forwards"
        }}>
          <a href="#works" className="cta" style={{
            ...btn, background: C.accent, color: C.bg0
          }}>看作品</a>
          <a href="#contact" style={{
            ...btn, background: "transparent", color: C.ink,
            border: `1px solid ${C.ink}`
          }}>聯繫</a>
        </div>
      </div>
      {!isMobile && <HeroCat />}
      </div>
    </section>);

};

window.Hero = Hero;
