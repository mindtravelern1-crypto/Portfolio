/* Illustrations. Order and alt text come from assets/illustrations/manifest.json.
   Swap doodles later by replacing the SVG symbols in index.html (assets/doodles/). */

const ILLUSTRATIONS = [
  { id: "01", src: "assets/illustrations/illust-01.webp", thumb: "assets/illustrations/illust-01-thumb.webp", fallback: "assets/illustrations/illust-01.jpg", thumbFallback: "assets/illustrations/illust-01-thumb.jpg", w: 1628, h: 1761, alt: "手繪插畫：夕陽天空下穿水手服的女孩" },
  { id: "02", src: "assets/illustrations/illust-02.webp", thumb: "assets/illustrations/illust-02-thumb.webp", fallback: "assets/illustrations/illust-02.jpg", thumbFallback: "assets/illustrations/illust-02-thumb.jpg", w: 1480, h: 2198, alt: "手繪插畫：深色背景中穿露背黑色洋裝的女子" },
  { id: "03", src: "assets/illustrations/illust-03.webp", thumb: "assets/illustrations/illust-03-thumb.webp", fallback: "assets/illustrations/illust-03.jpg", thumbFallback: "assets/illustrations/illust-03-thumb.jpg", w: 1640, h: 2360, alt: "手繪插畫：白底上穿藍色洋裝的金髮女孩全身像" },
  { id: "04", src: "assets/illustrations/illust-04.webp", thumb: "assets/illustrations/illust-04-thumb.webp", fallback: "assets/illustrations/illust-04.jpg", thumbFallback: "assets/illustrations/illust-04-thumb.jpg", w: 1110, h: 2164, alt: "手繪插畫：房間裡抱著粉紅兔子的雙馬尾女孩" },
  { id: "05", src: "assets/illustrations/illust-05.webp", thumb: "assets/illustrations/illust-05-thumb.webp", fallback: "assets/illustrations/illust-05.jpg", thumbFallback: "assets/illustrations/illust-05-thumb.jpg", w: 2166, h: 1640, alt: "手繪插畫：布上的水果靜物" },
  { id: "06", src: "assets/illustrations/illust-06.webp", thumb: "assets/illustrations/illust-06-thumb.webp", fallback: "assets/illustrations/illust-06.jpg", thumbFallback: "assets/illustrations/illust-06-thumb.jpg", w: 1015, h: 1347, alt: "手繪插畫：晴朗天空與太陽下揹著對方的情侶" },
  { id: "07", src: "assets/illustrations/illust-07.webp", thumb: "assets/illustrations/illust-07-thumb.webp", fallback: "assets/illustrations/illust-07.jpg", thumbFallback: "assets/illustrations/illust-07-thumb.jpg", w: 2360, h: 1640, alt: "手繪插畫：黑底上的灰階茶杯習作" },
];

const packColumns = (items, count) => {
  const cols = Array.from({ length: count }, () => ({ h: 0, items: [] }));
  items.forEach((item) => {
    const col = cols.reduce((a, b) => (a.h <= b.h ? a : b));
    col.items.push(item);
    col.h += item.h / item.w;
  });
  return cols;
};

const ArtPicture = ({ item, full = false }) => (
  <picture>
    <source srcSet={full ? item.src : item.thumb} type="image/webp" />
    <img
      src={full ? item.fallback : item.thumbFallback}
      width={item.w}
      height={item.h}
      alt={item.alt}
      loading="lazy"
    />
  </picture>
);

const Lightbox = ({ items, index, onClose, onIndex, returnFocus }) => {
  const closeRef = React.useRef(null);
  const indexRef = React.useRef(index);
  indexRef.current = index;
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    const onKey = (e) => {
      const i = indexRef.current;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((i + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      const back = returnFocus && returnFocus.current;
      if (back && back.focus) back.focus();
    };
  }, []);
  const item = items[index];
  const touch = React.useRef(null);
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="插畫大圖" onClick={onClose}>
      <button ref={closeRef} type="button" className="lb-x" aria-label="關閉" onClick={(e) => { e.stopPropagation(); onClose(); }}>✕</button>
      <button className="lb-nav prev" aria-label="上一張" onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + items.length) % items.length); }}>←</button>
      <button className="lb-nav next" aria-label="下一張" onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % items.length); }}>→</button>
      <div
        className="lb-stage"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touch.current = e.changedTouches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          if (dx > 40) onIndex((index - 1 + items.length) % items.length);
          if (dx < -40) onIndex((index + 1) % items.length);
        }}
      >
        <div className="lb-mat">
          <ArtPicture item={item} full />
        </div>
        <div className="lb-cap">{item.id} / {String(items.length).padStart(2, "0")}</div>
      </div>
    </div>
  );
};

const ArtCard = ({ item, onOpen }) => (
  <figure className="art-mat" tabIndex={0} role="button" aria-label={`${item.id}，${item.alt}`} onClick={(e) => onOpen(e.currentTarget)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(e.currentTarget); } }}>
    <ArtPicture item={item} />
    <figcaption>
      <span className="idx">{item.id}</span>
      <span className="zoom">點擊放大 ↗</span>
    </figcaption>
  </figure>
);

const Gallery = ({ count, items, onOpen }) => {
  const cols = packColumns(items, count);
  return (
    <div className={count === 3 ? "gallery g3" : "gallery g2"}>
      {cols.map((col, i) => (
        <div className="gcol" key={i}>
          {col.items.map((item) => (
            <ArtCard key={item.id} item={item} onOpen={() => onOpen(items.findIndex((x) => x.id === item.id))} />
          ))}
        </div>
      ))}
    </div>
  );
};

const IllustrationSection = () => {
  const [open, setOpen] = React.useState(null);
  const returnFocus = React.useRef(null);
  const [cols, setCols] = React.useState(() => (typeof window !== "undefined" && window.innerWidth <= 720 ? 2 : 3));
  React.useEffect(() => {
    const onResize = () => setCols(window.innerWidth <= 720 ? 2 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  if (ILLUSTRATIONS.length < 3) return null;
  return (
    <section className="sec bg-paper2" id="illustration" style={{ padding: "104px 0 112px" }}>
      <div className="wrap">
        <div className="sec-head">
          <div><div className="eyebrow">Illustration</div><h2 className="h2">插畫</h2></div>
          <p>Procreate 手繪</p>
        </div>
        <div className="gallery" style={{ display: "flex" }}>
          {packColumns(ILLUSTRATIONS, cols).map((col, i) => (
            <div className="gcol" key={i}>
              {col.items.map((item) => (
                <ArtCard key={item.id} item={item} onOpen={(el) => { returnFocus.current = el; setOpen(ILLUSTRATIONS.findIndex((x) => x.id === item.id)); }} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {open != null && ReactDOM.createPortal(
        <Lightbox items={ILLUSTRATIONS} index={open} onClose={() => setOpen(null)} onIndex={setOpen} returnFocus={returnFocus} />,
        document.body
      )}
    </section>
  );
};

window.ILLUSTRATIONS = ILLUSTRATIONS;
window.IllustrationSection = IllustrationSection;
