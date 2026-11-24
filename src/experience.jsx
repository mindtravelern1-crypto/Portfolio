const EXPERIENCE = [
  { when: "2026/10 – 迄今", title: "家教", text: "國小、國中各一位學生。" },
  { when: "2025（數個月）", title: "知人有限公司", text: "接案剪影片。用 CapCut 剪了約 20 支客戶的片子。" },
  { when: "2025/07 – 2025/08", title: "三發教育基金會", text: "遠端做美宣。用 Canva 為「人各有痣」做了 9 篇 Instagram 貼文。" },
  { when: "2024/10 – 2026/06", title: "東吳大學心理學系系辦", text: "系辦工讀生。" },
];

const ExperienceSection = () => (
  <section className="sec bg-paper" id="experience">
    <div className="wrap">
      <div className="sec-head">
        <div><div className="eyebrow">Experience</div><h2 className="h2">經歷</h2></div>
        <p>家教、系辦工讀，還有剪輯和美宣的接案。</p>
      </div>
      <div className="tl">
        <svg className="line" viewBox="0 0 14 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M7 0 C4 60 10 120 6.5 200 S9 330 7 400" fill="none" stroke="var(--blue-300)" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {EXPERIENCE.map((item) => (
          <div className="tl-item" key={item.title}>
            <div className="when">{item.when}</div>
            <div><div className="h4">{item.title}</div><p className="small">{item.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

window.ExperienceSection = ExperienceSection;
