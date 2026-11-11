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
  audience: "supply chain leaders",
  industry: ["Supply chain"],
  h1: "Contract manufacturers kept a skincare maker’s shelves stocked while its plant was fixed.",
  reasons: [
    { icon: "check", lead: "Decided with data", text: "cost structure, material availability, quality record, and proximity to forecast demand, to keep freight down" },
    { icon: "layers", lead: "Supply and demand planned together", text: "SAP and inventory management kept product flowing across the plant and its partners" },
    { icon: "chart", lead: "One clear picture", text: "a data model and dashboard, presented every week to the Board and senior executives" },
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
    thesis: "Sometimes the fastest way to fix a plant",
    accent: "is to stop asking it to do everything at once.",
    challenge: "A skincare manufacturer couldn’t keep its promises to customers while its own plant was being repaired. The home plant had to keep up with customer demand and fix its own operations at the same time. It couldn’t do both well.",
    approach: "The answer was to qualify products at third-party contract manufacturers. I led the supply chain team through qualifying each product at outside manufacturers. That would free up capacity so the plant could focus on getting healthy.",
  },
  facts: [
    ["Context", "Principal’s experience, as lead consultant before founding Portico"],
    ["Organization", "Fortune 100 skincare manufacturer"],
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
      title: "The dual-sourcing program moved part of the in-house portfolio out of the home plant",
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
  ],
  closing: "Relieve the pressure first. Then fix what’s underneath.",
  ctaQuestion: "Is your supply chain carrying too much on one plant?",
}

export default study
