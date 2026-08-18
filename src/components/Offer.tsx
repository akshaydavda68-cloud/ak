import { BONUSES, CHECKOUT_URL, IMAGES, MODULES, PRICE } from "../lib/data";
import type { IconName } from "./ui";
import { CTAButton, Flower, Icon, Kicker, Reveal } from "./ui";

/* ---------------- modules ---------------- */

function ModulesSection() {
  return (
    <section id="inside" className="relative bg-cream py-24 sm:py-32 overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-butter-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-pine-50 blur-3xl" />
        <p className="ghost-word absolute top-8 left-4 font-display italic font-black text-[15vw] leading-none">
          inside
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Kicker tone="coral">What's inside The Craving Code™</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink">
              Four modules. Zero <span className="italic font-medium text-pine-700">fluff.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-10">
          {MODULES.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <div
                className={`group grid md:grid-cols-12 gap-8 items-center rounded-[1.8rem] border border-line bg-paper p-7 sm:p-10 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
                  i % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-4 md:[direction:ltr]">
                  {m.image !== "none" ? (
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-mist">
                      <img
                        src={IMAGES[m.image as keyof typeof IMAGES]}
                        alt={`${m.name} preview`}
                        className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-pine-950/85 text-butter-300 text-[11px] font-bold uppercase tracking-[0.18em] rounded-full px-3 py-1">
                        {m.tag}
                      </span>
                    </div>
                  ) : (
                    <div className="relative rounded-2xl aspect-[4/3] bg-pine-800 grid place-items-center overflow-hidden">
                      <span className="absolute inset-4 rounded-xl border-2 border-dashed border-butter-500/40" />
                      <div className="text-center">
                        <span className="inline-grid place-items-center w-16 h-16 rounded-full bg-paper/10 text-butter-300">
                          <Icon name={m.icon as IconName} className="w-8 h-8" />
                        </span>
                        <p className="mt-3 font-display italic text-butter-300">Smart swaps, simple lists</p>
                      </div>
                      <span className="absolute top-3 left-3 bg-paper/10 text-butter-300 text-[11px] font-bold uppercase tracking-[0.18em] rounded-full px-3 py-1">
                        {m.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="md:col-span-8 md:[direction:ltr]">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-pine-50 text-pine-700 group-hover:bg-coral-500 group-hover:text-paper transition-colors duration-300">
                      <Icon name={m.icon as IconName} className="w-5.5 h-5.5" />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-coral-600">{m.tag}</p>
                  </div>
                  <h3 className="mt-4 font-display font-black text-2xl sm:text-3xl tracking-tight text-ink">{m.name}</h3>
                  <p className="mt-3 text-lg text-ink-soft leading-relaxed max-w-2xl">{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- bonuses ---------------- */

const BONUS_COVERS: string[] = [
  IMAGES.journal,   // Busy-Day Reset Cards™
  IMAGES.recipes,   // 15-Minute Meals Pack™
  IMAGES.hero,      // Eat Out, Stay Grounded™
  IMAGES.bundle,    // Quick-Start Checklist™
];

function BonusesSection() {
  return (
    <section className="relative bg-pine-900 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-pine-800/70 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-pine-950 blur-3xl" />
        <p className="absolute top-8 right-6 font-display italic font-black text-[13vw] leading-none text-paper/5 select-none">
          bonuses
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <Reveal>
              <Kicker tone="light">And 4 bonuses</Kicker>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-paper">
                Included today, <span className="squiggle-butter">on the house.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-xs text-paper/70 font-medium">
              Four practical extras that support the busiest, messiest, most real-life days.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUSES.map((b, i) => (
            <Reveal key={b.name} delay={i * 110}>
              <div
                className={`group relative h-full rounded-2xl border-2 border-dashed border-butter-500/40 bg-pine-800/60 p-4 pb-6 transition-all duration-500 hover:-translate-y-2 hover:bg-pine-800 hover:border-solid hover:border-butter-500/70 ${
                  i % 2 ? "rotate-[0.8deg]" : "rotate-[-0.8deg]"
                } hover:rotate-0`}
              >
                <span className="absolute -top-3 left-5 z-10 bg-butter-500 text-pine-950 text-[10px] font-black uppercase tracking-[0.16em] rounded-full px-3 py-1">
                  {b.tag}
                </span>

                {/* cover photo */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-pine-950/50">
                  <img
                    src={BONUS_COVERS[i]}
                    alt={`${b.name} — preview`}
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-2 left-2 grid place-items-center w-9 h-9 rounded-lg bg-paper/95 text-pine-800 shadow-card">
                    <Icon name={b.icon as IconName} className="w-5 h-5" />
                  </span>
                </div>

                <div className="px-2">
                  <h3 className="mt-4 font-display font-bold text-xl text-paper leading-snug">{b.name}</h3>
                  <p className="mt-2.5 text-sm text-paper/75 leading-relaxed">{b.text}</p>
                  <p className="mt-4 pt-4 border-t border-dashed border-paper/15 text-xs text-butter-300 font-semibold">
                    {b.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- guarantee (classic seal band) ---------------- */

function GuaranteeSeal() {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" role="img" aria-label="60-day money-back guarantee seal">
        <defs>
          <path id="sealRing" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" fill="none" />
        </defs>
        <circle cx="100" cy="100" r="97" fill="#ffc24b" />
        <circle cx="100" cy="100" r="88" fill="#0d2e23" />
        <circle cx="100" cy="100" r="56" fill="none" stroke="#ffc24b" strokeWidth="1.5" strokeDasharray="4 5" />
        <g className="seal-spin">
          <text fontSize="12.5" fontWeight="700" letterSpacing="2.6" fill="#ffc24b" fontFamily="Instrument Sans, sans-serif">
            <textPath href="#sealRing">60-DAY MONEY-BACK GUARANTEE • TRY IT RISK-FREE •</textPath>
          </text>
        </g>
        <text x="100" y="106" textAnchor="middle" fontSize="46" fontWeight="900" fill="#fffefa" fontFamily="Fraunces, serif">
          60
        </text>
        <text x="100" y="128" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="4" fill="#ffc24b" fontFamily="Instrument Sans, sans-serif">
          DAYS
        </text>
      </svg>
    </div>
  );
}

function GuaranteeBand() {
  return (
    <section id="guarantee" className="relative bg-pine-950 py-24 sm:py-28 overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-pine-800/60 blur-3xl" />
        <div className="absolute -bottom-32 right-1/5 w-96 h-96 rounded-full bg-pine-900 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[auto,1fr] gap-12 lg:gap-20 items-center">
        <Reveal dir="scale">
          <GuaranteeSeal />
        </Reveal>
        <div>
          <Reveal>
            <Kicker tone="light">60-Day Money-Back Guarantee</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight text-paper">
              Try The Craving Code™ <span className="squiggle-butter">with confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-paper/80 leading-relaxed max-w-2xl">
              Your purchase is covered by our <strong className="text-butter-300 font-bold">60-day money-back guarantee</strong>.
              If you decide the program isn't right for you, simply follow the refund instructions provided with your
              purchase within 60 days.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 font-display italic text-2xl text-butter-300">
              No need to continue with something that isn't a good fit.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- price card ---------------- */

const INCLUDED = [
  "The Craving Code Core Guide",
  "Craving-Friendly Recipe Vault™",
  "Smart Grocery & Swap Guide",
  "30-Day Craving Tracker & Planner",
];

function PriceSection() {
  return (
    <section id="offer" className="relative bg-cream py-24 sm:py-32 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-butter-100 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-coral-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <Kicker tone="coral" className="justify-center">Ready to start?</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink">
            Build more <span className="squiggle italic font-medium">intentional</span> everyday eating habits
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-ink-soft leading-relaxed">
            The Craving Code™ gives you practical tools to understand your patterns, make more intentional choices,
            and build habits that fit real life.
          </p>
        </Reveal>

        <Reveal dir="scale" delay={240}>
          <div className="relative mt-14 mx-auto max-w-3xl">
            <div className="absolute -inset-3 rotate-[-1.2deg] rounded-[2rem] bg-pine-800" aria-hidden="true" />
            <div className="absolute -inset-3 rotate-[1deg] rounded-[2rem] border-2 border-dashed border-coral-500/50" aria-hidden="true" />

            <div className="relative rounded-[2rem] bg-paper border border-line shadow-lift px-8 sm:px-14 py-12 text-left">
              <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
                <div>
                  <p className="font-display italic text-xl text-coral-600">The Craving Code™</p>
                  <div className="mt-2 flex items-end gap-3">
                    <p className="font-display font-black text-7xl sm:text-8xl leading-none text-pine-800">{PRICE}</p>
                    <p className="pb-2 text-sm font-bold text-ink-soft">
                      One-time
                      <br />
                      payment
                    </p>
                  </div>

                  <ul className="mt-7 space-y-3">
                    {[...INCLUDED, "4 bonus guides included"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Icon name="check" className="w-5 h-5 text-pine-600 shrink-0" />
                        <span className="font-semibold text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="relative mx-auto w-44 h-44">
                    <div className="absolute inset-0 rounded-full overflow-hidden shadow-card rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <img src={IMAGES.bundle} alt="The Craving Code digital bundle" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <span className="absolute -top-2 -right-3 grid place-items-center w-14 h-14 rounded-full bg-butter-500 text-pine-950 font-black text-[10px] leading-tight text-center rotate-12 shadow-card">
                      INSTANT
                      <br />
                      ACCESS
                    </span>
                  </div>
                  <div className="mt-8">
                    <CTAButton href={CHECKOUT_URL} label={`Get The Craving Code™ — ${PRICE}`} size="md" className="w-full" />
                    <p className="mt-4 text-xs text-ink-soft font-medium">
                      Digital product. Instant access after purchase.
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-pine-700">
                      <Icon name="lock" className="w-3.5 h-3.5" /> Secure checkout via ClickBank
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-bold text-ink-soft">
            {["Simple & realistic", "Designed for busy adults", "Patterns over perfection", "Practical tools"].map((w) => (
              <span key={w} className="flex items-center gap-2">
                <Flower className="w-3.5 h-3.5 text-coral-500" /> {w}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function OfferSections() {
  return (
    <>
      <ModulesSection />
      <BonusesSection />
      <GuaranteeBand />
      <PriceSection />
    </>
  );
}
