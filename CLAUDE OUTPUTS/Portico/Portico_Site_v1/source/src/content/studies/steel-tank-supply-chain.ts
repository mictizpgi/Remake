import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "steel-tank-supply-chain",
  seo: {
    title: "Manufacturing Supply Chain Case Study: From 22% On Time | Portico Group",
    description: "How a bolted steel tank manufacturer improved on-time delivery 50% and production capacity 30% without adding headcount or equipment, then laid out its next plant for growth.",
    image: "steel-tank-plant.jpg",
    keywords: ["Manufacturing", "Steel fabrication", "Supply chain", "On-time delivery", "Inventory control", "Material handling", "Plant layout", "Production capacity"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "Growth was outrunning the system.",
  },
  audience: "manufacturing operations leaders",
  industry: ["Manufacturing", "Steel fabrication"],
  h1: "Fixing how material moved got a steel tank maker shipping more jobs on time.",
  reasons: [
    { icon: "up", lead: "~30% more capacity", text: "projected from the new plant layout alone, separate from the supply chain gains" },
    { icon: "users", lead: "Put to work", text: "their own team took the plan and ran with it" },
    { icon: "check", lead: "Called back", text: "asked to design the layout for an expanding plant and support its setup" },
  ],
  headline: [
    { value: 50, prefix: "+", suffix: "%", label: "on-time delivery", tag: "vs. before" },
    { value: 30, prefix: "+", suffix: "%", label: "production capacity", tag: "projected from the supply chain plan" },
    { value: 0, label: "added headcount or capital equipment", tag: "same people, same equipment" },
    { value: 22, suffix: "%", label: "on-time shipments", tag: "before we started" },
  ],
  hero: {
    src: "steel-tank-plant.jpg",
    alt: "Organized steel fabrication plant with curved tank panels on labeled racks and a staged job ready for production",
  },
  approach: {
    thesis: "None of this was a people problem.",
    accent: "The system hadn’t grown with the business.",
    path: {
      caption: "From diagnosis to a second plant",
      steps: ["Walk the floor, yard and purchasing desk", "Design the plan and tools", "Client’s team implements", "Lay out the new plant", "Support the setup"],
    },
    challenge: "The business was growing fast. At the same time, it lost two of its key material handling people. Leadership asked three simple questions: what’s creating the challenges, why, and how do we fix them?",
    approach: "We walked the floor, the yard, and the purchasing desk, and talked with people at every level. The scope was clear from the start: we diagnose and design, and their team owns the execution. So every recommendation came with the tools to carry it out.",
  },
  facts: [
    ["Client", "Bolted steel tank manufacturer"],
    ["Phase 1", "Supply chain assessment and solutions"],
    ["Phase 2", "New facility layout and setup"],
    ["Focus", "Procurement · Material handling · Inventory control · Plant layout"],
    ["Timeline", "Two phases over about a year"],
  ],
  sections: [
    {
      title: "Lead times had stretched past the quote, and most jobs shipped late",
      main: [
        {
          type: "bars",
          caption: "Jobs shipped in the year before the work began, of 301: about one in five on time (client’s own shipping report)",
          rows: [
            { label: "Shipped on time", display: "65", width: 28, highlight: true },
            { label: "Late", display: "236", width: 100 },
          ],
        },
        {
          type: "stats",
          items: [{ n: "11+ weeks", tag: "quoted 8 to 10", label: "lead times had stretched past what was quoted" }],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The material was there, but nobody could find it",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we recommended"],
          rows: [
            { a: "Anyone could pull material, often from one job for another", bLead: "Material handlers move material", b: "One clear rule to protect inventory accuracy" },
            { a: "Counts lagged, so MRP planned purchases from bad numbers", bLead: "Nothing moves without a transaction", b: "System matches what is really on the shelf" },
            { a: "Unlabeled, mixed locations; raw material and WIP scattered", bLead: "Labeled locations and better racks", b: "A home for every part, large or small" },
            { a: "No staging area; the floor scrambled the week a job was due", bLead: "Stage next week’s jobs this week", b: "Material gathered ahead, so production stops chasing parts" },
            { a: "Excess and obsolete stock taking up valuable space", bLead: "Clean up and communicate", b: "Excess-stock policy, timely cycle counts, a daily huddle" },
          ],
        },
        { type: "text", html: "One overseas supplier also held up <b>hardware</b> for production." },
      ],
    },
    {
      title: "The Houston-area plant was laid out around how the work flows",
      main: [
        {
          type: "list",
          items: ["Planned around traffic flow", "Short distances between steps", "Room for future equipment"],
        },
        { type: "text", html: "Results are <b>projections</b> from our analysis and execution plans, confirmed with the client after their team implemented them." },
      ],
      side: [{ type: "quote", text: "We didn’t need to stay to make it stick." }],
    },
  ],
  closing: "The capacity was already in the building. We helped them find it.",
  ctaQuestion: "Is growth outrunning your system?",
}

export default study
