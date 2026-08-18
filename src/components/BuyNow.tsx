import type { CSSProperties } from "react";
import { CHECKOUT_URL, IMAGES, PRICE } from "../lib/data";
import type { IconName } from "./ui";
import { Flower, Icon, Kicker, Reveal } from "./ui";

/* ------------------------------------------------------------------ */
/*  Floating bonus chips                                               */
/* ------------------------------------------------------------------ */

const BONUS_CHIPS: { icon: IconName; label: string }[] = [
  { icon: "cards", label: "Busy-Day Reset Cards™" },
  { icon: "timer", label: "15-Minute Meals Pack™" },
  { icon: "cloche", label: "Eat Out, Stay Grounded™" },
  { icon: "clipboard", label: "Quick-Start Checklist™" },
];

function BonusChip({
  icon,
  label,
  className = "",
  tilt = "0deg",
  delay = "0s",
}: {
  icon: IconName;
  label: string;
  className?: string;
  tilt?: string;
  delay?: string;
}) {
  return (
    <div
      className={`${className} floaty flex items-center gap-2.5 bg-paper border border-line rounded-xl px-3.5 py-2.5 shadow-card`}
      style={{ "--tilt": tilt, animationDelay: delay } as CSSProperties}
    >
      <span className="grid place-items-center w-9 h-9 rounded-lg bg-butter-100 text-pine-700 shrink-0">
        <Icon name={icon} className="w-4.5 h-4.5" />
      </span>
      <div className="text-left min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-coral-600">Bonus</p>
        <p className="text-xs font-bold text-ink leading-tight">{label}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Curved price arrows                                                */
/* ------------------------------------------------------------------ */

function CurveArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 130 95"
      className={`w-24 sm:w-28 h-auto text-pine-300 ${flip ? "-scale-x-100" : ""}`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M118 8 C 78 4, 36 24, 18 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="0.5 11" />
      <path d="M8 58 L17 73 L33 66" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  The section                                                        */
/* ------------------------------------------------------------------ */

const INCLUDED = [
  "4 Core Modules",
  "4 Bonus Guides",
  "30-Day Framework",
  "Printable Tools",
  "Instant Digital Access",
  "60-Day Guarantee",
];

export default function BuyNow() {
  return (
    <section id="buynow" className="relative bg-cream py-24 sm:py-32 overflow-hidden scroll-mt-16">
      {/* ambient layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-28 w-[480px] h-[480px] rounded-full bg-butter-50 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-coral-50 blur-3xl" />
        <div className="absolute bottom-10 left-[8%] w-40 h-40 rounded-full border-2 border-dashed border-pine-600/20" />
        <div className="absolute top-16 right-[10%] w-24 h-24 rounded-full border-2 border-dashed border-coral-500/25" />
        <Flower className="absolute top-24 left-[16%] w-5 h-5 text-butter-300/70" />
        <Flower className="absolute bottom-32 right-[18%] w-6 h-6 text-coral-300/50" />
        <p className="ghost-word absolute -bottom-4 left-1/2 -translate-x-1/2 font-display italic font-black text-[17vw] leading-none whitespace-nowrap">
          today
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <Kicker tone="coral" className="justify-center">One-time payment · Instant digital access</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.04] tracking-tight text-pine-800">
              Start Your 30-Day Journey With <span className="squiggle italic font-medium">The Craving Code™</span> Today
            </h2>
          </Reveal>
        </div>

        {/* product mockup showcase */}
        <Reveal dir="scale" delay={150}>
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* offset frames */}
            <div className="absolute -inset-3 -rotate-1 rounded-[2rem] bg-pine-800" aria-hidden="true" />
            <div className="absolute -inset-3 rotate-1 rounded-[2rem] border-2 border-dashed border-coral-500/40" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-paper shadow-lift bg-mist">
              <img
                src={IMAGES.buyNow}
                alt="The Craving Code™ digital bundle shown on a laptop, tablet, phone and e-reader with the four bonus guides"
                className="kenburns w-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 bg-pine-950/85 text-butter-300 text-[11px] font-bold uppercase tracking-[0.18em] rounded-full px-3.5 py-1.5">
                The complete digital bundle
              </span>
            </div>

            {/* floating bonus cards */}
            <BonusChip icon="cards" label="Busy-Day Reset Cards™" className="absolute -top-6 -left-3 sm:-left-10 z-10 hidden sm:flex" tilt="-4deg" />
            <BonusChip icon="timer" label="15-Minute Meals Pack™" className="absolute top-10 -right-3 sm:-right-10 z-10 hidden sm:flex" tilt="3deg" delay="0.9s" />
            <BonusChip icon="cloche" label="Eat Out, Stay Grounded™" className="absolute bottom-14 -left-3 sm:-left-12 z-10 hidden sm:flex" tilt="3deg" delay="1.6s" />
            <BonusChip icon="clipboard" label="Quick-Start Checklist™" className="absolute -bottom-7 right-6 sm:-right-6 z-10 hidden sm:flex" tilt="-3deg" delay="0.5s" />

            {/* mobile bonus strip */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
              {BONUS_CHIPS.map((c) => (
                <BonusChip key={c.label} icon={c.icon} label={c.label} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* delivery notice */}
        <Reveal delay={200}>
          <p className="mt-12 text-center text-sm sm:text-base italic text-ink-soft">
            Product is delivered digitally. Images are for visualization only.
          </p>
        </Reveal>

        {/* price */}
        <div className="relative mt-12 text-center">
          <span className="hidden md:block absolute left-1/2 top-1/2 -translate-y-[70%] -translate-x-[330px] arrow-bob" aria-hidden="true">
            <CurveArrow />
          </span>
          <span className="hidden md:block absolute left-1/2 top-1/2 -translate-y-[70%] translate-x-[234px] arrow-bob" style={{ animationDelay: "0.6s" }} aria-hidden="true">
            <CurveArrow flip />
          </span>

          <Reveal delay={100}>
            <p className="text-xl font-semibold text-ink">Today Just For</p>
            <p className="price-pulse mt-2 inline-block font-display font-black text-[4rem] sm:text-[5.5rem] leading-none text-pine-800 [text-shadow:0_12px_32px_rgb(17_59_44/0.18)]">
              {PRICE}
            </p>
            <p className="mt-3 text-sm font-semibold text-ink-soft">One-time payment · no subscription, no upsell required</p>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={180}>
          <div className="mt-9 text-center">
            <a
              href={CHECKOUT_URL}
              aria-label={`Get instant access to The Craving Code for ${PRICE}, one-time payment`}
              className="btn-sheen group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-pine-800 px-12 py-5 text-lg sm:text-xl font-bold uppercase tracking-wide text-paper shadow-[0_8px_24px_rgb(17_59_44/0.35)] transition-all duration-300 hover:bg-pine-900 hover:-translate-y-1 active:translate-y-0"
            >
              Get The Craving Code™ Now
              <Icon name="arrow" className="w-5.5 h-5.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-sm font-bold text-pine-800">
              <span className="flex items-center gap-2">
                <Icon name="shield" className="w-5 h-5" /> 60-Day Money-Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                <Icon name="lock" className="w-5 h-5" /> Secure checkout via ClickBank
              </span>
              <span className="flex items-center gap-2">
                <Icon name="download" className="w-5 h-5" /> Instant digital access
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              {["VISA", "Mastercard", "AMEX", "PayPal"].map((p) => (
                <span key={p} className="rounded-md border border-line bg-paper px-3 py-1 text-[11px] font-black tracking-widest text-ink-soft">
                  {p}
                </span>
              ))}
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-ink-soft">
                <Icon name="lock" className="w-3.5 h-3.5" /> 256-bit SSL encrypted
              </span>
            </div>
          </div>
        </Reveal>

        {/* what you receive */}
        <Reveal delay={240}>
          <div className="mt-14 mx-auto max-w-2xl rounded-2xl border border-line bg-paper shadow-card p-8 sm:p-9">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-ink-soft">Your complete toolkit</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-3.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Icon name="check" className="w-5 h-5 text-pine-600 shrink-0" />
                  <span className="font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-dashed border-line text-center text-sm text-ink-soft">
              Everything unlocks the moment your order is confirmed — start Week 1 today.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
