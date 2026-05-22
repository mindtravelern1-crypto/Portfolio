/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO — one-sentence manifesto, simplified
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Ghost work strip — non-interactive, slowly drifts horizontally */
const GhostStrip = () => {
  const items = [...works, ...works];
  return (
    <div aria-hidden style={{
      width: "100%",
      overflow: "hidden",
      maskImage: "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)",
      opacity: 1,
      pointerEvents: "none"
    }}>
      <div style={{
        display: "flex", gap: "3.5rem",
        width: "max-content",
        animation: "stripDrift 70s linear infinite"
      }}>
        {items.map((w, i) => {
          const [c1, c2, c3] = w.palette;
          return (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "1.1rem",
              flexShrink: 0
            }}>
              <div style={{
                width: 220, height: 220,
                background: "transparent",
                overflow: "hidden", position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {w.mainImage ?
                <img src={w.mainImage} alt="" loading="lazy" style={{
                  maxWidth: "100%", maxHeight: "100%",
                  width: "auto", height: "auto",
                  objectFit: "contain", display: "block"
                }} /> :

                <div style={{ padding: "8px 6px" }}>
                    <div style={{ height: 5, background: c3, opacity: 0.85, marginBottom: 5 }} />
                    <div style={{ height: 2, background: c2, opacity: 0.5, marginBottom: 6, width: "75%" }} />
                    <div style={{ height: 1, background: c2, opacity: 0.3, marginBottom: 2 }} />
                    <div style={{ height: 1, background: c2, opacity: 0.3, marginBottom: 2 }} />
                    <div style={{ height: 1, background: c2, opacity: 0.3, marginBottom: 2, width: "70%" }} />
                  </div>
                }
              </div>
              <div>
                <div style={{ ...T.bodyS, color: C.mid, fontSize: "0.9rem", letterSpacing: "-0.02em" }}>
                  {w.title}
                </div>
                <div style={{
                  ...T.label, fontSize: "0.55rem", color: C.ghost,
                  fontStyle: "italic", textTransform: "none", letterSpacing: "0.02em",
                  marginTop: "0.2rem"
                }}>{w.category}</div>
              </div>
            </div>);

        })}
      </div>
      <style>{`@keyframes stripDrift {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }`}</style>
    </div>);

};

const PILLAR_LINES = [
{ gray: "透過", noun: "內容", outcome: "理解人", suffix: "" },
{ gray: "透過", noun: "產品", outcome: "放大幫助", suffix: "" },
{ gray: "透過", noun: "方法", outcome: "賦能他人", suffix: "" }];


const Hero = () => {
  const scrollY = useScrollY();
  const charY = Math.min(scrollY * 0.22, 180);
  const charOpacity = Math.max(0.02 - scrollY * 0.00004, 0.005);

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      padding: "8rem 3rem 4rem",
      display: "flex", flexDirection: "column",
      background: C.bg0,
      overflow: "hidden"
    }}>
      {/* Giant 人 watermark */}
      <div aria-hidden style={{
        position: "absolute",
        right: "-2rem", top: "4%",
        fontFamily: "'Noto Serif TC', serif",
        fontWeight: 300,
        fontSize: "clamp(16rem, 34vw, 28rem)",
        lineHeight: 0.9,
        color: `rgba(26,26,26,${charOpacity})`,
        userSelect: "none", pointerEvents: "none",
        transform: `translateY(${charY}px)`,
        transition: "transform 0.15s linear"
      }}>人</div>

      {/* Manifesto */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", width: "100%",
        flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "4rem 0 3rem",
        position: "relative", zIndex: 2
      }}>
        {/* Eyebrow */}
        <div style={{
          display: "flex", alignItems: "center", gap: "0.9rem",
          marginBottom: "3rem",
          opacity: 0, animation: "fup 0.8s ease 0.1s forwards"
        }}>
          <span style={{ width: 32, height: 1, background: C.ink, opacity: 0.4 }} />
          <span style={{ ...T.label, color: C.faint, fontSize: "0.66rem" }}>
            心理系 · UIUX · 跨域學習中
          </span>
        </div>

        {/* One-sentence headline, three lines */}
        <h1 style={{
          margin: 0,
          maxWidth: 1000,
          fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
          fontWeight: 300,
          fontSize: "clamp(1.85rem, 4vw, 2.85rem)",
          lineHeight: 1.55,
          letterSpacing: "-0.015em",
          color: C.ink
        }}>
          {PILLAR_LINES.map((p, i) =>
          <div key={i} style={{
            opacity: 0,
            animation: `fup 0.95s cubic-bezier(.2,.8,.2,1) ${0.3 + i * 0.18}s forwards`
          }}>
              <span style={{ color: C.faint, fontFamily: "\"Noto Serif TC\"", fontSize: "42px" }}>{p.gray}</span>
              <span style={{ margin: "0px 3px 0px 4px", fontSize: "42px" }}>{p.noun}</span>
              <span style={{
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond','Noto Serif TC',serif",
              fontWeight: 400,
              margin: "0 0 0 0.15em", fontSize: "42px"
            }}>{p.outcome}</span>
              <span style={{ color: C.ink, opacity: 0.5, fontFamily: "\"Cormorant Garamond\"" }}>{p.suffix}</span>
            </div>
          )}
        </h1>

        {/* Closing */}
        <div style={{
          maxWidth: 480, marginTop: "3rem",
          opacity: 0, animation: "fup 0.85s ease 1.1s forwards"
        }}>
          <p style={{ ...T.body, color: C.mid, margin: 0, fontSize: "0.98rem" }}>
            我是心理系學生，同時在學 UIUX。這份作品集是我從不同角度試著理解
            <em className="latin" style={{ opacity: 0.9, margin: "0 0.15em" }}>「人怎麼成長」</em>
            這個問題的過程。
          </p>

        </div>

        {/* CTAs */}
        <div style={{
          marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "2.5rem",
          opacity: 0, animation: "fup 0.8s ease 1.3s forwards"
        }}>
          <a href="#works" className="ul" style={{ ...T.bodyS, color: C.ink, fontSize: "0.88rem" }}>
            看作品 →
          </a>
          <a href="#about" style={{
            ...T.label, color: C.ink, opacity: 0.4, textDecoration: "none",
            transition: "opacity 0.25s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.4}>
            關於我</a>
        </div>
      </div>

      {/* Ghost strip */}
      <div style={{
        maxWidth: 1400, margin: "0 auto", width: "100%",
        position: "relative", zIndex: 2,
        animation: "fup 1s ease 1.5s forwards", textAlign: "left", letterSpacing: "6.4px", lineHeight: "1.7", opacity: "0.8"
      }}>
        <GhostStrip />
      </div>
    </section>);

};

window.Hero = Hero;