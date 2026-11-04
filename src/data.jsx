/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA — works, notes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const works = [
  {
    id: "01",
    featured: true,
    category: "App",
    title: "心旅人自我探索APP",
    sub: "App · Self-Discovery",
    year: "2025–2026",
    type: "App Design · UX · Figma",
    status: "設計中，持續迭代",
    link: null,
    angle: "身邊很多人只是照著看似好的路走，而不是自己的路。",
    brief: "一個幫助人找到志業方向的自我探索 App。透過「價值觀 × 興趣 × 專長」三個維度，搭配 AI 對話與日記功能，幫使用者逐漸累積對自己的了解。",
    tags: ["手繪插畫", "Figma", "UX Research"],
    palette: ["#e8d9c2", "#3a3a3a", "#1a1a1a"],
    mainImage: (typeof window !== "undefined" && window.__resources && window.__resources.work01) || "assets/works/01/login-screen.webp",
    heroImages: [
      {
        src: (typeof window !== "undefined" && window.__resources && window.__resources.work01) || "assets/works/01/login-screen.webp",
        caption: "登入頁 · 心旅人主視覺",
      },
      {
        src: (typeof window !== "undefined" && window.__resources && window.__resources.work01_board) || "assets/works/01/ux-thinking-board.webp",
        caption: "UX 思考流程 · FigJam Board",
      },
    ],
    chapters: [
      {
        n: "01",
        label: "核心動機",
        kicker: "Why",
        body: "我觀察到許多年輕人對自我探索有興趣，卻缺少清楚的探索方式與長期整理機制。即使接觸大量心理測驗、自我成長內容與不同生活經驗，探索仍容易停留在片段資訊與短期感受。此外，多數自我探索工具其實高度依賴使用者本身的反思與整理能力。",
        body2: "因此，我嘗試設計一個透過 AI 引導、反思整理與長期累積機制，協助使用者逐步建立自我認知與方向感的探索系統。視覺方向刻意採用手繪插畫，而不是標準 icon，呈現更療癒的氛圍。主要畫面從手繪草稿出發。",
      },
      {
        n: "02",
        label: "研究與觀察",
        kicker: "Research",
        body: "此專案以 exploratory research 與個人觀察為基礎，透過初步訪談與使用者經驗整理，嘗試理解年輕人如何進行自我探索。我發現幾個共同 pattern：",
        patterns: [
          { title: "很多人不知道如何開始，探索多半來自學校測驗、社群或一時興趣。" },
          { title: "心理測驗、自我成長內容、AI 對話和生活經驗彼此缺少連結。" },
          { title: "工具給了分析之後，使用者仍要自己解讀、串起脈絡。" },
          { title: "缺少外部觀點時，探索容易回到重複的思考。" },
        ],
      },
      {
        n: "03",
        label: "設計目標",
        kicker: "Goals",
        lessons: [
          "降低自我探索的開始門檻。",
          "提供具引導性的探索流程。",
          "將探索結果逐步轉化為未來方向。",
        ],
      },
      {
        n: "04",
        label: "設計決策",
        kicker: "Decisions",
        decisions: [
          { d: "將產品設計成「探索循環」而非單次工具", r: "不同於一次性的測驗產品，我將產品設計為 Explore → Reflect → Pattern → Perspective → Direction，讓探索成為可持續循環的過程。" },
          { d: "使用 AI 作為「引導者」而非答案提供者", r: "AI 並不是用來直接定義使用者，而是協助提問、幫助整理、協助辨識 pattern、降低反思門檻。產品核心並非「生成答案」，而是建立探索流程。" },
          { d: "透過視覺化降低認知負荷", r: "自我探索通常是抽象且難以整理的。我透過探索地圖、pattern visualization、長期探索 archive，幫助使用者把片段經驗轉化為可理解的結構。" },
          { d: "把重複的畫面元素做成 Figma 共用元件，方便調整", r: "畫面從手繪草稿出發。重複出現的按鈕、卡片做成共用元件，之後修改可以一次更新。" },
        ],
      },
      {
        n: "05",
        label: "最困難的地方",
        kicker: "Challenges",
        body: "這個專案最困難的部分，是如何將「抽象的人類探索行為」轉化成可被設計的流程。一開始我很容易停留在「迷惘、焦慮、自我探索」等抽象感受。",
        body2: "但在專案過程中，我開始練習把這些感受拆解成使用者行為、認知負荷、探索 friction、長期 pattern、reflection flow，並嘗試將其轉化成實際的 UX 架構與產品設計。",
      },
      {
        n: "06",
        label: "從這個專案學到的",
        kicker: "Reflection",
        lessons: [
          "UX 不只是設計介面，而是如何幫助使用者建立理解自己的流程。",
          "真正困難的並不是「提供更多資訊」，而是如何降低認知門檻，協助使用者逐步形成長期自我認知與方向感。",
          "我開始學習如何將抽象觀察轉譯成 UX 問題，並進一步轉化成產品與系統設計。",
        ],
      },
    ],
    figma: "https://www.figma.com/board/4pRnAWLqGwltjyMkagzNAe/",
  },

  {
    id: "02",
    category: "Side Project",
    title: "三分鐘探索你的潛能",
    sub: "Potential Discovery",
    year: "2025–2026",
    type: "設計 · 體驗 · AI 協作",
    status: "開發中・試用版",
    link: "https://potential-discovery.vercel.app",
    linkLabel: "看試用版",
    angle: "大多數人就算想找方向也不知道怎麼做，因為學校沒有教這件事。",
    brief: "還在開發的自我探索試用版。想讓人在三分鐘內，透過問題看見自己的潛能方向。試用版裡，單選還要多按一次「下一題」、信沒寄出卻顯示成功，這兩件正在改，也不再放不實的限時優惠。尚未正式上線，目前沒有使用者。",
    tags: ["體驗設計", "心理學", "開發中"],
    palette: ["#d6c5a8", "#2a2a2a", "#0f0f0f"],
    mainImage: (typeof window !== "undefined" && window.__resources && window.__resources.work02) || "assets/works/02-potential.webp",
    // 上傳圖片後把路徑填入 heroImages，會自動切換成可左右滑動的 carousel。
    heroImages: [
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work02) || "assets/works/02-potential.webp", caption: "00 · 首頁 · 三分鐘探索你的潛能" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work02_01) || "assets/works/02/01-question-energy.webp", caption: "01 · 題目頁 · 能量來源（單選）" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work02_02) || "assets/works/02/02-question-achievement.webp", caption: "02 · 題目頁 · 成就感來源（開放式）" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work02_03) || "assets/works/02/03-loading.webp", caption: "03 · 分析中 · 交叉分析說明" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work02_04) || "assets/works/02/04-courses.webp", caption: "04 · 推薦課程 + 聯盟連結說明" },
    ],
    chapters: [
      {
        n: "01",
        label: "動機",
        body: "我一直對自我探索、賦能很感興趣，也觀察到大多數人就算想找方向也不知道怎麼做，因為學校沒有教這件事。我自己經常用 AI 做自我探索，但這個很考驗使用者自身的反思能力，以避免全然吸收 AI 提供的資訊內容。因此我想到是否可以做一個工具，讓 AI 透過一般的問題引導，去分析一個人沒看見的隱性潛能，而不只是像一般測驗那樣輸出標準化的類型標籤。",
      },
      {
        n: "02",
        label: "設計決策",
        note: "題目對應 Holland 職業興趣理論、Csikszentmihalyi 心流理論、Schwartz 價值觀理論、自我決定理論（SDT）。",
        decisions: [
          { d: "題目設計:間接挖掘，不直接問", r: "直接問「你擅長什麼」，大多數人答不出來。改問「朋友最常找你幫什麼忙」「最近一次覺得自己做得很好的事」——透過具體事件和他人視角，繞過自我懷疑，挖出真實強項。題目文字刻意寫得像日常對話，不帶學術語氣。" },
          { d: "單選 vs 多選的判斷邏輯", r: "測「傾向」和「風格」的題目用單選（強迫優先排序，分析更準確）；測「強項」和「價值觀」的題目用多選（真實強項本來就是複數的）。這個設計讓每道題的資訊量不同，AI 可以從中看出更多層次。" },
          { d: "讓分析有理論依據而不是隨意生成", r: "我要求測驗的設計必須有心理學理論支撐，而不是憑感覺出題。這讓分析結果有依據，不只是 AI 的自由發揮。" },
        ],
      },
      {
        n: "03",
        label: "最難的事",
        decisions: [
          { d: "讓分析結果不只是重新描述一遍問題和選項", r: "這是整個專案花最多時間的部分。早期版本的 AI 輸出很空泛，幾乎就是把選項重新包裝一次。我反覆填測驗、看結果、調整、再測試。" },
          { d: "試用版裡正在改的三件事", r: "自己試用才發現：單選題還要多按一次「下一題」，Email 沒寄出卻顯示成功。和 Claude 等 AI 工具一起改成選完自動前進，失敗時誠實提示，並拿掉不實的限時優惠。" },
        ],
      },
      {
        n: "04",
        label: "現況與學到",
        lessons: [
          "試用版還在調整，尚未正式上線，目前沒有使用者。付費與推廣都還沒開始。",
          "內容品質和設計品質是同一件事。分析結果夠不夠有洞察，跟介面夠不夠清楚，都是在問「用戶有沒有得到他們需要的東西」。",
          "覺得有用，和願意付費，是兩件不同的事。目前這個試用版還沒有使用者。",
        ],
      },
    ],
  },

  {
    id: "03",
    category: "工具",
    title: "讀懂自己，再選科系",
    sub: "Major Explorer",
    year: "2025–2026",
    type: "Vibe Coding · 心理學 · Web",
    status: "開發中・試用版",
    link: "https://dept-explorer-gocc.vercel.app",
    linkLabel: "看試用版",
    angle: "高中生選科系，問的是「哪個科系比較好找工作」，而不是「我是誰」。",
    brief: "還在開發的高中生科系探索試用版。不問喜歡什麼科目，而是用心理學方法幫人看見自己真正在乎什麼，並規劃可放入學習歷程的報告。自己試用時，PDF 下載是空白的，在 LINE 裡打開也會出問題，這兩件還在修。尚未正式上線，目前沒有使用者。",
    tags: ["Vibe Coding", "心理學應用", "高中生", "開發中"],
    palette: ["#c8b89a", "#3d2f1d", "#1a1a1a"],
    mainImage: (typeof window !== "undefined" && window.__resources && window.__resources.work03) || "assets/works/03-major.webp",
    heroImages: [
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work03) || "assets/works/03-major.webp", caption: "00 · Landing · 讀懂自己，再選科系" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work03_01) || "assets/works/03/01-intro.webp", caption: "01 · 在開始之前（暖身頁）" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work03_02) || "assets/works/03/02-ranking.webp", caption: "02 · 認知風格（排序題）" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work03_03) || "assets/works/03/03-allocation.webp", caption: "03 · 生活價值觀（點數分配題）" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work03_04) || "assets/works/03/04-loading.webp", caption: "04 · 分析中 · 心理學框架交叉分析" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work03_05) || "assets/works/03/05-report-chapters.webp", caption: "05 · 完整探索報告（學習歷程版 PDF）" },
    ],
    chapters: [
      {
        n: "01",
        label: "動機",
        body: "市面上的科系探索工具大多停留在「你喜歡理科還是文科？」的表面層次，無法幫助學生真正認識自己。",
        body2: "目標使用者是高一到高三、正在面對選組與選科系壓力的學生。他們需要的不是更多資訊，而是更深的自我認識——同時，一份有理論依據的報告，也能直接作為學習歷程的素材。",
      },
      {
        n: "02",
        label: "設計決策",
        note: "題目對應自我決定理論（SDT）、Holland 職業興趣理論、Marcia 認同狀態理論、Schwartz 價值觀理論、Kolb 學習風格理論。",
        decisions: [
          { d: "產品架構：三層漏斗", r: "把整個體驗拆成「你是誰」→「你在乎什麼」→「適合你的方向」。直接問「你想讀什麼科系」是無效的，大部分高中生還不知道答案。需要先幫他們建立自我認知，再從認知推導出方向。" },
          { d: "情境式題目，而非自評量表", r: "不用「你覺得自己是創意型的人嗎？（1-5 分）」，改用情境選擇（「你在團隊中最有成就感的瞬間是什麼？」）。高中生的自我概念還在發展中（Marcia 認同狀態理論），自評式問題容易產生社會期望偏差。情境式問題降低認知負擔，也更能捕捉真實偏好。" },
          { d: "類組作為分析素材，不作為篩選器", r: "問學生的類組選擇，但不用來限制科系推薦範圍。台灣很多學生「先選理組，之後轉比較容易」——類組選擇是策略性的，不反映真實興趣。如果用類組篩選，等於幫助學生繼續走在不適合的路上。改成讓 AI 在分析中指出類組選擇和內在傾向之間的落差。" },
          { d: "把付費報告定位為「學習歷程素材」", r: "108 課綱要求學生製作學習歷程檔案，這是真實的痛點。把報告做成有理論依據、有專業格式的 PDF，讓它從「娛樂測驗」變成「實用工具」。付費的心理門檻完全不同——使用者不是在買測驗結果，是在買可以直接上傳的學習歷程材料。" },
          { d: "台灣文化脈絡的在地化", r: "國外的心理測驗工具不理解台灣的選組制度、科系階層認知、家庭溝通文化。如果不把這些脈絡寫進分析邏輯，AI 就會給出「勇敢追求你的夢想」這種在台灣家庭裡完全不實用的建議。在地化必須是結構性的，融入每個分析章節的指令，不能只是附加。" },
        ],
      },
      {
        n: "03",
        label: "最難的事",
        decisions: [
          { d: "在「有深度」和「不過度推論」之間找平衡", r: "AI 分析有兩個極端：太淺（放在誰身上都對）和太深（從一個回答就斷定「你還沒接受自己」）。我改成引用具體回答，並用邀請的語氣，而不是「你是…」。" },
          { d: "PDF 是空白的，LINE 裡也打不開", r: "自己試用時發現 PDF 下載是空白的，在 LINE 裡打開會出問題。和 Claude 等 AI 工具一起修正。" },
        ],
      },
      {
        n: "04",
        label: "現況與學到",
        lessons: [
          "試用版裡有問卷、摘要與報告流程，但仍在開發，尚未正式上線，目前沒有使用者。金流、Email，以及和補習班或學校合作，都還是之後的想法。",
          "空白的 PDF、在 LINE 裡打不開，都讓我發現：限制本身就是一種設計訊號。",
          "使用者實際遇到產品時的感受——介面是否順暢、分析是否真的被看見——才是這個專案能不能長出來的關鍵。",
        ],
      },
    ],
  },

  {
    id: "04",
    featured: true,
    category: ["Side Project", "業主合作"],
    title: "CATI",
    sub: "Cat Personality Test",
    year: "2026",
    type: "設計 · UX · 心理測驗",
    status: "已上線",
    link: "https://cat-mauve-eight.vercel.app",
    angle: "把年輕人的日常行為，對應到他們認識的貓咪品種，讓測驗結果自然成為社群分享的理由。",
    brief: "台大「創業家思維與實務」課程種子計畫，業主是寵物品牌。我負責測驗設計、體驗決策與結果頁手繪插畫。計分一度讓結果集中在少數幾型，下載流程也是我反覆用手機測過再調的。設計目標是「讓人想玩、想分享」，而不是「讓人感覺被廣告」。",
    tags: ["心理測驗", "手繪插畫", "業主合作"],
    stats: [
      { n: "12 天", l: "開放" },
      { n: "844", l: "位訪客" },
      { n: "677", l: "人完成（80.2%）" },
      { n: "284", l: "人下載結果卡" },
    ],
    summary: [
      { k: "角色", v: "測驗設計、體驗決策、結果頁手繪插畫" },
      { k: "成果", v: "開放 12 天：844 位訪客、677 人完成（80.2%）、284 人下載結果卡。Google Analytics 由我設定。" },
      { k: "連結", v: "cat-mauve-eight.vercel.app", href: "https://cat-mauve-eight.vercel.app" },
    ],
    palette: ["#e0d2b8", "#5a4a2f", "#1a1a1a"],
    mainImage: (typeof window !== "undefined" && window.__resources && window.__resources.work04) || "assets/works/04-cat.webp",
    heroImages: [
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work04) || "assets/works/04-cat.webp", caption: "00 · CATI · 首頁主視覺" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work04_01) || "assets/works/04/01-question.webp", caption: "01 · 題目頁 · 具體情境式選項（貓掌印 icon · 音樂開關）" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work04_02) || "assets/works/04/02-result-cat.webp", caption: "02 · 結果頁 · 手繪貓咪品種對應與性格雷達" },
      { src: (typeof window !== "undefined" && window.__resources && window.__resources.work04_03) || "assets/works/04/03-result-traits.webp", caption: "03 · 結果頁 · 性格描述、技能點與天敵" },
    ],
    chapters: [
      {
        n: "01",
        label: "動機",
        body: "這是台大「創業家思維與實務」課程種子計畫，業主是寵物品牌。團隊成員所有人都比我年長、有更多實務經驗，在這樣的組合裡，我是相對資淺的那個，也是唯一以心理為專長的人。一開始我思考的是，自己能在這個團隊裡貢獻什麼。",
        body2: "答案是找到一個只有我能做、而且對專案真正有幫助的切入點。一開始討論專案方向時，我就主動提出我能做線上測驗，團隊才覺得這個方向可以納入。對應業主想吸引年輕族群的目標，這恰好是我能用設計思維介入的地方——從框架設計、題目語感到結果頁的呈現，這些細節不是靠經驗能處理的，而是需要有人認真去想「使用者實際碰到這個測驗時，會有什麼感受」。",
      },
      {
        n: "02",
        label: "設計決策",
        decisions: [
          { d: "測驗本身要有獨立娛樂價值", r: "分享動力來自「有趣」，不是「這個品牌很好」。先有趣，品牌訊息再自然帶入。" },
          { d: "用貓咪品種取代人格代碼", r: "「你是布偶貓」比「你是 INFJ」更具體、容易分享。從人的行為出發再對應品種，使用者不需要先懂貓。" },
          { d: "題目設計：先決定結果，再設計題目", r: "先確定要產出幾種結果，再往回推題目。三個二元維度、8 種結果，7 題就能涵蓋，選項貼近年輕族群的語氣。" },
          { d: "計分與品種要一起確認", r: "計分一開始讓結果集中在少數幾型。我請 Claude 等 AI 工具說明計分邏輯，再由我決定怎麼調，讓結果平均分布。品種的個性標籤和在台灣的認知度，也要提早跟業主對齊。" },
        ],
      },
      {
        n: "03",
        label: "感官層次",
        decisions: [
          { d: "手繪貓咪", r: "結果頁的貓咪由我親自繪製。手繪的筆觸比生成插畫更有溫度。" },
          { d: "背景音樂與點擊貓叫聲", r: "點擊時有貓叫聲，右上角有音樂開關。我反覆用手機測下載流程、下載的圖和結果頁畫面，逐一調整，包含 iOS 的下載。" },
        ],
      },
      {
        n: "04",
        label: "學到的",
        lessons: [
          "在年長、有經驗的小組裡，我能貢獻的是題目語感、品種對應和結果頁這些使用者會碰到的細節。",
          "和有更多實務經驗的成員合作，他們更快看可行性，我更在意使用者感受。設計決定還是要對得上商業目標。",
          "計分和下載都是做出來之後才看清楚的：請 AI 說明邏輯後由我決定怎麼調，再用手機把下載流程測過一遍。",
        ],
      },
    ],
  },
];

const notes = [
  {
    title: "不要做無聊的大人，要做特立獨行的孩子",
    excerpt: "特立獨行的孩子不是自私，而是在洪流中依然能看清自己的樣貌、踏著自己的步調，堅守心中的理想。",
    full: "在逐漸長大的過程當中，我們或許為了家人的期待、為了他人的認同、為了生存，而逐漸妥協或讓步某部分的自我。\n\n隨著時間流逝我們也將逐漸忘記那個懷揣著夢想、眼裡有光的小孩。\n\n特立獨行的孩子不是自私，不是自我中心，而是在洪流中依然能看清自己的樣貌、踏著自己的步調，堅守心中的理想。\n\n那些對於世界獨有的看法、對內在渴望的遵循，正是因為這些差異造就每個人成為人，而不是被壓抑、被社會批量訓練出來的機器。\n\n或許大部分人都尚未看清內在的自己，也正因如此才匯聚成了洪流。\n\n但我相信那個孩子，始終存在著。\n\n或許他被打壓、被掩埋，但只要你願意慢慢帶他走出迷霧，終會看見微光綻放的一天。",
    type: "自我探索",
  },
  {
    title: "也許我們不是沒方向，只是還沒允許自己走那條路",
    excerpt: "真正的問題不是「沒有方向」，而是我們的成長環境從來沒有允許我們，勇敢地走上那條充滿「但是」的路。",
    full: "真正的問題不是「沒有方向」，而是我們的成長環境從來沒有允許我們，勇敢地走上那條充滿「但是」的路。\n\n我們被訓練出來「服從既定路線」，所以當真正的內心召喚出現時，我們反而不敢給自己許可。\n\n方向從來都不是我們尋找的，而是我們允許自己去選擇的。",
    type: "自我探索",
    link: "https://vocus.cc/article/68fda062fd89780001c988fa",
  },
  {
    title: "在每一個形式背後，多問自己五個為什麼",
    excerpt: "一直到沒有為什麼的地方，才是你的真正渴望。",
    full: "很多時候我們有一些很深的渴望，但因為說不清楚，就只好用一個比較具體的形式去承載它。\n\n「我想環遊世界」是那個形式。\n\n你是為了景色，為了打卡，為了逃離？\n\n還是為了用自己的眼睛去驗證 —\n原來人可以這樣活，原來某些事在這裡是理所當然的。\n\n原來我以為的常識在這裡根本不存在。\n\n你說：「我想賺錢」\n為什麼想賺錢？有了錢之後呢？\n\n為了得到自由？\n為了安全感？\n還是想證明自己？\n\n在每一個形式背後，多問自己五個為什麼。\n\n一直到沒有為什麼的地方，才是你的真正渴望。",
    type: "內在提問",
  },
  {
    title: "每一個泡泡都是真實的，但沒有一個是完整的",
    excerpt: "真實的世界，可能就是所有泡泡加起來的那個東西。",
    full: "到底什麼才是真實的世界呢？\n\n你是身邊最親近的五個人的平均。\n\n你在原本的圈子感到舒適，但當有機會去到外面與不同圈子的人接觸時，會發現人與人之間真的好不一樣。\n\n在向外向上之後，你在這些地方，會自卑，會焦慮。\n\n但同時視野更廣，看到了更多的可能。\n\n你想成長、想追趕，但不知道這是不是你能夠待的圈子。\n\n會有冒牌者症候群，但同時原本的生活又不足以支撐你的理想。\n\n就在中間，飄忽不定，不知所措。\n\n一個很普通的人類，沒有上層的資源與視野，還要先跨越本身被侷限的思想。\n\n那什麼才是真實的世界？\n\n每一個泡泡都是真實的，但沒有一個是完整的。\n\n真實的世界，可能就是所有泡泡加起來的那個東西。但沒有人能全部看見，只能盡量多看幾個。\n\n或許這就是想要努力去看世界的意義？",
    type: "世界觀",
  },
  {
    title: "別讓「我不會」束縛著你",
    excerpt: "思考成了行動的替代品，讓那些點子腦海裡繞了一圈，最後又悄悄熄滅。",
    full: "以現在來說，你只要有什麼想法都值得去試試看。\n\n最怕的不是沒做好，而是某個平凡的明天醒來，發現那個 idea 已經出現在別人的生活裡，而你還停在原地。\n\n以前我們總習慣被「我不會開發」、「我不懂設計」或是「不知道具體該怎麼做」這些念頭給絆住。\n\n於是思考成了行動的替代品，讓那些點子腦海裡繞了一圈，最後又悄悄熄滅。\n\n但看看 AI 現在的能耐，縱使給不了 100 分的完美，但卻能提供 80 分的基礎框架。\n\n過去那些讓我們卻步的技術門檻，現在只要試著開口去「問」，就能慢慢拼湊出形狀。\n\n別讓「我不會」束縛著你。\n\n去問、去做、去實踐。\n\n剩下的 20 分，我們在走過的路上慢慢補齊就好。",
    type: "行動力",
  },
];

Object.assign(window, { works, notes });
