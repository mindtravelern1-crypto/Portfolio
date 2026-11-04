/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TOKENS — type scale, colours, motion primitives
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* Type — semantic scale */
const T = {
  display: {
    fontFamily: "'Cormorant Garamond','Noto Serif TC',Georgia,serif",
    fontWeight: 300,
    fontSize: "clamp(2.4rem, 5vw, 4rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em"
  },
  h1: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 400,
    fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.018em"
  },
  h2: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 500,
    fontSize: "clamp(1.55rem, 2.8vw, 2.05rem)",
    lineHeight: 1.25,
    letterSpacing: "-0.015em"
  },
  h3: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 500,
    fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)",
    lineHeight: 1.35,
    letterSpacing: "-0.012em"
  },
  h4: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 500,
    fontSize: "clamp(1.05rem, 1.7vw, 1.2rem)",
    lineHeight: 1.4,
    letterSpacing: "-0.005em"
  },
  body: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 400,
    fontSize: "1.02rem",
    lineHeight: 2.05
  },
  bodyS: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 400,
    fontSize: "0.92rem",
    lineHeight: 1.95
  },
  caption: {
    fontFamily: "'Noto Serif TC','Cormorant Garamond',serif",
    fontWeight: 400,
    fontSize: "0.88rem",
    lineHeight: 1.85
  },
  label: {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    fontWeight: 500,
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase"
  },
  mono: {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    fontWeight: 400,
    fontSize: "0.8rem",
    letterSpacing: "0.06em"
  }
};

/* Colours — warm paper palette (theme variations applied via body[data-theme]) */
const C = {
  bg0: "#f5f4f0",
  bg1: "#edebe6",
  bg2: "#1a1a1a",
  paper: "#ece9e2",
  ink: "#1a1a1a",
  /* Muted blue. #2f5d8a is 6.25:1 on #f5f4f0 and 5.77:1 on #edebe6; paper text on this blue is 6.25:1. */
  accent: "#2f5d8a",
  mid: "#3a3a3a",
  faint: "#524e4a",
  ghost: "#524e4a",
  hair: "rgba(26,26,26,0.12)",
  hairSoft: "rgba(26,26,26,0.07)",
  hairBold: "rgba(26,26,26,0.22)",
  /* Inverse (for dark sections) */
  inkInv: "#f0efe9",
  midInv: "rgba(240,239,233,0.88)",
  faintInv: "rgba(240,239,233,0.7)",
  ghostInv: "rgba(240,239,233,0.72)",
  hairInv: "rgba(240,239,233,0.14)"
};

if (typeof document !== "undefined") {
  document.documentElement.style.setProperty("--accent", C.accent);
}

/* ─── Hooks ─── */
const useInView = (threshold = 0.08, once = true) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold, once]);
  return [ref, inView];
};

const useScrollY = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const fn = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
};

/* ─── Motion components ─── */
const Fade = ({ children, delay = 0, y = 22, dur = 1, style: extra = {}, as = "div" }) => {
  const [ref, inView] = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateY(${y}px)`,
        transition: `opacity ${dur}s cubic-bezier(.16,1,.3,1) ${delay}s, transform ${dur}s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...extra
      }}>
      
      {children}
    </Tag>);

};

/* Reveal — word-by-word stagger for editorial headlines */
const RevealText = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  const text = String(children);
  const parts = text.split("");
  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {parts.map((ch, i) =>
      <span
        key={i}
        style={{
          display: "inline-block",
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(0.4em)",
          transition: `opacity 0.7s cubic-bezier(.2,.8,.2,1) ${delay + i * 0.025}s, transform 0.7s cubic-bezier(.2,.8,.2,1) ${delay + i * 0.025}s`,
          whiteSpace: ch === " " ? "pre" : "normal"
        }}>
        
          {ch}
        </span>
      )}
    </span>);

};

/* Smooth collapse helper — uses height: auto via grid trick for smoothness */
const expandStyle = (open) => ({
  display: "grid",
  gridTemplateRows: open ? "1fr" : "0fr",
  opacity: open ? 1 : 0,
  transition: open ?
  "grid-template-rows 0.55s cubic-bezier(.16,1,.3,1), opacity 0.4s ease 0.08s" :
  "grid-template-rows 0.4s cubic-bezier(.4,0,1,1), opacity 0.2s ease"
});
const expandInnerStyle = { overflow: "hidden", minHeight: 0 };

/* Generic chips & labels — used across sections */
const Label = ({ children, dark = false, style: extra = {} }) =>
<span style={{ ...T.label, color: dark ? C.ghostInv : C.accent, ...extra }}>{children}</span>;


const Chip = ({ children, dark = false }) =>
<span style={{
  ...T.label,
  color: dark ? C.faintInv : C.mid,
  border: `1px solid ${dark ? C.hairInv : C.hair}`,
  padding: "0.32rem 0.78rem",
  letterSpacing: "0.2em",
  display: "inline-block"
}}>
    {children}
  </span>;


/* Status dot — pulses when not "已上線" */
const StatusDot = ({ status, dark = false }) => {
  const live = status === "已上線";
  return (
    <span style={{
      ...T.label,
      color: dark ? C.inkInv : C.mid,
      fontWeight: 500,
      letterSpacing: "0.08em",
      display: "inline-flex", alignItems: "center", gap: "0.45rem", fontSize: "0.8rem"
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: "50%",
        background: dark ? C.inkInv : C.ink,
        opacity: live ? 0.55 : 1,
        animation: live ? "none" : "pulse 2.4s ease-in-out infinite",
        display: "inline-block"
      }} />
      {status}
    </span>);

};

/* Section header — used across sections for consistent rhythm */
const SectionHeader = ({ eyebrow, title, subtitle, dark = false, right }) =>
<div style={{
  display: "flex", justifyContent: "space-between", alignItems: "flex-end",
  flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.75rem",
  paddingBottom: "1.35rem",
  borderBottom: `2px solid ${dark ? C.hairInv : C.accent}`
}}>
    <div>
      <Fade>
        <Label dark={dark}>{eyebrow}</Label>
      </Fade>
      <Fade delay={0.06}>
        <h2 style={{ ...T.h2, color: dark ? C.inkInv : C.ink, margin: "1rem 0 0" }}>
          {title}
        </h2>
      </Fade>
      {subtitle &&
    <Fade delay={0.12}>
          <p style={{ ...T.caption, color: dark ? C.faintInv : C.faint, maxWidth: 460, margin: "0.9rem 0 0", fontStyle: "italic" }}>
            {subtitle}
          </p>
        </Fade>
    }
    </div>
    {right &&
  <Fade delay={0.15}>
        <div>{right}</div>
      </Fade>
  }
  </div>;


const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
};

/* Expose to window so other Babel scripts can use them */
Object.assign(window, {
  T, C,
  useInView, useScrollY, useIsMobile,
  Fade, RevealText,
  expandStyle, expandInnerStyle,
  Label, Chip, StatusDot, SectionHeader
});
