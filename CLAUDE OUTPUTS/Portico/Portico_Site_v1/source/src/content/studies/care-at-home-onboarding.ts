import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "care-at-home-onboarding",
  seo: {
    title: "Healthcare Onboarding Automation Case Study: No New Hire Left Behind | Portico Group",
    description: "How Michael Ortiz built a Smartsheet onboarding engine that pulls new hires in automatically, keeps a person in the loop, and sends every orientation invitation on time.",
    image: "cah-orientation.jpg",
    keywords: ["Built on Smartsheet", "Smartsheet", "New hire onboarding", "Onboarding automation", "Orientation invitations", "Home health", "Data Shuttle"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "No new hire left behind.",
  },
  audience: "healthcare HR and onboarding leaders",
  industry: ["Home health", "Built on Smartsheet"],
  h1: "A Smartsheet onboarding engine finds every new hire automatically, and a person approves each one before the invitation goes out.",
  reasons: [
    { icon: "check", lead: "The right session", text: "every time: each welcome email is matched to the next scheduled orientation" },
    { icon: "chart", lead: "A dashboard", text: "shows confirmed hires and candidates still in the pipeline, side by side" },
    { icon: "shield", lead: "No second source of truth", text: "clinical checklists stay in the training platform, not copied into Smartsheet" },
  ],
  headline: [
    { value: 0, text: "Daily", label: "pending-hire feed", tag: "pulled in automatically" },
    { value: 1, label: "human approval", tag: "before any email goes out" },
    { value: 2, label: "automations", tag: "the hire’s invite, then the manager’s notice" },
    { value: 0, label: "hires dropped", tag: "when their status changes" },
  ],
  hero: {
    src: "cah-orientation.jpg",
    alt: "Bright orientation room set with welcome folders, name badges, and a laptop showing an onboarding pipeline",
  },
  approach: {
    thesis: "The best automation still leaves the judgment with a person.",
    accent: "That person never has to go looking for the work.",
    path: {
      caption: "How a new hire moves through the onboarding engine",
      steps: ["Pending hires sync in", "Filtered to this division", "A person approves", "Welcome email to the hire", "Manager copied automatically"],
    },
    challenge: "A home health division was inviting new hires to orientation by hand, from a separate tracker. Recruiting data lived in another system, so onboarding was always a step behind. People slipped through the gap between recruiting and day one.",
    approach: "I built an onboarding engine in Smartsheet that finds every eligible hire automatically, keeps a person in the loop, and sends the right invitation on time. Automation does the sorting, but a person signs off on each hire before an email goes out.",
  },
  facts: [
    ["Context", "Principal’s experience, in an internal leadership role"],
    ["Organization", "Home health division of a large integrated health system"],
    ["Platform", "Smartsheet, Data Shuttle, Automations, Dashboards"],
    ["Users", "Onboarding team, hiring managers, talent acquisition partners"],
  ],
  sections: [
    {
      title: "Orientation invitations went out by hand, so new hires slipped through",
      main: [
        {
          type: "list",
          items: [
            "Invitations were sent by hand, from a tracker kept separately",
            "Recruiting data lived in another system",
            "One hire arrived without clearance. Another started missing a required document",
            "Anyone who missed an orientation was tracked on yet another manual list",
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Rows are added and updated, never removed, so nobody drops off the list",
      main: [
        {
          type: "table",
          head: ["What I built", "How it works"],
          rows: [
            { a: "The right people, automatically", b: "Pending-hires report filtered to the division’s accounting codes" },
            { a: "Nobody disappears", b: "A hire stays listed after their status changes in the source system" },
            { a: "A human approves first", b: "A person confirms each hire and the orientation date" },
          ],
        },
      ],
      side: [{ type: "text", html: "Status: <b>live and expanding</b>. Next, manual exceptions in the same flow." }],
    },
    {
      title: "Clinical checklists stay in the training platform instead of being copied",
      main: [
        { type: "text", html: "It would have been easy to copy them into Smartsheet too. I recommended against it. You don’t pull a source of truth into a second system just to make it <b>a second source of truth</b>." },
        { type: "text", html: "The same pattern fits <b>new-hire orientation, contractor onboarding, and credentialing</b>: anywhere people come from one system and need to be guided, on time, through the next." },
      ],
    },
  ],
  closing: "Built to grow: next come the manual exceptions, then the 30/60/90-day check-ins.",
}

export default study
