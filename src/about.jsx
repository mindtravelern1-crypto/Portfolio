/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ABOUT — sidebar label + serif essay
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const AboutSection = () => (
  <section className="sec bg-paper about" id="about">
    <div className="wrap grid">
      <aside>
        <div className="side-card">
          <span className="label">Now</span>
          <p>心理系大三<br />預計 2028 畢業<br />學體驗設計 · 創業課程<br />台北 / Taipei</p>
          <span className="label" style={{ marginTop: 20 }}>Open to</span>
          <p>體驗設計相關實習<br />Side project<br />對這些問題有興趣的對話</p>
        </div>
      </aside>
      <div style={{ position: "relative" }}>
        <div className="eyebrow">About — 關於我</div>
        <h2 className="h2 about-h2">探索，是為了<br /><span className="ul-doodle" style={{ color: "var(--blue-800)" }}>擴展邊界<svg style={{ color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-ul" /></svg></span> — 擴大舒適圈。</h2>
        <svg className="doodle" style={{ right: "6%", top: 4, width: 40, height: 38, color: "var(--coral)" }} aria-hidden="true"><use href="#d-heart" /></svg>
        <div style={{ maxWidth: 640 }}>
            <Fade delay={0.14}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                做東西時，我常先把自己放進使用者的位置，想像他們打開畫面時的感受：會不會看不懂、會不會覺得麻煩。我和 Claude 等 AI 工具協作，把想法快速做成能用的版本，再自己在手機和電腦上一遍遍操作，哪裡覺得卡、覺得怪，就改到順為止。介面用 Figma 規劃，插畫用 Procreate 手繪。
              </p>
            </Fade>
            <Fade delay={0.2}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                國中看書時意外接觸到心理學，當時因「畫畫吃不飽」放下畫畫；後來在心理系重新畫，把心理學和繪畫接到體驗設計。
              </p>
            </Fade>
            <Fade delay={0.26}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "3rem", fontSize: "1rem" }}>
                現在是東吳心理系大三，預計 2028 畢業，同時在學體驗設計、商用設計，也修創業思維與實務。統計與實驗方法是系上的課。
              </p>
            </Fade>
        </div>
        <div className="pillars">
          <div className="pillar"><div className="k">心理學</div><p>理解人怎麼想、怎麼選擇、怎麼變化的內在運作。</p></div>
          <div className="pillar"><div className="k">體驗設計</div><p>理解介面怎麼成為一種讓人能誠實的環境。</p></div>
          <div className="pillar"><div className="k">Vibe Coding</div><p>和 Claude 等 AI 工具一起把點子做出來，做我自己每天會用的工具。</p></div>
        </div>
      </div>
    </div>
  </section>
);

window.AboutSection = AboutSection;
