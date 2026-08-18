import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Custom inline icon set (hand-drawn strokes, no icon library)       */
/* ------------------------------------------------------------------ */

export type IconName =
  | "eye" | "pause" | "pulse" | "fork" | "repeat"
  | "clock" | "wave" | "spark" | "bell" | "home"
  | "book" | "bowl" | "cart" | "clipboard" | "cards"
  | "timer" | "cloche" | "check" | "x" | "arrow"
  | "leaf" | "download" | "lock" | "shield" | "battery" | "loop";

const PATHS: Record<IconName, ReactNode> = {
  eye: (
    <>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v1.8M12 19.4v1.8" />
    </>
  ),
  pause: (
    <>
      <rect x="6" y="4.5" width="4" height="15" rx="1.6" />
      <rect x="14" y="4.5" width="4" height="15" rx="1.6" />
    </>
  ),
  pulse: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.5 12h3l1.8-3.6 3 7.2 1.9-3.6h3.3" />
    </>
  ),
  fork: (
    <>
      <path d="M8 3v6a2.5 2.5 0 0 0 5 0V3" />
      <path d="M10.5 3v18" />
      <path d="M16.5 3c-1.2 2.6-1.2 6.4 0 9v9" />
    </>
  ),
  repeat: (
    <>
      <path d="M4.5 9a8 8 0 0 1 13.6-2.4L20.5 9" />
      <path d="M20.5 4.5V9H16" />
      <path d="M19.5 15a8 8 0 0 1-13.6 2.4L3.5 15" />
      <path d="M3.5 19.5V15H8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
  wave: (
    <>
      <path d="M3 8c2.5-2.6 5-2.6 7.5 0s5 2.6 7.5 0" />
      <path d="M3 13c2.5-2.6 5-2.6 7.5 0s5 2.6 7.5 0" />
      <path d="M3 18c2.5-2.6 5-2.6 7.5 0s5 2.6 7.5 0" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3c.7 4.6 2.4 6.3 7 7-4.6.7-6.3 2.4-7 7-.7-4.6-2.4-6.3-7-7 4.6-.7 6.3-2.4 7-7Z" />
      <path d="M19 15.5l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6.6-2Z" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16v-5a6 6 0 1 1 12 0v5l1.6 2.4H4.4L6 16Z" />
      <path d="M9.8 21a2.4 2.4 0 0 0 4.4 0" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5C10 4.8 7 4.4 3.5 4.8v13.4c3.5-.4 6.5 0 8.5 1.7 2-1.7 5-2.1 8.5-1.7V4.8C17 4.4 14 4.8 12 6.5Z" />
      <path d="M12 6.5v13.4" />
      <path d="M6.5 9h2.5M6.5 12h2.5M15 9h2.5M15 12h2.5" />
    </>
  ),
  bowl: (
    <>
      <path d="M3.5 12.5h17a8.5 8.5 0 0 1-17 0Z" />
      <path d="M8.5 9.5c0-1.4 1-1.6 1-3M13 9.5c0-1.4 1-1.6 1-3" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.4l2.2 11h11l2-8H7" />
      <circle cx="9.4" cy="19.4" r="1.5" />
      <circle cx="16.8" cy="19.4" r="1.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="M8.5 10h7M8.5 13.5h7M8.5 17h4" />
    </>
  ),
  cards: (
    <>
      <rect x="7.5" y="3.5" width="13" height="15" rx="2" transform="rotate(6 14 11)" />
      <rect x="3.5" y="5.5" width="13" height="15" rx="2" />
      <path d="M6.5 10h7M6.5 13.5h5" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 13.5V9.8" />
      <path d="M9.5 3h5M12 3v3M18.5 7l1.5-1.5" />
    </>
  ),
  cloche: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M2.5 16h19M12 8V6.2" />
      <circle cx="12" cy="5" r="1.1" />
      <path d="M5 19.5h14" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.8 12.4 10.8 15.4 16.4 9" />
    </>
  ),
  x: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="M13.5 6.5 19 12l-5.5 5.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C4 9 10 4.5 20 4c.5 10-4.5 16-14 15Z" />
      <path d="M5 19c2.5-5.5 6-9 11-11.5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v10M7.8 9.5l4.2 4.2 4.2-4.2" />
      <path d="M4.5 16v3a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-3" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <path d="M12 14.5v2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v6c0 4.6 3 7.7 7 9.2 4-1.5 7-4.6 7-9.2v-6L12 3Z" />
      <path d="M8.8 11.8 11.2 14.2 15.4 9.4" />
    </>
  ),
  battery: (
    <>
      <rect x="2.5" y="8" width="17" height="8.5" rx="2" />
      <path d="M21.5 11v2.5" />
      <path d="M5.5 11v2.5M8.5 11v2.5" />
    </>
  ),
  loop: (
    <>
      <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
      <path d="M19.7 3.6v4h-4" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
};

export function Icon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/** Filled five-point star for ratings. */
export function Star({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6Z" />
    </svg>
  );
}

/** Six-petal flower mark used across the page as a motif. */
export function Flower({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c.9 3.2 2.4 4.7 5.6 5.6-3.2.9-4.7 2.4-5.6 5.6-.9-3.2-2.4-4.7-5.6-5.6C9.6 6.7 11.1 5.2 12 2Z" />
      <path d="M18.5 13.5c.6 2 1.5 2.9 3.5 3.5-2 .6-2.9 1.5-3.5 3.5-.6-2-1.5-2.9-3.5-3.5 2-.6 2.9-1.5 3.5-3.5Z" />
      <circle cx="6.5" cy="17.5" r="2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll wrapper                                           */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "scale";
  style?: CSSProperties;
}) {
  const dirClass =
    dir === "left" ? "rv rv-left" : dir === "right" ? "rv rv-right" : dir === "scale" ? "rv rv-scale" : "rv";
  return (
    <div
      className={`${dirClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Kicker + CTA                                                       */
/* ------------------------------------------------------------------ */

export function Kicker({
  children,
  tone = "pine",
  className = "",
}: {
  children: ReactNode;
  tone?: "pine" | "coral" | "butter" | "light";
  className?: string;
}) {
  const tones: Record<string, string> = {
    pine: "text-pine-700",
    coral: "text-coral-600",
    butter: "text-butter-500",
    light: "text-butter-300",
  };
  return (
    <p
      className={`flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] ${tones[tone]} ${className}`}
    >
      <Flower className="w-3.5 h-3.5" />
      {children}
    </p>
  );
}

export function CTAButton({
  href,
  label,
  sub,
  size = "lg",
  tone = "coral",
  className = "",
}: {
  href: string;
  label: string;
  sub?: string;
  size?: "lg" | "md" | "sm";
  tone?: "coral" | "pine";
  className?: string;
}) {
  const sizes = {
    lg: "px-9 py-4.5 text-base sm:text-lg",
    md: "px-7 py-3.5 text-base",
    sm: "px-5 py-2.5 text-sm",
  };
  const tones = {
    coral: "bg-coral-500 hover:bg-coral-600 text-paper shadow-[0_14px_30px_-10px_rgb(244_85_47/0.55)]",
    pine: "bg-pine-800 hover:bg-pine-900 text-paper shadow-[0_14px_30px_-10px_rgb(13_46_35/0.5)]",
  };
  return (
    <a
      href={href}
      className={`btn-sheen group inline-flex flex-col items-center justify-center rounded-full font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${tones[tone]} ${className}`}
    >
      <span className="flex items-center gap-2.5">
        {label}
        <Icon name="arrow" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      {sub && <span className="mt-0.5 text-[11px] font-medium opacity-80 tracking-normal">{sub}</span>}
    </a>
  );
}
