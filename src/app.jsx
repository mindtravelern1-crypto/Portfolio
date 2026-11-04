/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PORTFOLIO — main composition
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "warm",
  "heroAccent": "italic",
  "grain": false,
  "density": "comfortable"
} /*EDITMODE-END*/;

const NAV_LINKS = [
  ["作品", "works"],
  ["關於", "about"],
  ["插畫", "illustration"],
  ["經歷", "experience"],
  ["筆記", "notes"],
  ["聯繫", "contact"],
];

const Nav = () => {
  const [current, setCurrent] = React.useState("works");
  React.useEffect(() => {
    const onScroll = () => {
      let next = "works";
      NAV_LINKS.forEach(([ , id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) next = id;
      });
      setCurrent(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const showIllust = (window.ILLUSTRATIONS || []).length >= 3;
  return (
    <nav className="nav">
      <div className="wrap">
        <a className="brand" href="#top">林恩瑜 <span className="latin-i">Anya</span><svg className="brand-spark" aria-hidden="true"><use href="#d-spark" /></svg></a>
        <ul>
          {NAV_LINKS.filter(([ , id]) => id !== "illustration" || showIllust).map(([txt, id]) => (
            <li key={id} className={current === id ? "on" : ""}>
              <a href={`#${id}`}>{txt}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Portfolio = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [panelWork, setPanelWork] = useState(null);

  /* Apply theme via body attr */
  useEffect(() => {
    document.body.dataset.theme = t.theme;
    document.body.style.background = t.theme === "dark" ? "#1a1a1a" : t.theme === "cool" ? "#fafafa" : "#f5f4f0";
    document.body.style.color = t.theme === "dark" ? "#f0efe9" : "#1a1a1a";
  }, [t.theme]);

  /* Toggle grain */
  useEffect(() => {
    if (t.grain) document.body.classList.add("grain");else
    document.body.classList.remove("grain");
  }, [t.grain]);

  /* Hero accent — via CSS variable in body */
  useEffect(() => {
    document.body.style.setProperty("--hero-accent", t.heroAccent);
  }, [t.heroAccent]);

  return (
    <div id="top" style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <HeroWave />
      <WorksSection onOpenCase={setPanelWork} />
      <AboutSection />
      <IllustrationSection />
      <ExperienceSection />
      <NotesSection />
      <ContactSection />
      <Footer />

      {panelWork &&
      <CaseStudy work={panelWork} onClose={() => setPanelWork(null)} />
      }

      {/localhost|127\.0\.0\.1/.test(window.location.hostname) && <TweaksPanel title="Tweaks">
        <TweakSection label="主題 Theme" />
        <TweakRadio
          label="色調"
          value={t.theme}
          options={["warm", "cool", "dark"]}
          onChange={(v) => setTweak("theme", v)} />
        
        <TweakToggle
          label="紙質紋理"
          value={t.grain}
          onChange={(v) => setTweak("grain", v)} />
        

        <TweakSection label="排版 Type" />
        <TweakRadio
          label="Hero 重點"
          value={t.heroAccent}
          options={["italic", "underline", "dash"]}
          onChange={(v) => setTweak("heroAccent", v)} />
        

        <TweakSection label="工具 Tools" />
        <TweakButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑ 回到頂部
        </TweakButton>
        <TweakButton onClick={() => {
          const works = document.getElementById("works");
          works && works.scrollIntoView({ behavior: "smooth" });
        }}>
          看作品 →
        </TweakButton>
      </TweaksPanel>}
    </div>);

};

/* ─── Mount ─── */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);
