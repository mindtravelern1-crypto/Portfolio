/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONTACT + FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const CONTACTS = [
["Email", "enyulin362@gmail.com", "mailto:enyulin362@gmail.com"],
["LinkedIn", "linkedin.com/in/enyu-lin", "https://www.linkedin.com/in/enyu-lin-551298374"],
["Threads", "@mind_traveler_yu", "https://www.threads.com/@mind_traveler_yu"]];


const ContactSection = () =>
<section id="contact" style={{
  background: C.bg0,
  borderTop: `1px solid ${C.hair}`,
  padding: "7rem 3rem 7rem",
  position: "relative",
  overflow: "hidden"
}}>
    {/* Decorative giant italic */}
    <div aria-hidden style={{
    position: "absolute", right: "-2rem", bottom: "-3rem",
    fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 300,
    fontSize: "clamp(8rem, 18vw, 14rem)",
    color: "rgba(26,26,26,0.04)",
    lineHeight: 0.85, userSelect: "none", pointerEvents: "none"
  }}>let's talk.</div>

    <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "6rem", alignItems: "start" }}>
        <div>
          <Fade>
            <Label>Contact</Label>
          </Fade>
          <Fade delay={0.06}>
            <h2 style={{
            ...T.h1,
            fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)",
            margin: "1rem 0 1.5rem",
            color: C.ink,
            lineHeight: 1.4
          }}>
              如果你也在想這些事，<br />
              <span style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontStyle: "italic", opacity: 0.55
            }}>歡迎來聊聊。</span>
            </h2>
          </Fade>
          <Fade delay={0.12}>
            <p style={{ ...T.body, color: C.mid, maxWidth: 380, marginBottom: "2.5rem", fontSize: "0.98rem" }}>
              對心理學 × 設計 × HCI、自我探索、自我實現這類問題有共鳴的，或是想聊聊 UIUX 實習，都歡迎寫信給我。
            </p>
          </Fade>
          <Fade delay={0.18}>
            <a href="mailto:enyulin362@gmail.com" className="ul" style={{
            ...T.bodyS, color: C.ink, fontSize: "0.92rem"
          }}>寫信給我 →</a>
          </Fade>
        </div>

        <Fade delay={0.15}>
          <div style={{ paddingTop: "0.5rem" }}>
            {CONTACTS.map(([lbl, val, href], i) =>
          <a key={lbl} href={href}
          target={href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          style={{
            display: "grid", gridTemplateColumns: "90px 1fr auto", gap: "1.5rem",
            alignItems: "center",
            padding: "1.25rem 0",
            borderBottom: `1px solid ${C.hair}`,
            borderTop: i === 0 ? `1px solid ${C.hair}` : "none",
            textDecoration: "none", color: "inherit",
            transition: "background 0.25s ease, padding 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(26,26,26,0.025)";
            e.currentTarget.style.paddingLeft = "0.8rem";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.paddingLeft = "0";
          }}>
            
                <span style={{ ...T.label, color: C.ghost }}>{lbl}</span>
                <span style={{ ...T.bodyS, color: C.mid, fontSize: "0.92rem" }}>{val}</span>
                <span style={{ ...T.label, color: C.ghost, fontSize: "0.7rem" }}>↗</span>
              </a>
          )}
          </div>
        </Fade>
      </div>
    </div>
  </section>;


const Footer = () =>
<footer style={{
  background: C.bg0,
  borderTop: `1px solid ${C.hair}`,
  padding: "2rem 3rem",
  position: "relative", zIndex: 2
}}>
    <div style={{
    maxWidth: 1200, margin: "0 auto",
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    flexWrap: "wrap", gap: "1rem"
  }}>
      <span style={{ ...T.label, color: C.ghost }}>©ANYA — PORTFOLIO</span>
      <span style={{
      ...T.label, color: C.ghost,
      fontStyle: "italic", textTransform: "none", letterSpacing: "0.08em"
    }}>還在更新中</span>
      <span style={{ ...T.mono, color: C.ghost, fontSize: "0.66rem" }}>
        built with care · vibe coded
      </span>
    </div>
  </footer>;


Object.assign(window, { ContactSection, Footer });