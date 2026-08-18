import type { CSSProperties } from "react";
import { IMAGES } from "../lib/data";
import { Icon, Kicker, Reveal } from "./ui";

const REFUND_STEPS = [
  { n: "1", title: "Try it for 60 days", text: "Explore the core guide, recipes, tracker, and bonuses at your own pace." },
  { n: "2", title: "Not the right fit?", text: "Email our support team within 60 days of your order date and include your order number." },
  { n: "3", title: "Refund processed", text: "Your refund is issued in accordance with ClickBank's standard refund policy." },
];

const PLAIN_WORDS = [
  "Full refund of the purchase price when requested within 60 days of the order date.",
  "Digital product — instant access after purchase. Nothing physical is shipped.",
  "Refunds are handled by ClickBank in accordance with its refund policy. Bank processing times may vary.",
  "The Craving Code™ is an educational habit guide. No specific health, weight, or other outcome is promised.",
];

function Seal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid place-items-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 140 140" className="seal-spin absolute inset-0 w-full h-full text-pine-800">
        <defs>
          <path id="gsealcirc" d="M70 70 m -52 0 a 52 52 0 1 1 104 0 a 52 52 0 1 1 -104 0" />
        </defs>
        <text fontSize="10.5" letterSpacing="2.2" fill="currentColor" fontWeight="700" fontFamily="Instrument Sans, sans-serif">
          <textPath href="#gsealcirc">60-DAY MONEY-BACK GUARANTEE · BUY WITH CONFIDENCE ·</textPath>
        </text>
      </svg>
      <div className="absolute inset-[19%] rounded-full border-2 border-dashed border-coral-500/60" />
      <div className="grid place-items-center w-[46%] aspect-square rounded-full bg-coral-500 text-paper shadow-card">
        <Icon name="shield" className="w-1/2 h-1/2" />
      </div>
    </div>
  );
}

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="relative bg-paper py-24 sm:py-32 overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-24 -left-32 w-[480px] h-[480px] rounded-full bg-pine-50 blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-butter-50 blur-3xl" />
        <div className="absolute top-10 right-[8%] w-64 h-64 rounded-full border-2 border-dashed border-pine-600/20" />
        <div className="absolute bottom-16 left-[4%] w-28 h-28 rounded-full border-2 border-dashed border-coral-500/25" />
        <p className="ghost-word absolute -bottom-6 left-1/2 -translate-x-1/2 font-display italic font-black text-[18vw] leading-none whitespace-nowrap">
          protected
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <Reveal dir="scale" className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 translate-x-6 translate-y-6 rounded-t-full rounded-b-[2.4rem] bg-butter-100" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-t-full rounded-b-[2.4rem] border-[6px] border-paper shadow-lift aspect-[4/5] bg-pine-100">
            <img
              src={IMAGES.guaranteeCalm}
              alt="A relaxed woman on the couch with a laptop, trying a digital program at her own pace with tea and a notebook"
              className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.05]"
              loading="lazy"
            />
          </div>

          <Seal className="absolute -top-8 -left-6 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 drop-shadow-xl" />

          <div
            className="floaty absolute -bottom-8 -right-2 sm:-right-8 w-48 sm:w-56 bg-paper rounded-2xl p-3 pb-4 shadow-lift"
            style={{ "--tilt": "3deg" } as CSSProperties}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={IMAGES.guaranteeSupport}
                alt="A friendly customer support agent with a headset, ready to help"
                className="w-full aspect-[5/4] object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-2.5 text-center text-xs font-bold text-ink">
              Real people, ready to help
              <span className="block text-[10px] font-semibold text-ink-soft">support@resetlifehabit.com</span>
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Kicker tone="pine">60-Day Money-Back Guarantee</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink">
              Try The Craving Code™ <span className="squiggle">with confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Your purchase is covered by our <strong className="text-ink font-semibold">60-day money-back guarantee</strong>.
              If you decide the program isn't right for you, simply follow the refund instructions provided with your
              purchase within 60 days.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-4 font-display italic text-2xl text-pine-700">
              No need to continue with something that isn't a good fit.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {REFUND_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={300 + i * 100}>
                <div className="group flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-pine-800 text-butter-300 font-display font-black shrink-0 transition-all duration-300 group-hover:bg-coral-500 group-hover:text-paper group-hover:scale-110">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mt-0.5">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={620}>
            <div className="mt-9 rounded-2xl border-2 border-dashed border-pine-600/30 bg-pine-50/60 p-6">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-pine-700">
                <Icon name="lock" className="w-4 h-4" /> In plain words
              </p>
              <ul className="mt-3.5 space-y-2.5">
                {PLAIN_WORDS.map((p) => (
                  <li key={p.slice(0, 20)} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                    <Icon name="check" className="w-4.5 h-4.5 text-pine-600 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
