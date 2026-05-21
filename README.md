# Anya 作品集 · Portfolio

> 心理系 × UIUX 跨域學習中。透過內容理解人、透過產品放大幫助、透過方法賦能他人。

## 線上版

部署在 Vercel。也可以直接打開 `index.html` 在瀏覽器中查看。

## 技術說明

這是一個**純靜態網站**，沒有 build step。
- HTML + 在瀏覽器中即時編譯的 React (Babel standalone)
- 樣式為 inline JS object styles + 少量 global CSS
- 沒有 npm install、沒有 webpack、沒有 next build

換句話說：你只要把資料夾丟到任何靜態網站主機（Vercel / Netlify / GitHub Pages）就會自動跑。

## 目錄結構

```
.
├── index.html              ← 進入點
├── src/                    ← 所有 React 元件（.jsx）
│   ├── tokens.jsx          ← 設計 tokens（顏色 / type）
│   ├── data.jsx            ← 作品 / 文章 / 實驗的內容
│   ├── hero.jsx
│   ├── works.jsx           ← 作品列表
│   ├── case-study.jsx      ← 點開作品後的詳細頁
│   ├── notes.jsx
│   ├── about.jsx
│   ├── contact.jsx
│   ├── placeholder.jsx
│   ├── tweaks-panel.jsx
│   └── app.jsx
├── assets/
│   └── works/              ← 各作品的截圖
└── README.md
```

## 改內容怎麼做？

**90% 的情況：只要改 `src/data.jsx`**
- 改作品標題 / 簡介 / 章節文字 / 標籤 → 在 `works` 陣列裡找對應的 work，編輯欄位
- 加 / 換截圖 → 把圖片放進 `assets/works/0X/`，更新對應 work 的 `heroImages` 路徑
- 改文章 → 編輯 `notes` 陣列

**改視覺 / 排版 → `src/case-study.jsx`、`src/works.jsx`、`src/hero.jsx`**

**改顏色 / 字體 → `src/tokens.jsx`**

## 部署到 Vercel

### 方法 1：透過 GitHub（推薦）

1. 在 GitHub 建一個新 repo（例如 `anya-portfolio`）
2. 把這個資料夾的內容推上去：
   ```bash
   cd <你下載解壓的資料夾>
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/anya-portfolio.git
   git push -u origin main
   ```
3. 到 [vercel.com](https://vercel.com) 登入（用 GitHub 帳號）
4. 點 **Add New → Project** → 選剛剛的 repo
5. Framework Preset 選 **Other**（保持預設）
6. Root Directory 保持 `./`，Build Command 留空、Output Directory 也留空
7. Deploy → 約 30 秒後拿到你的 `xxx.vercel.app` 網址

之後你只要 `git push`，Vercel 就會自動部署新版本。

### 方法 2：Vercel CLI（不透過 GitHub）

```bash
npm i -g vercel
cd <資料夾>
vercel
```

跟著互動式問答走就好。第一次部署完之後，之後跑 `vercel --prod` 就會更新到正式網址。

## 部署到 GitHub Pages

1. 把資料夾推到 GitHub repo（同上）
2. 進 repo 的 **Settings → Pages**
3. Source 選 **Deploy from a branch** → **main** → **/ (root)**
4. Save，等 1-2 分鐘後拿到 `https://<你的帳號>.github.io/anya-portfolio/`

## 綁定自訂網域

在 Vercel：**Project Settings → Domains → Add Domain**，填入你的網域（例如 `anya.design`），跟著 DNS 設定指示走就好。

## 本機預覽

任何能跑 HTTP server 的工具都可以，例如：

```bash
# Python 3
python3 -m http.server 5173

# Node
npx serve .

# 或用 VS Code 的 Live Server 套件
```

然後打開 `http://localhost:5173`。

**注意：** 直接雙擊 `index.html` 用 `file://` 開有可能會碰到 CORS 問題，建議用 HTTP server。

## 授權

個人作品集，未授權他人使用。圖片版權歸 Anya / 林恩瑜所有。
