import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "transformer-lean-us-mexico",
  seo: {
    title: "Lean Manufacturing Case Study: Lean Across the Border | Portico Group",
    description: "How a $40M transformer manufacturer cut lead time 45% and raised labor efficiency 30% in 10 weeks, with one language of Lean across its US and Mexico teams.",
    image: "ef2fd7ab.jpg",
    keywords: ["Manufacturing", "Lean transformation", "Lean manufacturing", "Lean training", "One-piece flow", "Lead time reduction", "Labor efficiency", "Maquiladora"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "One language of Lean, on both sides of the border.",
  },
  audience: "manufacturing operations leaders",
  industry: ["Manufacturing", "Lean transformation"],
  h1: "Bilingual Lean training got a Mexico transformer plant running on one-piece flow.",
  reasons: [
    { icon: "users", lead: "Both sides trained", text: "one program, in each team’s own language" },
    { icon: "layers", lead: "No more piles", text: "work now flows one piece at a time" },
    { icon: "down", lead: "Leaner floor", text: "waste cleared out before the first cell went in" },
  ],
  headline: [
    { value: 45, prefix: "−", suffix: "%", label: "lead time", tag: "from the first cell" },
    { value: 30, prefix: "+", suffix: "%", label: "labor efficiency", tag: "from the first cell" },
    { value: 10, suffix: " wks", label: "kickoff to results", tag: "start to finish" },
    { value: 4, label: "more lean cells", tag: "built by the team on its own, for other product families" },
  ],
  hero: {
    src: "ef2fd7ab.jpg",
    alt: "Factory aisle with racks of staged parts",
  },
  approach: {
    thesis: "Training both sides turned out to matter more than anything else.",
    accent: "Both sides of the house started speaking the same language of Lean.",
    path: {
      caption: "From a slow season to a plant running on one-piece flow",
      steps: ["Train in Spanish and English", "Assess the floor", "Lean out the facility", "Build the first cell", "Team builds more on its own"],
    },
    challenge: "Revenue had dipped, mostly with the seasons. The owner saw it as the right moment to invest in fixing the operational issues in the Mexico plant. Leadership and support teams sat in Southern California. The builders were across the border. Two teams, two languages, one operation.",
    approach: "We built a Lean training program and ran it twice: in Spanish for the team in Mexico, and in English for leadership and support in California. In the plant, we assessed the floor quickly and Leaned out the facility, removing waste as we went. Then we designed and built a one-piece flow lean cell, so each unit moved from step to step without waiting in a pile.",
  },
  facts: [
    ["Client", "Custom transformer manufacturer"],
    ["Size", "$40M revenue"],
    ["Locations", "Southern California HQ · maquiladora plant in Mexico"],
    ["Services", "Lean training · One-piece flow · Kanban"],
  ],
  sections: [
    {
      title: "Everyone was busy, but the floor wasn’t set up for the work to flow",
      main: [
        {
          type: "list",
          items: [
            "On-time delivery was poor, order after order",
            "Waste showed up at almost every step",
            "Inventory kept piling up in the warehouse",
            "Builders spent a lot of their day walking the plant to find what they needed",
          ],
        },
        { type: "text", html: "None of this was a people problem. It was a <b>system problem</b>." },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The first cell cut lead time and raised labor efficiency right away",
      main: [
        {
          type: "bars",
          caption: "Lead time, indexed to the starting point",
          rows: [
            { label: "Before", display: "100", width: 100 },
            { label: "After", display: "55", width: 55, highlight: true },
          ],
        },
        {
          type: "bars",
          caption: "Labor efficiency, indexed to the starting point",
          rows: [
            { label: "Before", display: "100", width: 77 },
            { label: "After", display: "130", width: 100, highlight: true },
          ],
        },
      ],
    },
  ],
  closing: "That’s what it looks like when it sticks.",
  ctaQuestion: "Is your floor set up for the work to flow?",
}

export default study
