import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "position-control-workflow",
  seo: {
    title: "Position Control Case Study: Every Position, Reviewed | Portico Group",
    description: "How a Smartsheet position control workflow let a health system review every new and replacement position request, fast-track the clear ones, and record every committee vote automatically.",
    image: "rpco-committee-room.jpg",
    keywords: ["Built on Smartsheet", "Position control", "Smartsheet workflow", "Position requests", "Approval workflow", "Health system finance", "Committee voting", "Data Shuttle"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "Every position reviewed. The clear ones, fast.",
  },
  audience: "finance and HR leaders",
  industry: ["Built on Smartsheet", "Position control"],
  h1: "Every position request now gets reviewed, and the clear ones move fast.",
  reasons: [
    { icon: "check", lead: "Own rows only", text: "each submitting area sees just its flagged rows and exactly what to fix" },
    { icon: "users", lead: "Judgment time", text: "the committee spends its time on the requests that need it" },
    { icon: "shield", lead: "Audit trail", text: "built into every decision" },
  ],
  headline: [
    { value: 100, suffix: "%", label: "of position requests reviewed", tag: "up from about 2%" },
    { value: 550, prefix: "~", label: "patient-care positions", tag: "in the first national submission" },
    { value: 1, label: "smart form routes each request", tag: "to the right review path" },
    { value: 6, label: "executive votes per request", tag: "tallied, and logged in cell history" },
  ],
  hero: {
    src: "rpco-committee-room.jpg",
    alt: "Empty executive meeting room with a wall display showing an abstract review and voting grid",
  },
  approach: {
    thesis: "Reviewing every request doesn’t have to mean slowing every request down.",
    accent: "The trick is knowing which ones need a conversation.",
    path: {
      caption: "One path in. The right path through.",
      steps: ["Submit a form or bulk upload", "Fast track or full review", "Triage flags what’s missing", "Committee votes live", "Approved positions submitted up"],
    },
    challenge: "The region decided every new and replacement position would go through review, not just a small share. Overnight, a side task became a full workstream, carried by a small team on top of their day jobs.",
    approach: "We built the Smartsheet workflow that made that possible: smart intake, a fast track for the clear cases, and committee votes that record themselves. Errors go back to the source: one column spells out everything wrong with a request, and the fix belongs to the submitter, not the review team.",
  },
  facts: [
    ["Context", "Built by Portico as a subcontractor. Later stages supported by our principal in an internal role"],
    ["Organization", "Large integrated health system, regional finance"],
    ["Platform", "Smartsheet forms · Data Shuttle · Reports · Dashboards · Dynamic views"],
    ["Users", "Hiring leaders · Area finance · Triage team · Executive committee"],
  ],
  sections: [
    {
      title: "Every intake problem the small team faced got its own fix",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we built"],
          rows: [
            { a: "Requests in different formats, often missing details", bLead: "Smart form", b: "Patient-care critical? Budgeted? Short form or full business case" },
            { a: "Some areas had backlogs of hundreds of positions", bLead: "Bulk upload", b: "Excel dropdowns for thousands of job codes; re-uploads update in place" },
            { a: "Budgeted backfills waited behind complex new requests", bLead: "Consent block", b: "One motion approves them all unless someone pulls a line" },
            { a: "Committee decisions lived in conversations and notes", bLead: "Live votes", b: "The decision updates the moment the fourth vote agrees" },
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The same pattern fits any approval that’s outgrown email",
      main: [
        { type: "list", items: ["Capital requests", "Change requests", "Contract approvals", "Any intake where some requests are routine, others need a closer look, and every decision needs a record"] },
      ],
    },
  ],
  closing: "Fast where it can be. Careful where it counts.",
  ctaQuestion: "Are your approvals stuck in inboxes?",
}

export default study
