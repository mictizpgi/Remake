/** Insights articles. Each JSON file in ./insights is one article; the two original ones were
 *  converted word for word from the live site (scripts/check-insight.py proves it). */
export type ArticleBlock =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "callout"; html: string }
  | { type: "bars"; caption: string; rows: { label: string; width: number; display: string; highlight?: boolean }[]; note?: string }
  | { type: "image"; src: string; alt: string; caption?: string; label?: string }

export interface Article {
  slug: string
  category: string
  h1: string
  lead: string
  dateline: string // "November 2026 · 7 min read"
  image?: { src: string; alt: string; caption?: string; label?: string }
  takeaways: string[]
  body: ArticleBlock[]
  faqTitle?: string
  faq?: { q: string; a: string }[]
  related?: { href: string; tag: string; title: string; text: string }
  ctaQuestion: string
  seo?: { title: string; description: string; image: string; keywords: string[]; datePublished: string; dateModified: string }
}

const modules = import.meta.glob<{ default: Article }>("./insights/*.json", { eager: true })
// newest first: the new article leads the index
const ORDER = ["staffing-model-from-the-work-up", "qdip-tiered-huddles-smartsheet", "smartsheet-outgrew-itself"]
export const articles: Article[] = Object.values(modules).map((m) => m.default)
  .sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug))
export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug)

export const insightsIndex = {
  h1: "Field notes from the floor.",
  lead: "Practical answers to the operations questions we hear most, drawn from real projects. Clients stay anonymous. The lessons don’t.",
  ctaQuestion: "Have a question we should write about?",
  ctaText: "Book a free 30-minute operational assessment, or just send the question. No pitch. Just an honest look at where you are and what to do next.",
}
