import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "engineering-staffing-model",
  seo: {
    title: "Engineering Staffing Case Study: A Staffing Model Sites Own | Portico Group",
    description: "How Michael Ortiz built a defensible engineering staffing model for 40 medical centers, validated it with every site, and delivered it through permission-controlled Smartsheet reports and dashboards.",
    image: "esm-central-plant.jpg",
    keywords: ["Built on Smartsheet", "Engineering staffing", "Staffing model", "Facilities engineering", "ASHE task lines", "Healthcare facilities", "Multi-site staffing"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "A staffing model every site could stand behind.",
  },
  audience: "facilities and operations leaders",
  industry: ["From the principal’s experience", "Built on Smartsheet"],
  h1: "A staffing model built from the work up gave leaders a number they could defend.",
  reasons: [
    { icon: "shield", lead: "A trail for every number", text: "the model’s answer, our review, and the site’s response, kept per task line" },
    { icon: "check", lead: "Fixed for everyone", text: "where many sites changed the same line; an outside peer review checked the approach too" },
    { icon: "users", lead: "Own centers only", text: "permission-controlled Smartsheet views show each leader just their medical centers" },
  ],
  headline: [
    { value: 40, label: "medical centers modeled", tag: "each with its own workbook" },
    { value: 50, prefix: "~", label: "task lines sized with the ASHE method", tag: "on the system’s own data" },
    { value: 78, suffix: "%", label: "of task lines came back unchanged", tag: "first round of site returns; 22% edited" },
    { value: 7.3, decimals: 1, label: "frontline staff, model for a brand-new tower", tag: "vs. ~8 expert estimate" },
  ],
  hero: {
    src: "esm-central-plant.jpg",
    alt: "Clean hospital central plant room with chillers, color-coded pipes, and a dashboard screen",
  },
  approach: {
    thesis: "When sites own their numbers, the model stops being a headquarters opinion",
    accent: "and becomes a shared answer.",
    path: {
      caption: "Start with the building. End with a number you can check.",
      steps: ["Building inputs", "Work required", "Who does it: in-house vs. vendor", "Staffing, plus time for leadership", "Model beside budget, site by site"],
    },
    challenge: "Engineering budgets had long been set with rules of thumb like square footage. Leaders needed a model they could defend, and that the sites themselves would believe.",
    approach: "Not a ratio per square foot, but the actual work. I built a model from the work up, had every site check it line by line, and delivered it to leaders through Smartsheet. Excel workbook templates did the heavy lifting with each site’s building, asset, preventive maintenance, and service request data; Smartsheet carried the results where people work.",
  },
  facts: [
    ["Context", "Principal’s experience, in an internal leadership role"],
    ["Organization", "Large integrated health system, two regions"],
    ["Scope", "Facilities engineering staffing across the system’s medical centers"],
    ["Tools", "Excel model templates · Smartsheet reports and dashboards"],
  ],
  sections: [
    {
      title: "Two buildings of the same size can need very different staffing",
      main: [
        { type: "text", html: "The model accounts for <b>what a ratio can’t see</b>:" },
        { type: "list", items: ["Building age and equipment", "Travel between buildings", "Construction support", "Round-the-clock coverage"] },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The real test was a new tower with no staffing history at all",
      main: [
        {
          type: "stats",
          items: [
            { n: "278,000 sq ft", tag: "new tower", label: "sized from building inputs alone" },
          ],
        },
        { type: "text", html: "The independent expert estimate was made <b>before the model ran</b>. The one thing the model missed was caught and added." },
      ],
    },
  ],
  closing: "Defensible, explainable, and owned by the people who run the buildings.",
  ctaQuestion: "Is your staffing based on the work, or a ratio?",
}

export default study
