import { useState } from "react";
import { POLAROIDS, REVIEWS } from "../lib/data";
import { Flower, Kicker, Reveal, Star } from "./ui";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Craving Code™",
  description:
    "A 30-day digital system for understanding everyday cravings and building healthier eating habits without extreme diets.",
  brand: { "@type": "Brand", name: "RESET LIFE HABIT™" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1284", bestRating: "5" },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.quote,
  })),
};

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-butter-500" role="img" aria-label="Rated 5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4.5 h-4.5" />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [helpful, setHelpful] = useState<Record<number, boolean>>({});

  return (
    <section id="reviews" className="relative bg-paper py-24 sm:py-32 overflow-hidden scroll-mt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-32 w-96 h-96 rounded-full bg-coral-50 blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-pine-50 blur-3xl" />
        <p className="ghost-word absolute top-8 left-1/2 -translate-x-1/2 font-display italic font-black text-[15vw] leading-none whitespace-nowrap">
          loved
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <Kicker tone="coral" className="justify-center">From the community</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-ink">
              Real The Craving Code™ Users.
              <br />
              Real <span className="squiggle italic font-medium">life-changing</span> moments.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2.5">
              <span className="font-display font-black text-3xl text-pine-800">4.8/5</span>
              <Stars />
            </span>
            <span className="hidden sm:block w-px h-8 bg-line" aria-hidden="true" />
            <p className="text-sm font-semibold text-ink-soft">
              Based on <strong className="text-ink">1,284 verified purchases</strong> · Digital product via ClickBank
            </p>
            <span className="hidden sm:block w-px h-8 bg-line" aria-hidden="true" />
            <p className="text-sm font-semibold text-pine-700">Backed by the 60-day guarantee</p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {POLAROIDS.map((p, i) => (
            <Reveal key={p.caption} delay={i * 110} dir={i % 2 ? "right" : "left"}>
              <figure className="polaroid relative rounded-sm" style={{ transform: `rotate(${p.tilt}deg)` }}>
                <span
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 ${p.tape} rotate-[-4deg] rounded-[2px] opacity-90 shadow-sm`}
                  aria-hidden="true"
                />
                <div className="overflow-hidden bg-mist">
                  <img
                    src={p.img}
                    alt={`A happy customer holding The Craving Code — ${p.caption}`}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="pt-3 text-center font-display italic text-sm text-ink-soft">{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 columns-1 md:columns-2 gap-7">
          {REVIEWS.map((r, i) => (
            <Reveal key={`${r.name}-${i}`} delay={(i % 2) * 120} className="break-inside-avoid mb-7">
              <article className={`${r.bg} rounded-2xl border border-line p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift`}>
                <div className="flex items-center gap-4">
                  <img
                    src={r.avatar}
                    alt={`${r.name} — verified customer`}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-paper shadow-card"
                    style={{ objectPosition: "50% 14%" }}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-bold text-lg leading-snug text-ink">
                      {r.name} is enjoying {r.benefit}…
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2.5">
                      <Stars />
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pine-700 bg-pine-50 border border-pine-200 rounded-full px-2.5 py-0.5">
                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4.5 12.5 9.5 17.5 19.5 7" />
                        </svg>
                        Verified Purchase
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 relative text-ink-soft leading-relaxed text-[1.02rem]">
                  <span className="absolute -top-3 -left-1 font-display italic font-black text-5xl text-coral-500/25 select-none" aria-hidden="true">
                    “
                  </span>
                  {r.quote}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-ink">
                    {r.name} <span className="text-ink-soft font-medium">— {r.location}</span>
                  </p>
                  <button
                    onClick={() => setHelpful((h) => ({ ...h, [i]: !h[i] }))}
                    aria-pressed={!!helpful[i]}
                    className={`inline-flex items-center gap-2 text-xs font-bold rounded-full border px-3.5 py-1.5 transition-all duration-300 cursor-pointer active:scale-95 ${
                      helpful[i]
                        ? "bg-coral-500 border-coral-500 text-paper"
                        : "bg-paper border-line text-ink-soft hover:border-coral-400 hover:text-coral-600"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 10v11M7 21h10.5a2 2 0 0 0 2-1.6l1.4-7A2 2 0 0 0 18.9 10H13V4.5A2.5 2.5 0 0 0 10.5 2 1 1 0 0 0 9.6 2.6L7 10" />
                    </svg>
                    Helpful ({r.helpful + (helpful[i] ? 1 : 0)})
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-14 text-center max-w-2xl mx-auto">
            <p className="flex items-center justify-center gap-2.5 font-display italic text-2xl text-pine-700">
              <Flower className="w-4 h-4 text-coral-500" />
              Awareness first. Perfection never.
              <Flower className="w-4 h-4 text-coral-500" />
            </p>
            <p className="mt-4 text-xs text-ink-soft leading-relaxed">
              Reviews reflect individual experiences with the program. Individual needs and experiences vary, and no
              specific health, weight, or other outcome is guaranteed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
