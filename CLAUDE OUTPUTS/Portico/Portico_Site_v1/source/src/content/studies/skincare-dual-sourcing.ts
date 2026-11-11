import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "skincare-dual-sourcing",
  seo: {
    title: "Supply Chain Case Study: Dual Sourcing, 49% More Available | Portico Group",
    description: "How Michael Ortiz led a dual-sourcing program that qualified 110 products at contract manufacturers and improved product availability 49% for a Fortune 100 skincare manufacturer.",
    image: "dual-sourcing-line.jpg",
    keywords: ["Supply chain", "Dual sourcing", "Contract manufacturing", "Plant remediation", "Product availability", "Supply planning", "Skincare manufacturing"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "Take the pressure off. Then fix the plant.",
  },
  audience: "manufacturing supply chain leaders",
  industry: ["Supply chain"],
  h1: "Moving production to contract manufacturers kept a skincare maker’s shelves stocked while its own plant was fixed.",
  reasons: [
    { icon: "shield", lead: "Shelves stayed stocked", text: "while the home plant was being repaired" },
    { icon: "clock", lead: "Expedited", text: "remediation of the facility and its operations, thanks to the breathing room" },
    { icon: "users", lead: "Each product", text: "qualified at outside manufacturers by the supply chain team I led" },
  ],
  headline: [
    { value: 49, prefix: "+", suffix: "%", label: "product availability", tag: "improvement" },
    { value: 110, label: "products qualified", tag: "at contract manufacturers" },
    { value: 30, suffix: "M+", label: "units of production", tag: "taken off the home plant" },
    { value: 12, suffix: " mo", label: "to remediate the plant", tag: "expedited timeline" },
  ],
  hero: {
    src: "dual-sourcing-line.jpg",
    alt: "Clean personal care filling lines running side by side with unlabeled bottles",
  },
  approach: {
    thesis: "Take the pressure off.",
    accent: "Then fix the plant.",
    challenge: "A skincare manufacturer couldn’t keep its promises to customers while its own plant was being repaired. The home plant had to keep up with customer demand and fix its own operations at the same time. It couldn’t do both well.",
    approach: "I led the supply chain team that moved production to outside manufacturers, so the plant could get well without the shelves going empty. The answer was to qualify products at third-party contract manufacturers. That would free up capacity so the plant could focus on getting healthy.",
  },
  facts: [
    ["Context", "Principal’s experience, as lead consultant before founding Portico"],
    ["Organization", "Fortune 100 skincare manufacturer"],
    ["Role", "Led the supply chain team for the dual-sourcing initiative"],
    ["Tools", "SAP · Demand and supply planning · Board-level dashboard"],
    ["Timeline", "12-month plant remediation"],
  ],
  sections: [
    {
      title: "After a recall, service levels fell well below what the business normally ran",
      main: [
        {
          type: "bars",
          caption: "Service level",
          rows: [
            { label: "Normal", display: "80%+", width: 100 },
            { label: "Low point, after the recall", display: "~60%", width: 75, highlight: true },
          ],
        },
        { type: "text", html: "The recall had affected about <b>70%</b> of the company’s product. Market share and on-time deliveries were slipping, and every decision was under intense scrutiny." },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Part of the in-house portfolio moved to contract manufacturers so the plant could heal",
      main: [
        {
          type: "stack",
          caption: "The in-house product portfolio",
          series: [
            { key: "moved", label: "Qualified at contract manufacturers" },
            { key: "stayed", label: "Stayed at the home plant" },
          ],
          rows: [{ label: "Portfolio", moved: 30, stayed: 70 }],
          legendNote: "30%+",
        },
      ],
    },
    {
      title: "Each product went to the partner that fit on cost, materials, quality and location",
      main: [
        {
          type: "table",
          head: ["What we needed", "How we did it"],
          rows: [
            { a: "The right partner for each product", bLead: "Decide with data", b: "cost structure, material availability, quality record, demand proximity" },
            { a: "Product flowing across the plant and partners", bLead: "Plan together", b: "SAP, demand and supply planning, inventory management" },
            { a: "One clear picture for the Board", bLead: "Weekly dashboard", b: "a data model presented to the Board and senior executives" },
          ],
        },
      ],
      side: [{ type: "quote", text: "Sometimes the fastest way to fix a plant is to stop asking it to do everything at once." }],
    },
  ],
  closing: "Relieve the pressure first. Then fix what’s underneath.",
}

export default study
