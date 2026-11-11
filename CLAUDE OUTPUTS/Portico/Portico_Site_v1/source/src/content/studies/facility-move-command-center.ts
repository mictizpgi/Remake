import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "facility-move-command-center",
  seo: {
    title: "Facility Relocation Case Study: Move Without Missing a Beat | Portico Group",
    description: "How Portico ran a full warehouse and office relocation from a Smartsheet command center, finished on time, kept orders shipping, and gave the board a clear view of the move's economics.",
    image: "facility-move.jpg",
    keywords: [
      "Built on Smartsheet",
      "Facility relocation",
      "Warehouse relocation",
      "Office move",
      "Smartsheet command center",
      "RAID log",
      "Relocation budget",
      "Project dashboard",
    ],
    datePublished: "2026-11-02",
    dateModified: "2026-11-11",
    headline: "Move the whole operation. Keep the orders shipping.",
  },
  audience: "leaders planning a move or big change",
  industry: ["Built on Smartsheet", "Facility relocation"],
  h1: "One command center moved a warehouse and office on time, with orders still shipping.",
  reasons: [
    { icon: "truck", lead: "Orders kept shipping", text: "from the new building while the old one was emptied" },
    { icon: "money", lead: "A live budget", text: "every quote, bid and signed amount, with a low and high case, so the cash picture was always current" },
    { icon: "shield", lead: "One RAID log", text: "every risk, issue and decision logged with an owner and a date" },
  ],
  headline: [
    { value: 0, text: "On time", label: "old building handed back", tag: "on schedule" },
    { value: 40, prefix: "~", suffix: "%", label: "smaller footprint", tag: "sized to what the business needs" },
    { value: 890, prefix: "+$", suffix: "K", label: "net cash from the lease agreements", tag: "more than the move cost" },
    { value: 500, prefix: "~$", suffix: "K", label: "sprinkler upgrade avoided", tag: "by choosing the right building" },
  ],
  hero: {
    src: "shot-facility-move-command-center.jpg",
    alt: "Smartsheet dashboard showing days to handback, rack sign-off, critical path and overdue counts, progress gauges for three lanes, and a list of overdue and at-risk tasks",
  },
  approach: {
    thesis: "A move is a hundred small projects that all have to land in the same week.",
    accent: "The work is keeping them on one page.",
    path: {
      caption: "One command center for the whole move",
      steps: ["Plan", "Track", "Log", "Budget", "Decide"],
    },
    challenge: "The old building was about twice the size the business needed, with a lease that still had a year to run. A new, better building was available, with incentives that only existed if the company moved inside the landlord’s window. Staying was not free: waiting meant more rent on unused space, then a decision at market rates with none of the incentives. Orders had to keep going out, with only one short, planned pause, and leadership needed to know, every week, whether the move still made financial sense.",
    approach: "We ran the move from one Smartsheet command center, so nobody finds out about a problem on moving day. We also built the board view of the move’s economics from the same budget tracker, and racking, network, and offices came online in sequence, tracked day by day.",
  },
  facts: [
    ["Client", "National consumer wellness products company"],
    ["Scope", "Warehouse and office relocation, from lease to final inspection"],
    ["Platform", "Smartsheet · Dashboards · Reports · RAID log · Budget tracker"],
    ["Users", "CFO · Operations · Warehouse · IT · Vendors and contractors"],
    ["Status", "Complete"],
  ],
  sections: [
    {
      title: "The plan split the move into lanes, so each vendor’s work landed in one place",
      main: [
        {
          type: "table",
          head: ["What the move had to handle", "How the command center tracked it"],
          rows: [
            { a: "Racking down in one building, up and inspected in the other", bLead: "Warehouse lane", b: "rack inspection and release, then shipping restarts" },
            { a: "Power, network, servers and security live before shipping restarted", bLead: "Office and IT lane", b: "server power circuit, network, Wi-Fi and scanners" },
            { a: "Build-out, movers and storage each had their own email thread", bLead: "Three lanes", b: "building and lease, warehouse and product, office and IT" },
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The numbers that matter came first, and each week’s decisions sat on one page",
      main: [
        {
          type: "table",
          head: ["Top of the command center", "Sample week"],
          rows: [
            { a: "Days to handback", b: "4" },
            { a: "Days to rack sign-off", b: "9" },
            { a: "Open critical-path items", b: "6" },
            { a: "Past due", b: "0" },
          ],
        },
        { type: "text", html: "Each week, the CFO saw the <b>two or three</b> calls that needed an answer, with the <b>cost of waiting</b> spelled out, like the sample decisions here. Simplified illustration." },
      ],
      side: [
        {
          type: "list",
          items: [
            "Approve the construction contract once the price is confirmed",
            "Confirm temporary storage during build-out",
            "Drop exit repairs once the landlord confirms in writing",
          ],
        },
      ],
    },
    {
      title: "The same command center fits any project with too many vendors and a hard date",
      main: [
        {
          type: "list",
          items: [
            "Warehouse and plant relocations",
            "Office moves and new site openings",
            "Equipment installs",
            "Any operation that has to change underneath itself without stopping",
          ],
        },
      ],
    },
  ],
  closing: "One plan. One budget. One honest weekly view.",
  ctaQuestion: "Is a move or a big change coming up?",
}

export default study
