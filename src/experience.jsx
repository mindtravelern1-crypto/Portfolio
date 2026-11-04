const EXPERIENCE = [
  { when: "2026/10 – 迄今", title: "家教", text: "國小、國中學生各一位" },
  { when: "2025（數個月）", title: "知人有限公司", text: "接案影片剪輯。以 CapCut 剪輯約 20 支公司客戶案影片。" },
  { when: "2025/07 – 2025/08", title: "三發教育基金會", text: "美宣行銷（遠端）。以 Canva 為「人各有痣」企劃製作 9 篇 Instagram 貼文。" },
  { when: "2024/10 – 2026/06", title: "東吳大學心理學系系辦", text: "工讀生" },
];

const ExperienceSection = () => (
  <section className="sec bg-paper" id="experience">
    <div className="wrap">
      <div className="sec-head">
        <div><div className="eyebrow">Experience</div><h2 className="h2">經歷</h2></div>
        <p>工讀與接案。</p>
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
