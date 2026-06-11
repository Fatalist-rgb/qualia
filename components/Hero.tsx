"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const chip1 = useRef<HTMLDivElement>(null);
  const chip2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const stage = stageRef.current;
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      const p = r.top / window.innerHeight; // ~1 at first paint, decreasing on scroll
      if (imgRef.current) imgRef.current.style.transform = `scale(1.08) translateY(${p * -26}px)`;
      if (chip1.current) chip1.current.style.transform = `translateY(${p * 34}px)`;
      if (chip2.current) chip2.current.style.transform = `translateY(${p * -24}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero container" id="top">
      <span className="hero-badge reveal">
        <b>New</b> Unified scoring for human &amp; AI agents
      </span>

      <h1 className="h-display reveal" style={{ ["--d" as string]: "60ms" }}>
        Score and coach every human and AI agent
      </h1>

      <p className="lede reveal" style={{ ["--d" as string]: "140ms" }}>
        Make every customer conversation sharper, faster, and more consistent —
        with one platform that grades the work and coaches the people and bots
        behind your support.
      </p>

      <div className="hero-actions reveal" style={{ ["--d" as string]: "220ms" }}>
        <a className="btn btn-primary btn-arrow" href="#cta">
          Get a demo
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a className="btn btn-ghost" href="#product">
          See how it works
        </a>
      </div>

      <div className="hero-stage reveal-scale" ref={stageRef} style={{ ["--d" as string]: "120ms" }}>
        <img ref={imgRef} src="/assets/hero-landscape.jpg" alt="" />

        <div className="hero-chip chip-1" ref={chip1}>
          <span className="chip-coin">92</span>
          <span>
            <span className="chip-label">Quality score</span>
            <br />
            <span className="chip-value">+18 this week</span>
          </span>
        </div>

        <div className="hero-chip chip-2" ref={chip2}>
          <span className="chip-dot" />
          <span>
            <span className="chip-label">CSAT</span>
            <br />
            <span className="chip-value">94%</span>
          </span>
        </div>
      </div>
    </section>
  );
}
