import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "east-coast-3pl-sourcing",
  seo: {
    title: "Fulfillment Network Strategy Case Study: The Right Answer, at the Right Time | Portico Group",
    description: "How Portico built the data, scoring, and go/no-go case for an East Coast fulfillment partner, so a consumer products company could make a clear decision on cost, speed, and timing.",
    image: "east-coast-network.jpg",
    keywords: ["Distribution", "Fulfillment network strategy", "3PL selection", "East Coast fulfillment", "Freight cost analysis", "Weighted scoring", "RFx", "Go/no-go decision"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "The right answer, at the right time.",
  },
  audience: "operations and finance leaders",
  industry: ["Distribution", "Fulfillment network strategy"],
  h1: "Real freight data gave a board a clear East Coast fulfillment decision.",
  reasons: [
    { icon: "chart", lead: "4 live bids", text: "all priced on the same scope through a formal RFx" },
    { icon: "truck", lead: "56 cities", text: "inbound freight costs benchmarked, with rail and ocean routes compared" },
    { icon: "check", lead: "One Southeast site", text: "a heat map of East Coast orders showed it could reach most customers in a day or two" },
  ],
  headline: [
    { value: 340, prefix: "~$", suffix: "K", label: "annual benefit", tag: "projected, leading option" },
    { value: 200, prefix: "~$", label: "savings per East Coast order", tag: "projected" },
    { value: 2, prefix: "1–", suffix: " days", label: "faster delivery", tag: "to East Coast customers" },
    { value: 12, label: "candidates scored", tag: "on 11 weighted criteria" },
  ],
  hero: {
    src: "east-coast-network.jpg",
    alt: "Desk with a printed U.S. map shaded toward the Southeast, coral route lines from the West Coast, and a laptop showing an abstract scoring matrix",
  },
  approach: {
    thesis: "Frame it first.",
    accent: "Then let the data decide.",
    path: {
      caption: "How the go/no-go case was built",
      steps: ["Set the goal", "Baseline freight", "Map the demand", "Score the field", "Run the RFx", "Build the go/no-go"],
    },
    challenge: "A national consumer wellness products company shipped everything from California, including heavy products bound for the East Coast. That meant long transit times, high freight costs, and more chances for damage along the way. The West Coast warehouse was running out of room, and nobody had a clean, current view of what freight actually cost by lane. Should it add an East Coast fulfillment partner?",
    approach: "We framed the decision around cost and speed, with warehouse space as a second benefit, so every option was judged the same way. Then we built the data, the scoring, and the go/no-go case so leadership could decide with clear eyes.",
  },
  facts: [
    ["Client", "National consumer wellness products company"],
    ["Scope", "Freight baseline, network options, partner sourcing, go/no-go"],
    ["Methods", "Spend analysis · Demand mapping · Weighted scoring · RFx · Scenario modeling"],
  ],
  sections: [
    {
      title: "Each step gave leadership something concrete to decide on",
      main: [
        {
          type: "table",
          head: ["What we did", "What it gave leadership"],
          rows: [
            { a: "A rolling year of freight invoices, line by line", bLead: "A real baseline", b: "where orders went and what each lane cost" },
            { a: "Scope limited to outbound, top product line", bLead: "A tight scope", b: "returns, quality checks and repairs stayed in California" },
            { a: "Cost shown beside the capability score", bLead: "Price and quality", b: "weighed in the open, not blended into one number" },
            { a: "A decision deck for the CFO and board", bLead: "The full picture", b: "savings, speed gain, risks and timing" },
          ],
        },
      ],
      side: [
        { type: "stats", items: [{ n: "~40%", label: "of revenue came from East Coast customers" }] },
        { type: "facts" },
      ],
    },
    {
      title: "The board saw a clear return and chose to wait",
      main: [
        { type: "text", html: "A full facility move was about to begin, and taking on both at once would have stretched the team. That was the right call, made with <b>real numbers</b> instead of a guess." },
        { type: "quote", text: "Good analysis doesn’t always end in “go.” Sometimes its job is to show leadership exactly what they’re choosing, and when." },
      ],
      side: [
        {
          type: "list",
          title: "Where the same analysis helps",
          items: ["Second-warehouse decisions", "3PL selection", "Carrier bids", "Any choice where freight, speed, and space pull in different directions"],
        },
      ],
    },
  ],
  closing: "The case is built. It’s ready when they are.",
  ctaQuestion: "Weighing a network decision?",
}

export default study
