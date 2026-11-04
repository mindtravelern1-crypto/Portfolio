/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   WORKS — featured cards, then smaller trials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const WORK_ORDER = ["CATI", "心旅人自我探索APP", "三分鐘探索你的潛能", "讀懂自己，再選科系"];

const orderedWorks = () => WORK_ORDER.map((title, i) => {
  const work = works.find((w) => w.title === title);
  return { ...work, id: String(i + 1).padStart(2, "0") };
});

const cardTags = (work) => (work.tags || [])
  .filter((tag) => tag !== work.status && !String(work.status || "").includes(tag) && tag !== "開發中")
  .slice(0, 3);

const MetaLine = ({ work }) => (
  <div style={{ ...T.label, color: C.faint, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "none" }}>
    {work.type} · {work.status}
  </div>
);

const TagRow = ({ work }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
    {cardTags(work).map((tag) => (
      <span key={tag} style={{
        ...T.label, fontSize: "0.8rem", color: C.faint,
        border: `1px solid ${C.hair}`, padding: "0.28rem 0.6rem",
        letterSpacing: "0.08em"
      }}>{tag}</span>
    ))}
  </div>
);

const StatRow = ({ stats }) => {
  const isMobile = useIsMobile();
  return (
  <div style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
    gap: "0.75rem",
    marginTop: "1.25rem"
  }}>
    {stats.map((s) => (
      <div key={s.l} style={{ borderTop: `1px solid ${C.hairBold}`, paddingTop: "0.55rem" }}>
        <div style={{ ...T.h4, color: C.accent, fontSize: "1.05rem", margin: 0 }}>{s.n}</div>
        <div style={{ ...T.label, color: C.faint, fontSize: "0.8rem", letterSpacing: "0.06em", marginTop: "0.25rem" }}>{s.l}</div>
      </div>
    ))}
  </div>
  );
};

const OpenButton = ({ onClick, children }) => (
  <button className="cta" onClick={onClick} style={{
    background: C.ink, color: C.bg0, border: "none",
    padding: "0.85rem 1.25rem",
    ...T.label, color: C.bg0, fontSize: "0.8rem",
    letterSpacing: "0.1em", cursor: "pointer"
  }}>{children}</button>
);

const FeaturedCard = ({ work, onOpenCase }) => {
  const isMobile = useIsMobile();
  return (
    <article style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "minmax(220px, 340px) 1fr",
      gap: isMobile ? "1.25rem" : "2.5rem",
      padding: "2rem 0",
      borderTop: `1px solid ${C.hair}`,
      alignItems: "center"
    }}>
      <img src={work.mainImage} alt="" style={{ width: "100%", maxHeight: isMobile ? 280 : 360, objectFit: "contain" }} />
      <div>
        <h3 style={{ ...T.h2, color: C.ink, margin: "0 0 0.35rem", fontSize: "clamp(1.45rem, 2.4vw, 1.85rem)" }}>{work.title}</h3>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: C.faint, marginBottom: "0.75rem" }}>{work.sub}</div>
        <MetaLine work={work} />
        <p style={{ ...T.body, color: C.mid, margin: "1rem 0 0", maxWidth: 560 }}>{work.brief}</p>
        {work.stats && <StatRow stats={work.stats} />}
        <div style={{ marginTop: "1.25rem" }}><TagRow work={work} /></div>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
          <OpenButton onClick={() => onOpenCase(work)}>看完整案例</OpenButton>
          {work.link && (
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="ul" style={{ ...T.bodyS, color: C.ink }}>
              {work.linkLabel || "前往作品"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const SideCard = ({ work, onOpenCase }) => (
  <article style={{
    borderTop: `1px solid ${C.hair}`,
    padding: "1.5rem 0 0.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  }}>
    <img src={work.mainImage} alt="" style={{ width: "100%", maxHeight: 180, objectFit: "contain" }} />
    <div style={{ ...T.label, color: C.ink, fontSize: "0.8rem", letterSpacing: "0.08em" }}>{work.status}</div>
    <h3 style={{ ...T.h3, color: C.ink, margin: 0, fontSize: "1.25rem" }}>{work.title}</h3>
    <MetaLine work={work} />
    <p style={{ ...T.bodyS, color: C.mid, margin: 0 }}>{work.brief}</p>
    <TagRow work={work} />
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginTop: "0.35rem" }}>
      <OpenButton onClick={() => onOpenCase(work)}>看案例</OpenButton>
      {work.link && (
        <a href={work.link} target="_blank" rel="noopener noreferrer" className="ul" style={{ ...T.bodyS, color: C.ink }}>
          {work.linkLabel || "看試用版"}
        </a>
      )}
    </div>
  </article>
);

const WorksSection = ({ onOpenCase }) => {
  const isMobile = useIsMobile();
  const list = orderedWorks();
  const featured = list.filter((w) => w.featured);
  const side = list.filter((w) => !w.featured);

  return (
    <section id="works" style={{
      background: C.bg1,
      borderTop: `1px solid ${C.hair}`,
      padding: isMobile ? "4.5rem 1.25rem" : "9rem 3rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Selected Work"
          title="作品"
          subtitle="兩個主要作品，以及兩個還在開發的試用版。"
        />

        <div>
          {featured.map((w) => <FeaturedCard key={w.title} work={w} onOpenCase={onOpenCase} />)}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "0.5rem" : "2.5rem",
          marginTop: "0.5rem"
        }}>
          {side.map((w) => <SideCard key={w.title} work={w} onOpenCase={onOpenCase} />)}
        </div>

        <p style={{ ...T.bodyS, color: C.faint, margin: "2.5rem 0 0", fontSize: "0.95rem" }}>
          其他小工具：
          <a href="https://job-tracker-docs.vercel.app" target="_blank" rel="noopener noreferrer" className="ul">職缺追蹤網站</a>
          、
          <a href="https://design-gym-ntfu.vercel.app" target="_blank" rel="noopener noreferrer" className="ul">設計與繪畫訓練場</a>
          （自用、和 AI 一起做出來的）
        </p>
      </div>
    </section>
  );
};

window.WorksSection = WorksSection;
