/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ABOUT — sidebar label + serif essay
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const AboutSection = () => (
  <section className="sec bg-paper about" id="about">
    <div className="wrap grid">
      <aside>
        <div className="side-card">
          <span className="label">現在</span>
          <p>心理系大三<br />預計 2028 畢業<br />也在學設計和創業課<br />台北</p>
          <span className="label" style={{ marginTop: 20 }}>開放</span>
          <p>體驗設計實習<br />一起做小專案<br />聊作品或實習</p>
        </div>
      </aside>
      <div style={{ position: "relative" }}>
        <div className="eyebrow">About — 關於我</div>
        <h2 className="h2 about-h2">做之前，先想像<br /><span className="ul-doodle" style={{ color: "var(--blue-800)" }}>用起來的感覺<svg style={{ color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-ul" /></svg></span></h2>
        <svg className="doodle" style={{ right: "6%", top: 4, width: 40, height: 38, color: "var(--coral)" }} aria-hidden="true"><use href="#d-heart" /></svg>
        <div style={{ maxWidth: 640 }}>
            <Fade delay={0.14}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                做東西時，我先把自己放進使用者的位置，想像他打開畫面會不會看不懂、會不會覺得麻煩。要做成能點的版本時，與 Claude 等 AI 工具協作。然後我在手機和電腦上自己走幾遍，哪裡卡、哪裡怪，就改到順。介面用 Figma 排，插畫用 Procreate 手繪。
              </p>
            </Fade>
            <Fade delay={0.2}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                國中看書時碰到心理學。那時候覺得畫畫吃不飽，先放下了。進心理系之後又開始畫，現在把心理學和畫用在體驗設計上。
              </p>
            </Fade>
            <Fade delay={0.26}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "3rem", fontSize: "1rem" }}>
                現在是東吳心理系大三，預計 2028 畢業。同時在學體驗設計、商用設計，也修創業思維與實務。統計和實驗方法是系上的課。
              </p>
            </Fade>
        </div>
        <div className="pillars">
          <div className="pillar"><div className="k">心理學</div><p>人怎麼想、怎麼做選擇。我用這個來出題、看回答。</p></div>
          <div className="pillar"><div className="k">體驗設計</div><p>人打開畫面之後，看不看得懂、會不會做到一半就走。</p></div>
          <div className="pillar"><div className="k">和 AI 協作</div><p>做成我自己會用的小工具，例如記職缺、練設計和畫畫。</p></div>
        </div>
      </div>
    </div>
  </section>
);

window.AboutSection = AboutSection;
