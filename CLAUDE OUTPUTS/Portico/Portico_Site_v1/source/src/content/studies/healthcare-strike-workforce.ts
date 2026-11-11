import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "healthcare-strike-workforce",
  seo: {
    title: "Healthcare Strike Staffing Case Study: 12,000 Workers, Zero Glitches | Portico Group",
    description: "How Michael Ortiz built the Smartsheet system that onboarded and deployed 12,000+ contingent workers during a two-wave healthcare strike, without a glitch.",
    image: "strike-onboarding.jpg",
    keywords: ["Healthcare workforce", "Strike staffing", "Contingent workforce", "Smartsheet", "Credentialing", "Onboarding", "Travel nurse staffing"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "12,000 workers. One strike, two waves. Zero glitches.",
  },
  audience: "healthcare workforce and HR leaders",
  industry: ["Healthcare workforce"],
  h1: "One Smartsheet system onboarded and deployed thousands of replacement workers through a two-wave healthcare strike, without a glitch.",
  reasons: [
    { icon: "users", lead: "About 1,000 employees", text: "worked in the system; leads new to Smartsheet were comfortable within hours" },
    { icon: "check", lead: "One front door", text: "that sent station leads, schedulers, and area leaders only the work that was theirs" },
    { icon: "layers", lead: "Built to flex", text: "the solution kept evolving as the work grew, through the open-ended second wave" },
  ],
  headline: [
    { value: 12000, suffix: "+", label: "contingent workers onboarded and deployed", tag: "across both waves" },
    { value: 0, label: "glitches", tag: "start to finish" },
    { value: 750, prefix: "~$", suffix: "M", label: "total cost of the strike", tag: "to the health system, both waves" },
    { value: 300, suffix: "+", label: "sites served", tag: "every worker tracked to placement" },
  ],
  hero: {
    src: "strike-onboarding.jpg",
    alt: "Organized hospital onboarding hub at night with check-in tables, ID badges, and a live status board",
  },
  approach: {
    thesis: "Too many versions of the truth.",
    accent: "One system for the whole pipeline.",
    challenge: "When a large integrated health system faced a strike that came in two waves, it had to bring in thousands of replacement workers, fast. The process was running on Excel, text messages, and SharePoint. Historically, operations like this are full of glitches. With patient care on the line, that wasn’t an option.",
    approach: "I stood up a Smartsheet solution right away, then kept evolving it as the strike went on. We worked hand in hand with the external travel nurse staffing partner, with live visibility into recruiting numbers and conversion. Leaders, recruiters, and site teams all worked from the same live data.",
  },
  facts: [
    ["Context", "Principal’s experience, in an internal leadership role"],
    ["Organization", "Large integrated health system"],
    ["Scale", "Contingent workers across the health system’s hospitals"],
    ["Platform", "Smartsheet"],
    ["Timeline", "Two waves, a few months apart"],
  ],
  sections: [
    {
      title: "The second wave was an open-ended walkout that lasted four weeks",
      main: [
        {
          type: "bars",
          caption: "One strike, two waves, drawn to scale",
          rows: [
            { label: "Wave 1", display: "5 days", width: 18 },
            { label: "Wave 2", display: "4 weeks, open-ended", width: 100, highlight: true },
          ],
        },
        { type: "text", html: "The union called the second wave the <b>largest open-ended health care strike</b> in U.S. history." },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Every team had its own copy of the list, so we replaced them with one live system",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What changed"],
          rows: [
            { a: "Every team had its own copy; version control broke down", bLead: "One source of truth", b: "no more competing spreadsheets" },
            { a: "No one view of who was cleared, in transit, or on site", bLead: "One command center", b: "every worker tracked from submittal to placement on site" },
            { a: "Each handoff, recruiting to credentialing to placement, could lose someone", bLead: "The work finds you", b: "credentialing check-in automatically notified health screening" },
          ],
        },
      ],
    },
    {
      title: "Five workstreams, all reached through one Work App link",
      main: [
        { type: "list", items: ["Order management", "Credentialing", "Onboarding into systems", "Transportation to and from hotels", "Housing"] },
        { type: "text", html: "The same approach works anywhere a workforce has to move fast: <b>surges, mergers, new site openings, and seasonal ramps</b>." },
      ],
      side: [
        { type: "quote", text: "In a crisis, the system has to be the calm in the room. When everyone works from the same live picture, people can focus on patients instead of paperwork." },
      ],
    },
  ],
  closing: "Finding silence in the noise.",
}

export default study
