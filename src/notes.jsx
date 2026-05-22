/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NOTEBOOK — dark inverse section, expanding notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const NoteRow = ({ note, isOpen, onToggle, delay = 0 }) => {
  const [hover, setHover] = useState(false);
  return (
    <Fade delay={delay}>
      <div style={{ borderTop: `1px solid ${C.hairInv}` }}>
        <div
          onClick={onToggle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "1.85rem 0",
            cursor: "pointer", userSelect: "none",
            display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "2rem",
            alignItems: "baseline",
            opacity: isOpen ? 1 : hover ? 0.92 : 0.62,
            transition: "opacity 0.3s ease"
          }}>
          
          <div style={{ display: "flex", alignItems: "center", minWidth: 90 }}>
            <span style={{
              ...T.label,
              fontSize: "0.62rem",
              color: C.midInv,
              fontWeight: 500,
              letterSpacing: "0.18em",
              border: `1px solid rgba(240,239,233,0.28)`,
              padding: "0.28rem 0.65rem",
              whiteSpace: "nowrap",
            }}>{note.type}</span>
          </div>

          <div>
            <h3 style={{
              ...T.h4,
              fontSize: "clamp(1rem, 1.7vw, 1.2rem)",
              color: C.inkInv, margin: "0 0 0.5rem",
              fontWeight: 400, lineHeight: 1.5
            }}>{note.title}</h3>
            <p style={{ ...{ ...T.bodyS, color: C.faintInv, margin: 0, fontStyle: "italic", opacity: "0.01" }, color: "rgb(248, 248, 248)", opacity: "1" }}>
              {note.excerpt}
            </p>
          </div>

          <div style={{
            ...T.label, color: C.inkInv, fontSize: "0.6rem",
            opacity: isOpen ? 0.85 : 0.35,
            transition: "opacity 0.3s"
          }}>
            <span style={{
              display: "inline-block",
              transition: "transform 0.4s cubic-bezier(.2,.8,.2,1)",
              transform: isOpen ? "rotate(180deg)" : "rotate(0)"
            }}>↓</span>
          </div>
        </div>

        <div style={expandStyle(isOpen)}>
          <div style={expandInnerStyle}>
            <div style={{
              borderTop: `1px solid ${C.hairInv}`,
              padding: "2rem 0 2.5rem",
              maxWidth: 720
            }}>
              {note.full.split("\n\n").map((para, pi) =>
              <p key={pi} style={{
                ...T.body, color: C.midInv,
                fontSize: "1rem", lineHeight: 2,
                margin: pi === 0 ? "0 0 1.25rem" : "0 0 1.25rem",
                whiteSpace: "pre-line"
              }}>{para}</p>
              )}
              {note.link &&
              <a href={note.link} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                ...T.bodyS, color: C.inkInv, fontSize: "0.86rem",
                textDecoration: "none",
                borderBottom: `1px solid ${C.faintInv}`,
                paddingBottom: "0.15rem",
                transition: "opacity 0.25s ease",
                display: "inline-block", marginTop: "0.5rem"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 0.6}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
                閱讀完整文章 ↗</a>
              }
            </div>
          </div>
        </div>
      </div>
    </Fade>);

};

const NotesSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const isMobile = useIsMobile();
  return (
    <section id="notes" style={{ ...{
        background: C.bg2,
        borderTop: "1px solid rgba(0,0,0,0.2)",
        padding: isMobile ? "4rem 1.25rem" : "7rem 3rem 6rem",
        color: C.inkInv
      }, background: "rgb(28, 26, 24)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Notebook · Fragments"
          title="探索中的碎片"
          subtitle="思考、寫作、草稿。不是結論，是還在發生的事。"
          dark
          right={
          <div style={{ textAlign: "right" }}>
              <div style={{ ...T.mono, color: C.faintInv, fontSize: "0.7rem" }}>{notes.length} / fragments</div>
              <div style={{ ...T.label, color: C.ghostInv, marginTop: "0.4rem", fontStyle: "italic", textTransform: "none", letterSpacing: "0.08em" }}>
                writing · sketch · thoughts
              </div>
            </div>
          } />
        

        <div>
          {notes.map((n, i) =>
          <NoteRow
            key={i}
            note={n}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx((prev) => prev === i ? null : i)}
            delay={i * 0.04} />

          )}
          <div style={{ borderTop: `1px solid ${C.hairInv}` }} />
        </div>

        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "space-between" }}>
          <span style={{
            ...T.label, color: C.ghostInv,
            fontStyle: "italic", textTransform: "none", letterSpacing: "0.08em", fontSize: "12px"
          }}>還在更新 — </span>
          <span style={{ ...T.mono, color: C.ghostInv, fontSize: "0.7rem" }}>NOTEBOOK /</span>
        </div>
      </div>
    </section>);

};

window.NotesSection = NotesSection;
