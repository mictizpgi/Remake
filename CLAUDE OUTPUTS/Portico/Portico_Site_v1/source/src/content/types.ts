/**
 * Content format for one Portico case study page.
 *
 * Rules every study follows (grenade + impeccable + the client's brief):
 * - Keep EVERY number from the original page. Each number appears once on the page.
 * - Never invent a fact, number, name or claim. Rearranging the client's own sentences is fine.
 * - Headings are plain sentences a colleague would say; no clever phrases, no eyebrow labels.
 * - At most 3 data sections after the approach section; at most 6 rows in a table, 5 items in a list.
 * - Paragraphs: at most ~2–3 lines; bold (<b>) the word that matters. Only <b> is allowed inside text.
 */

export type IconName = "clock" | "down" | "up" | "users" | "money" | "check" | "layers" | "shield" | "truck" | "chart"

export interface Headline {
  /** numeric value the ticker counts to, e.g. 15963 or 1.3 */
  value: number
  /** show this text instead of a counting number, for stats that are words ("Daily") */
  text?: string
  decimals?: number
  prefix?: string // "$", "~", "+"
  suffix?: string // "M", "%", "K", " hrs"
  label: string // "hours of patient capacity"
  tag: string // "per year", "projected region-wide", "vs. 2022"
}

export type Block =
  /** horizontal comparison bars; width is 0–100 relative to the largest */
  | { type: "bars"; caption: string; rows: { label: string; display: string; width: number; highlight?: boolean }[] }
  /** two-column table: what was wrong → what changed; bLead is shown bold before b */
  | { type: "table"; head: [string, string]; rows: { a: string; bLead?: string; b: string }[] }
  /** 100% stacked bars (e.g. before/after mix); first series is the highlighted one */
  | {
      type: "stack"
      caption: string
      series: { key: string; label: string }[]
      rows: ({ label: string } & Record<string, number | string>)[]
      legendNote?: string // e.g. "10% → 4%", shown bold after the first series label
      // values are percentages of each row (rows should add up to 100)
    }
  /** small number cards: n is the big text (exact original wording), tag a comparison pill, label the meaning */
  | { type: "stats"; items: { n: string; tag?: string; label: string }[] }
  /** an image already on the site, path under /assets/img/ */
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "text"; html: string }
  | { type: "quote"; text: string }
  /** the study's facts list (Client / Scope / Partners / Timeline); use once, usually as a side block */
  | { type: "facts" }

export interface Section {
  title: string // a plain sentence that states the point
  /** two-column layout: main block(s) left, side block(s) right on desktop */
  main: Block[]
  side?: Block[]
}

export interface CaseStudy {
  slug: string // file name without .html
  seo: {
    title: string // <title>, og:title, twitter:title
    description: string // meta description (keep the original unless it lacks the key phrase)
    image: string // og:image file name under /assets/img/
    keywords: string[]
    datePublished: string // YYYY-MM-DD
    dateModified: string // YYYY-MM-DD
    headline: string // JSON-LD Article headline (keep the original page's)
  }
  /** header line: Case study · Portico Group · For <audience> · Book a call */
  audience: string // "hospital operations leaders"
  industry: string[] // original eyebrow parts, e.g. ["Healthcare", "Patient operations"] (used in breadcrumbs/keywords)
  h1: string
  reasons: { icon: IconName; lead: string; text: string }[] // exactly 3
  headline: Headline[] // exactly 4, from the original hero stats
  hero: { src: string; alt: string }
  approach: {
    thesis: string // dark part of the big headline
    accent: string // coral part (the key insight)
    path?: { caption: string; steps: string[]; connector?: string } // 3–6 steps when the story has a real sequence; connector labels the links (e.g. "handoff")
    challenge: string
    approach: string
  }
  facts: [string, string][] // Client / Scope / Partners / Timeline ... from the original sidebar
  sections: Section[] // 1–3
  closing?: string // one closing line in the client's words
  /** the closing band's question, taken from the original page (it varies by study) */
  ctaQuestion: string
}
