// Placeholder CX-stack tools — coined names the client swaps for their real
// integrations later. Each badge is a tinted letter tile.
const ROW_A = [
  { n: "Helply", c: "#1f6feb" },
  { n: "Glide", c: "#7a5cf0" },
  { n: "Cadence", c: "#e0567a" },
  { n: "Decka", c: "#1ba8a6" },
  { n: "Freshline", c: "#19a463" },
  { n: "Guidebook", c: "#f6a609" },
  { n: "Deskhub", c: "#0e7c86" },
];

const ROW_B = [
  { n: "Servio", c: "#2b59c3" },
  { n: "Notely", c: "#33312e" },
  { n: "Helpwise", c: "#16a34a" },
  { n: "Gorvia", c: "#0aa5b1" },
  { n: "Callio", c: "#6d28d9" },
  { n: "Talklane", c: "#e0567a" },
  { n: "Livewire", c: "#f97316" },
];

function Chip({ n, c }: { n: string; c: string }) {
  return (
    <span className="chip">
      <span className="chip-glyph" style={{ background: c }}>
        {n[0]}
      </span>
      {n}
    </span>
  );
}

function Row({ items, dir }: { items: { n: string; c: string }[]; dir: "a" | "b" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`mrow ${dir}`}>
      {doubled.map((it, i) => (
        <Chip key={`${it.n}-${i}`} n={it.n} c={it.c} />
      ))}
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="section integ container">
      <span className="eyebrow reveal" style={{ marginBottom: "20px", display: "inline-flex" }}>
        Integrations
      </span>
      <h2 className="h-section reveal" style={{ ["--d" as string]: "80ms" }}>
        Fits the CX stack you already run
      </h2>
      <p className="lede reveal" style={{ ["--d" as string]: "150ms" }}>
        Qualia plugs into the tools your team lives in, so quality improvements
        flow across your entire agent ecosystem.
      </p>

      <div className="marquee reveal" style={{ ["--d" as string]: "220ms" }}>
        <Row items={ROW_A} dir="a" />
        <Row items={ROW_B} dir="b" />
      </div>
    </section>
  );
}
