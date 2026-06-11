import Logo from "./Logo";

const COLS = [
  {
    title: "Menu",
    links: [
      { label: "Customers", href: "#customers" },
      { label: "Product", href: "#product" },
      { label: "Careers", href: "#cta" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Help", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Security", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo size={30} />
          <p>The optimization platform that scores and coaches every human and AI agent.</p>
        </div>

        {COLS.map((col) => (
          <div className="fcol" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="fcol">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="#" aria-label="Qualia on X">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="#" aria-label="Qualia on LinkedIn">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Qualia Inc. All rights reserved.</span>
        <div className="footer-social">
          <a href="#" aria-label="X (Twitter)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
        <span>Designed &amp; built by Paliy</span>
      </div>
    </footer>
  );
}
