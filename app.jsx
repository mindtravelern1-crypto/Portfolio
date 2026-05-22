/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PORTFOLIO — main composition
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "warm",
  "heroAccent": "italic",
  "grain": true,
  "density": "comfortable"
} /*EDITMODE-END*/;

const NAV_LINKS = [
["作品", "#works"],
["筆記", "#notes"],
["關於", "#about"],
["聯繫", "#contact"]];


const Nav = () => {
  const scrollY = useScrollY();
  const condensed = scrollY > 60;
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: condensed ? "0.9rem 3rem" : "1.4rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: condensed ? "rgba(245,244,240,0.92)" : "transparent",
      backdropFilter: condensed ? "blur(14px)" : "none",
      borderBottom: condensed ? `1px solid ${C.hair}` : "1px solid transparent",
      transition: "all 0.4s ease"
    }}>
      <a href="#top" style={{
        display: "flex", alignItems: "baseline", gap: "0.7rem",
        textDecoration: "none", color: C.ink
      }}>
        <span style={{ fontFamily: "'Noto Serif TC',serif", fontWeight: 400, color: C.ink, fontSize: "15px" }}>林恩瑜</span>
        <span style={{
          fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 500,
          color: C.ink, letterSpacing: "-0.01em", fontSize: "20px"
        }}>Anya</span>
      </a>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {NAV_LINKS.map(([txt, href]) =>
        <a key={txt} href={href} style={{
          ...T.label, color: C.ink,
          textDecoration: "none", fontSize: "0.6rem",
          transition: "opacity 0.25s ease", opacity: "0.58"
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = 0.92}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 0.32}>
          {txt}</a>
        )}
      </div>
    </nav>);

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
      <WorksSection onOpenCase={setPanelWork} />
      <NotesSection />
      <AboutSection />
      <ContactSection />
      <Footer />

      {panelWork &&
      <CaseStudy work={panelWork} onClose={() => setPanelWork(null)} />
      }

      <TweaksPanel title="Tweaks">
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
      </TweaksPanel>
    </div>);

};

/* ─── Mount ─── */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);