import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "enterprise-project-control-center",
  seo: {
    title: "Enterprise Project Delivery Case Study: Every Project Starts the Same Way | Portico Group",
    description: "How Portico is building a standard project template, Control Center provisioning, and a portfolio roll-up in Smartsheet, so every enterprise project launches the same way and leadership sees them all in one place.",
    image: "portfolio-control-board.jpg",
    keywords: [
      "Built on Smartsheet",
      "Enterprise project delivery",
      "Smartsheet Control Center",
      "Project template",
      "Portfolio roll-up",
      "PMO",
      "RAID log",
      "Portfolio dashboard",
    ],
    datePublished: "2026-11-02",
    dateModified: "2026-11-11",
    headline: "Every project starts the same way.",
  },
  audience: "PMO and project delivery leaders",
  industry: ["Built on Smartsheet", "Enterprise project delivery"],
  h1: "One standard template is getting every enterprise project started the same way.",
  reasons: [
    { icon: "layers", lead: "A ready-made kit", text: "project managers get one instead of building from a blank sheet" },
    { icon: "check", lead: "Launched, not copied", text: "the hundredth project looks exactly like the first" },
    { icon: "chart", lead: "Side by side", text: "leadership can compare what’s on track, what’s at risk, and where a decision is waiting" },
  ],
  headline: [
    { value: 1, label: "standard template", tag: "for every enterprise project" },
    { value: 6, label: "built-in tools", tag: "plan, RAID, decisions, lessons, requirements, stakeholders" },
    { value: 5, label: "standard reports", tag: "ready the moment a project launches" },
    { value: 1, label: "portfolio view", tag: "across every project" },
  ],
  hero: {
    src: "shot-enterprise-portfolio-review.jpg",
    alt: "Smartsheet portfolio dashboard with project, task, risk, blocker and decision counts, a blocks and issues log, a decision log, a project summary, and a tasks-by-status chart",
  },
  approach: {
    thesis: "Standardize the container,",
    accent: "not the work.",
    path: {
      caption: "Template first. Then scale it.",
      steps: ["Template", "Provision", "Roll up", "Front door", "Connect"],
    },
    challenge: "The firm has grown quickly, much of it by bringing new companies on board. Each one arrives with its own spreadsheets, trackers, and ways of running a project, so each project was set up differently, by whoever ran it, and no two could be compared side by side. Risks, decisions, and lessons learned lived in inboxes and meeting notes, and ideas, change requests, and business cases came in through several doors.",
    approach: "We’re building the foundation that changes that: a standard project template, launched by Control Center, with every project rolling up to one portfolio view. The firm’s existing idea pool, business case intake, and portfolio review connect into the new flow instead of being rebuilt. Teams keep their judgment. Leadership gets one honest view.",
  },
  facts: [
    ["Client", "National engineering and infrastructure firm"],
    ["Scope", "Enterprise project delivery: template, provisioning, and portfolio roll-up"],
    ["Platform", "Smartsheet · Control Center · Dashboards · Reports"],
    ["Users", "Project managers · Sponsors · Steering committee · Leadership"],
    ["Approach", "Four steps: template, provisioning, front door, integration design"],
    ["Status", "In progress: template and pilot dashboard built; Control Center provisioning and portfolio roll-up next"],
  ],
  sections: [
    {
      title: "Leaders can read the whole portfolio on one dashboard in seconds",
      main: [
        {
          type: "list",
          items: [
            "Headline metrics",
            "Blocks and critical issues",
            "The decision log",
            "Delivery progress",
          ],
        },
        { type: "text", html: "The dashboard at the top of this page is the real Smartsheet build, shown with <b>sample data</b>." },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The same approach fits any firm growing faster than its project habits",
      main: [
        {
          type: "list",
          items: [
            "PMOs",
            "IT and business systems teams",
            "Acquisitive companies integrating new divisions",
            "Any organization that needs every project to start and report the same way",
          ],
        },
      ],
    },
  ],
  closing: "Build it once. Launch it a hundred times.",
  ctaQuestion: "Does every project start from scratch?",
}

export default study
