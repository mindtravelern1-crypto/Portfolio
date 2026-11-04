/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ABOUT — sidebar label + serif essay
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const AboutSection = () => {
  const isMobile = useIsMobile();
  return (
  <section id="about" style={{
    background: C.bg1,
    borderTop: `1px solid ${C.hair}`,
    padding: isMobile ? "4.5rem 1.25rem" : "9rem 3rem",
    position: "relative",
  }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
        gap: isMobile ? "2.5rem" : "5rem",
        alignItems: "start",
      }}>
        {/* Sidebar */}
        <aside>
          <Fade>
            <Label>About</Label>
          </Fade>
          <Fade delay={0.06}>
            <div style={{
              width: 1, height: 56, background: C.ink, opacity: 0.18,
              margin: "1.25rem 0 1.75rem 0.4rem",
            }} />
          </Fade>
          <Fade delay={0.12}>
            <div style={{ ...T.label, color: C.faint, marginBottom: "0.65rem" }}>Now</div>
            <p style={{ ...T.caption, color: C.mid, margin: 0, lineHeight: 1.8 }}>
              心理系大三<br />
              預計 2028 畢業<br />
              學體驗設計 · 創業課程<br />
              台北 / Taipei
            </p>
          </Fade>
          <Fade delay={0.18}>
            <div style={{ ...T.label, color: C.faint, margin: "1.75rem 0 0.65rem" }}>Open to</div>
            <p style={{ ...T.caption, color: C.mid, margin: 0, lineHeight: 1.8 }}>
              體驗設計相關實習<br />
              Side project<br />
              對這些問題有興趣的對話
            </p>
          </Fade>
        </aside>

        {/* Main essay */}
        <div>
          <Fade>
            <Label>About — 關於我</Label>
          </Fade>
          <Fade delay={0.08}>
            <h2 style={{
              ...T.h1,
              fontSize: "clamp(1.85rem, 3.6vw, 2.6rem)",
              margin: "1rem 0 3rem",
              color: C.ink,
              maxWidth: 720,
              lineHeight: 1.35,
            }}>
              探索，是為了<br />
              <span style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontStyle: "italic", opacity: 0.72,
              }}>擴展邊界 — 擴大舒適圈。</span>
            </h2>
          </Fade>

          <div style={{ maxWidth: 600 }}>
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

          {/* Cross-discipline grid */}
          <Fade delay={0.32}>
            <div style={{
              paddingTop: "2rem",
              borderTop: `1px solid ${C.hair}`,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "2.5rem",
              maxWidth: 720,
            }}>
              {[
                { k: "心理學", v: "理解人怎麼想、怎麼選擇、怎麼變化的內在運作。" },
                { k: "體驗設計", v: "理解介面怎麼成為一種讓人能誠實的環境。" },
                { k: "Vibe Coding", v: "和 AI 一起把點子做出來，做我自己每天會用的工具。" },
              ].map(({ k, v }) => (
                <div key={k}>
                  <div style={{ ...T.label, color: C.faint, marginBottom: "0.65rem" }}>{k}</div>
                  <p style={{ ...T.caption, color: C.mid, margin: 0, fontSize: "0.85rem" }}>{v}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  </section>
  );
};

window.AboutSection = AboutSection;
