import { useState } from "react";
import BuyNow from "./components/BuyNow";
import ClosingSections, { LegalModal, SiteFooter } from "./components/Closing";
import HeroSection from "./components/Hero";
import MethodSections from "./components/Method";
import OfferSections from "./components/Offer";
import Reviews from "./components/Reviews";
import StorySections from "./components/Story";
import { useRevealScope } from "./lib/hooks";

export default function App() {
  const rootRef = useRevealScope<HTMLDivElement>();
  const [legal, setLegal] = useState<string | null>(null);

  return (
    <div ref={rootRef} className="grain min-h-screen bg-paper text-ink font-body antialiased">
      <HeroSection />
      <main>
        <StorySections />
        <MethodSections />
        <OfferSections />
        <Reviews />
        <BuyNow />
        <ClosingSections />
      </main>
      <SiteFooter onOpenLegal={setLegal} />
      <LegalModal pageKey={legal} onClose={() => setLegal(null)} />
    </div>
  );
}
