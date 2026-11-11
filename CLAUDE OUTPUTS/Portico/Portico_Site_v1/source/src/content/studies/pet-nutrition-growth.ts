import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "pet-nutrition-growth",
  seo: {
    title: "Fresh Pet Food Operations Case Study: Built to Double | Portico Group",
    description: "How Portico helped a PE-backed fresh pet food company build the operations, partners, and team to support 2x year-over-year growth.",
    image: "pet-fulfillment.jpg",
    keywords: ["Distribution", "Fresh pet nutrition", "Supply chain planning", "Inventory management", "Vendor consolidation", "3PL", "E-commerce fulfillment", "Kaizen"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-11",
    headline: "The growth plan was ready. The operation wasn’t.",
  },
  audience: "operations leaders at PE-backed growth companies",
  industry: ["Distribution", "Fresh pet nutrition"],
  h1: "Fixing inventory, vendors and fulfillment let a young operations team carry a fresh pet food company’s growth.",
  reasons: [
    { icon: "truck", lead: "One partner", text: "for packaging and shipping, replacing underperforming vendors and guaranteeing service on demand" },
    { icon: "layers", lead: "Kaizen + Kanban", text: "cleared out excess equipment and stock and helped the team own its warehouse space" },
    { icon: "users", lead: "Team coached", text: "as we worked, so the new processes stayed with them" },
  ],
  headline: [
    { value: 2, suffix: "×", label: "growth supported", tag: "year over year" },
    { value: 10, suffix: "%+", label: "savings", tag: "consolidated packaging and shipping partner" },
    { value: 5, prefix: "+3–", suffix: "%", label: "more saved", tag: "pre-bate and monthly rebates" },
    { value: 1, label: "new 3PL partner", tag: "for e-commerce" },
  ],
  hero: {
    src: "pet-fulfillment.jpg",
    alt: "Organized fresh pet food fulfillment station with insulated shipping boxes and packed pouches",
  },
  approach: {
    thesis: "Growth doesn’t wait for the operation to catch up.",
    accent: "The work is building the foundation before the weight arrives.",
    path: {
      caption: "Fix the basics. Build the partners. Grow the team.",
      steps: ["Get the inventory right", "Kaizen the warehouse", "Consolidate vendors", "Stand up a 3PL", "Level up the team"],
    },
    challenge: "The company’s private equity backers saw a real opportunity: expand retail, kitchen, delivery, and e-commerce operations, all at once. But the supply chain and operations team was early in their careers, the business lacked efficient processes and systems, and the supply network had little room to scale.",
    approach: "We started on the floor, in the warehouse and kitchens. None of this was a people problem; the team simply hadn’t been given the systems to grow into. We helped build the processes, partners, and people to carry the growth.",
  },
  facts: [
    ["Client", "PE-backed fresh pet food company"],
    ["Channels", "Retail · Kitchens · Delivery · E-commerce"],
    ["Scope", "Supply chain planning, purchasing, logistics, and warehousing"],
    ["Methods", "Process redesign · Kaizen · Kanban · Vendor consolidation · 3PL setup"],
    ["Timeline", "A multi-month engagement, extended as the work grew"],
  ],
  sections: [
    {
      title: "Growth would have broken the operation, so we fixed the basics first",
      main: [
        {
          type: "table",
          head: ["What we found on the floor", "What we changed"],
          rows: [
            { a: "Inventory counts weren’t always done", bLead: "Full count", b: "so the numbers could be trusted" },
            { a: "Transfers between locations weren’t closed out", bLead: "Close-out process", b: "a simple step to close out transfers" },
            { a: "Supplies had no par levels or usage reports", bLead: "Par levels", b: "and usage reports to drive reordering" },
            { a: "Too many vendors, and some weren’t performing", bLead: "Vendor consolidation", b: "one strategic packaging and shipping partner" },
            { a: "E-commerce had no fulfillment partner built to scale", bLead: "New 3PL", b: "developed and managed to handle fast e-commerce growth" },
          ],
        },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "The new partners cut packaging and shipping spend and gave e-commerce room to run",
      main: [
        {
          type: "stats",
          items: [{ n: "~13–15%", tag: "together", label: "off the spend, from partner savings plus pre-bate and monthly rebates" }],
        },
        { type: "text", html: "The 3PL operation gave e-commerce <b>room to run</b>." },
      ],
    },
  ],
  closing: "A strong foundation is what lets a business grow.",
}

export default study
