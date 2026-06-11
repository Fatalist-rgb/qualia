export default function FooterCTA() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="fcta reveal-scale" id="cta">
        <div className="fcta-bg">
          <img src="/assets/footer-road.png" alt="" loading="lazy" />
        </div>
        <h2>Set a higher standard for every conversation</h2>
        <p>
          See how Qualia scores and coaches your human and AI agents — in a short
          walkthrough built around the way your team actually works.
        </p>
        <div className="hero-actions">
          <a className="btn btn-light btn-arrow" href="#cta">
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
          <a className="btn btn-outline" href="#cta">
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
