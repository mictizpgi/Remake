import type { CaseStudy } from "./types"

// every file in ./studies is one case study page
const modules = import.meta.glob<{ default: CaseStudy }>("./studies/*.ts", { eager: true })
export const studies: CaseStudy[] = Object.values(modules).map((m) => m.default).sort((a, b) => a.slug.localeCompare(b.slug))
export const studyBySlug = (slug: string) => studies.find((s) => s.slug === slug)
