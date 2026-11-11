import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "wastewater-kaizen-program",
  seo: {
    title: "Manufacturing Kaizen Case Study: Two Kaizens, One Habit | Portico Group",
    description: "How two Kaizen events at a wastewater equipment manufacturer cut assembly labor 30%, seal cycle time 40%, and started a culture of continuous improvement.",
    image: "kaizen-plant.jpg",
    keywords: ["Manufacturing", "Process equipment", "Kaizen", "Continuous improvement", "Kanban", "One-piece flow", "Value stream mapping", "Standard work"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "Two Kaizens. One new habit.",
  },
  audience: "manufacturing operations leaders",
  industry: ["Manufacturing", "Process equipment"],
  h1: "Short Kaizen events with the floor team cut assembly time at an equipment maker.",
  reasons: [
    { icon: "layers", lead: "44% smaller", text: "seal cell area, and nearly all of the remaining time is value-added work" },
    { icon: "down", lead: "85% to 66%", text: "non-value-added time on the grinder line, as mapped in the value stream" },
    { icon: "users", lead: "Everyone trained", text: "stockroom, paint, assembly, QC, and shipping learned the new flow together" },
  ],
  headline: [
    { value: 30, prefix: "−", suffix: "%", label: "grinder assembly labor", tag: "per grinder" },
    { value: 33, prefix: "−", suffix: "%", label: "travel distance", tag: "for parts and grinders" },
    { value: 2, prefix: "1–", suffix: " days", label: "faster grinder turnaround", tag: "painting in one pass" },
    { value: 40, prefix: "−", suffix: "%", label: "seal assembly cycle time", tag: "per seal" },
  ],
  hero: {
    src: "kaizen-plant.jpg",
    alt: "Organized assembly cell with gravity-flow parts racks and painted machine housings staged at point of use",
  },
  approach: {
    thesis: "So we didn’t start with a big program.",
    accent: "We started with two focused Kaizen events, with the people who actually do the work.",
    challenge: "The company was “idea-rich and resource-poor.” Everyone knew where the waste was. Nobody had the bandwidth to fix it. Leadership wanted continuous improvement, but a few hard years, thin bandwidth, and few champions had kept it on the wish list.",
    approach: "Each event brought together the people who actually do the work: assembly, paint, stockroom, engineering, and operations. We mapped the value stream first, then changed the flow on the floor: castings painted fully in one pass and staged where assembly uses them, and batch seal assembly replaced with a compact cell and gravity-flow racks fed by Kanban. Basic automation on the hydraulic press freed the operator to keep assembling while it cycles.",
  },
  facts: [
    ["Client", "Wastewater equipment manufacturer"],
    ["Events", "Kaizen 1: Painted parts Kanban · Kaizen 2: Seal assembly cell"],
    ["Methods", "Value stream mapping · Kanban · One-piece flow · Standard work"],
    ["Timeline", "Two 4-day events"],
  ],
  sections: [
    {
      title: "Repainting kept grinders waiting, and moving around the plant",
      main: [
        {
          type: "list",
          items: [
            "Some grinders went back to paint a third time, after the drive was installed",
            "Every coat meant at least one night of drying, sometimes three",
            "Parts and grinders traveled 1,480 feet, about a quarter mile",
            "Moving heavy grinders was one of the riskiest jobs in the plant",
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The fixes took the waiting out of grinder and seal assembly",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we changed"],
          rows: [
            { a: "Castings painted inside only, so grinders went back to paint", bLead: "Painted parts Kanban", b: "paint once" },
            { a: "Seals built in batches of 100; half-finished seals sat out, grease exposed", bLead: "One-piece flow seal cell", b: "build one at a time" },
            { a: "Operator waited over a minute per seal on the press pedal", bLead: "A smarter press", b: "basic automation" },
          ],
        },
      ],
      side: [
        { type: "text", html: "<b>Standard work</b> set clear steps for sandblasting and painting, handling painted parts, capturing labor, and issuing material to work orders." },
      ],
    },
    {
      title: "Both Kaizens cut the time it takes to build",
      main: [
        {
          type: "bars",
          caption: "Grinder assembly labor, hours per grinder",
          rows: [
            { label: "Before", display: "9", width: 100 },
            { label: "After", display: "~6", width: 67, highlight: true },
          ],
        },
        {
          type: "bars",
          caption: "Seal cycle time, seconds per seal",
          rows: [
            { label: "Before", display: "138", width: 100 },
            { label: "After", display: "84", width: 61, highlight: true },
          ],
        },
      ],
      side: [
        { type: "quote", text: "The seal assemblers started the week wanting to keep things as they were, with little confidence the change would work. By the end, they were helping drive it, and believed in the new way." },
      ],
    },
  ],
  closing: "That’s the tipping point toward a Kaizen culture.",
  ctaQuestion: "Idea-rich and resource-poor?",
}

export default study
