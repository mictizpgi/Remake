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
  h1: "Short Kaizen events with the people who do the work cut assembly time at a wastewater equipment maker and changed the mindset on the floor.",
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
    approach: "Castings are now fully painted in one pass and staged where assembly uses them, replenished by a Kanban signal. In seal assembly, we replaced batch assembly with a compact cell and gravity-flow racks fed by Kanban.",
  },
  facts: [
    ["Client", "Wastewater equipment manufacturer"],
    ["Events", "Kaizen 1: Painted parts Kanban · Kaizen 2: Seal assembly cell"],
    ["Team", "Cross-functional: assembly, paint, stockroom, engineering, operations"],
    ["Methods", "Value stream mapping · Kanban · One-piece flow · Standard work"],
    ["Timeline", "Two 4-day events"],
  ],
  sections: [
    {
      title: "Grinders went back to paint after assembly, and every coat meant a night of drying",
      main: [
        { type: "text", html: "Cast parts were painted on the <b>inside only</b>. The assembled grinder went back for its outside coat, some a third time after the drive was installed." },
        {
          type: "list",
          items: [
            "Every coat meant at least one night of drying, sometimes three",
            "Parts and grinders traveled 1,480 feet, about a quarter mile",
            "Moving heavy grinders was one of the riskiest jobs in the plant",
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "We painted parts once and built seals one at a time",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we changed"],
          rows: [
            { a: "Grinders went back to paint, some a third time", bLead: "Painted parts Kanban", b: "Castings fully painted in one pass, staged at point of use" },
            { a: "Seals built in batches of 100; half-finished seals sat out, grease exposed", bLead: "One-piece flow seal cell", b: "Compact cell with gravity-flow racks fed by Kanban" },
            { a: "Operator waited over a minute per seal on the press pedal", bLead: "A smarter press", b: "Basic automation lets the operator keep assembling while it cycles" },
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
}

export default study
