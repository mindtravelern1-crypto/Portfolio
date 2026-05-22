/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   WORKS — editorial archive list
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const WorkRow = ({ work, isOpen, onToggle, onOpenCase, delay = 0 }) => {
  const [hover, setHover] = useState(false);
  const rowRef = useRef(null);
  const [c1, c2, c3] = work.palette;

  return (
    <Fade delay={delay}>
      <div
        ref={rowRef}
        style={{
          borderTop: `1px solid ${C.hair}`,
          position: "relative"
        }}>
        
        {/* Row header */}
        <div
          onClick={onToggle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: "grid",
            gridTemplateColumns: "60px 100px 1fr auto",
            gap: "1.5rem",
            alignItems: "center",
            padding: "2.5rem 1.5rem",
            margin: "0 -1.5rem",
            cursor: "pointer",
            userSelect: "none",
            background: isOpen ? "rgba(26,26,26,0.025)" : hover ? "rgba(26,26,26,0.015)" : "transparent",
            transition: "background 0.3s ease"
          }}>
          
          {/* Index — large mono */}
          <div style={{
            ...T.mono,
            fontSize: "0.78rem", color: C.ghost,
            letterSpacing: "0.1em",
            paddingTop: "0.3rem",
            transform: hover ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.4s cubic-bezier(.2,.8,.2,1)"
          }}>
            — {work.id}
          </div>

          {/* Category chip(s) */}
          <div style={{ paddingTop: "0.4rem", display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {(Array.isArray(work.category) ? work.category : [work.category]).map(cat => (
              <span key={cat} style={{
                ...T.label, fontSize: "0.6rem",
                color: C.faint,
                border: `1px solid ${C.hair}`,
                padding: "0.32rem 0.7rem",
                letterSpacing: "0.2em",
                whiteSpace: "nowrap"
              }}>{cat}</span>
            ))}
          </div>

          {/* Title block */}
          <div>
            <div style={{
              display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap",
              marginBottom: "0.45rem"
            }}>
              <h3 style={{
                ...T.h2,

                color: C.ink, margin: 0,
                transition: "letter-spacing 0.4s ease",
                letterSpacing: hover ? "0.005em" : "-0.018em", fontSize: "24px"
              }}>{work.title}</h3>
              <span style={{
                fontFamily: "'Cormorant Garamond','Noto Serif TC',serif",
                fontStyle: "italic",
                fontSize: "1rem", fontWeight: 300,
                color: C.ghost
              }}>{work.sub}</span>
            </div>
            <p style={{
              ...T.bodyS, color: C.faint, margin: "0 0 0.5rem",
              fontStyle: "italic",
              maxWidth: 560
            }}>"{work.angle}"</p>
            <div style={{ ...T.label, color: C.ghost, fontSize: "0.6rem" }}>{work.type}</div>
          </div>

          {/* Right: year + status + arrow */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "flex-end",
            gap: "0.6rem", paddingTop: "0.2rem"
          }}>
            <span style={{ ...T.mono, color: C.faint, fontSize: "0.7rem" }}>{work.year}</span>
            <StatusDot status={work.status} />
            <div style={{
              marginTop: "0.6rem",
              ...T.label, color: C.ink, fontSize: "0.6rem",
              display: "flex", alignItems: "center", gap: "0.4rem",
              opacity: isOpen ? 1 : 0.45,
              transition: "opacity 0.3s ease"
            }}>
              <span>{isOpen ? "收起" : "展開"}</span>
              <span style={{
                display: "inline-block",
                transition: "transform 0.4s cubic-bezier(.2,.8,.2,1)",
                transform: isOpen ? "rotate(180deg)" : "rotate(0)"
              }}>↓</span>
            </div>
          </div>
        </div>

        {/* Expand */}
        <div style={expandStyle(isOpen)}>
          <div style={expandInnerStyle}>
            <div style={{
              borderTop: `1px solid ${C.hair}`,
              padding: "3rem 0 3.5rem"
            }}>
              {/* Top row: tags + brief + CTA */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "3rem",
                marginBottom: "3rem",
                alignItems: "start"
              }}>
                <div>
                  <div style={{ ...T.label, color: C.ghost, marginBottom: "1rem" }}>Brief</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {work.tags.map((tag) =>
                    <span key={tag} style={{
                      ...T.label, fontSize: "0.55rem", color: C.faint,
                      border: `1px solid ${C.hair}`, padding: "0.25rem 0.6rem",
                      letterSpacing: "0.18em", whiteSpace: "nowrap"
                    }}>{tag}</span>
                    )}
                  </div>
                </div>

                <div>
                  <p style={{ ...T.body, color: C.mid, margin: 0, maxWidth: 560, fontSize: "1rem" }}>
                    {work.brief}
                  </p>

                  <div style={{
                    marginTop: "2rem",
                    display: "flex", alignItems: "center", gap: "1.75rem", flexWrap: "wrap"
                  }}>
                    <button
                      onClick={(e) => {e.stopPropagation();onOpenCase(work);}}
                      style={{
                        background: C.ink, color: C.bg0,
                        border: "none",
                        padding: "0.85rem 1.6rem",
                        ...T.label, color: C.bg0,
                        fontSize: "0.62rem",
                        cursor: "pointer",
                        transition: "transform 0.25s ease, opacity 0.25s ease",
                        letterSpacing: "0.2em"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                      看完整 Case Study ↗</button>

                    {work.link &&
                    <a href={work.link} target="_blank" rel="noopener noreferrer"
                    className="ul"
                    onClick={(e) => e.stopPropagation()}
                    style={{ ...T.bodyS, color: C.faint, fontSize: "0.88rem" }}>
                      體驗產品</a>
                    }
                  </div>
                </div>
              </div>

              {/* Image area — image displays at natural ratio, sized big enough so phone screenshots stay readable without cropping. */}
              <div onClick={(e) => e.stopPropagation()} style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                minHeight: 480,
              }}>
                {work.mainImage ? (
                  <img
                    src={work.mainImage}
                    alt={`${work.id} · ${work.title}`}
                    loading="lazy"
                    style={{
                      maxHeight: 480,
                      maxWidth: "100%",
                      width: "auto",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <div style={{ width: "100%", maxWidth: 720 }}>
                    <ImageSlot
                      palette={work.palette}
                      height={520}
                      label={`${work.id} · ${work.title}`}
                      caption="main · 主畫面"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>);

};

const WorksSection = ({ onOpenCase }) => {
  const [openIds, setOpenIds] = useState(new Set());
  const toggle = (id) => setOpenIds((prev) => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id);else
    next.add(id);
    return next;
  });

  return (
    <section id="works" style={{
      background: C.bg1,
      borderTop: `1px solid ${C.hair}`,
      padding: "7rem 3rem 6rem", lineHeight: "1.75"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Selected Work"
          title="作品空間"
          subtitle="點擊任一作品展開簡介；再點「看完整 Case Study」進入詳細設計流程。"
          right={
          <div style={{ textAlign: "right" }}>
              <div style={{ ...T.mono, color: C.faint, fontSize: "0.7rem" }}>04 / works</div>
              <div style={{ ...T.label, color: C.ghost, marginTop: "0.4rem" }}>App · Web · 商業</div>
            </div>
          } />
        

        <div>
          {works.map((w, i) =>
          <WorkRow
            key={w.id}
            work={w}
            isOpen={openIds.has(w.id)}
            onToggle={() => toggle(w.id)}
            onOpenCase={onOpenCase}
            delay={i * 0.05} />

          )}
          <div style={{ borderTop: `1px solid ${C.hair}` }} />
        </div>

        <div style={{
          marginTop: "3rem",
          display: "flex", justifyContent: "space-between", alignItems: "baseline"
        }}>
          <span style={{ ...T.label, color: C.ghost, fontStyle: "italic", textTransform: "none", letterSpacing: "0.08em", fontSize: "12px" }}>
            還在做新的東西⋯
          </span>
          <span style={{ ...T.mono, color: C.ghost, fontSize: "0.7rem" }}>END OF INDEX</span>
        </div>
      </div>
    </section>);

};

window.WorksSection = WorksSection;