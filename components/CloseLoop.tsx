const STEPS = [
  {
    step: "Step 01",
    title: "Grade every conversation in seconds",
    body: "Get a clear read on phone, chat, email, and video support — scored automatically, from first reply to resolution.",
    img: "/assets/card-qa-score.png",
  },
  {
    step: "Step 02",
    title: "Build coaching that fits each agent",
    body: "Spin up realistic roleplays that sound like your real customers and zero in on the gaps holding each rep back.",
    img: "/assets/card-training-plan.png",
  },
  {
    step: "Step 03",
    title: "Watch performance climb",
    body: "Scoring and coaching compound, lifting quality on every interaction — whether it is handled by a human or a bot.",
    img: "/assets/card-performance.png",
  },
];

export default function CloseLoop() {
  return (
    <section className="section container" id="product">
      <div className="loop-head">
        <div>
          <span className="eyebrow reveal">The loop</span>
          <h2 className="h-section reveal" style={{ ["--d" as string]: "80ms", marginTop: "18px" }}>
            Turn what you learn into how they improve
          </h2>
        </div>
        <p className="lede reveal" style={{ ["--d" as string]: "160ms" }}>
          Quality scoring and coaching live in one place — so every insight you
          surface becomes a concrete next step for your agents.
        </p>
      </div>

      <div className="loop-grid">
        {STEPS.map((s, i) => (
          <article
            key={s.step}
            className="loop-card reveal-scale"
            style={{ ["--d" as string]: `${i * 110}ms` }}
          >
            <div className="loop-card-media">
              <img src={s.img} alt="" loading="lazy" />
            </div>
            <div className="loop-card-body">
              <span className="loop-step">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
