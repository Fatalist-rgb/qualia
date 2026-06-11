export default function Features() {
  return (
    <section className="section container">
      <div className="fcards">
        <article className="fcard reveal-scale">
          <img className="fcard-ill" src="/assets/ill-conversation.png" alt="" loading="lazy" />
          <h3>Built by operators, not bystanders</h3>
          <p>
            Our team ran support, sales, and success at companies known for
            getting it right. That hard-won judgment is built into a platform
            made for speed, clarity, and the realities of a busy floor.
          </p>
          <div className="pill-row">
            <span className="fpill">Support</span>
            <span className="fpill">Sales</span>
            <span className="fpill">Success</span>
          </div>
        </article>

        <article className="fcard reveal-scale" style={{ ["--d" as string]: "120ms" }}>
          <img className="fcard-ill" src="/assets/ill-security.png" alt="" loading="lazy" />
          <h3>Enterprise-grade from day one</h3>
          <p>
            Qualia is built to enterprise standards, independently audited, and
            wrapped in strict access controls — so your customer data stays
            private, governed, and exactly where it should be.
          </p>
          <div className="pill-row">
            <span className="fpill">SOC 2 Type II</span>
            <span className="fpill">ISO 27001</span>
            <span className="fpill">GDPR</span>
          </div>
        </article>
      </div>
    </section>
  );
}
