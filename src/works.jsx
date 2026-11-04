/* Works — split media/text cards. Copy stays in data.jsx. */

const WORK_ORDER = ["CATI", "心旅人自我探索APP", "三分鐘探索你的潛能", "讀懂自己，再選科系"];

const orderedWorks = () => WORK_ORDER.map((title, i) => {
  const work = works.find((w) => w.title === title);
  return { ...work, id: String(i + 1).padStart(2, "0") };
});

const cardTags = (work) => (work.tags || [])
  .filter((tag) => tag !== "開發中" && !String(work.status || "").includes(tag))
  .slice(0, 3);

const WorksSection = ({ onOpenCase }) => {
  const list = orderedWorks();
  const cati = list[0];
  const heart = list[1];
  const trials = list.slice(2);
  return (
    <section className="sec bg-paper2" id="works" style={{ paddingTop: 88 }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Selected Work</div>
            <h2 className="h2"><span className="ul-doodle">作品<svg style={{ color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-ul" /></svg></span></h2>
          </div>
          <p>兩個主要作品，以及兩個還在開發的試用版。</p>
        </div>

        <article className="proj">
          <div className="media peach">
            <img className="shot" src="assets/works/04/01-question.png" alt="" style={{ width: "66%", left: "6%", top: "9%", transform: "rotate(-3deg)" }} />
            <img className="shot" src="assets/works/04/02-result-cat.png" alt="" style={{ width: "70%", right: "6%", top: "30%", transform: "rotate(2deg)" }} />
            <svg className="doodle" style={{ left: "9%", bottom: "9%", width: 34, height: 34, color: "var(--coral)" }} aria-hidden="true"><use href="#d-spark" /></svg>
          </div>
          <div className="txt">
            <div className="num">{cati.id}</div>
            <h3 className="h3">{cati.title}</h3>
            <div className="sub">{cati.sub}</div>
            <div className="meta">
              <span>Side Project · 業主合作</span>
              <span className="sep">·</span>
              <span>{cati.type}</span>
              <span className="status live">{cati.status}</span>
            </div>
            <p className="small">{cati.brief}</p>
            <div className="stats">
              {(cati.stats || []).map((s) => (
                <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>
              ))}
            </div>
            <div className="ga">Google Analytics 由我設定。</div>
            <div className="tags">{cardTags(cati).map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <div className="acts">
              <button className="btn btn-primary" onClick={() => onOpenCase(cati)}>看完整案例 →</button>
              {cati.link && <a className="btn btn-quiet" href={cati.link} target="_blank" rel="noopener noreferrer">cat-mauve-eight.vercel.app ↗</a>}
            </div>
          </div>
        </article>

        <article className="proj">
          <div className="txt">
            <div className="num">{heart.id}</div>
            <h3 className="h3">{heart.title}</h3>
            <div className="sub">{heart.sub}</div>
            <div className="meta">
              <span>{heart.type}</span>
              <span className="status">{heart.status}</span>
            </div>
            <p className="quote">{heart.angle}</p>
            <p className="small">{heart.brief}</p>
            <div className="tags">{cardTags(heart).map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <div className="acts">
              <button className="btn btn-primary" onClick={() => onOpenCase(heart)}>看完整案例 →</button>
            </div>
          </div>
          <div className="media mist">
            <img className="shot" src="assets/works/01/ux-thinking-board.png" alt="" style={{ width: "92%", left: "-6%", top: "12%", transform: "rotate(-4deg)", opacity: 0.9 }} />
            <img className="phone" src="assets/works/01/login-screen.png" alt="" style={{ right: "14%", top: 26 }} />
            <span className="pin" style={{ left: "8%", bottom: 40 }}>UX 思考流程 · FigJam Board</span>
            <svg className="doodle" style={{ right: "9%", top: 36, width: 22, height: 22, color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-spark" /></svg>
          </div>
        </article>

        <div className="trials">
          {trials.map((work) => (
            <article className="trial" key={work.title}>
              <div className="thumb"><img src={work.mainImage} alt="" /></div>
              <div className="in">
                <span className="status">{work.status}</span>
                <h3 className="h4" style={{ fontSize: 21, margin: "8px 0 4px" }}>{work.title}</h3>
                <div className="meta" style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 10 }}>{work.type}</div>
                <p className="small">{work.brief}</p>
                <div className="ai"><svg style={{ width: 14, height: 14, color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-spark" /></svg>與 Claude 等 AI 工具協作製作</div>
                <div className="tags" style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  {cardTags(work).map((t) => <span className="tag neutral" key={t}>{t}</span>)}
                </div>
                <div className="acts" style={{ display: "flex", gap: 20, marginTop: 20, alignItems: "center" }}>
                  <button className="btn btn-ghost" style={{ padding: "10px 20px" }} onClick={() => onOpenCase(work)}>看案例</button>
                  {work.link && <a className="btn btn-quiet" style={{ padding: "10px 2px" }} href={work.link} target="_blank" rel="noopener noreferrer">{work.linkLabel || "看試用版"} ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="others">其他小工具：<a href="https://job-tracker-docs.vercel.app" target="_blank" rel="noopener noreferrer">職缺追蹤網站</a>、<a href="https://design-gym-ntfu.vercel.app" target="_blank" rel="noopener noreferrer">設計與繪畫訓練場</a>（自用，和 Claude 等 AI 工具一起做的）</p>
      </div>
    </section>
  );
};

window.WorksSection = WorksSection;
