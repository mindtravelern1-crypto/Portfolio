/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EXPERIENCE — short work list, same editorial rows
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const EXPERIENCE = [
  {
    when: "2026/10 – 迄今",
    title: "家教",
    text: "國小、國中學生各一位",
  },
  {
    when: "2025（數個月）",
    title: "知人有限公司",
    text: "接案影片剪輯。以 CapCut 剪輯約 20 支公司客戶案影片。",
  },
  {
    when: "2025/07 – 2025/08",
    title: "三發教育基金會",
    text: "美宣行銷（遠端）。以 Canva 為「人各有痣」企劃製作 9 篇 Instagram 貼文。",
  },
  {
    when: "2024/10 – 2026/06",
    title: "東吳大學心理學系系辦",
    text: "工讀生",
  },
];

const ExperienceSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="experience" style={{
      background: C.bg0,
      borderTop: `1px solid ${C.hair}`,
      padding: isMobile ? "4rem 1.25rem" : "7rem 3rem",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Experience"
          title="經歷"
          subtitle="工讀、接案，以及打工換宿。"
        />

        <div>
          {EXPERIENCE.map((item) => (
            <div key={item.title} style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
              gap: isMobile ? "0.35rem" : "3rem",
              alignItems: "baseline",
              padding: "1.35rem 0",
              borderTop: `1px solid ${C.hair}`,
            }}>
              <div style={{ ...T.mono, color: C.faint, fontSize: "0.72rem" }}>{item.when}</div>
              <div>
                <div style={{ ...T.h4, color: C.ink, margin: 0 }}>{item.title}</div>
                <p style={{ ...T.bodyS, color: C.mid, margin: "0.35rem 0 0" }}>{item.text}</p>
              </div>
            </div>
          ))}

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
            gap: isMobile ? "0.35rem" : "3rem",
            alignItems: "baseline",
            padding: "1.35rem 0",
            borderTop: `1px solid ${C.hair}`,
          }}>
            <div style={{ ...T.mono, color: C.faint, fontSize: "0.72rem" }}>其他</div>
            <p style={{ ...T.bodyS, color: C.mid, margin: 0 }}>
              鹿粼梅花鹿園區 打工換宿（2025/02）、福憩背包客棧 打工換宿
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
            gap: isMobile ? "0.35rem" : "3rem",
            alignItems: "baseline",
            padding: "1.35rem 0",
            borderTop: `1px solid ${C.hair}`,
            borderBottom: `1px solid ${C.hair}`,
          }}>
            <div style={{ ...T.mono, color: C.faint, fontSize: "0.72rem" }}>個人專案</div>
            <p style={{ ...T.bodyS, color: C.mid, margin: 0 }}>
              <a href="https://job-tracker-docs.vercel.app" target="_blank" rel="noopener noreferrer" className="ul">職缺追蹤網站</a>
              、
              <a href="https://design-gym-ntfu.vercel.app" target="_blank" rel="noopener noreferrer" className="ul">設計與繪畫訓練場</a>
              。兩個都是給我自己每天用的小工具，和 AI 一起做出來的。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

window.ExperienceSection = ExperienceSection;
