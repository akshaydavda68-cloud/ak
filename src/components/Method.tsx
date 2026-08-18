import type { CSSProperties } from "react";
import { IMAGES, STEPS, WEEKS } from "../lib/data";
import type { IconName } from "./ui";
import { Flower, Icon, Kicker, Reveal } from "./ui";

/* ---------------- stacked 5-step deck ---------------- */

function MethodDeck() {
  return (
    <section id="method" className="relative bg-cream py-24 sm:py-32 overflow-hidden scroll-mt-16">
      <p className="ghost-word absolute top-6 right-4 font-display italic font-black text-[14vw] leading-none pointer-events-none" aria-hidden="true">
        method
      </p>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Kicker tone="coral">Meet The Craving Code™</Kicker>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.03] tracking-tight text-ink">
                A simple <span className="squiggle">5-step</span> approach for everyday craving moments.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                No apps to install, no rules to memorize. Just five small moves you can practice the next time an urge
                shows up — at your desk, in the car, or in front of the pantry.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex items-center gap-3 text-sm font-bold text-pine-700">
                <span className="flex -space-x-2">
                  {["S", "P", "C", "C", "R"].map((l, i) => (
                    <span key={i} className="grid place-items-center w-9 h-9 rounded-full border-2 border-paper bg-pine-800 text-paper text-xs font-black">
                      {l}
                    </span>
                  ))}
                </span>
                Spot · Pause · Check In · Choose · Repeat
              </div>
            </Reveal>
            <Reveal delay={360}>
              <blockquote className="mt-10 border-l-4 border-butter-500 pl-5 py-1">
                <p className="font-display italic text-2xl text-ink">One moment doesn't define your day.</p>
              </blockquote>
            </Reveal>
          </div>

          <div className="relative">
            {STEPS.map((s, i) => (
              <div key={s.n} className="sticky" style={{ top: `calc(6.5rem + ${i * 2.6}rem)` }}>
                <div
                  className="mb-6 rounded-[1.6rem] border border-line bg-paper shadow-card p-7 sm:p-9 transition-transform duration-500 hover:-translate-y-1"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.6}deg)` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display italic font-black text-5xl sm:text-6xl text-pine-100 leading-none select-none">
                      {s.n}
                    </span>
                    <span className="grid place-items-center w-14 h-14 rounded-full bg-pine-800 text-butter-300">
                      <Icon name={s.icon as IconName} className="w-7 h-7" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display font-black text-2xl sm:text-3xl tracking-tight text-ink">{s.name}</h3>
                  <p className="mt-3 text-lg text-ink-soft leading-relaxed max-w-md">{s.text}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-coral-600">
                    <Flower className="w-3 h-3" /> Step {i + 1} of 5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- pull quote band ---------------- */

function QuoteBand() {
  return (
    <section className="relative bg-pine-900 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 40 Q25 5 50 40 T100 40 T150 40 T200 40 T250 40 T300 40 T350 40 T400 40" fill="none" stroke="#ffc24b" strokeWidth="1.5" />
          <path d="M0 60 Q25 25 50 60 T100 60 T150 60 T200 60 T250 60 T300 60 T350 60 T400 60" fill="none" stroke="#f4552f" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal dir="scale">
          <p className="font-display font-black text-3xl sm:text-5xl leading-[1.15] tracking-tight text-paper">
            Instead of fighting every craving,{" "}
            <span className="squiggle-butter italic font-medium">learn to understand the moment.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 30-day journey ---------------- */

function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-16">
      <div className="absolute -left-24 top-10 w-80 h-80 rounded-full bg-pine-50 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-14 items-center">
          <div className="order-2 lg:order-1">
            <Reveal dir="left">
              <div className="relative">
                <div className="absolute -inset-3 -rotate-3 rounded-[1.8rem] bg-coral-100" aria-hidden="true" />
                <div className="absolute -inset-3 rotate-2 rounded-[1.8rem] border-2 border-dashed border-pine-600/30" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[1.8rem] shadow-lift aspect-square bg-mist">
                  <img
                    src={IMAGES.journal}
                    alt="An open 30-day craving tracker journal with a morning coffee on a wooden desk"
                    className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
                <div
                  className="floaty absolute -bottom-5 -right-3 bg-paper border border-line rounded-full px-5 py-2.5 text-sm font-bold text-ink shadow-card"
                  style={{ "--tilt": "3deg" } as CSSProperties}
                >
                  🗓️ Week-by-week, at your pace
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Kicker tone="pine">Your 30-day journey</Kicker>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink">
                Four weeks. One gentle <span className="italic font-medium text-coral-600">reset.</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
                Clear weekly structure with trackers and practical tools — designed to fit around work, family, and
                real life.
              </p>
            </Reveal>

            <div className="mt-10 relative">
              <div className="absolute left-[21px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-pine-600 via-coral-400 to-butter-500" aria-hidden="true" />
              <div className="space-y-8">
                {WEEKS.map((w, i) => (
                  <Reveal key={w.week} delay={240 + i * 110}>
                    <div className="group relative flex gap-6">
                      <span className="relative z-10 grid place-items-center w-11 h-11 rounded-full bg-paper border-[3px] border-pine-600 font-display font-black text-pine-700 text-sm shrink-0 transition-all duration-300 group-hover:bg-coral-500 group-hover:border-coral-500 group-hover:text-paper group-hover:scale-110">
                        {i + 1}
                      </span>
                      <div className="pb-1">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral-600">{w.week}</p>
                        <h3 className="mt-1 font-display font-black text-2xl text-ink group-hover:text-pine-700 transition-colors duration-300">
                          {w.name}
                        </h3>
                        <p className="mt-1.5 text-ink-soft leading-relaxed max-w-xl">{w.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MethodSections() {
  return (
    <>
      <MethodDeck />
      <QuoteBand />
      <JourneySection />
    </>
  );
}
