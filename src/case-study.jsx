/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CASE STUDY PANEL — sticky TOC + chapter rhythm + designed placeholders
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const CaseStudy = ({ work, onClose }) => {
  const [activeCh, setActiveCh] = useState(0);
  const scrollerRef = useRef(null);

  /* Lock body scroll while open */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* Track active chapter for TOC highlight */
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const chapters = scroller.querySelectorAll("[data-chapter]");
        const target = scroller.scrollTop + 120;
        let best = 0;
        chapters.forEach((el, i) => {
          if (el.offsetTop <= target) best = i;
        });
        setActiveCh(best);
      });
    };
    scroller.addEventListener("scroll", update, { passive: true });
    update();
    return () => scroller.removeEventListener("scroll", update);
  }, [work]);

  const scrollToChapter = (idx) => {
    setActiveCh(idx);
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const target = scroller.querySelector(`[data-idx="${idx}"]`);
    if (target) {
      scroller.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  };

  const palette = work.palette || ["#e8d9c2", "#3a3a3a", "#1a1a1a"];

  return (
    <div
      ref={scrollerRef}
      className="case-scroll"
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: C.bg0,
        overflowY: "auto", overflowX: "hidden",
        animation: "slideInRight 0.5s cubic-bezier(.2,.8,.2,1)",
      }}>

      {/* Sticky top bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 20,
        background: "rgba(245,244,240,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${C.hair}`,
        padding: "1.1rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button onClick={onClose} style={{
          background: "none", border: "none", cursor: "pointer",
          ...T.label, color: C.faint, fontSize: "0.66rem",
          display: "inline-flex", alignItems: "center", gap: "0.55rem",
          padding: 0,
          transition: "color 0.25s ease",
        }}
          onMouseEnter={e => e.currentTarget.style.color = C.ink}
          onMouseLeave={e => e.currentTarget.style.color = C.faint}
        >
          <span style={{ fontSize: "0.85rem" }}>←</span> 返回作品集
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <span style={{ ...T.label, color: C.ghost }}>{work.id} · Case Study</span>
          {work.link && (
            <a href={work.link} target="_blank" rel="noopener noreferrer"
              className="ul"
              style={{ ...T.bodyS, color: C.ink, fontSize: "0.82rem" }}
            >體驗產品 ↗</a>
          )}
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "5rem 3rem 4rem",
        maxWidth: 1200, margin: "0 auto",
        position: "relative",
      }}>
        {/* Background watermark */}
        <div aria-hidden style={{
          position: "absolute", right: "2rem", top: "1rem",
          fontFamily: "'Cormorant Garamond',serif",
          fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(8rem, 16vw, 14rem)",
          color: "rgba(26,26,26,0.04)",
          lineHeight: 0.9,
          userSelect: "none", pointerEvents: "none",
        }}>{work.id}</div>

        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Top meta strip */}
          <div style={{
            display: "flex", gap: "2rem", alignItems: "center",
            marginBottom: "3rem",
            paddingBottom: "1rem",
            opacity: 0, animation: "fup 0.7s ease 0.15s forwards",
          }}>
            <span style={{ ...T.label, color: C.faint }}>{work.category}</span>
            <span style={{ ...T.mono, color: C.ghost, fontSize: "0.7rem" }}>· {work.year} ·</span>
            <span style={{ ...T.label, color: C.faint }}>{work.type}</span>
            <span style={{ ...T.mono, color: C.ghost, fontSize: "0.7rem" }}>·</span>
            <StatusDot status={work.status} />
          </div>

          {/* Title */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "end", marginBottom: "2.5rem" }}>
            <div>
              <h1 style={{
                ...T.h1,
                fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
                color: C.ink, margin: "0 0 0.6rem",
                opacity: 0, animation: "fup 0.9s ease 0.25s forwards",
              }}>{work.title}</h1>
              <p style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontStyle: "italic", fontWeight: 400,
                fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                color: C.faint, margin: 0,
                opacity: 0, animation: "fup 0.9s ease 0.35s forwards",
              }}>{work.sub}</p>
            </div>
          </div>

          {/* Pull quote — the angle */}
          <div style={{
            maxWidth: 720,
            margin: "0 0 3rem",
            paddingLeft: "1.5rem",
            borderLeft: `2px solid ${C.ink}`,
            opacity: 0, animation: "fup 0.9s ease 0.5s forwards",
          }}>
            <p style={{
              fontFamily: "'Noto Serif TC',serif",
              fontStyle: "italic", fontWeight: 300,
              fontSize: "clamp(1.05rem, 1.85vw, 1.35rem)",
              lineHeight: 1.6, color: C.ink,
              margin: 0,
              letterSpacing: "-0.005em",
            }}>"{work.angle}"</p>
          </div>

          {/* Brief paragraph */}
          <p style={{
            ...T.body, color: C.mid,
            maxWidth: 660, margin: "0 0 3rem",
            fontSize: "1rem",
            opacity: 0, animation: "fup 0.9s ease 0.65s forwards",
          }}>{work.brief}</p>

          {/* Hero: carousel if heroImages provided, fall back to mainImage as single slide, else placeholder */}
          <div style={{ opacity: 0, animation: "fup 1s ease 0.8s forwards" }}>
            {(() => {
              let images = Array.isArray(work.heroImages) ? work.heroImages.filter(im => im && im.src) : [];
              // Fall back to mainImage as a single slide so the case study shows the same preview thumb
              if (images.length === 0 && work.mainImage) {
                images = [{ src: work.mainImage, caption: `${work.title} · ${work.sub}` }];
              }
              return images.length > 0 ? (
                <HeroCarousel images={images} palette={palette} workId={work.id} title={work.title} />
              ) : (
                <Placeholder
                  kind={work.heroKind || "frame"}
                  palette={palette}
                  caption={work.heroKind === "figjam" ? "FigJam · 設計思考 board" : `${work.title} · ${work.sub} · main view`}
                  label={`${work.id} · ${work.heroKind === "figjam" ? "FIGJAM" : "HERO"}`}
                  height={520}
                />
              );
            })()}
          </div>
        </div>
      </div>

      {/* Main content: sticky TOC + chapters */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "3rem 3rem 6rem",
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "4rem",
        alignItems: "start",
      }}>
        {/* Sticky TOC */}
        <aside style={{
          position: "sticky", top: "5rem",
          paddingTop: "2rem",
          borderTop: `1px solid ${C.hair}`,
        }}>
          <div style={{ ...T.label, color: C.ghost, marginBottom: "1.25rem" }}>
            Contents
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {work.chapters.map((ch, i) => {
              const active = activeCh === i;
              return (
                <button
                  key={i}
                  onClick={() => scrollToChapter(i)}
                  style={{
                    all: "unset", cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "26px 1fr",
                    gap: "0.5rem",
                    alignItems: "baseline",
                    padding: "0.4rem 0",
                    opacity: active ? 1 : 0.42,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    transform: active ? "translateX(4px)" : "translateX(0)",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={e => e.currentTarget.style.opacity = active ? 1 : 0.42}
                >
                  <span style={{ ...T.mono, color: C.faint, fontSize: "0.66rem" }}>
                    {ch.n}
                  </span>
                  <span style={{
                    ...T.bodyS, color: C.ink, fontSize: "0.88rem",
                    borderBottom: active ? `1px solid ${C.ink}` : "1px solid transparent",
                    paddingBottom: "0.08rem", display: "inline-block",
                    transition: "border-color 0.3s ease",
                  }}>
                    {ch.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Tags below TOC */}
          <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: `1px solid ${C.hair}` }}>
            <div style={{ ...T.label, color: C.ghost, marginBottom: "0.8rem" }}>Tags</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {work.tags.map(t => (
                <span key={t} style={{
                  ...T.label, fontSize: "0.54rem", color: C.faint,
                  border: `1px solid ${C.hair}`, padding: "0.22rem 0.5rem",
                  letterSpacing: "0.18em",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Figma link in sidebar */}
          {work.figma && (
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${C.hair}` }}>
              <div style={{ ...T.label, color: C.ghost, marginBottom: "0.6rem" }}>FigJam</div>
              <a href={work.figma} target="_blank" rel="noopener noreferrer"
                className="ul"
                style={{ ...T.bodyS, color: C.ink, fontSize: "0.82rem" }}
              >看完整 FigJam ↗</a>
            </div>
          )}
        </aside>

        {/* Chapters */}
        <article style={{ minWidth: 0 }}>
          {work.chapters.map((ch, i) => (
            <Chapter key={i} chapter={ch} idx={i} palette={palette} workId={work.id} />
          ))}

          {/* Closing */}
          <div style={{
            marginTop: "5rem", paddingTop: "3rem",
            borderTop: `2px solid ${C.ink}`,
          }}>
            <div style={{ ...T.label, color: C.ghost, marginBottom: "1rem" }}>End of Case</div>
            <p style={{
              fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
              fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
              color: C.ink, lineHeight: 1.55, margin: "0 0 2.5rem",
              maxWidth: 560, fontWeight: 400,
            }}>
              "{work.angle}"
            </p>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
              {work.link && (
                <a href={work.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    background: C.ink, color: C.bg0,
                    padding: "0.85rem 1.6rem",
                    ...T.label, color: C.bg0,
                    fontSize: "0.62rem", letterSpacing: "0.2em",
                    textDecoration: "none",
                    transition: "transform 0.25s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >前往體驗 ↗</a>
              )}
              {work.figma && (
                <a href={work.figma} target="_blank" rel="noopener noreferrer"
                  style={{
                    background: C.ink, color: C.bg0,
                    padding: "0.85rem 1.6rem",
                    ...T.label, color: C.bg0,
                    fontSize: "0.62rem", letterSpacing: "0.2em",
                    textDecoration: "none",
                    transition: "transform 0.25s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >在 FigJam 看完整設計思考 ↗</a>
              )}
              <button onClick={onClose} className="ul" style={{
                background: "none", border: "none", padding: 0,
                ...T.bodyS, color: C.faint, fontSize: "0.88rem",
                cursor: "pointer",
                paddingBottom: "0.18rem",
              }}>返回作品集</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

/* ─── Chapter: handles three layouts depending on content ─── */
const Chapter = ({ chapter: ch, idx, palette, workId }) => {
  const [ref, inView] = useInView();

  /* Patterns layout — numbered subsections each with title + bullet list + closing line */
  if (ch.patterns) {
    return (
      <section
        ref={ref}
        data-chapter
        data-idx={idx}
        style={{
          paddingTop: "3.5rem",
          marginBottom: "3.5rem",
          borderTop: idx === 0 ? "none" : `1px solid ${C.hair}`,
        }}>
        <ChapterHeader ch={ch} inView={inView} />
        {ch.body && (
          <p style={{
            ...T.body, color: C.mid,
            margin: "2.5rem 0 0", fontSize: "1.05rem",
            maxWidth: 660,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(12px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}>{ch.body}</p>
        )}
        <div style={{ marginTop: "2rem" }}>
          {ch.patterns.map((p, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "44px 1fr",
              gap: "1.2rem",
              padding: "1.8rem 0",
              borderBottom: i === ch.patterns.length - 1 ? "none" : `1px solid ${C.hair}`,
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(10px)",
              transition: `opacity 0.7s ease ${0.2 + i * 0.08}s, transform 0.7s ease ${0.2 + i * 0.08}s`,
            }}>
              <span style={{
                ...T.mono, color: C.faint,
                fontSize: "0.95rem", paddingTop: "0.1rem",
                fontFeatureSettings: "'tnum'",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ maxWidth: 640 }}>
                <h4 style={{
                  ...T.h4,
                  fontSize: "clamp(1.02rem, 1.55vw, 1.18rem)",
                  color: C.ink, margin: "0 0 0.65rem",
                  fontWeight: 500, letterSpacing: "-0.005em",
                }}>{p.title}</h4>
                {p.intro && (
                  <p style={{ ...T.bodyS, color: C.mid, margin: "0 0 0.55rem", fontSize: "0.96rem" }}>
                    {p.intro}
                  </p>
                )}
                {p.items && p.items.length > 0 && (
                  <ul style={{
                    margin: "0 0 0.65rem",
                    padding: "0 0 0 1.1rem",
                    color: C.mid,
                    listStyle: "disc",
                  }}>
                    {p.items.map((it, j) => (
                      <li key={j} style={{ ...T.bodyS, fontSize: "0.94rem", padding: "0.12rem 0" }}>{it}</li>
                    ))}
                  </ul>
                )}
                {p.closing && (
                  <p style={{ ...T.bodyS, color: C.mid, margin: 0, fontSize: "0.96rem" }}>
                    {p.closing}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* Frameworks layout — psychology framework cards in a 2-col grid */
  if (ch.frameworks) {
    return (
      <section
        ref={ref}
        data-chapter
        data-idx={idx}
        style={{
          paddingTop: "3.5rem",
          marginBottom: "3.5rem",
          borderTop: idx === 0 ? "none" : `1px solid ${C.hair}`,
        }}>
        <ChapterHeader ch={ch} inView={inView} />
        {ch.body && (
          <p style={{
            ...T.body, color: C.mid,
            margin: "2.5rem 0 0", fontSize: "1.05rem",
            maxWidth: 660,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(12px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}>{ch.body}</p>
        )}
        <div style={{
          marginTop: ch.body ? "1.75rem" : "2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}>
          {ch.frameworks.map((f, i) => (
            <div key={i} style={{
              border: `1px solid ${C.hair}`,
              padding: "1.4rem 1.5rem",
              background: "rgba(26,26,26,0.015)",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(12px)",
              transition: `opacity 0.7s ease ${0.15 + i * 0.08}s, transform 0.7s ease ${0.15 + i * 0.08}s`,
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "0.7rem",
                marginBottom: "0.55rem",
              }}>
                <span style={{ ...T.mono, color: C.ghost, fontSize: "0.66rem" }}>
                  · 0{i + 1}
                </span>
                <h4 style={{
                  ...T.h4,
                  fontSize: "0.98rem",
                  color: C.ink, margin: 0,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                }}>{f.name}</h4>
              </div>
              <p style={{ ...T.bodyS, color: C.mid, margin: 0, fontSize: "0.88rem", paddingLeft: "1.6rem" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* Status items layout — current state + next steps */
  if (ch.statusItems) {
    const tint = (s) => {
      if (s === "完成") return { bg: "rgba(38, 110, 70, 0.14)", fg: "#2d7a4f" };
      if (s === "進行中") return { bg: "rgba(160, 110, 30, 0.14)", fg: "#8a5e1f" };
      return { bg: "rgba(26,26,26,0.06)", fg: C.mid };
    };
    return (
      <section
        ref={ref}
        data-chapter
        data-idx={idx}
        style={{
          paddingTop: "3.5rem",
          marginBottom: "3.5rem",
          borderTop: idx === 0 ? "none" : `1px solid ${C.hair}`,
        }}>
        <ChapterHeader ch={ch} inView={inView} />
        <div style={{
          marginTop: "2.5rem",
          border: `1px solid ${C.hair}`,
          padding: "0.4rem 1.5rem",
        }}>
          {ch.statusItems.map((item, i) => {
            const t = tint(item.state);
            return (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr",
                alignItems: "center",
                gap: "1.2rem",
                padding: "1.1rem 0",
                borderBottom: i === ch.statusItems.length - 1 ? "none" : `1px solid ${C.hair}`,
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(10px)",
                transition: `opacity 0.7s ease ${0.15 + i * 0.1}s, transform 0.7s ease ${0.15 + i * 0.1}s`,
              }}>
                <span style={{
                  ...T.label,
                  fontSize: "0.62rem",
                  color: t.fg,
                  background: t.bg,
                  padding: "0.32rem 0.6rem",
                  textAlign: "center",
                  letterSpacing: "0.14em",
                  justifySelf: "start",
                }}>{item.state}</span>
                <p style={{ ...T.bodyS, color: C.mid, margin: 0, fontSize: "0.95rem" }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  /* Lessons layout — numbered takeaways */
  if (ch.lessons) {
    return (
      <section
        ref={ref}
        data-chapter
        data-idx={idx}
        style={{
          paddingTop: "3.5rem",
          marginBottom: "3.5rem",
          borderTop: idx === 0 ? "none" : `1px solid ${C.hair}`,
        }}>
        <ChapterHeader ch={ch} inView={inView} />
        <div style={{ marginTop: "2.5rem" }}>
          {ch.lessons.map((l, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "44px 1fr",
              gap: "1.2rem",
              padding: "1.4rem 0",
              borderBottom: i === ch.lessons.length - 1 ? "none" : `1px solid ${C.hair}`,
              alignItems: "baseline",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(10px)",
              transition: `opacity 0.7s ease ${0.15 + i * 0.1}s, transform 0.7s ease ${0.15 + i * 0.1}s`,
            }}>
              <span style={{
                ...T.mono, color: C.faint,
                fontSize: "0.95rem",
                fontFeatureSettings: "'tnum'",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{
                ...T.body, color: C.mid,
                margin: 0, fontSize: "1.02rem",
                lineHeight: 1.75,
              }}>{l}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* Decisions layout (no media) */
  if (ch.decisions) {
    return (
      <section
        ref={ref}
        data-chapter
        data-idx={idx}
        style={{
          paddingTop: "3.5rem",
          marginBottom: "3.5rem",
          borderTop: idx === 0 ? "none" : `1px solid ${C.hair}`,
        }}>
        <ChapterHeader ch={ch} inView={inView} />
        <div style={{ marginTop: "2.5rem" }}>
          {ch.decisions.map((d, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "40px 1fr 1.2fr",
              gap: "2rem",
              padding: "2rem 0",
              borderBottom: `1px solid ${C.hair}`,
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(12px)",
              transition: `opacity 0.7s ease ${0.15 + i * 0.1}s, transform 0.7s ease ${0.15 + i * 0.1}s`,
            }}>
              <span style={{ ...T.mono, color: C.ghost, fontSize: "0.72rem", paddingTop: "0.25rem" }}>
                · 0{i + 1}
              </span>
              <h4 style={{
                ...T.h4,
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: C.ink, margin: 0,
                fontWeight: 400,
              }}>{d.d}</h4>
              <p style={{ ...T.bodyS, color: C.mid, margin: 0 }}>{d.r}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* Body + media layout */
  return (
    <section
      ref={ref}
      data-chapter
      data-idx={idx}
      style={{
        paddingTop: "3.5rem",
        marginBottom: "3.5rem",
        borderTop: idx === 0 ? "none" : `1px solid ${C.hair}`,
      }}>
      <ChapterHeader ch={ch} inView={inView} />

      <div style={{ marginTop: "2.5rem" }}>
        <div style={{
          maxWidth: 620,
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(12px)",
          transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
        }}>
          <p style={{ ...T.body, color: C.mid, margin: "0 0 1.4rem", fontSize: "1.05rem" }}>
            {ch.body}
          </p>
          {ch.body2 && (
            <p style={{ ...T.body, color: C.mid, margin: 0, fontSize: "1.05rem" }}>
              {ch.body2}
            </p>
          )}
        </div>

        {ch.media && (
          <div style={{
            marginTop: "3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}>
            <Placeholder
              kind={ch.media.kind}
              palette={palette}
              caption={ch.media.caption}
              label={`${workId} · ${ch.n}`}
              height={ch.media.kind === "result" ? 420 : 380}
            />
          </div>
        )}
      </div>
    </section>
  );
};

const ChapterHeader = ({ ch, inView }) => (
  <header style={{
    display: "grid",
    gridTemplateColumns: "auto auto 1fr auto",
    gap: "1.5rem",
    alignItems: "baseline",
  }}>
    <span style={{
      ...T.mono, color: C.faint, fontSize: "0.78rem",
      opacity: inView ? 0.9 : 0,
      transform: inView ? "none" : "translateX(-8px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>{ch.n}</span>
    <span style={{
      width: 36, height: 1, background: C.ink, opacity: 0.4,
      transform: inView ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.8s cubic-bezier(.2,.8,.2,1) 0.15s",
    }} />
    <h3 style={{
      ...T.h3,
      fontSize: "clamp(1.4rem, 2.6vw, 1.85rem)",
      color: C.ink, margin: 0,
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(8px)",
      transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
    }}>{ch.label}</h3>
    <span style={{
      fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
      color: C.ghost, fontSize: "1rem",
      opacity: inView ? 0.7 : 0,
      transition: "opacity 0.7s ease 0.3s",
    }}>/ {ch.kicker}</span>
  </header>
);

window.CaseStudy = CaseStudy;

/* ─── HeroCarousel: horizontally-scrollable image gallery
   - 大圖滿版顯示，左右滑或拖動切換
   - 下方有 thumbnail dot 指示位置
   - 鍵盤左右鍵也能切換
─── */
const HeroCarousel = ({ images, palette, workId, title }) => {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const total = images.length;

  const go = (i) => {
    const n = Math.max(0, Math.min(total - 1, i));
    setIdx(n);
    const track = trackRef.current;
    if (!track) return;
    // Find by data-slide attribute so we don't get tripped up by inline <style> children
    const card = track.querySelector(`[data-slide="${n}"]`);
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  /* Track active slide on scroll (for drag/swipe) */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = track.clientWidth;
        const i = Math.round(track.scrollLeft / w);
        if (i !== idx) setIdx(i);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [idx, total]);

  /* Keyboard arrows */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(idx - 1);
      else if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, total]);

  return (
    <div style={{ position: "relative" }}>
      <style>{`.hc-track::-webkit-scrollbar{display:none}`}</style>
      {/* Track — horizontal scroll with snap. Background matches page so images don't sit in a dark box. */}
      <div
        ref={trackRef}
        className="hc-track"
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          background: "transparent",
        }}
      >
        {images.map((im, i) => (
          <div key={i} data-slide={i} style={{
            flex: "0 0 100%",
            scrollSnapAlign: "start",
            position: "relative",
            background: "transparent",
            padding: "8px 64px 0",
            boxSizing: "border-box",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{
              height: 720,
              width: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {im.src ? (
                <img
                  src={im.src}
                  alt={im.caption || `${title} · ${i + 1}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              ) : (
                <div style={{ width: "100%", height: "100%" }}>
                  <Placeholder
                    kind="frame"
                    palette={palette}
                    caption={im.caption || `${title} · slide ${i + 1}`}
                    label={`${workId} · ${String(i + 1).padStart(2, "0")}`}
                    height={560}
                  />
                </div>
              )}
            </div>
            {im.caption && (
              <div style={{
                ...T.bodyS,
                fontSize: "0.92rem",
                color: C.mid,
                fontStyle: "italic",
                fontFamily: "'Cormorant Garamond','Noto Serif TC',serif",
                fontWeight: 400,
                letterSpacing: "0.01em",
                textAlign: "center",
                marginTop: "1.5rem",
                marginBottom: "0.4rem",
                maxWidth: 640,
                lineHeight: 1.55,
              }}>{im.caption}</div>
            )}
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      {total > 1 && (
        <>
          <button
            aria-label="previous"
            onClick={(e) => { e.stopPropagation(); go(idx - 1); }}
            disabled={idx === 0}
            style={{
              position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)",
              width: 44, height: 44, borderRadius: "50%",
              border: `1px solid ${C.hair}`,
              background: C.bg0,
              color: C.ink, fontSize: "1.1rem",
              cursor: idx === 0 ? "default" : "pointer",
              opacity: idx === 0 ? 0.3 : 1,
              transition: "opacity 0.25s ease, transform 0.2s ease",
              boxShadow: "0 2px 8px rgba(26,26,26,0.08)",
              zIndex: 5,
            }}>←</button>
          <button
            aria-label="next"
            onClick={(e) => { e.stopPropagation(); go(idx + 1); }}
            disabled={idx === total - 1}
            style={{
              position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)",
              width: 44, height: 44, borderRadius: "50%",
              border: `1px solid ${C.hair}`,
              background: C.bg0,
              color: C.ink, fontSize: "1.1rem",
              cursor: idx === total - 1 ? "default" : "pointer",
              opacity: idx === total - 1 ? 0.3 : 1,
              transition: "opacity 0.25s ease, transform 0.2s ease",
              boxShadow: "0 2px 8px rgba(26,26,26,0.08)",
              zIndex: 5,
            }}>→</button>
        </>
      )}

      {/* Dot indicators + counter */}
      <div style={{
        marginTop: "1.2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`slide ${i + 1}`}
              onClick={() => go(i)}
              style={{
                all: "unset", cursor: "pointer",
                width: i === idx ? 24 : 8, height: 6,
                borderRadius: 3,
                background: i === idx ? C.ink : "rgba(26,26,26,0.2)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
        <span style={{ ...T.mono, color: C.ghost, fontSize: "0.72rem", letterSpacing: "0.14em" }}>
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

window.HeroCarousel = HeroCarousel;
