const NoteCard = ({ note, isOpen, onToggle }) => (
  <article className="note">
    <span className="tag">{note.type}</span>
    <h3 className="h4">{note.title}</h3>
    <p style={{ whiteSpace: "pre-line" }}>{isOpen ? note.full : note.excerpt}</p>
    <button className="more" onClick={onToggle}>
      {isOpen ? "收起" : "讀全文 →"}
    </button>
    {note.link && isOpen && (
      <a href={note.link} target="_blank" rel="noopener noreferrer" className="more">閱讀完整文章 ↗</a>
    )}
  </article>
);

const NotesSection = () => {
  const [openIdx, setOpenIdx] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);
  const visible = showAll ? notes : notes.slice(0, 3);
  return (
    <React.Fragment>
      <svg className="wave" viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ background: "var(--paper)" }} aria-hidden="true">
        <path d="M0 34 C220 10 420 48 700 28 S1160 8 1440 30 L1440 56 L0 56Z" fill="var(--blue-100)" />
      </svg>
      <section className="sec bg-blue" id="notes" style={{ paddingTop: 84 }}>
        <div className="wrap">
          <div className="sec-head">
            <div><div className="eyebrow">Notes</div><h2 className="h2">筆記</h2></div>
            <p>我自己寫的短文，不是作品說明。有的還在想，沒有結論。</p>
          </div>
          <div className="notes-grid">
            {visible.map((note, i) => (
              <NoteCard key={note.title} note={note} isOpen={openIdx === i} onToggle={() => setOpenIdx((prev) => prev === i ? null : i)} />
            ))}
          </div>
          {notes.length > 3 && (
            <div style={{ marginTop: 36 }}>
              <button className="btn btn-ghost" onClick={() => { setShowAll((v) => !v); setOpenIdx(null); }}>
                {showAll ? "收起筆記" : "更多筆記"}
              </button>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

window.NotesSection = NotesSection;
