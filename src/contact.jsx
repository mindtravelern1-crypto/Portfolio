const CONTACTS = [
  ["Email", "enyulin362@gmail.com", "mailto:enyulin362@gmail.com"],
  ["LinkedIn", "linkedin.com/in/enyu-lin", "https://www.linkedin.com/in/enyu-lin-551298374"],
  ["Threads", "@mind_traveler_yu", "https://www.threads.com/@mind_traveler_yu"],
];

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="wrap">
      <div className="eyebrow">Contact</div>
      <h2 className="h2"><span className="contact-l1">謝謝你看到這裡。</span><span className="contact-l2">如果我的作品讓你有些想法，<span className="contact-rest">很想聽聽你的意見。</span></span></h2>
      <div className="grid">
      <div>
        <p>如果你對心理學 × 設計 × HCI、自我探索或自我實現有什麼想{"\u2060"}法，或是想聊聊體驗設計相關實習，歡迎寫信告訴我。</p>
        <a className="btn btn-light" href="mailto:enyulin362@gmail.com">寫信給我 →</a>
      </div>
      <div>
        {CONTACTS.map(([lbl, val, href]) => (
          <a className="c-row" key={lbl} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
            <span>{lbl.toUpperCase()}</span>
            <span>{val}</span>
            <span>↗</span>
          </a>
        ))}
      </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="wrap">
      <span>©ANYA — PORTFOLIO</span>
      <span>built with care · 與 Claude 等 AI 工具協作</span>
    </div>
  </footer>
);

Object.assign(window, { ContactSection, Footer });
