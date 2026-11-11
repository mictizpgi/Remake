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
  audience: "health system finance leaders",
  industry: ["Built on Smartsheet", "Position control"],
  h1: "A Smartsheet workflow let a health system review every position request, and fast-track the clear ones.",
  reasons: [
    { icon: "check", lead: "Fast track", text: "for clear cases, approved in a single motion unless someone pulls a line" },
    { icon: "users", lead: "Judgment time", text: "the committee spends its time on the requests that need it" },
    { icon: "shield", lead: "Audit trail", text: "built into every decision, and each area sees exactly what it needs to fix" },
  ],
  headline: [
    { value: 100, suffix: "%", label: "of position requests reviewed", tag: "vs. spot checks before" },
    { value: 550, prefix: "~", label: "patient-care positions", tag: "in the first national submission" },
    { value: 1, label: "smart form routes each request", tag: "to the right review path" },
    { value: 6, label: "executive votes per request", tag: "tallied and logged automatically" },
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
      steps: ["Submit a smart form or bulk upload", "Two questions route it", "Triage flags what’s missing", "Committee votes live", "Approved positions submitted up"],
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
      title: "Simple backfills waited in line with complex requests, so each intake problem got its own fix",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we built"],
          rows: [
            { a: "Requests in different formats, often missing details", bLead: "Smart form", b: "Patient-care critical? Budgeted? Short form or full business case" },
            { a: "Some areas had backlogs of hundreds of positions", bLead: "Bulk upload", b: "Excel dropdowns for thousands of job codes; re-uploads update in place" },
            { a: "Budgeted backfills waited behind complex new requests", bLead: "Consent block", b: "Clear cases reach the committee together, not line by line" },
            { a: "Committee decisions lived in conversations and notes", bLead: "Live votes", b: "Executives vote on screen; cell history logs who and when" },
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Review went from spot checks on about 2% of requests to every one",
      main: [
        {
          type: "bars",
          caption: "Share of position requests reviewed",
          rows: [
            { label: "Before", display: "~2%", width: 2 },
            { label: "After", display: "Every request", width: 100, highlight: true },
          ],
        },
      ],
      side: [
        {
          type: "stats",
          items: [
            { n: "Fourth vote", tag: "decides", label: "the decision updates the moment it agrees" },
          ],
        },
      ],
    },
    {
      title: "The same pattern fits any approval that’s outgrown email",
      main: [
        { type: "list", items: ["Capital requests", "Change requests", "Contract approvals", "Any intake where some requests are routine, others need a closer look, and every decision needs a record"] },
      ],
    },
  ],
  closing: "Fast where it can be. Careful where it counts.",
}

export default study
