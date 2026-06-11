type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  mono?: boolean;
};

/**
 * Qualia brand mark — three ascending strokes resolving into a rising
 * peak: quality and performance moving up. Pairs with the wordmark.
 */
export function LogoMark({ size = 28, mono = false }: { size?: number; mono?: boolean }) {
  const id = "q-grad";
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#54d172" />
          <stop offset="1" stopColor="#2ea84f" />
        </linearGradient>
      </defs>
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="9"
        fill={mono ? "currentColor" : `url(#${id})`}
      />
      <g fill={mono ? "#fff" : "#06330f"} fillOpacity={mono ? 0.001 : 1}>
        <rect x="7.5" y="18" width="4.4" height="7" rx="2.2" fill="#fff" />
        <rect x="13.8" y="13" width="4.4" height="12" rx="2.2" fill="#fff" />
        <rect x="20.1" y="7.5" width="4.4" height="17.5" rx="2.2" fill="#fff" />
      </g>
      <circle cx="22.3" cy="5.4" r="2.2" fill="#fff" />
    </svg>
  );
}

export default function Logo({ size = 28, withWordmark = true, mono = false }: LogoProps) {
  return (
    <span className="brand">
      <LogoMark size={size} mono={mono} />
      {withWordmark && <span style={{ color: mono ? "#fff" : "var(--ink)" }}>Qualia</span>}
    </span>
  );
}
