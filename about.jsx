/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ABOUT — sidebar label + serif essay
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const AboutSection = () => (
  <section id="about" style={{
    background: C.bg1,
    borderTop: `1px solid ${C.hair}`,
    padding: "7rem 3rem 7rem",
    position: "relative",
  }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: "5rem",
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
              心理系大二<br />
              學 UIUX · 創業課程<br />
              台北 / Taipei
            </p>
          </Fade>
          <Fade delay={0.18}>
            <div style={{ ...T.label, color: C.faint, margin: "1.75rem 0 0.65rem" }}>Open to</div>
            <p style={{ ...T.caption, color: C.mid, margin: 0, lineHeight: 1.8 }}>
              UIUX 實習<br />
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
                fontStyle: "italic", opacity: 0.55,
              }}>擴展邊界 — 擴大舒適圈。</span>
            </h2>
          </Fade>

          <div style={{ maxWidth: 600 }}>
            <Fade delay={0.14}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                心理系學生，關注人與科技之間的互動體驗。對情緒、敘事與自我探索相關的數位產品設計有興趣，正在探索
                <em className="latin" style={{ opacity: 0.9, margin: "0 0.15em" }}>UX</em>、
                <em className="latin" style={{ opacity: 0.9, margin: "0 0.15em" }}>Interaction Design</em>
                與
                <em className="latin" style={{ opacity: 0.9, margin: "0 0.15em" }}>AI Experience Design</em>
                的可能性。
              </p>
            </Fade>
            <Fade delay={0.2}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                國中看書時意外接觸到心理學，當時也因「畫畫吃不飽」這樣的想法，而放棄了畫畫。但後來修讀心理系後也並沒有打算成為心理師，同時也開始重新學習繪畫，並接觸到能夠把我的專長、興趣與所學整合起來的
                <em className="latin" style={{ opacity: 0.9, margin: "0 0.15em" }}>UIUX</em>。
              </p>
            </Fade>
            <Fade delay={0.26}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                心理學讓我理解人如何思考、選擇、變化；UIUX 讓我把這些理解變成可以被體驗的介面。
              </p>
            </Fade>
            <Fade delay={0.32}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "1.5rem", fontSize: "1rem" }}>
                經常進行自我探索、與 AI 對話。<br />
                思考深度高、價值感驅動、想影響人，但還在學習落地。
              </p>
            </Fade>
            <Fade delay={0.38}>
              <p style={{ ...T.body, color: C.mid, marginBottom: "3rem", fontSize: "1rem" }}>
                現在是心理系大二，同時在學 UIUX、商用設計，也修創業思維與實務。不太確定這些最終會走到哪裡，但我知道我一直在找的是同一件事。
              </p>
            </Fade>
          </div>

          {/* Cross-discipline grid */}
          <Fade delay={0.32}>
            <div style={{
              paddingTop: "2rem",
              borderTop: `1px solid ${C.hair}`,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2.5rem",
              maxWidth: 720,
            }}>
              {[
                { k: "心理學", v: "理解人怎麼想、怎麼選擇、怎麼變化的內在運作。" },
                { k: "UIUX", v: "理解介面怎麼成為一種讓人能誠實的環境。" },
                { k: "Vibe Coding", v: "把點子做出來、放到網路上，讓真實的人去用。" },
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

window.AboutSection = AboutSection;
