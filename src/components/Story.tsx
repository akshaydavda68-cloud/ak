import { useState } from "react";
import { CHECKIN_OPTIONS, PATTERNS } from "../lib/data";
import type { IconName } from "./ui";
import { Icon, Kicker, Reveal } from "./ui";

/* ---------------- the craving scene ---------------- */

function StorySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-20 -right-32 w-96 h-96 rounded-full bg-butter-50 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <Kicker tone="pine">It starts with a craving</Kicker>
        </Reveal>

        <div className="mt-8 font-display text-2xl sm:text-[2rem] leading-[1.45] text-ink">
          <Reveal delay={80}>
            <p>
              It's late afternoon. You're <span className="italic">tired</span>. It's been a busy day. Something sweet
              sounds <span className="italic">really</span> good.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7">
              You tell yourself:{" "}
              <span className="inline-block mt-2 px-5 py-3 bg-mist border-l-4 border-coral-500 rounded-r-xl text-xl sm:text-2xl font-semibold">
                “I'll just have one.”
              </span>
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-7">
              Later, another snack. And then:{" "}
              <span className="inline-block mt-2 px-5 py-3 bg-mist border-l-4 border-pine-600 rounded-r-xl text-xl sm:text-2xl font-semibold">
                “Why do I keep doing this?”
              </span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-14 relative">
            <p className="text-lg text-ink-soft">Instead of blaming yourself, ask:</p>
            <h2 className="mt-3 font-display font-black text-3xl sm:text-5xl leading-[1.08] tracking-tight text-ink">
              What was happening <span className="squiggle">before</span> the craving appeared?
            </h2>
            <p className="mt-6 text-xl text-pine-700 font-semibold">
              That's where <span className="font-display italic">The Craving Code™</span> begins.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- patterns + interactive check-in ---------------- */

function PatternsSection() {
  const [picked, setPicked] = useState<number | null>(null);
  const chosen = picked !== null ? CHECKIN_OPTIONS[picked] : null;

  return (
    <section className="relative bg-mist py-24 sm:py-32 overflow-hidden">
      <p className="ghost-word absolute -top-4 left-2 font-display italic font-black text-[16vw] leading-none pointer-events-none select-none" aria-hidden="true">
        patterns
      </p>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <Kicker tone="coral">You may not need more willpower</Kicker>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-ink">
              Cravings hide in <span className="italic font-medium text-pine-700">plain sight.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">Cravings can be influenced by everyday patterns such as:</p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {PATTERNS.map((p, i) => (
              <Reveal key={p.title} delay={220 + i * 90}>
                <li className="group flex items-start gap-4 bg-paper rounded-2xl border border-line p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-pine-600/40">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-pine-50 text-pine-700 shrink-0 transition-colors duration-300 group-hover:bg-coral-500 group-hover:text-paper">
                    <Icon name={p.icon as IconName} className="w-5.5 h-5.5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={300}>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed">
              <strong className="text-ink font-semibold">The Craving Code™</strong> gives you a simple way to notice
              those patterns and decide what to do next.
            </p>
            <p className="mt-4 font-display italic text-2xl text-pine-700">
              Instead of fighting every craving, learn to understand the moment.
            </p>
          </Reveal>
        </div>

        <div className="lg:pt-10">
          <Reveal dir="right" delay={150}>
            <div className="relative bg-pine-950 rounded-[1.8rem] p-7 sm:p-9 shadow-lift overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-pine-800/70 blur-2xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-coral-500/10 blur-2xl pointer-events-none" aria-hidden="true" />

              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-butter-300">
                <Icon name="spark" className="w-4 h-4" />
                Try it right now — the 10-second check-in
              </p>
              <h3 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-paper leading-tight">
                A craving just showed up. What might be behind it?
              </h3>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {CHECKIN_OPTIONS.map((o, i) => (
                  <button
                    key={o.key}
                    onClick={() => setPicked(picked === i ? null : i)}
                    aria-pressed={picked === i}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
                      picked === i
                        ? "bg-coral-500 text-paper -translate-y-0.5 shadow-[0_10px_24px_-8px_rgb(244_85_47/0.6)]"
                        : "bg-paper/10 text-paper hover:bg-paper/20 hover:-translate-y-0.5"
                    }`}
                  >
                    <Icon name={o.icon as IconName} className="w-4.5 h-4.5" />
                    {o.label}
                  </button>
                ))}
              </div>

              <div className={`acc-body mt-6 ${chosen ? "open" : ""}`}>
                <div className="acc-inner">
                  {chosen && (
                    <div className="rounded-2xl bg-paper text-ink p-6 border-l-4 border-coral-500">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-600">What's likely going on</p>
                      <p className="mt-2 font-medium leading-relaxed">{chosen.insight}</p>
                      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-pine-700">A supportive response</p>
                      <p className="mt-2 leading-relaxed text-ink-soft">{chosen.response}</p>
                      <p className="mt-4 pt-4 border-t border-dashed border-line text-xs text-ink-soft">
                        This is one small taste of the Check-In step inside the full 5-step method.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {!chosen && (
                <p className="mt-6 text-sm text-paper/60 font-medium">
                  ↑ Tap one — most cravings have a story behind them.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function StorySections() {
  return (
    <>
      <StorySection />
      <PatternsSection />
    </>
  );
}
