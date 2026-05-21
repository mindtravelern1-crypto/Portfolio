import { useState, useEffect, useRef } from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ✏️  可編輯區域 — 只需要動這裡
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   修改文字：直接改引號裡的內容
   新增作品：在 works 陣列裡複製一個 { } 物件貼上
   新增筆記：在 notes 陣列裡新增一筆
   新增小實驗：在 labs 陣列裡新增一筆

   ⚠️  不要動「可編輯區域」以下的 code
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ─── Scroll reveal ─── */
const useInView = (threshold = 0.07) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
};

const Fade = ({ children, delay = 0, y = 20, style: extraStyle = {} }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : `translateY(${y}px)`,
      transition: `opacity 1s cubic-bezier(.16,1,.3,1) ${delay}s, transform 1s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...extraStyle,
    }}>
      {children}
    </div>
  );
};

/* ─── Type scale ─── */
const T = {
  t1: { fontSize: "clamp(3.8rem, 9vw, 6.8rem)", fontWeight: 300, lineHeight: 1.06, letterSpacing: "-0.03em" },
  t2: { fontSize: "clamp(1.9rem, 3.8vw, 2.6rem)", fontWeight: 300, lineHeight: 1.18, letterSpacing: "-0.022em" },
  t3: { fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)", fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.013em" },
  t4: { fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.005em" },
  t5: { fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.95 },   /* body — was 0.95 */
  t6: { fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.82 },   /* caption — was 0.78 */
  t7: { fontSize: "0.65rem", letterSpacing: "0.24em", textTransform: "uppercase" }, /* label — was 0.57 */
};

/* ─── Colours ─── */
const C = {
  bg0: "#f5f4f0", bg1: "#edebe6", bg2: "#1a1a1a",
  ink: "#1a1a1a",
  mid: "#3a3a3a",    /* was #555 — higher contrast on light bg */
  faint: "#666",     /* was #888 */
  ghost: "#999",     /* was #bbb */
  border: "rgba(26,26,26,0.12)",      /* was 0.08 — more visible */
  borderLight: "rgba(26,26,26,0.07)", /* was 0.05 */
};

/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */
const works = [
  {
    id: "01",
    category: "App",
    title: "心旅人",
    sub: "Self-Discovery App",
    year: "2025",
    type: "App Design · UX · Figma",
    status: "設計中",
    link: null,
    angle: "身邊很多人只是照著看似好的路走，而不是自己的路。",
    brief: "一個幫助人找到志業方向的自我探索 App。透過「價值觀 × 興趣 × 專長」三個維度，搭配 AI 對話與日記功能，幫使用者逐漸累積對自己的了解。",
    tags: ["App Design", "UX Research", "AI 對話", "Figma"],
    caseStudy: {
      figmaLink: "https://www.figma.com/board/4pRnAWLqGwltjyMkagzNAe/",
      sections: [
        {
          label: "核心問題",
          content: "現有工具多提供片段測驗結果與短期反思，卻少幫助使用者建立持續的探索習慣。即使接觸大量內容，使用者仍停留在「知道很多概念，但不知道如何用來理解自己」的狀態。\n\n訪談 18–25 歲用戶後，整理出四個模式：探索來源高度外化、資訊高度碎片化、工具依賴使用者自身反思能力、探索缺少長期機制。",
        },
        {
          label: "設計方向",
          content: "將探索流程分為四個層次：Explore 引導（AI 情境問題帶入探索）→ Reflect 整理（情緒與經驗紀錄）→ Pattern 累積（長期重複出現的主題與線索）→ Perspective 行動（形成方向感）。\n\nAI 的角色不是給答案，而是用反問幫使用者想清楚。UI 方向以安全感為核心——柔和色調、不被評判、可以慢慢來。",
        },
      ],
    },
  },
  {
    id: "02",
    category: "測驗",
    title: "三分鐘潛能探索",
    sub: "Potential Discovery",
    year: "2025",
    type: "Vibe Coding · AI · Web",
    status: "已上線",
    link: "https://potential-discovery.vercel.app",
    angle: "很多人不是沒有潛能，是從來沒有人幫他們看見過。",
    brief: "8 道題、3 分鐘，AI 深度交叉分析回答模式，產出個人化的潛能輪廓報告。不給標籤，找的是答案之間的關係與張力。",
    tags: ["Vibe Coding", "AI 分析", "產品設計", "自我探索"],
    caseStudy: {
      overview: "一個自我探索測驗工具。8 道題目，AI 深度交叉分析使用者的回答模式，產出個人化的潛能輪廓報告，包括核心特質、能量來源、可能還沒意識到的事。",
      motivation: "我想試試看一個問題：八道題、三分鐘，能不能讓人看到自己還沒注意到的部分？不是給一個標籤，而是找答案之間的關係與張力。很多人不是沒有潛能，是從來沒有人幫他們用對的方式看見。",
      painPoints: [
        "傳統測驗給的是分類標籤，不是真正的自我理解",
        "問題太直接（你喜歡什麼？）反而讓人答不出來",
        "分析結果感覺像套話，沒有真實感",
        "沒有時間做長達 30 分鐘的測驗",
      ],
      research: "核心體驗目標：讓人在三分鐘內感覺被看見。測試發現，問「你喜歡什麼」類的直接問句效果差，改用情境選擇（你遇到 X 情況，你會怎麼做？）讓人在不自覺中透露真實的思維模式，分析結果的準確感大幅提升。",
      userProfile: {
        who: "對自己的方向有些困惑，想要快速獲得有意義的自我洞察",
        need: "三分鐘內獲得真實且有共鳴的自我分析",
        pain: "怕做了又是一份無聊的報告，說的都是廢話",
      },
      designDecisions: [
        { decision: "用情境選擇取代直接問句", reason: "直接問「你喜歡什麼」讓人想太多、答不出來。情境選擇讓人自然地表現出思維模式。" },
        { decision: "AI 找答案之間的衝突與連結，不只是總結", reason: "讓分析結果有「這說的是我」的感覺，而不是通用話術。" },
        { decision: "3 分鐘的時間限制", reason: "降低使用門檻。讓人在決定「值不值得做」之前就完成了。" },
      ],
      process: "確定體驗目標後，設計 8 道問題（反覆修改，確保每題都能透露有意義的資訊），然後設計 AI prompt——這是最花時間的部分，需要精準指示 AI 如何找到答案之間的關係，而不只是列出特質。",
      current: "已上線，可直接體驗。這是我第一次用 vibe coding 把想法做成真實可用的產品。",
      challenge: "AI 的分析要讓人感覺「這說的是我」，而不是「這是一段通用的話術」。Prompt 設計需要非常精準地指示 AI 找到衝突與連結。",
    },
  },
  {
    id: "03",
    category: "測驗",
    title: "在選科系之前，先讀懂自己",
    sub: "Major Explorer",
    year: "2025",
    type: "Vibe Coding · AI · Web",
    status: "已上線",
    link: "https://dept-explorer-gocc.vercel.app",
    angle: "高中生選科系，通常問的是「哪個科系比較好找工作」，而不是「我是誰」。",
    brief: "針對高中生的科系探索工具。不問喜歡什麼科目，而是用心理學方法幫人看見自己真正在乎什麼，產出可放入學習歷程的報告。",
    tags: ["Vibe Coding", "心理學應用", "高中生", "AI 分析"],
    caseStudy: {
      overview: "針對高中生的科系探索工具，結合心理學理論做深度自我分析，產出可放入學習歷程的報告。從價值觀、思維模式、能量類型三個維度切入，約 10 分鐘完成。",
      motivation: "高三填志願是很多人第一次被要求「做選擇」，但從小的教育從來沒有幫人練習認識自己。結果很多選擇不是基於「我真的想要」，而是「父母說這個穩定」或「這個科系聽起來好找工作」。",
      painPoints: [
        "高三在短時間內要對未來幾十年做決定",
        "選擇基準是外部標準（薪資、穩定性），不是內在渴望",
        "學習歷程需要呈現自我認識，但大多數人不知道怎麼寫",
        "現有測驗（如 Holland Code）太學術，高中生看不懂",
      ],
      research: "目標使用者非常明確：高三要填志願、但不知道自己真正想要什麼的學生。調查發現這個族群有額外的壓力——學習歷程需要展示「我為什麼選這個科系」，所以一份有深度的自我分析對他們有雙重價值：認識自己 + 學習歷程素材。",
      userProfile: {
        who: "高中生，即將面對科系選擇",
        need: "一個能幫自己想清楚「我是誰」的工具，且結果可以直接用在學習歷程",
        pain: "被問「你的興趣是什麼」就腦袋空白",
      },
      designDecisions: [
        { decision: "不問「你喜歡什麼科目」", reason: "這個問題的答案通常是學校體制決定的，不是真正的興趣。改問價值觀和思維模式。" },
        { decision: "結果可直接作為學習歷程素材", reason: "對高中生來說，這讓測驗有實際用途，而不只是「玩玩」。" },
        { decision: "心理學理論轉化成高中生的語言", reason: "Big Five、RIASEC 等理論框架是基礎，但直接用這些詞彙會讓人感覺很遠。所有問題都重新翻譯成日常語言。" },
      ],
      process: "研究現有科系探索工具的缺點，找出可以改進的切角。選定心理學框架後，把理論轉化成問題，再反覆測試問題的語氣是否讓高中生感覺自然。AI 報告的格式設計成可以直接複製貼上到學習歷程的結構。",
      current: "已上線。是這幾個作品裡目標使用者最明確的一個，對使用者有直接、具體的幫助。",
      challenge: "如何讓 10 分鐘的測驗不讓人覺得無聊或太嚴肅。語氣和節奏很重要——問題要有一定深度，但不能讓人感覺在做考試。",
    },
  },
  {
    id: "04",
    category: "工具",
    title: "你是哪種貓？",
    sub: "Cat Personality Quiz",
    year: "2025",
    type: "Vibe Coding · 商業應用 · 創業課程",
    status: "已上線",
    link: "https://cat-mauve-eight.vercel.app",
    angle: "讓人在輕鬆的情境下接受品牌訊息，比直接推廣有效得多。",
    brief: "台大創業課程實際應用。用貓咪性格測驗作為品牌入口，透過貓咪品種與個性的對應，帶入寵物品牌折扣碼，引導使用者回到官網。",
    tags: ["商業應用", "Vibe Coding", "使用者體驗", "創業課程"],
    caseStudy: {
      overview: "台大創業課程的實際應用案例。用貓咪性格測驗作為使用者入口，讓人在輕鬆的情境下自然接觸品牌，並透過折扣碼引導回官網。",
      motivation: "課程需要為業主（寵物品牌）設計一個吸引使用者的方式。我的設計假設是：讓人主動想玩、想分享，比直接推廣更有效。貓咪性格測驗有足夠的娛樂性，又跟品牌定位吻合。",
      painPoints: [
        "品牌廣告直接推廣讓使用者抗拒",
        "需要讓使用者主動接觸品牌，而不是被動接收",
        "如何讓折扣碼的出現感覺自然，而不是廣告",
        "測驗結果需要有分享動機",
      ],
      research: "分析貓咪品種與常見性格描述的對應關係，確保測驗結果既有趣又有一定準確性。同時研究現有性格測驗（如 MBTI）的設計模式，找出讓人覺得「準」的關鍵——具體的行為描述比抽象的特質描述更有共鳴。",
      userProfile: {
        who: "對貓咪有興趣、或對性格測驗感興趣的一般使用者",
        need: "一個有趣且有一定深度的測驗體驗",
        pain: "不想被直接推銷，但對有趣的內容有高度接受度",
      },
      designDecisions: [
        { decision: "讓測驗本身有獨立的娛樂價值", reason: "使用者分享的動力來自「這個很有趣」，而不是「這個品牌很好」。先讓人覺得好玩，品牌訊息才能自然帶入。" },
        { decision: "折扣碼在結果頁面最後出現，不在最前面", reason: "先給使用者完整的測驗體驗，建立信任感後再帶入品牌，轉換率比一開始就推銷更高。" },
        { decision: "貓咪品種對應具體性格描述", reason: "「你是布偶貓」比「你是 INFJ」更具體、更可愛，也更容易讓人想分享結果。" },
      ],
      process: "從商業目標出發：業主需要流量與轉換。設計流程是：確定核心機制（測驗 → 貓咪結果 → 折扣碼）→ 研究貓咪品種與性格對應 → 設計問題 → 調整折扣碼出現的時機與方式。",
      current: "已上線，仍在調整中。這是第一次把設計思維用於解決真實商業問題，而不只是概念。",
      challenge: "如何平衡娛樂性與品牌導入——太直接會讓人感覺是廣告，太隱晦又達不到業主目標。折扣碼的出現時機是關鍵設計決策。",
    },
  },
];

const notes = [
  {
    title: "也許我們不是沒方向，只是還沒允許自己走那條路",
    excerpt: "真正的問題不是「沒有方向」，而是我們的成長環境從來沒有允許我們，勇敢地走上那條充滿「但是」的路。",
    full: "真正的問題不是「沒有方向」，而是我們的成長環境從來沒有允許我們，勇敢地走上那條充滿「但是」的路。我們被訓練出來「服從既定路線」，所以當真正的內心召喚出現時，我們反而不敢給自己許可。方向從來都不是我們尋找的，而是我們允許自己去選擇的。",
    date: "2025.10", type: "writing",
    link: "https://vocus.cc/article/68fda062fd89780001c988fa",
  },
  {
    title: "在每一個形式背後，多問自己五個為什麼",
    excerpt: "一直到沒有為什麼的地方，才是你的真正渴望。",
    full: "很多時候我們有一些很深的渴望，但因為說不清楚，就只好用一個比較具體的形式去承載它。「我想環遊世界」是那個形式。你是為了景色，為了打卡，為了逃離？還是為了用自己的眼睛去驗證——原來人可以這樣活，原來我以為的常識在這裡根本不存在。在每一個形式背後，多問自己五個為什麼。一直到沒有為什麼的地方，才是你的真正渴望。",
    date: "2025.04", type: "thoughts",
    link: null,
  },
  {
    title: "每一個泡泡都是真實的，但沒有一個是完整的",
    excerpt: "真實的世界，可能就是所有泡泡加起來的那個東西。",
    full: "到底什麼才是真實的世界？你是身邊最親近的五個人的平均。你在原本的圈子感到舒適，但當有機會去到外面與不同圈子的人接觸時，會發現人與人之間真的好不一樣。每一個泡泡都是真實的，但沒有一個是完整的。真實的世界，可能就是所有泡泡加起來的那個東西。但沒有人能全部看見，只能盡量多看幾個。",
    date: "2025.03", type: "thoughts",
    link: null,
  },
  {
    title: "別讓「我不會」束縛著你",
    excerpt: "思考成了行動的替代品，讓那些點子腦海裡繞了一圈，最後又悄悄熄滅。",
    full: "以現在來說，你只要有什麼想法都值得去試試看。最怕的不是沒做好，而是某個平凡的明天醒來，發現那個 idea 已經出現在別人的生活裡，而你還停在原地。AI 縱使給不了 100 分的完美，但卻能提供 80 分的基礎框架。過去那些讓我們卻步的技術門檻，現在只要試著開口去「問」，就能慢慢拼湊出形狀。別讓「我不會」束縛著你。去問、去做、去實踐。剩下的 20 分，我們在走過的路上慢慢補齊就好。",
    date: "2025.03", type: "vibe coding",
    link: null,
  },
  {
    title: "心旅人 App 的內容架構圖",
    excerpt: "用分支圖整理「自我探索」到底包含什麼——每一個節點都是一個問題。",
    full: "試著用分支圖整理「自我探索」到底包含什麼。從最上層的「自我探索」出發，分出：自我察覺（日記、心情紀錄）、價值觀探索（標準測驗、自行排序）、專長探索（天賦測驗、高峰經驗）、興趣探索（興趣清單、心流）、目標設定（Why 框架、行動計劃）、AI 功能（情感支持、批判性思考對話）、社群互動。畫完之後發現比想像的複雜很多——每一個節點都可以再展開，每一個功能都有它需要的使用者狀態。這讓我開始理解為什麼 MVP 很重要。",
    date: "2025.02", type: "sketch",
    link: null,
  },
];

/* ─── Lab experiments ─── */
const labs = [
  {
    id: "L01",
    title: "貓咪性格測驗",
    desc: "台大創業課程應用。用測驗作為品牌入口，透過貓咪品種與性格對應帶入折扣碼。",
    type: "vibe coding",
    link: "https://cat-mauve-eight.vercel.app",
    status: "已上線",
    sections: [
      {
        label: "背景",
        text: "台大創業課程需要為業主（寵物品牌）設計一個吸引使用者的方式。直接推廣往往讓人抗拒，我提出用性格測驗作為入口——讓人在玩的過程中自然接觸品牌。",
      },
      {
        label: "設計核心",
        text: "測驗結果對應不同品種的貓，每個品種有對應的個性描述。結果頁面帶入寵物品牌折扣碼，引導使用者回到官網。折扣碼出現的時機是關鍵——先給完整體驗，再帶入品牌。",
      },
      {
        label: "學到的事",
        text: "這是我第一次把設計思維用於解決真實商業問題。讓人主動想玩、想分享，比直接推廣有效得多。",
      },
    ],
  },
  {
    id: "L02",
    title: "心旅人 AI 對話原型",
    desc: "測試「AI 反問式對話」的可能性——AI 不給答案，而是用問題引導使用者想清楚。",
    type: "prototype",
    link: null,
    status: "實驗中",
    sections: [
      {
        label: "想驗證的問題",
        text: "傳統 AI 聊天的預設是「AI 回答、人提問」。但如果反過來——AI 提問、人思考——會不會更能幫人釐清自己的想法？",
      },
      {
        label: "目前做的事",
        text: "設計了一組反問式提示詞，讓 AI 在對話中不直接給建議，而是用追問的方式幫使用者往下想。例如：「你說的『卡住』，是什麼感覺？」",
      },
      {
        label: "還沒解決的問題",
        text: "AI 的反問要有溫度，不能讓人感覺被質問。語氣和問句的設計比想像中難，還在調整。",
      },
    ],
  },
  {
    id: "L03",
    title: "自我探索問題庫",
    desc: "整理了一組不讓人想逃跑的自我探索問句。從訪談中歸納，目標是「讓人願意開口」。",
    type: "research",
    link: null,
    status: "整理中",
    sections: [
      {
        label: "觀察到的問題",
        text: "「你的夢想是什麼？」這類問題讓人立刻想逃。太大、太抽象、帶有評判感。訪談發現，問題的語氣和大小決定了人願不願意開口。",
      },
      {
        label: "整理方向",
        text: "從訪談和觀察中歸納出幾種「讓人願意說話」的問句結構：從具體事件切入、從感受切入、從選擇切入。避開直接問目標或未來。",
      },
      {
        label: "目前狀態",
        text: "已整理出約 30 個問句，分成不同情境使用。這個問題庫未來會用在心旅人 App 和 AI 對話原型裡。",
      },
    ],
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ⚠️  以下是視覺 code，不需要動
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function CaseStudyPanel({ work, onClose }) {
  const cs = work.caseStudy;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const P = {
    bg: "#f4f2ed", bgCard: "#e8e6e0", bgDark: "#1a1a1a",
    ink: "#1a1a1a", body: "#2e2e2e", mid: "#4a4a4a", faint: "#777", ghost: "#aaa",
    border: "rgba(26,26,26,0.1)", borderMid: "rgba(26,26,26,0.18)",
  };

  /* Chapter header — large, anchors each major section */
  const ChapterHeader = ({ n, label }) => (
    <div style={{
      display: "flex", alignItems: "baseline", gap: "1.25rem",
      margin: "4rem 0 2rem",
      paddingTop: "3rem",
      borderTop: `2px solid ${P.ink}`,
    }}>
      <span style={{ fontFamily: "monospace", fontSize: "0.65rem", color: P.ghost, opacity: 0.6 }}>{n}</span>
      <h3 style={{ ...T.t3, color: P.ink, margin: 0, fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>{label}</h3>
    </div>
  );

  /* Sub-label inside a chapter */
  const SubLabel = ({ children }) => (
    <div style={{
      ...T.t7, color: P.faint,
      marginBottom: "0.75rem", marginTop: "2rem",
      paddingBottom: "0.5rem",
      borderBottom: `1px solid ${P.border}`,
    }}>{children}</div>
  );

  const prose = { fontSize: "1.02rem", fontWeight: 300, lineHeight: 2.05, color: P.body, margin: 0 };
  const proseMid = { ...prose, color: P.mid };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 201,
      background: P.bg, overflowY: "auto",
      animation: "slideInRight 0.42s cubic-bezier(.16,1,.3,1)",
    }}>
      {/* Sticky top bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: P.bg, borderBottom: `1px solid ${P.border}`,
        padding: "1.25rem 3rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <button onClick={onClose} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "0.5rem",
            color: P.faint, padding: 0, transition: "color 0.2s",
            fontSize: "0.88rem", letterSpacing: "0.04em",
            fontFamily: "'Georgia','Times New Roman',serif",
          }}
            onMouseEnter={e => e.currentTarget.style.color = P.ink}
            onMouseLeave={e => e.currentTarget.style.color = P.faint}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            返回
          </button>
          <div style={{ width: 1, height: 14, background: P.border }} />
          <span style={{ ...T.t7, color: P.ghost }}>{work.id} — Case Study</span>
        </div>
        {work.link && (
          <a href={work.link} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "0.82rem", color: P.ink, textDecoration: "none",
            borderBottom: `1px solid ${P.borderMid}`, paddingBottom: "0.1rem",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.45}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >體驗產品 →</a>
        )}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 3rem 8rem" }}>

        {/* ── Hero ── */}
        <div style={{ marginBottom: "0" }}>
          <div style={{ ...T.t7, color: P.ghost, marginBottom: "0.75rem" }}>{work.type}</div>
          <h2 style={{ ...T.t2, color: P.ink, margin: "0 0 1rem" }}>{work.title}</h2>
          <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: P.mid, margin: "0 0 2rem", lineHeight: 1.7, fontWeight: 300 }}>
            {work.angle}
          </p>
          <span style={{ ...T.t7, color: P.faint, display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%", background: P.mid, display: "inline-block",
              animation: work.status === "設計中" ? "pulse 2.5s infinite" : "none",
            }} />
            {work.status}
          </span>
        </div>

        {/* ── Image strip ── */}
        <div style={{ display: "flex", gap: "0.75rem", margin: "3rem 0", overflowX: "auto", paddingBottom: "0.5rem" }}>
          {["主畫面", "流程", "細節"].map((lbl, idx) => (
            <div key={lbl} style={{
              flexShrink: 0, width: idx === 0 ? 400 : 180, height: 240,
              background: P.bgCard, border: `1px solid ${P.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ ...T.t7, color: P.ghost }}>{lbl}截圖</span>
            </div>
          ))}
        </div>

        {/* ── Sections-based render (心旅人 and future works) ── */}
        {cs.sections ? (
          <div>
            {cs.sections.map((sec, i) => (
              <div key={i} style={{
                paddingTop: "2.75rem",
                borderTop: `${i === 0 ? "2px" : "1px"} solid ${i === 0 ? P.ink : P.border}`,
              }}>
                <div style={{
                  display: "flex", alignItems: "baseline", gap: "1.25rem",
                  marginBottom: "1.5rem",
                }}>
                  <span style={{ fontFamily: "monospace", fontSize: "0.65rem", color: P.ghost }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ ...T.t3, color: P.ink, margin: 0, fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}>
                    {sec.label}
                  </h3>
                </div>
                {/* Support \n as paragraph breaks */}
                {sec.content.split("\n\n").map((para, pi) => (
                  <p key={pi} style={{ ...prose, marginBottom: pi < sec.content.split("\n\n").length - 1 ? "1.25rem" : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Figma link — if available */}
            {cs.figmaLink && (
              <div style={{
                marginTop: "3.5rem", paddingTop: "2.5rem",
                borderTop: `1px solid ${P.border}`,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: "1rem",
              }}>
                <div>
                  <div style={{ ...T.t7, color: P.ghost, marginBottom: "0.5rem" }}>完整設計思考</div>
                  <p style={{ fontSize: "0.92rem", fontWeight: 300, color: P.mid, margin: 0 }}>
                    使用者研究、資訊架構、User Flow、Feature Deep Dive 等完整過程在 FigJam 裡。
                  </p>
                </div>
                <a
                  href={cs.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.6rem",
                    padding: "0.75rem 1.5rem",
                    background: P.ink, color: "#f4f2ed",
                    textDecoration: "none", fontSize: "0.88rem", fontWeight: 300,
                    letterSpacing: "0.04em", flexShrink: 0,
                    transition: "opacity 0.2s",
                    fontFamily: "'Georgia','Times New Roman',serif",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.75}
                  onMouseLeave={e => e.currentTarget.style.opacity = 1}
                >
                  在 FigJam 查看 →
                </a>
              </div>
            )}
          </div>

        ) : (
          /* ── Legacy field-based render (其他作品) ── */
          <div>
            <ChapterHeader n="01" label="背景與動機" />

            <SubLabel>概述</SubLabel>
            <p style={prose}>{cs.overview}</p>

            <SubLabel>創作動機</SubLabel>
            <p style={prose}>{cs.motivation}</p>

            <ChapterHeader n="02" label="研究與使用者" />

            <SubLabel>痛點分析</SubLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cs.painPoints.map((pt, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "28px 1fr", gap: "1rem",
                  alignItems: "flex-start", padding: "1.1rem 1.25rem",
                  background: P.bgCard, borderLeft: `3px solid ${P.borderMid}`,
                }}>
                  <span style={{ fontFamily: "monospace", fontSize: "0.65rem", color: P.ghost, paddingTop: "0.35rem" }}>0{i+1}</span>
                  <p style={{ ...prose, fontSize: "0.95rem" }}>{pt}</p>
                </div>
              ))}
            </div>

            <SubLabel>調查與研究</SubLabel>
            <p style={prose}>{cs.research}</p>

            <SubLabel>目標使用者</SubLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: P.border, margin: "0.5rem 0" }}>
              {[["誰", cs.userProfile.who], ["需要什麼", cs.userProfile.need], ["最大痛點", cs.userProfile.pain]].map(([k, v]) => (
                <div key={k} style={{ background: P.bgCard, padding: "1.5rem 1.25rem" }}>
                  <div style={{ ...T.t7, color: P.faint, marginBottom: "0.75rem" }}>{k}</div>
                  <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.85, color: P.body, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>

            <ChapterHeader n="03" label="設計決策" />

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {cs.designDecisions.map((d, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem",
                  padding: "1.5rem 0", borderBottom: `1px solid ${P.border}`,
                }}>
                  <p style={{ fontSize: "1.02rem", fontWeight: 400, color: P.ink, margin: 0, lineHeight: 1.6 }}>{d.decision}</p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 300, color: P.mid, margin: 0, lineHeight: 1.9 }}>{d.reason}</p>
                </div>
              ))}
            </div>

            <ChapterHeader n="04" label="過程與反思" />

            <SubLabel>設計流程</SubLabel>
            <p style={prose}>{cs.process}</p>

            <SubLabel>最難的地方</SubLabel>
            <div style={{ background: P.bgDark, padding: "2rem 2.25rem", margin: "0.5rem 0 0" }}>
              <p style={{ ...prose, color: "rgba(240,239,233,0.82)" }}>{cs.challenge}</p>
            </div>

            <SubLabel>目前狀態</SubLabel>
            <p style={{ ...proseMid, fontStyle: "italic" }}>{cs.current}</p>
          </div>
        )}

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "3.5rem", paddingTop: "2rem", borderTop: `1px solid ${P.border}` }}>
          {work.tags.map(tag => (
            <span key={tag} style={{
              ...T.t7, color: P.faint,
              border: `1px solid ${P.border}`, padding: "0.28rem 0.75rem",
              letterSpacing: "0.16em",
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ══════════════════════════════════════════════════
   MAIN
══════════════════════════════════════════════════ */
export default function Portfolio() {
  const [scrollY, setScrollY]       = useState(0);
  const [openWork, setOpenWork]     = useState(null);   // brief expand
  const [panelWork, setPanelWork]   = useState(null);   // full case study
  const [openNote, setOpenNote]     = useState(null);
  const [openLab, setOpenLab]       = useState(null);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleWork = (id) => setOpenWork(prev => prev === id ? null : id);
  const toggleNote = (i)  => setOpenNote(prev => prev === i  ? null : i);
  const toggleLab  = (id) => setOpenLab(prev => prev === id ? null : id);
  const openPanel  = (w)  => setPanelWork(w);
  const closePanel = ()   => setPanelWork(null);

  const Lbl  = ({ children, dark }) => (
    <span style={{ ...T.t7, color: dark ? "rgba(240,239,233,0.35)" : C.ghost }}>{children}</span>
  );
  const Chip = ({ children, dark }) => (
    <span style={{
      ...T.t7,
      color: dark ? "rgba(240,239,233,0.55)" : C.mid,
      border: `1px solid ${dark ? "rgba(240,239,233,0.22)" : C.border}`,
      padding: "0.28rem 0.8rem",
      letterSpacing: "0.18em",
      display: "inline-block",
    }}>{children}</span>
  );

  /* Smooth expand — max-height slide + gentle fade, no jump */
  const expandStyle = (open) => ({
    maxHeight: open ? "900px" : "0px",
    opacity: open ? 1 : 0,
    overflow: "hidden",
    transition: open
      ? "max-height 0.6s cubic-bezier(.16,1,.3,1), opacity 0.5s ease 0.08s"
      : "max-height 0.45s cubic-bezier(.4,0,1,1), opacity 0.2s ease",
  });

  return (
    <div style={{ fontFamily: "'Georgia','Times New Roman',serif", background: C.bg0, color: C.ink, minHeight: "100vh" }}>

      {/* Paper grain */}
      <div aria-hidden style={{
        position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E")`,
      }} />

      {/* Case Study Panel */}
      {panelWork && <CaseStudyPanel work={panelWork} onClose={closePanel} />}

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.2rem 3rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 60 ? "rgba(245,244,240,0.95)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(16px)" : "none",
        borderBottom: scrollY > 60 ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.45s ease",
      }}>
        <span style={{ fontSize: "0.8rem", letterSpacing: "0.03em", opacity: 0.42 }}>某個名字</span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[["作品","#作品"],["Lab","#lab"],["筆記","#筆記"],["關於","#關於"],["聯繫","#聯繫"]].map(([txt,href]) => (
            <a key={txt} href={href} style={{
              ...T.t7, color: C.ink, textDecoration: "none",
              opacity: 0.3, transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.target.style.opacity = 0.85}
              onMouseLeave={e => e.target.style.opacity = 0.3}
            >{txt}</a>
          ))}
        </div>
      </nav>

      {/* ══════ HERO ══════ */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 3rem 7.5rem",
        position: "relative", overflow: "hidden", background: C.bg0,
      }}>
        <div aria-hidden style={{
          position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)",
          ...T.t1, fontSize: "clamp(20rem, 40vw, 34rem)",
          color: "rgba(26,26,26,0.015)", userSelect: "none", pointerEvents: "none", lineHeight: 0.9,
        }}>探</div>

        <div style={{ maxWidth: 820, position: "relative", zIndex: 2 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "2.8rem",
            opacity: 0, animation: "fup 0.7s ease 0.1s forwards",
          }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.ink, opacity: 0.22 }} />
            <Lbl>心理系 · 學 UIUX · 對人與成長很好奇</Lbl>
          </div>

          <h1 style={{
            ...T.t1, color: C.ink, margin: "0 0 3rem",
            opacity: 0, animation: "fup 1.05s ease 0.28s forwards",
          }}>
            對自我探索<br />這件事，<br />
            <em style={{ fontStyle: "italic", opacity: 0.28 }}>很著迷。</em>
          </h1>

          <p style={{
            ...T.t5, color: C.mid, maxWidth: 420, margin: "0 0 1rem",
            opacity: 0, animation: "fup 0.85s ease 0.72s forwards",
          }}>
            我是心理系學生，同時在學 UIUX。我用設計、AI 與互動體驗來靠近「人怎麼理解自己、怎麼成長」這個問題。
          </p>
          <p style={{
            ...T.t5, color: C.mid, maxWidth: 420, margin: 0,
            opacity: 0, animation: "fup 0.85s ease 0.82s forwards",
          }}>
            這些作品和實驗，都是我從不同角度試著理解它的過程。
          </p>
          <p style={{
            ...T.t6, color: C.faint, maxWidth: 340, margin: "1.25rem 0 0",
            opacity: 0, animation: "fup 0.8s ease 0.98s forwards",
          }}>
            大二，還在探索。有些東西還沒結論。
          </p>

          <div style={{
            marginTop: "4rem", display: "flex", alignItems: "center", gap: "3rem",
            opacity: 0, animation: "fup 0.75s ease 1.15s forwards",
          }}>
            <a href="#作品" style={{
              fontSize: "0.76rem", letterSpacing: "0.05em", textDecoration: "none", color: C.ink,
              borderBottom: `1px solid rgba(26,26,26,0.22)`, paddingBottom: "0.2rem",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.35}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >看作品</a>
            <a href="#關於" style={{
              ...T.t7, color: C.ink, opacity: 0.28, textDecoration: "none", transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.target.style.opacity = 0.7}
              onMouseLeave={e => e.target.style.opacity = 0.28}
            >關於我</a>
          </div>
        </div>

        <div aria-hidden style={{
          position: "absolute", right: "3rem", bottom: "7.5rem",
          ...T.t7, color: C.ink, opacity: 0.11, writingMode: "vertical-rl",
        }}>2025 — ongoing</div>
      </section>

      {/* ══════ WORKS ══════ */}
      <section id="作品" style={{ background: C.bg1, borderTop: `1px solid ${C.border}` }}>
        <div style={{ padding: "6rem 3rem 4rem", maxWidth: 1120, margin: "0 auto" }}>
          <Fade>
            <Lbl>Selected Work</Lbl>
            <h2 style={{ ...T.t2, color: C.ink, margin: "0.9rem 0 1.25rem" }}>做過的東西</h2>
            <p style={{ ...T.t5, color: C.mid, maxWidth: 440, margin: 0 }}>
              點擊任一作品展開簡介，再點「看完整 Case Study」進入詳細設計流程。
            </p>
          </Fade>
        </div>

        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 3rem" }}>
          {works.map((w, i) => {
            const isOpen  = openWork === w.id;
            const dotAnim = w.status === "設計中" ? "pulse 2.5s ease-in-out infinite" : "none";

            return (
              <Fade key={w.id} delay={i * 0.07}>
                <div style={{ borderTop: `1px solid ${C.border}` }}>

                  {/* ── Card header ── */}
                  <div
                    onClick={() => toggleWork(w.id)}
                    style={{
                      padding: "2.5rem 0",
                      display: "grid", gridTemplateColumns: "44px 1fr auto",
                      gap: "2rem", alignItems: "center",
                      cursor: "pointer", userSelect: "none",
                      background: isOpen ? "rgba(26,26,26,0.025)" : "transparent",
                      margin: "0 -3rem", padding: "2.5rem 3rem",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = "rgba(26,26,26,0.02)"; }}
                    onMouseLeave={e => { if (!isOpen) e.currentTarget.style.background = "transparent"; }}
                  >
                    <div style={{ paddingTop: "0.2rem" }}>
                      <div style={{
                        ...T.t7, color: C.ghost,
                        writingMode: "vertical-rl",
                        letterSpacing: "0.2em",
                        fontSize: "0.6rem",
                        opacity: 0.6,
                        lineHeight: 1,
                      }}>{w.category}</div>
                    </div>

                    <div>
                      <p style={{ ...T.t6, color: C.faint, fontStyle: "italic", margin: "0 0 0.5rem" }}>{w.angle}</p>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap" }}>
                        <h3 style={{ ...T.t3, color: C.ink, margin: 0 }}>{w.title}</h3>
                        <span style={{ ...T.t7, color: C.ghost, fontStyle: "italic", textTransform: "none", letterSpacing: "0.02em" }}>{w.sub}</span>
                      </div>
                      <div style={{ ...T.t7, color: C.ghost, marginTop: "0.3rem" }}>{w.type}</div>
                    </div>

                    {/* Right: status only — no + icon */}
                    <div style={{
                      ...T.t7, color: C.ink, opacity: w.status === "已上線" ? 0.6 : 0.38,
                      display: "flex", alignItems: "center", gap: "0.4rem",
                    }}>
                      <span style={{
                        width: 4, height: 4, borderRadius: "50%", display: "inline-block",
                        background: C.ink, animation: dotAnim,
                      }} />
                      {w.status}
                    </div>
                  </div>

                  {/* ── Brief expand ── */}
                  <div style={expandStyle(isOpen)}>
                    <div style={{
                      borderTop: `1px solid ${C.border}`,
                      margin: "0 -3rem",
                      padding: "3rem 3rem",
                    }}>
                      {/* Content aligned with title, symmetric right margin */}
                      <div style={{
                        marginLeft: "calc(44px + 2rem)",
                        marginRight: "calc(44px + 2rem)",
                      }}>
                        <p style={{
                          fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.95,
                          color: C.mid, margin: "0 0 1.75rem",
                        }}>
                          {w.brief}
                        </p>

                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                          {w.tags.map(tag => <Chip key={tag}>{tag}</Chip>)}
                        </div>

                        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
                          <button
                            onClick={(e) => { e.stopPropagation(); openPanel(w); }}
                            style={{
                              background: C.ink, border: "none",
                              color: "#f5f4f0", cursor: "pointer",
                              padding: "0.7rem 1.5rem",
                              fontSize: "0.82rem", fontWeight: 300, letterSpacing: "0.06em",
                              transition: "opacity 0.22s",
                              fontFamily: "'Georgia','Times New Roman',serif",
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 0.7}
                            onMouseLeave={e => e.currentTarget.style.opacity = 1}
                          >
                            看完整 Case Study →
                          </button>

                          {w.link && (
                            <a
                              href={w.link} target="_blank" rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              style={{
                                fontSize: "0.82rem", fontWeight: 300,
                                color: C.faint, textDecoration: "none",
                                borderBottom: `1px solid rgba(26,26,26,0.2)`, paddingBottom: "0.12rem",
                                transition: "opacity 0.2s",
                              }}
                              onMouseEnter={e => e.currentTarget.style.opacity = 0.5}
                              onMouseLeave={e => e.currentTarget.style.opacity = 1}
                            >體驗產品</a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Fade>
            );
          })}
          <div style={{ borderTop: `1px solid ${C.border}` }} />
        </div>
        <div style={{ height: "5rem" }} />
      </section>

      {/* ══════ LAB ══════ */}
      <section id="lab" style={{ background: C.bg0, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "5rem 3rem 5.5rem" }}>

          <Fade>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
              <div>
                <Lbl>Lab</Lbl>
                <h2 style={{ ...T.t3, color: C.ink, margin: "0.7rem 0 0.5rem" }}>
                  小實驗
                </h2>
                <p style={{ ...T.t6, color: C.faint, margin: 0 }}>
                  不是完整專案，但有在動手的東西。
                </p>
              </div>
              <span style={{ ...T.t7, color: C.ghost, fontStyle: "italic", textTransform: "none", letterSpacing: "0.04em" }}>
                持續增加中
              </span>
            </div>
          </Fade>

          {/* Lab list — same pattern as Works */}
          <div>
            {labs.map((lab, i) => {
              const isLabOpen = openLab === lab.id;
              return (
                <Fade key={lab.id} delay={i * 0.06}>
                  <div style={{ borderTop: `1px solid ${C.border}` }}>

                    {/* Row header — clickable */}
                    <div
                      onClick={() => toggleLab(lab.id)}
                      style={{
                        padding: "2.25rem 0",
                        display: "grid",
                        gridTemplateColumns: "44px 1fr auto",
                        gap: "2rem",
                        alignItems: "center",
                        cursor: "pointer",
                        userSelect: "none",
                        background: isLabOpen ? "rgba(26,26,26,0.025)" : "transparent",
                        margin: "0 -3rem", padding: "2.25rem 3rem",
                        transition: "background 0.3s ease",
                      }}
                      onMouseEnter={e => { if (!isLabOpen) e.currentTarget.style.background = "rgba(26,26,26,0.018)"; }}
                      onMouseLeave={e => { if (!isLabOpen) e.currentTarget.style.background = "transparent"; }}
                    >
                      {/* Index */}
                      <div style={{ paddingTop: "0.2rem" }}>
                        <div style={{ fontFamily: "monospace", ...T.t7, color: C.ghost, letterSpacing: "0.1em" }}>{lab.id}</div>
                      </div>

                      {/* Main content */}
                      <div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                          <h3 style={{ ...T.t4, color: C.ink, margin: 0 }}>{lab.title}</h3>
                          <span style={{
                            ...T.t7, color: C.ghost,
                            border: `1px solid ${C.border}`,
                            padding: "0.2rem 0.65rem",
                            letterSpacing: "0.16em",
                          }}>{lab.type}</span>
                        </div>
                        <p style={{ ...T.t6, color: C.faint, margin: 0 }}>{lab.desc}</p>
                      </div>

                      {/* Right: status */}
                      <div style={{ textAlign: "right" }}>
                        <span style={{
                          ...T.t7, color: C.ink,
                          opacity: lab.status === "已上線" ? 0.55 : 0.3,
                          display: "flex", alignItems: "center", gap: "0.4rem",
                        }}>
                          <span style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: C.ink, display: "inline-block",
                            animation: lab.status !== "已上線" ? "pulse 2.5s ease-in-out infinite" : "none",
                          }} />
                          {lab.status}
                        </span>
                      </div>
                    </div>

                    {/* Expanded detail — same style as Works expand */}
                    <div style={expandStyle(isLabOpen)}>
                      <div style={{
                        borderTop: `1px solid ${C.border}`,
                        margin: "0 -3rem",
                        padding: "2.5rem 3rem 3rem",
                      }}>
                        <div style={{
                          marginLeft: "calc(44px + 2rem)",
                          marginRight: "calc(44px + 2rem)",
                        }}>

                          {/* Sections — 2-col grid */}
                          <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "2rem 3rem",
                            marginBottom: "2rem",
                          }}>
                            {lab.sections.map((sec, si) => (
                              <div key={si} style={{ gridColumn: lab.sections.length === 3 && si === 2 ? "1 / -1" : "auto" }}>
                                <div style={{ ...T.t7, color: C.ghost, marginBottom: "0.6rem" }}>{sec.label}</div>
                                <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: C.mid, margin: 0 }}>
                                  {sec.text}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Link if exists */}
                          {lab.link && (
                            <a href={lab.link} target="_blank" rel="noopener noreferrer" style={{
                              fontSize: "0.82rem", fontWeight: 300,
                              color: C.ink, textDecoration: "none",
                              borderBottom: `1px solid rgba(26,26,26,0.25)`, paddingBottom: "0.12rem",
                              transition: "opacity 0.2s",
                            }}
                              onMouseEnter={e => e.currentTarget.style.opacity = 0.5}
                              onMouseLeave={e => e.currentTarget.style.opacity = 1}
                            >開啟體驗 →</a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </Fade>
              );
            })}

            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1.5rem" }}>
              <span style={{ ...T.t7, color: C.ghost, fontStyle: "italic", textTransform: "none", letterSpacing: "0.04em" }}>
                還在增加⋯
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ NOTEBOOK ══════ */}
      <section id="筆記" style={{ background: C.bg2, borderTop: `1px solid rgba(0,0,0,0.2)` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "5.5rem 3rem 6rem" }}>
          <Fade>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
              <div>
                <Lbl dark>Notebook</Lbl>
                <h2 style={{ ...T.t2, color: "#f0efe9", margin: "0.9rem 0 0", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  探索中的碎片
                </h2>
              </div>
              <p style={{ ...T.t6, color: "#f0efe9", opacity: 0.28, fontStyle: "italic", margin: 0 }}>
                writing · sketch · thoughts · 點開看完整
              </p>
            </div>
          </Fade>

          <div>
            {notes.map((n, i) => {
              const isOpen = openNote === i;
              return (
                <Fade key={i} delay={i * 0.05}>
                  <div style={{ borderTop: "1px solid rgba(240,239,233,0.08)" }}>
                    <div
                      onClick={() => toggleNote(i)}
                      style={{
                        padding: "1.6rem 0",
                        display: "flex", flexDirection: "column", gap: "0.4rem",
                        cursor: "pointer", userSelect: "none",
                        opacity: isOpen ? 1 : 0.55, transition: "opacity 0.25s",
                      }}
                      onMouseEnter={e => !isOpen && (e.currentTarget.style.opacity = 0.88)}
                      onMouseLeave={e => !isOpen && (e.currentTarget.style.opacity = 0.55)}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                        <span style={{
                          ...T.t7, color: "#f0efe9", opacity: 0.35,
                          border: "1px solid rgba(240,239,233,0.15)", padding: "0.2rem 0.55rem",
                          letterSpacing: "0.16em",
                        }}>{n.type}</span>
                        <span style={{ fontFamily: "monospace", ...T.t7, color: "#f0efe9", opacity: 0.22 }}>{n.date}</span>
                      </div>
                      <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "#f0efe9", margin: "0.1rem 0 0.3rem" }}>{n.title}</p>
                      <p style={{ ...T.t6, color: "#f0efe9", opacity: 0.38, margin: 0 }}>{n.excerpt}</p>
                    </div>

                    <div style={expandStyle(isOpen)}>
                      <div style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(240,239,233,0.09)",
                        margin: "0 0 1.5rem", padding: "2.25rem 2.5rem",
                      }}>
                        <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 2, color: "rgba(240,239,233,0.82)", maxWidth: 640, margin: "0 0 1.5rem" }}>
                          {n.full}
                        </p>
                        {n.link && (
                          <a href={n.link} target="_blank" rel="noopener noreferrer" style={{
                            fontSize: "0.88rem", fontWeight: 300,
                            color: "rgba(240,239,233,0.55)", textDecoration: "none",
                            borderBottom: "1px solid rgba(240,239,233,0.2)", paddingBottom: "0.12rem",
                            transition: "opacity 0.2s",
                          }}
                            onMouseEnter={e => e.target.style.opacity = 0.9}
                            onMouseLeave={e => e.target.style.opacity = 1}
                          >閱讀完整文章 →</a>
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(240,239,233,0.08)", paddingTop: "1.2rem" }}>
              <span style={{ ...T.t7, color: "#f0efe9", opacity: 0.16, fontStyle: "italic", textTransform: "none", letterSpacing: "0.04em" }}>還在更新⋯</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section id="關於" style={{ background: C.bg1, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem 8rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "5rem", alignItems: "start" }}>
            <Fade>
              <div>
                <Lbl>About</Lbl>
                <div style={{ width: 1, height: 56, background: C.ink, opacity: 0.1, margin: "1.5rem 0 0 0.5rem" }} />
              </div>
            </Fade>
            <div>
              <Fade delay={0.07}>
                <h2 style={{ ...T.t2, color: C.ink, margin: "0 0 2rem", maxWidth: 500 }}>
                  我想搞清楚的事，<br />
                  <em style={{ fontStyle: "italic", opacity: 0.3 }}>一直都是人。</em>
                </h2>
              </Fade>
              <Fade delay={0.13}>
                <p style={{ ...T.t5, color: C.mid, maxWidth: 520, marginBottom: "1.5rem" }}>
                  國中因為「走藝術吃不飽」而放棄畫畫，大一卻發現自己還是想做有創造性的事。這個過程讓我很想搞清楚一件事：人為什麼會在某個時刻否定自己真正想要的東西？
                </p>
              </Fade>
              <Fade delay={0.18}>
                <p style={{ ...T.t5, color: C.mid, maxWidth: 520, marginBottom: "1.5rem" }}>
                  這把我帶進了心理學，也讓我開始想：如果介面是一種環境，它能不能幫人更誠實地面對自己？這是我學 UIUX 的起點，也是我做的所有東西背後的問題。
                </p>
              </Fade>
              <Fade delay={0.22}>
                <p style={{ ...T.t5, color: C.mid, maxWidth: 520, marginBottom: "2.5rem" }}>
                  現在是心理系大二，同時在學 UIUX、商用設計，也修創業思維與實務。我不太確定這些最終會走到哪裡，但我知道我一直在找的是同一件事。
                </p>
              </Fade>
              <Fade delay={0.27}>
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
                  {[
                    ["現在",  "心理系大二\n學 UIUX · 創業課程"],
                    ["方式",  "UIUX · AI 工具\n互動體驗 · Vibe Coding"],
                    ["開放",  "實習 · Side project\n對這些問題有興趣的對話"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ ...T.t7, color: C.ghost, marginBottom: "0.55rem" }}>{k}</div>
                      <div style={{ ...T.t6, color: C.mid, whiteSpace: "pre-line" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section id="聯繫" style={{ background: C.bg0, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem 8rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
            <div>
              <Fade>
                <Lbl>Contact</Lbl>
                <h2 style={{ ...T.t2, color: C.ink, margin: "0.9rem 0 1.25rem", fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)" }}>
                  有想法，找我聊。
                </h2>
                <p style={{ ...T.t5, color: C.mid, maxWidth: 320, marginBottom: "2.25rem" }}>
                  對這些問題有興趣、想合作，或只是想聊——都可以。
                </p>
                <a href="mailto:hello@somewhere.com" style={{
                  fontSize: "0.76rem", letterSpacing: "0.05em", textDecoration: "none", color: C.ink,
                  borderBottom: `1px solid rgba(26,26,26,0.22)`, paddingBottom: "0.2rem",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.35}
                  onMouseLeave={e => e.currentTarget.style.opacity = 1}
                >傳封信給我</a>
              </Fade>
            </div>
            <Fade delay={0.1}>
              <div style={{ paddingTop: "0.5rem" }}>
                {[
                  ["Email",     "hello@somewhere.com",      "mailto:hello@somewhere.com"],
                  ["Instagram", "@mind_traveler_yu",         "https://www.threads.com/@mind_traveler_yu"],
                  ["LinkedIn",  "linkedin.com/in/yourname",  "#"],
                  ["Writings",  "vocus.cc · 心旅人",         "https://vocus.cc/article/68fda062fd89780001c988fa"],
                ].map(([lbl, val, href]) => (
                  <a key={lbl} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{
                    display: "flex", gap: "2rem", alignItems: "baseline",
                    borderBottom: `1px solid ${C.border}`, padding: "1.25rem 0",
                    textDecoration: "none", color: "inherit", transition: "opacity 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 0.38}
                    onMouseLeave={e => e.currentTarget.style.opacity = 1}
                  >
                    <span style={{ ...T.t7, color: C.ghost, width: 68, flexShrink: 0 }}>{lbl}</span>
                    <span style={{ ...T.t5, fontSize: "0.88rem", color: C.mid }}>{val}</span>
                  </a>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <footer style={{ background: C.bg0, borderTop: `1px solid ${C.border}`, padding: "1.75rem 3rem" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <span style={{ ...T.t7, color: C.ghost }}>© 2025</span>
          <span style={{ ...T.t7, color: C.ghost, fontStyle: "italic", textTransform: "none", letterSpacing: "0.04em" }}>還在更新中</span>
        </div>
      </footer>

      <style>{`
        @keyframes fup {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.15; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(26,26,26,0.08); }
      `}</style>
    </div>
  );
}
