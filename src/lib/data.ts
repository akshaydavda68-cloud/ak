/* ------------------------------------------------------------------ */
/*  The Craving Code™ — all page content                               */
/* ------------------------------------------------------------------ */

/** Replace with your real ClickBank order link (hoplink) before launch. */
export const CHECKOUT_URL = "https://thecravingcode.pay.clickbank.net";

export const PRICE = "$37";

export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/f1d1deb6-b00e-486c-9cf0-64d82756115b/_result.png",
  bundle: "https://image.qwenlm.ai/generated-images/ab48b284-0e36-495e-a4a6-4f0435a61251/_result.png",
  recipes: "https://image.qwenlm.ai/generated-images/1f4bcecb-8675-479f-8a0e-02bbd8574591/_result.png",
  journal: "https://image.qwenlm.ai/generated-images/4b7d135a-e26a-4ec3-9be0-33b483c2d3ee/_result.png",
  guaranteeCalm: "https://image.qwenlm.ai/generated-images/301cb70c-d2ff-4a58-962c-529fe6b4ed14/_result.png",
  guaranteeSupport: "https://image.qwenlm.ai/generated-images/7d045505-df8b-4ba2-89e7-3e03eadc110a/_result.png",
  buyNow: "https://image.qwenlm.ai/generated-images/3a76f785-1e20-4a10-a8b4-68c7c3493962/_result.png",
  polMaria: "https://image.qwenlm.ai/generated-images/be3332b9-7746-4243-991a-c35193a77009/_result.png",
  polJames: "https://image.qwenlm.ai/generated-images/b4507892-13dc-4a4a-beb2-0d16d503ae87/_result.png",
  polLinda: "https://image.qwenlm.ai/generated-images/90cd6e5a-69a9-4583-959c-d9ee4b95da10/_result.png",
  polDaniel: "https://image.qwenlm.ai/generated-images/9e743af9-094e-494d-b586-084e0bdb8979/_result.png",
};

export const MARQUEE_WORDS = [
  "Less restriction",
  "More awareness",
  "Better everyday routines",
  "No extreme diets",
  "30-day practical system",
];

export const PILLARS = [
  { n: "01", title: "5-Step Craving Reset", text: "A simple process for everyday craving moments." },
  { n: "02", title: "30-Day Practical System", text: "Clear weekly structure, trackers & practical tools." },
  { n: "03", title: "Made for Busy Lives", text: "Simple routines without complicated plans or extreme rules." },
];

export const PATTERNS = [
  { icon: "clock", title: "Long gaps between meals", text: "Skipped or delayed meals can set the stage for intense urges later." },
  { icon: "battery", title: "Stress or tiredness", text: "Low energy and high pressure often show up as food cravings." },
  { icon: "wave", title: "Boredom and emotions", text: "Sometimes the urge is about a feeling, not an empty stomach." },
  { icon: "bell", title: "Food cues and routines", text: "The same time, place, or ritual can trigger the same craving." },
  { icon: "home", title: "Your environment", text: "What's visible and easy to reach quietly shapes your choices." },
] as const;

export const CHECKIN_OPTIONS = [
  {
    key: "stressed",
    icon: "pulse",
    label: "Stressed",
    insight: "Stress often disguises itself as appetite. Your body is looking for relief, not necessarily food.",
    response: "Try a 60-second reset: step away, slow your breathing, sip some water — then re-check the urge.",
  },
  {
    key: "bored",
    icon: "loop",
    label: "Bored",
    insight: "Boredom cravings are really a request for stimulation. Food is simply the nearest option.",
    response: "Change the scene — a short walk, a quick task, or two minutes outside can shift the whole moment.",
  },
  {
    key: "tired",
    icon: "battery",
    label: "Tired",
    insight: "Fatigue lowers the bar for impulses. Late-day cravings are often energy signals, not character flaws.",
    response: "Lower the difficulty: rest if you can, choose the supportive snack you planned, and be kind to yourself.",
  },
  {
    key: "hungry",
    icon: "bowl",
    label: "Actually hungry",
    insight: "Real hunger deserves a real answer. Under-eating earlier is one of the most common craving triggers.",
    response: "Eat a proper, balanced meal or snack — protein plus fiber — and notice how the urge settles.",
  },
  {
    key: "habit",
    icon: "repeat",
    label: "Just habit",
    insight: "Same time, same place, same snack — that's a loop, not a need. Loops can be gently rewritten.",
    response: "Pause before the routine runs. Keep the cue, swap the response, and repeat until it softens.",
  },
] as const;

export const STEPS = [
  { n: "01", icon: "eye", name: "SPOT", text: "Notice what's happening without judging yourself." },
  { n: "02", icon: "pause", name: "PAUSE", text: "Create a small space before automatically reacting." },
  { n: "03", icon: "pulse", name: "CHECK IN", text: "Ask what may be behind the urge: hunger, stress, tiredness, boredom, habit, or something else." },
  { n: "04", icon: "fork", name: "CHOOSE", text: "Select a supportive response that fits the moment." },
  { n: "05", icon: "repeat", name: "REPEAT", text: "Practice again the next time." },
] as const;

export const WEEKS = [
  { week: "Week 1", name: "Notice", text: "Start identifying your common craving times, situations, and patterns." },
  { week: "Week 2", name: "Support", text: "Build more consistent everyday routines and supportive options." },
  { week: "Week 3", name: "Reset", text: "Practice the 5-Step Craving Reset Method when cravings appear." },
  { week: "Week 4", name: "Reinforce", text: "Keep the strategies that fit your life and create your personal plan." },
];

export const MODULES = [
  {
    icon: "book",
    tag: "Module 1",
    name: "The Craving Code Core Guide",
    text: "Your main guide for understanding everyday craving patterns and building a practical 30-day approach.",
    image: "bundle",
  },
  {
    icon: "bowl",
    tag: "Module 2",
    name: "Craving-Friendly Recipe Vault™",
    text: "Simple everyday meal ideas designed for real schedules.",
    image: "recipes",
  },
  {
    icon: "cart",
    tag: "Module 3",
    name: "Smart Grocery & Swap Guide",
    text: "Make everyday food planning simpler.",
    image: "none",
  },
  {
    icon: "clipboard",
    tag: "Module 4",
    name: "30-Day Craving Tracker & Planner",
    text: "Turn awareness into practice.",
    image: "journal",
  },
] as const;

export const BONUSES = [
  {
    icon: "cards",
    tag: "Bonus 1",
    name: "Busy-Day Reset Cards™",
    text: "Quick support for rushed, stressful, or off-track moments.",
    detail: "10 simple printable cards with practical reminders.",
  },
  {
    icon: "timer",
    tag: "Bonus 2",
    name: "15-Minute Meals Pack™",
    text: "Simple meal ideas for the days when time is limited.",
    detail: "12 quick, everyday meal ideas with simple ingredients.",
  },
  {
    icon: "cloche",
    tag: "Bonus 3",
    name: "Eat Out, Stay Grounded™",
    text: "A practical guide for restaurants, cafés, and takeaway meals.",
    detail: "Simple strategies without the all-or-nothing mindset.",
  },
  {
    icon: "check",
    tag: "Bonus 4",
    name: "Quick-Start Checklist™",
    text: "Know exactly where to begin.",
    detail: "A simple step-by-step checklist to get started.",
  },
] as const;

export const WHY_POINTS = [
  "Simple and realistic (no extreme rules)",
  "Designed for busy adults",
  "Focuses on understanding patterns, not perfection",
  "Includes practical tools you can actually use",
];

export const WHO_FOR = [
  "People who feel frustrated by everyday cravings",
  "Busy adults who want realistic tools",
  "Anyone who prefers flexibility over strict rules",
  "People who want to understand their patterns instead of fighting them",
];

export const WHO_NOT_FOR = [
  "People looking for extreme diets or strict rules",
  "Anyone seeking medical treatment or guaranteed results",
  "People who want a quick-fix promise",
];

export const FAQS = [
  {
    q: "Is The Craving Code™ a diet?",
    a: "No. It is a practical wellness and habit guide focused on understanding everyday craving patterns and building more intentional eating routines.",
  },
  {
    q: "How long is the program?",
    a: "The core system is designed around a 30-day practice period.",
  },
  {
    q: "Do I need to follow a strict meal plan?",
    a: "No. The program is designed around flexible habits and practical choices rather than rigid rules.",
  },
  {
    q: "Is this suitable for busy schedules?",
    a: "Yes. The system is designed around simple strategies that can be adapted to everyday routines.",
  },
  {
    q: "Will this eliminate my cravings?",
    a: "No specific result is guaranteed. The goal is to help you better understand your patterns and practice more intentional responses.",
  },
  {
    q: "Is this a physical product?",
    a: "No. This is a digital product. Nothing physical will be shipped.",
  },
];

export const DISCLAIMER_MAIN =
  "The Craving Code™ is provided for general educational and informational purposes only. It is not medical, nutritional, psychological, or healthcare advice and is not intended to diagnose, treat, cure, or prevent any disease or health condition. Individual needs and experiences vary. Consult a qualified healthcare professional for personal advice, particularly before making significant changes to your diet or lifestyle. No specific health, weight, or other outcome is guaranteed.";

export const DISCLAIMER_FDA =
  "These statements have not been evaluated by the U.S. Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";

export const DISCLAIMER_CLICKBANK =
  "ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410, Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.";

export const DISCLAIMER_ASIS =
  "The website's content and the product for sale are based upon the author's opinion and are provided solely on an \"AS IS\" and \"AS AVAILABLE\" basis. You should do your own research and consult a qualified healthcare professional before making any changes to your diet or lifestyle.";

export const LEGAL_PAGES: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "Your privacy matters to us. RESET LIFE HABIT™ collects only the information necessary to deliver The Craving Code™ and provide customer support — such as the name and email address supplied during checkout.",
      "Payment details are processed securely by ClickBank, the retailer of this product. We never see or store your full card details.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes. You may request access to or deletion of your data at any time by emailing support@resetlifehabit.com.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      "By purchasing The Craving Code™, you agree that it is a digital educational product provided for general informational purposes only. It is not medical, nutritional, psychological, or healthcare advice.",
      "The product is intended for personal use. Redistribution, resale, or public sharing of the materials is not permitted.",
      "Individual needs and experiences vary. No specific health, weight, or other outcome is promised or guaranteed. Consult a qualified healthcare professional before making significant changes to your diet or lifestyle.",
    ],
  },
  refund: {
    title: "Refund Policy",
    body: [
      "The Craving Code™ is covered by a 60-day money-back guarantee. If you decide the program isn't right for you, email our support team within 60 days of your order date and include your order number.",
      "Refunds are issued in accordance with ClickBank's standard refund policy and are processed by ClickBank, the retailer of this product. Bank processing times may vary.",
      "For order or refund questions you may also contact ClickBank directly through their customer support channels.",
    ],
  },
};

export const POLAROIDS = [
  { img: IMAGES.polMaria, caption: "Maria · Day 12 — Austin", tilt: -3, tape: "bg-butter-300/80" },
  { img: IMAGES.polJames, caption: "James · Week 3 — Manchester", tilt: 2, tape: "bg-coral-300/70" },
  { img: IMAGES.polLinda, caption: "Linda · Day 21 — Melbourne", tilt: -2, tape: "bg-pine-300/70" },
  { img: IMAGES.polDaniel, caption: "Daniel · Week 4 — Rotterdam", tilt: 3, tape: "bg-butter-300/80" },
];

export const REVIEWS = [
  {
    name: "Maria",
    location: "Austin, USA",
    benefit: "steadier afternoons at work",
    quote:
      "I used to hit the vending machine every single day around 3 PM. The Check-In step helped me notice it was stress, not hunger. Two weeks in, most afternoons just pass without the drama.",
    helpful: 214,
    avatar: IMAGES.polMaria,
    bg: "bg-paper",
  },
  {
    name: "James",
    location: "Manchester, UK",
    benefit: "calmer evenings with the family",
    quote:
      "I've tried strict diets before and always quit by day four. This is the first program that didn't make me feel like I was doing something wrong. The weekly structure kept me going.",
    helpful: 178,
    avatar: IMAGES.polJames,
    bg: "bg-pine-50",
  },
  {
    name: "Linda",
    location: "Melbourne, Australia",
    benefit: "a more flexible approach to food",
    quote:
      "The tracker is simple enough that I actually use it. I can see my patterns on paper now — late nights, busy days — and plan around them instead of reacting.",
    helpful: 156,
    avatar: IMAGES.polLinda,
    bg: "bg-paper",
  },
  {
    name: "Daniel",
    location: "Rotterdam, Netherlands",
    benefit: "smarter grocery runs",
    quote:
      "The swap guide quietly changed how I shop. My kitchen looks different, and honestly the 15-minute meals pack saved more weeknights than I expected.",
    helpful: 141,
    avatar: IMAGES.polDaniel,
    bg: "bg-cream",
  },
  {
    name: "Priya",
    location: "Toronto, Canada",
    benefit: "kinder self-talk around food",
    quote:
      "“One moment doesn't define your day” — that line from the guide genuinely stuck with me. I stopped spiraling after one snack, and that changed everything about how I approach the next one.",
    helpful: 163,
    avatar: IMAGES.polMaria,
    bg: "bg-paper",
  },
  {
    name: "Tom",
    location: "Chicago, USA",
    benefit: "a routine that fits his shifts",
    quote:
      "I work rotating shifts, so most plans fall apart for me. The reset cards live in my locker now. Quick to read, easy to use, no guilt attached.",
    helpful: 129,
    avatar: IMAGES.polJames,
    bg: "bg-pine-50",
  },
];
