import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "clinic-medication-kanban",
  seo: {
    title: "Clinic Medication Management Case Study: $25M From a Medicine Closet | Portico Group",
    description: "How simple, non-technical Kanban pulls in clinic medication closets cut medication waste 8%+ and saved $25M a year across a regional network of clinics.",
    image: "clinic-medication-kanban.jpg",
    keywords: ["Medication management", "Medication waste", "Kanban", "Clinically administered medications", "Par levels", "Toyota Production System"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "$25M, found in the medicine closet.",
  },
  audience: "clinic and supply operations leaders",
  industry: ["Healthcare", "Medication management"],
  h1: "Simple Kanban pulls stopped good medication going to waste across clinics.",
  reasons: [
    { icon: "down", lead: "Stockpiling stopped", text: "once people trusted the supply, so fewer vials were wasted" },
    { icon: "chart", lead: "Measured, not guessed", text: "savings identified up front from sourcing and procurement reports, then confirmed through usage tracking after rollout" },
    { icon: "users", lead: "Built together", text: "with Pharmacy, Administration, Physicians, and Nursing, so the practice belonged to them" },
  ],
  headline: [
    { value: 25, prefix: "$", suffix: "M", label: "annualized savings", tag: "identified and achieved" },
    { value: 8, suffix: "%+", label: "less medication waste", tag: "across the region" },
    { value: 6, label: "specialties", tag: "from Oncology to Pediatrics" },
    { value: 0, label: "new technology required", tag: "non-technical on purpose" },
  ],
  hero: {
    src: "clinic-medication-kanban.jpg",
    alt: "Organized clinic medication room with a two-bin Kanban shelf of medication vials",
  },
  approach: {
    thesis: "The fix wasn’t a new system.",
    accent: "It was trust.",
    path: {
      caption: "How a pull keeps a medication closet stocked",
      steps: ["Staff draw from the front of the bin", "The card shows at the reorder line", "Pharmacy restocks the bin to par", "Supply is always there"],
    },
    challenge: "Across a regional network of clinics, good medication was going to waste every day. Not because of bad people, but because of habits nobody had questioned. At the scale of a whole region, that added up fast.",
    approach: "If people knew the medication would always be there, they’d stop holding it back. So, like the Toyota Production System, we used simple pull signals to replenish each closet based on set par levels. No software to learn: bins, cards, and clear par values that anyone could use on a busy clinic day.",
  },
  facts: [
    ["Context", "Principal’s experience, as lead consultant with a national consulting firm"],
    ["Organization", "Large integrated health system"],
    ["Scope", "Clinically administered medications (CAM) in clinic medication closets across the region"],
    ["Specialties", "Oncology, Pediatrics, Family Practice, Urgent Care, OB/Gyn, Internal Medicine"],
    ["Timeline", "About two years"],
  ],
  sections: [
    {
      title: "Two well-meaning habits were sending good medication to waste",
      main: [
        {
          type: "table",
          head: ["What staff did", "What happened to the medicine"],
          rows: [
            { a: "Opened a brand new vial for a partial dose", b: "The next physician wouldn’t draw from it, so the rest was wasted" },
            { a: "Held on to new vials just in case", b: "Many were never used and expired on the shelf" },
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Each bin carries a Kanban card with its location, par level and reorder point",
      main: [
        {
          type: "table",
          head: ["On the Kanban card", "What it says"],
          rows: [
            { a: "Item", b: "Medication vial" },
            { a: "Location", b: "Closet, Bin 4" },
            { a: "Par level", b: "Set per clinic" },
            { a: "Reorder at", b: "Card showing" },
          ],
        },
        { type: "text", html: "<b>Illustration</b>, simplified." },
      ],
    },
  ],
  closing: "Sometimes the answer is a better habit, not a bigger system.",
  ctaQuestion: "Where is your waste hiding?",
}

export default study
