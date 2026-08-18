import type { CSSProperties } from "react";
import { IMAGES, MARQUEE_WORDS, PILLARS, PRICE } from "../lib/data";
import { useScrollY } from "../lib/hooks";
import { CTAButton, Flower, Icon, Kicker, Reveal } from "./ui";

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="grid place-items-center w-9 h-9 rounded-full bg-pine-800 text-butter-300 transition-transform duration-300 group-hover:rotate-12">
        <Icon name="leaf" className="w-4.5 h-4.5" />
      </span>
      <span className="font-display font-semibold tracking-tight text-lg leading-none text-ink">
        Reset Life Habit<span className="align-super text-[9px] font-body font-bold">™</span>
      </span>
    </a>
  );
}

function Header() {
  const scrolled = useScrollY(30);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/95 backdrop-blur-sm shadow-[0_2px_24px_rgb(33_28_21/0.07)] py-2.5" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <Wordmark />
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-ink-soft">
          {[
            ["The Method", "#method"],
            ["30 Days", "#journey"],
            ["What's Inside", "#inside"],
            ["Reviews", "#reviews"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-coral-600 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-coral-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#offer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-pine-800 text-paper px-5 py-2.5 text-sm font-bold hover:bg-coral-500 transition-colors duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          Get it — {PRICE}
        </a>
      </div>
    </header>
  );
}

function CravingWaveCard() {
  return (
    <div className="absolute -bottom-7 -left-4 sm:-left-10 w-[240px] sm:w-[280px] bg-paper rounded-2xl border border-line shadow-lift p-4 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-10">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">The craving wave</p>
        <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
      </div>
      <svg viewBox="0 0 340 150" className="w-full" aria-hidden="true">
        <line x1="6" y1="132" x2="334" y2="132" stroke="#e7e2d8" strokeWidth="2" />
        <path
          d="M6 118 C40 116 55 66 85 62 C115 58 125 100 158 102 C190 104 205 34 245 30 C275 27 305 84 334 90"
          fill="none"
          stroke="#f4552f"
          strokeWidth="4"
          strokeLinecap="round"
          className="curve-path"
        />
        <circle cx="245" cy="30" r="7" fill="#f4552f" opacity="0.35" className="pulse-dot" />
        <circle cx="245" cy="30" r="6" fill="#f4552f" />
        <text x="245" y="16" textAnchor="middle" fontSize="13" fontWeight="700" fill="#113b2c" fontFamily="Instrument Sans, sans-serif">
          urge peak
        </text>
        <text x="10" y="146" fontSize="11" fill="#5c544a" fontFamily="Instrument Sans, sans-serif">
          an urge rises… then passes
        </text>
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full bg-coral-50 blur-3xl opacity-80" />
        <div className="absolute top-1/3 -left-48 w-[520px] h-[520px] rounded-full bg-pine-50 blur-3xl opacity-90" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-butter-50 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker tone="coral">A 30-day habit system · not a diet</Kicker>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-5 font-display font-black text-[13.5vw] sm:text-6xl xl:text-[5.1rem] leading-[0.98] tracking-tight text-ink">
              Stop Battling
              <br />
              <span className="italic font-medium text-coral-600 squiggle">Cravings</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg sm:text-xl leading-relaxed text-ink-soft">
              A simple 30-day system to understand everyday cravings &amp; build healthier eating habits{" "}
              <strong className="text-ink font-semibold">without extreme diets.</strong>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-pine-700">
              Less restriction <Flower className="w-3.5 h-3.5 text-coral-500" />
              More awareness <Flower className="w-3.5 h-3.5 text-butter-500" />
              Better everyday routines
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-3 border-t border-line">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.n}
                delay={300 + i * 110}
                className="group border-b sm:border-b-0 sm:border-r border-line last:border-0 py-5 sm:py-6 sm:pr-5 hover:bg-pine-50/60 transition-colors duration-300"
              >
                <p className="font-display italic text-3xl text-coral-500 group-hover:-translate-y-1 transition-transform duration-300">{p.n}</p>
                <h3 className="mt-2 font-bold text-ink leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={560}>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5">
              <CTAButton
                href="#offer"
                label={`Get The Craving Code™ — ${PRICE}`}
                sub="Instant digital access · One-time payment"
              />
              <p className="flex items-center gap-2 text-sm text-ink-soft font-medium">
                <Icon name="shield" className="w-5 h-5 text-pine-600" />
                60-day money-back guarantee
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal dir="scale" delay={200} className="relative">
            <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-t-full rounded-b-[2.2rem] bg-coral-100" aria-hidden="true" />
            <div className="absolute -inset-3 -translate-x-4 -translate-y-3 rounded-t-full rounded-b-[2.2rem] border-2 border-dashed border-pine-600/40" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-t-full rounded-b-[2.2rem] border-[6px] border-paper shadow-lift aspect-[4/5] bg-pine-100">
              <img
                src={IMAGES.hero}
                alt="An afternoon pause — a hand near a plate of cookies, tea and a notebook in warm light"
                className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.05]"
                loading="eager"
              />
            </div>

            <div
              className="floaty absolute top-[16%] -left-3 sm:-left-8 flex items-center gap-2 bg-butter-500 text-pine-950 rounded-full pl-3 pr-4 py-2 text-sm font-bold shadow-card"
              style={{ "--tilt": "-4deg" } as CSSProperties}
            >
              <Icon name="clock" className="w-4.5 h-4.5" />
              3:47 PM
            </div>
            <div
              className="floaty-slow absolute top-[30%] -right-2 sm:-right-7 bg-paper border border-line rounded-full px-4 py-2 text-sm font-semibold text-ink-soft shadow-card"
              style={{ "--tilt": "3deg" } as CSSProperties}
            >
              tired · busy day
            </div>
            <div
              className="floaty absolute bottom-[24%] -right-3 sm:-right-9 max-w-[230px] bg-pine-800 text-paper rounded-2xl rounded-br-sm px-4 py-3 text-sm font-medium leading-snug shadow-lift"
              style={{ "--tilt": "2deg", animationDelay: "1.2s" } as CSSProperties}
            >
              “Something sweet sounds <em className="font-display italic text-butter-300">really</em> good right now…”
            </div>

            <CravingWaveCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="relative -rotate-1 scale-[1.02] bg-pine-900 py-3.5 border-y-4 border-butter-500 my-2" aria-hidden="true">
      <div className="marquee">
        {[0, 1].map((t) => (
          <div key={t} className="marquee-track" style={t === 1 ? { animationDelay: "-13s" } : undefined}>
            {items.map((w, i) => (
              <span key={`${t}-${i}`} className="flex items-center gap-6 pr-6 whitespace-nowrap">
                <span className={`font-display italic text-lg sm:text-xl ${i % 2 ? "text-butter-300" : "text-paper"}`}>{w}</span>
                <Flower className="w-4 h-4 text-coral-400" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
    </>
  );
}
