"use client";

import { useEffect, useRef } from "react";

// The reveal sentence. `a` marks accent (green) words.
const TOKENS: { t: string; a?: boolean }[] = [
  { t: "CX" }, { t: "teams" }, { t: "choose" }, { t: "Qualia", a: true },
  { t: "to" }, { t: "raise", a: true }, { t: "the", a: true }, { t: "bar", a: true },
  { t: "on" }, { t: "every" }, { t: "customer" }, { t: "conversation" }, { t: "—" },
  { t: "uniting" }, { t: "human" }, { t: "and" }, { t: "AI" }, { t: "agents" },
  { t: "in" }, { t: "one" }, { t: "system" }, { t: "that" }, { t: "keeps" },
  { t: "getting" }, { t: "better", a: true }, { t: "," }, { t: "ramps" },
  { t: "people" }, { t: "faster" }, { t: "," }, { t: "and" }, { t: "earns" },
  { t: "the" }, { t: "kind" }, { t: "of" }, { t: "trust", a: true },
  { t: "that" }, { t: "keeps" }, { t: "customers" }, { t: "coming" }, { t: "back", a: true }, { t: "." },
];

const COLS = [
  ["01", "05", "09", "02"],
  ["03", "07", "11", "06"],
  ["04", "08", "10", "01"],
  ["06", "02", "05", "09"],
];

export default function ScrollText() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const words = Array.from(
      textRef.current?.querySelectorAll<HTMLElement>(".w") ?? []
    );
    let ticking = false;

    const update = () => {
      ticking = false;
      const sec = sectionRef.current;
      const text = textRef.current;
      if (!sec || !text) return;
      const vh = window.innerHeight;

      // word lighting
      const r = text.getBoundingClientRect();
      const start = vh * 0.82;
      const end = vh * 0.3;
      const prog = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      const lit = Math.round(prog * words.length);
      for (let k = 0; k < words.length; k++) {
        words[k].classList.toggle("lit", k < lit);
      }

      // photo column parallax
      const sr = sec.getBoundingClientRect();
      const center = sr.top + sr.height / 2 - vh / 2;
      const factors = [0.12, -0.08, 0.1, -0.06];
      colRefs.current.forEach((c, idx) => {
        if (c) c.style.transform = `translateY(${center * factors[idx]}px)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="stext" ref={sectionRef}>
      <div className="stext-cols" aria-hidden="true">
        {COLS.map((col, ci) => (
          <div
            className="stext-col"
            key={ci}
            ref={(el) => {
              colRefs.current[ci] = el;
            }}
          >
            {col.map((n, k) => (
              <img src={`/assets/people/${n}.png`} alt="" key={k} loading="lazy" />
            ))}
          </div>
        ))}
      </div>

      <div className="container stext-inner">
        <div className="stext-eyebrow">
          <span className="eyebrow">Why Qualia</span>
        </div>
        <p className="stext-body" ref={textRef}>
          {TOKENS.map((tok, idx) => (
            <span key={idx}>
              <span className={`w${tok.a ? " accent" : ""}`}>{tok.t}</span>
              {tok.t !== "—" && tok.t !== "," && tok.t !== "." ? " " : " "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
