import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "hts-repair-work-app",
  seo: {
    title: "Medical Equipment Repair Case Study: One App, Pickup to Invoice | Portico Group",
    description: "How Portico built a Smartsheet Work App that follows every home medical equipment repair from driver pickup to invoice, and engineered out about 95 million formula references along the way.",
    image: "hts-repair-shop.jpg",
    keywords: [
      "Built on Smartsheet",
      "Home medical equipment repair",
      "Smartsheet Work App",
      "Repair ticket tracking",
      "Oxygen concentrator repair",
      "Smartsheet formula performance",
      "Service order",
      "Field service",
    ],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "One app, from pickup to invoice.",
  },
  audience: "repair and field service operations leaders",
  industry: ["Built on Smartsheet", "Home medical equipment repair"],
  h1: "A repair shop running on legacy software, stickers and spreadsheets is moving to one Smartsheet app that follows every unit from pickup to invoice.",
  reasons: [
    { icon: "check", lead: "One smart form", text: "“report a problem” branches based on the answers, instead of forcing every field" },
    { icon: "users", lead: "Same ticket details", text: "for technicians and the office, so they can talk about the same thing" },
    { icon: "layers", lead: "Parts at the part level", text: "so the team knows exactly what a unit is waiting on" },
  ],
  headline: [
    { value: 1, label: "Work App", tag: "from pickup to invoice" },
    { value: 95, prefix: "~", suffix: "M", label: "formula references engineered out", tag: "to keep it fast" },
    { value: 10, suffix: "-day", label: "turnaround SLA", tag: "tracked from the day a unit arrives" },
    { value: 4, label: "roles in one system", tag: "drivers, office, technicians, billing" },
  ],
  hero: {
    src: "hts-repair-shop.jpg",
    alt: "Organized medical equipment repair shop with concentrators on benches and a tablet showing a workflow board",
  },
  approach: {
    thesis: "We built it with the team,",
    accent: "not for them.",
    path: {
      caption: "Every unit, from the driver’s pickup to the final invoice",
      steps: ["Pickup", "Receive", "Repair", "Commit & ship", "Invoice"],
    },
    challenge: "The company was running its shop on legacy software, printed stickers, and a pile of spreadsheets. Every repaired unit passes through many hands: picked up from a customer, received, repaired, tested, packed, shipped, and billed.",
    approach: "We built a Smartsheet Work App that follows every unit from the driver’s pickup to the final invoice, with the people who do the work at the table the whole way: live tests with the office, working sessions with their lead, and decisions made by the people who run the shop every day.",
  },
  facts: [
    ["Client", "Home medical equipment repair company"],
    ["Equipment", "Oxygen concentrators"],
    ["Platform", "Smartsheet Work App · Forms · Automations · Reports · PDF output"],
    ["Users", "Drivers · Office · Technicians · Logistics · Billing"],
    ["Status", "Built and in the final stage of deployment; rollout timing set by the client"],
  ],
  sections: [
    {
      title: "Every unit had five places to look, and status was set by hand",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we built"],
          rows: [
            { a: "Office bounced between RA tracker, ticket tracker, repair log and printouts", bLead: "Office Portal", b: "one landing page with forms, reports and help" },
            { a: "Status set by hand, easily out of step with reality", bLead: "Checkboxes, not dropdowns", b: "checking “Release to Service” sets Status: In Service" },
            { a: "No clear view of where a unit was, or for how long", bLead: "Role-based reports", b: "technicians see their tickets; the office sees what’s ready to commit" },
            { a: "Billing rebuilt the repair story from several sources", bLead: "PDF service order", b: "each ticket becomes one, ready for billing" },
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Moving the heaviest lookups into a small helper sheet kept the tracker fast",
      main: [
        {
          type: "bars",
          caption: "Formula references, two heaviest columns",
          rows: [
            { label: "Before", display: "112.5M", width: 100 },
            { label: "After", display: "17.5M", width: 15.6, highlight: true },
          ],
        },
        { type: "text", html: "The formulas were scanning thousands of rows for every cell, heading into Smartsheet’s reference limits. Now the tracker checks a short list, with <b>the same results on screen</b>." },
      ],
    },
    {
      title: "The same pattern fits any shop that tracks tickets and assets",
      main: [
        {
          type: "list",
          items: [
            "Field service",
            "Equipment repair",
            "Medical equipment",
            "Any operation following a physical item and its paperwork from intake to invoice",
            "Especially one that has outgrown spreadsheets",
          ],
        },
      ],
    },
  ],
  closing: "A system only works if people choose to use it.",
}

export default study
