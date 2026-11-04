const CONTACTS = [
  ["Email", "enyulin362@gmail.com", "mailto:enyulin362@gmail.com"],
  ["LinkedIn", "linkedin.com/in/enyu-lin", "https://www.linkedin.com/in/enyu-lin-551298374"],
  ["Threads", "@mind_traveler_yu", "https://www.threads.com/@mind_traveler_yu"],
];

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="wrap grid">
      <div>
        <div className="eyebrow">Contact</div>
        <h2 className="h2">如果你也在想這些事，<br />歡迎來聊聊。</h2>
        <p>對心理學 × 設計 × HCI、自我探索、自我實現這類問題有共鳴的，或是想聊聊體驗設計相關實習，都歡迎寫信給我。</p>
        <a className="btn btn-light" style={{ marginTop: 30 }} href="mailto:enyulin362@gmail.com">寫信給我 →</a>
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
