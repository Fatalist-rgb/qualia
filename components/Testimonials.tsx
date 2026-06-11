"use client";

import { useEffect, useRef, useState } from "react";

const CASES = [
  {
    quote:
      "Reps used to learn on live customers. Now they clear our quality bar in practice first — that one shift changed everything.",
    name: "Elena Brookes",
    role: "Head of Support Quality",
    avatar: "/assets/people/01.png",
    tag: "Case study",
    stats: [
      { num: "47%", cap: "Faster time to proficiency" },
      { num: "31%", cap: "Higher resolution rate" },
    ],
  },
  {
    quote:
      "We finally see every conversation, not a sample. Coaching went from a hunch to something we can actually measure.",
    name: "Marcus Reed",
    role: "Director of Customer Experience",
    avatar: "/assets/people/04.png",
    tag: "Case study",
    stats: [
      { num: "100%", cap: "Of conversations reviewed" },
      { num: "2.4×", cap: "More coaching delivered" },
    ],
  },
  {
    quote:
      "Onboarding that took six weeks now takes three. New agents arrive ready, and our satisfaction scores show it.",
    name: "Priya Nair",
    role: "VP Customer Experience",
    avatar: "/assets/people/03.png",
    tag: "Case study",
    stats: [
      { num: "50%", cap: "Shorter ramp time" },
      { num: "+12", cap: "Point lift in CSAT" },
    ],
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    stop();
    timer.current = setInterval(() => setI((v) => (v + 1) % CASES.length), 6000);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section tcase" id="customers">
      <div className="container">
        <span className="eyebrow reveal" style={{ marginBottom: "28px", display: "inline-flex" }}>
          Proof in production
        </span>
        <div
          className="tcase-track reveal-scale"
          onMouseEnter={stop}
          onMouseLeave={start}
        >
          <div className="tcase-rail" style={{ transform: `translateX(-${i * 100}%)` }}>
            {CASES.map((c) => (
              <div className="tcase-card" key={c.name}>
                <div className="tcase-quote">
                  <blockquote>“{c.quote}”</blockquote>
                  <div className="tcase-author">
                    <img src={c.avatar} alt="" loading="lazy" />
                    <span>
                      <span className="ta-name">{c.name}</span>
                      <br />
                      <span className="ta-role">{c.role}</span>
                    </span>
                  </div>
                </div>
                <div className="tcase-stats">
                  <span className="tcase-tag">{c.tag}</span>
                  {c.stats.map((s) => (
                    <div className="tcase-stat" key={s.cap}>
                      <div className="num">{s.num}</div>
                      <div className="cap">{s.cap}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tcase-dots">
          {CASES.map((_, d) => (
            <button
              key={d}
              className={d === i ? "active" : ""}
              aria-label={`Show case study ${d + 1}`}
              onClick={() => {
                setI(d);
                start();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
