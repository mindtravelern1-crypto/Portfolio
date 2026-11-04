/* Hero is text only. No illustration and no cat. */

const Hero = () => (
  <section className="hero-typo bg-paper">
    <div className="h-blob" />
    <div className="h-blob2" />
    <svg className="doodle" style={{ right: "31%", top: 84, width: 34, height: 34, color: "var(--coral)" }} aria-hidden="true"><use href="#d-spark" /></svg>
    <svg className="doodle" style={{ right: "28.5%", top: 132, width: 16, height: 16, color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-spark" /></svg>
    <div className="wrap">
      <div className="h-main">
        <div className="kicker"><i /><span className="label">心理系 · 體驗設計 · 跨域學習中</span></div>
        <h1 className="display hero-display">
          <div><span className="g">透過</span> 內容 <span className="o ul-doodle">理解人<svg style={{ color: "var(--blue-500)" }} aria-hidden="true"><use href="#d-ul" /></svg></span></div>
          <div><span className="g">透過</span> 產品 <span className="o">放大幫助</span></div>
          <div><span className="g">透過</span> 方法 <span className="o">賦能他人</span></div>
        </h1>
        <p className="body intro">我是東吳心理系大三，預計 2028 畢業，正在找體驗設計相關實習。這份作品集是我試著理解「人怎麼成長」的過程。</p>
        <div className="ctas">
          <a className="btn btn-primary" href="#works">看作品 <span>↓</span></a>
          <a className="btn btn-ghost" href="#contact">聯繫</a>
        </div>
      </div>
      <ol className="h-index">
        <li><span className="latin-i">01</span>心理學</li>
        <li><span className="latin-i">02</span>體驗設計</li>
        <li><span className="latin-i">03</span>Vibe Coding</li>
      </ol>
    </div>
  </section>
);

const HeroWave = () => (
  <svg className="wave" viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ background: "var(--paper)" }} aria-hidden="true">
    <path d="M0 30 C180 8 340 50 560 30 S980 6 1180 26 S1380 40 1440 22 L1440 56 L0 56Z" fill="var(--paper-2)" />
  </svg>
);

window.Hero = Hero;
window.HeroWave = HeroWave;
