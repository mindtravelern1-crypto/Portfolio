const CONTACTS = [
  ["Email", "enyulin362@gmail.com", "mailto:enyulin362@gmail.com"],
  ["LinkedIn", "linkedin.com/in/enyu-lin", "https://www.linkedin.com/in/enyu-lin-551298374"],
  ["Threads", "@mind_traveler_yu", "https://www.threads.com/@mind_traveler_yu"],
];

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="wrap">
      <div className="eyebrow">Contact</div>
      <h2 className="h2"><span className="contact-l1">謝謝你看到這裡。</span><span className="contact-l2">如果對實習或這些作品有想法，<span className="contact-rest">我很想聽。</span></span></h2>
      <div className="grid">
      <div>
        <p>我在找體驗設計實習。心理測驗、認識自己這類題目，或是作品哪裡看不懂，都可以寫信告訴我。</p>
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
      <span>與 Claude 等 AI 工具協作</span>
    </div>
  </footer>
);

Object.assign(window, { ContactSection, Footer });
