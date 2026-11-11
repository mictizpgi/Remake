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
  audience: "operations leaders at growing companies",
  industry: ["Distribution", "Fresh pet nutrition"],
  h1: "Fixing inventory, vendors and fulfillment let a young team carry the company’s growth.",
  reasons: [
    { icon: "truck", lead: "One partner", text: "packaging and shipping from one vendor, replacing too many (some not performing), with service guaranteed on demand" },
    { icon: "layers", lead: "Kaizen + Kanban", text: "excess equipment and stock cleared out, and the team owns its warehouse space" },
    { icon: "users", lead: "Team coached", text: "we coached as we worked, so the new processes stayed with them" },
  ],
  headline: [
    { value: 2, suffix: "×", label: "growth supported", tag: "year over year" },
    { value: 10, suffix: "%+", label: "savings", tag: "consolidated packaging and shipping partner" },
    { value: 5, prefix: "+3–", suffix: "%", label: "more saved", tag: "pre-bate and monthly rebates" },
    { value: 1, label: "new 3PL partner", tag: "built to handle fast e-commerce growth" },
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
      title: "We fixed the basics first, then the new partners cut packaging and shipping spend",
      main: [
        {
          type: "table",
          head: ["What we found on the floor", "What we changed"],
          rows: [
            { a: "Inventory counts weren’t always done", bLead: "Full count", b: "so the numbers could be trusted" },
            { a: "Transfers between locations weren’t closed out", bLead: "Close-out process", b: "a simple step to close out transfers" },
            { a: "Supplies had no par levels or usage reports", bLead: "Par levels", b: "and usage reports to drive reordering" },
          ],
        },
        {
          type: "stats",
          items: [{ n: "~13–15%", label: "off packaging and shipping spend: partner savings plus pre-bate and monthly rebates, combined" }],
        },
      ],
      side: [{ type: "facts" }],
    },
  ],
  closing: "A strong foundation is what lets a business grow.",
  ctaQuestion: "Is your operation ready for your growth plan?",
}

export default study
