import { useEffect, useState } from "react";
import {
  CHECKOUT_URL,
  DISCLAIMER_ASIS,
  DISCLAIMER_CLICKBANK,
  DISCLAIMER_FDA,
  DISCLAIMER_MAIN,
  FAQS,
  LEGAL_PAGES,
  PRICE,
  WHO_FOR,
  WHO_NOT_FOR,
  WHY_POINTS,
} from "../lib/data";
import { Flower, Icon, Kicker, Reveal } from "./ui";

/* ---------------- why + who ---------------- */

function WhyWhoSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-butter-50 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker tone="pine">Why people choose The Craving Code™</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink">
              Built for <span className="squiggle">real life,</span> not rule books.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {WHY_POINTS.map((w, i) => (
              <Reveal key={w} delay={200 + i * 100}>
                <div className="flex items-start gap-4 group">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-pine-800 text-paper shrink-0 transition-all duration-300 group-hover:bg-coral-500 group-hover:scale-110">
                    <Icon name="check" className="w-4.5 h-4.5" />
                  </span>
                  <p className="text-lg font-semibold text-ink leading-relaxed pt-0.5">{w}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-7 lg:pt-16">
          <Reveal dir="right" delay={150}>
            <div className="rounded-[1.6rem] border-2 border-pine-600/30 bg-pine-50 p-8 sm:p-9 relative overflow-hidden">
              <p className="absolute -top-5 -right-2 font-display italic font-black text-[6rem] text-pine-100 leading-none select-none" aria-hidden="true">✓</p>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-pine-900">Who this is for</h3>
              <ul className="mt-5 space-y-3.5">
                {WHO_FOR.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-ink font-medium leading-relaxed">
                    <Icon name="check" className="w-5 h-5 text-pine-700 shrink-0 mt-0.5" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal dir="right" delay={300}>
            <div className="rounded-[1.6rem] border-2 border-coral-500/30 bg-coral-50 p-8 sm:p-9 relative overflow-hidden">
              <p className="absolute -top-5 -right-2 font-display italic font-black text-[6rem] text-coral-100 leading-none select-none" aria-hidden="true">✗</p>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-coral-700">Who this is not for</h3>
              <ul className="mt-5 space-y-3.5">
                {WHO_NOT_FOR.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-ink font-medium leading-relaxed">
                    <Icon name="x" className="w-5 h-5 text-coral-600 shrink-0 mt-0.5" />
                    {w}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-dashed border-coral-500/30 text-sm text-ink-soft leading-relaxed">
                We'd rather be honest upfront: this is a practical habit system — not a miracle, and not a substitute
                for professional care.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative bg-mist py-24 sm:py-32 overflow-hidden scroll-mt-24">
      <p className="ghost-word absolute top-8 right-4 font-display italic font-black text-[15vw] leading-none pointer-events-none" aria-hidden="true">
        answers
      </p>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Kicker tone="coral" className="justify-center">Questions, answered</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink">
              Everything you're <span className="italic font-medium text-pine-700">wondering.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 80}>
                <div
                  className={`rounded-2xl border bg-paper transition-all duration-300 ${
                    isOpen ? "border-coral-500/60 shadow-card" : "border-line hover:border-pine-600/40 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-5 text-left px-7 py-5 cursor-pointer"
                  >
                    <span className="flex items-center gap-4">
                      <span className={`font-display italic font-bold text-lg ${isOpen ? "text-coral-600" : "text-pine-700"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-lg text-ink leading-snug">{f.q}</span>
                    </span>
                    <span
                      className={`grid place-items-center w-9 h-9 rounded-full shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-coral-500 text-paper rotate-45" : "bg-mist text-ink"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className={`acc-body ${isOpen ? "open" : ""}`}>
                    <div className="acc-inner">
                      <p className="px-7 pb-6 pl-[4.4rem] text-ink-soft leading-relaxed text-[1.05rem]">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="font-display italic text-2xl text-ink">
              Still deciding? The <span className="squiggle-butter">60-day guarantee</span> means you don't have to
              decide forever — just for today.
            </p>
            <a href="#offer" className="mt-6 inline-flex items-center gap-2 font-bold text-coral-600 hover:text-coral-700 transition-colors group">
              Back to the offer
              <Icon name="arrow" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- disclaimers ---------------- */

function DisclaimerSection() {
  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-line bg-mist/70 p-8 sm:p-10">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-soft">
              <Icon name="clipboard" className="w-4 h-4" /> Important disclaimer
            </p>
            <div className="mt-5 space-y-4 text-sm text-ink-soft leading-relaxed">
              <p className="font-semibold text-ink">{DISCLAIMER_MAIN}</p>
              <p className="italic">{DISCLAIMER_FDA}</p>
              <p>{DISCLAIMER_CLICKBANK}</p>
              <p>{DISCLAIMER_ASIS}</p>
              <p>
                For Product Support, please contact the seller.
                <br />
                For Order Support, please contact ClickBank.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- footer + legal modal ---------------- */

export function SiteFooter({ onOpenLegal }: { onOpenLegal: (key: string) => void }) {
  return (
    <footer className="relative bg-pine-950 text-paper pt-16 pb-10 overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-pine-900 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-paper/10">
          <div>
            <p className="font-display font-black text-2xl tracking-tight">
              Reset Life Habit<span className="align-super text-[10px] font-body font-bold">™</span>
            </p>
            <p className="mt-1 font-display italic text-butter-300">The Craving Code™</p>
            <p className="mt-3 text-sm text-paper/60 font-medium">Simple Science. Better Habits. Healthier Living.</p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
            {Object.entries(LEGAL_PAGES).map(([key, page]) => (
              <button
                key={key}
                onClick={() => onOpenLegal(key)}
                className="text-paper/75 hover:text-butter-300 transition-colors duration-300 cursor-pointer underline-offset-4 hover:underline"
              >
                {page.title}
              </button>
            ))}
            <a href="mailto:support@resetlifehabit.com" className="text-paper/75 hover:text-butter-300 transition-colors duration-300 underline-offset-4 hover:underline">
              Contact
            </a>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/50">
          <p>© 2026 RESET LIFE HABIT™. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Flower className="w-3.5 h-3.5 text-coral-400" />
            Less restriction · More awareness · Better routines
          </p>
        </div>
      </div>
    </footer>
  );
}

export function LegalModal({ pageKey, onClose }: { pageKey: string | null; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!pageKey) return null;
  const page = LEGAL_PAGES[pageKey];
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center p-5" role="dialog" aria-modal="true" aria-label={page.title}>
      <button className="absolute inset-0 bg-pine-950/70 backdrop-blur-sm cursor-default" onClick={onClose} aria-label="Close dialog" />
      <div className="panel-in relative w-full max-w-lg rounded-[1.6rem] bg-paper p-8 sm:p-10 shadow-lift">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display font-black text-3xl tracking-tight text-ink">{page.title}</h3>
          <button
            onClick={onClose}
            className="grid place-items-center w-10 h-10 rounded-full bg-mist hover:bg-coral-500 hover:text-paper transition-colors duration-300 cursor-pointer"
            aria-label="Close"
          >
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
          {page.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 pt-5 border-t border-dashed border-line text-xs text-ink-soft">
          Questions? Email{" "}
          <a href="mailto:support@resetlifehabit.com" className="font-bold text-coral-600 hover:underline">
            support@resetlifehabit.com
          </a>
        </p>
      </div>
    </div>
  );
}

/* ---------------- sticky CTA bar ---------------- */

function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let raf = 0;
    const fn = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offer = document.getElementById("offer");
        const footer = document.querySelector("footer");
        const y = window.scrollY;
        const offerVisible = offer ? offer.getBoundingClientRect().top < window.innerHeight * 0.8 : false;
        const footerNear = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
        setShow(y > 750 && !offerVisible && !footerNear);
      });
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 inset-x-4 sm:inset-x-0 sm:bottom-6 z-[70] transition-all duration-500 sm:max-w-3xl sm:mx-auto ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-4 rounded-full bg-ink text-paper pl-5 sm:pl-7 pr-2.5 py-2.5 shadow-lift border border-paper/10">
        <div className="min-w-0">
          <p className="font-display font-bold text-sm sm:text-base truncate">The Craving Code™</p>
          <p className="text-[11px] sm:text-xs text-paper/60 font-semibold truncate">
            30-day system + 4 bonuses · {PRICE} one-time
          </p>
        </div>
        <a
          href={CHECKOUT_URL}
          className="btn-sheen shrink-0 inline-flex items-center gap-2 rounded-full bg-coral-500 hover:bg-coral-600 px-5 sm:px-7 py-3 text-sm sm:text-base font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          Get it — {PRICE}
          <Icon name="arrow" className="w-4.5 h-4.5" />
        </a>
      </div>
    </div>
  );
}

export default function ClosingSections() {
  return (
    <>
      <WhyWhoSection />
      <FAQSection />
      <DisclaimerSection />
      <StickyBar />
    </>
  );
}
