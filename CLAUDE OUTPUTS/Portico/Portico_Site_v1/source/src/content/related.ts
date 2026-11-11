import { home, type ResultCard } from "./home"

/** The three case studies most like this one: most shared categories first, then the homepage's own order.
 *  Uses the homepage result cards, so the number and wording match everywhere. */
// hand-picked where the category match alone misses the real connection
const OVERRIDES: Record<string, string[]> = {
  "transformer-lean-us-mexico": ["steel-tank-supply-chain", "wastewater-kaizen-program", "pet-nutrition-growth"],
  "steel-tank-supply-chain": ["transformer-lean-us-mexico", "wastewater-kaizen-program", "skincare-dual-sourcing"],
  // same client: the 3PL decision waited on the facility move
  "facility-move-command-center": ["east-coast-3pl-sourcing", "healthcare-strike-workforce", "enterprise-project-control-center"],
  "east-coast-3pl-sourcing": ["facility-move-command-center", "pet-nutrition-growth", "skincare-dual-sourcing"],
  "hts-repair-work-app": ["land-acquisition-program", "enterprise-project-control-center", "position-control-workflow"],
}

export function relatedTo(slug: string): ResultCard[] {
  const withPage = home.results.filter((r) => r.href)
  const picked = OVERRIDES[slug]
  if (picked) return picked.map((s) => withPage.find((r) => r.href === `case-studies/${s}.html`)!).filter(Boolean)
  const self = withPage.find((r) => r.href === `case-studies/${slug}.html`)
  if (!self) return []
  return withPage
    .filter((r) => r !== self)
    .map((r, i) => ({ r, i, shared: r.cats.filter((c) => self.cats.includes(c)).length }))
    .sort((a, b) => b.shared - a.shared || a.i - b.i)
    .slice(0, 3)
    .map((x) => x.r)
}
