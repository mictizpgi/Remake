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
  audience: "HR and onboarding leaders",
  industry: ["Home health", "Built on Smartsheet"],
  h1: "Smartsheet now finds every new hire, and a person approves each invitation.",
  reasons: [
    { icon: "check", lead: "The right session, every time", text: "each welcome email is matched to the next scheduled orientation" },
    { icon: "chart", lead: "One dashboard", text: "confirmed hires and candidates still in the pipeline, side by side" },
    { icon: "shield", lead: "No second source of truth", text: "clinical checklists stay in the training platform; I recommended against copying them into Smartsheet" },
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
    challenge: "A home health division was inviting new hires to orientation by hand, from a separate tracker. Recruiting data lived in another system, so onboarding was always a step behind. People slipped through the gap between recruiting and day one: one hire arrived without clearance, another started missing a required document, and anyone who missed orientation went onto yet another manual list.",
    approach: "I built an onboarding engine in Smartsheet that finds every eligible hire automatically, keeps a person in the loop, and sends the right invitation on time. Automation does the sorting, but a person signs off on each hire before an email goes out.",
  },
  facts: [
    ["Context", "Principal’s experience, in an internal leadership role"],
    ["Organization", "Home health division of a large integrated health system"],
    ["Platform", "Smartsheet, Data Shuttle, Automations, Dashboards"],
    ["Users", "Onboarding team, hiring managers, talent acquisition partners"],
    ["Status", "Live and expanding"],
  ],
  sections: [
    {
      title: "Each part of the engine closes a gap where hires used to slip through",
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
      side: [{ type: "facts" }],
    },
    {
      title: "The same pattern fits anywhere people move from one system to the next",
      main: [
        { type: "text", html: "<b>New-hire orientation, contractor onboarding, and credentialing</b>: anywhere people come from one system and need to be guided, on time, through the next." },
      ],
    },
  ],
  closing: "Built to grow: next come the manual exceptions, then the 30/60/90-day check-ins.",
  ctaQuestion: "Are new hires slipping through the cracks?",
}

export default study
